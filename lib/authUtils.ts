import { db } from './firebase'
import { 
  collection, 
  query, 
  where, 
  getDocs, 
  addDoc, 
  serverTimestamp 
} from 'firebase/firestore'

interface UserSession {
  userId: string
  username: string
  displayName: string
  loggedInAt: number
}

interface UserData {
  username: string
  displayName: string
  passwordHash: string
  industry: string
  jobRole: string
  countryRegion: string
  role?: string
  createdAt: any
  updatedAt: any
}

const SESSION_KEY = 'aignition_session'

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

function normalizeUsername(username: string): string {
  return username.trim().toLowerCase()
}

export async function signUp(
  username: string,
  displayName: string,
  password: string,
  industry: string,
  jobRole: string,
  countryRegion: string
): Promise<{ success: boolean; error?: string; userId?: string }> {
  try {
    if (username.length < 3) {
      return { success: false, error: 'Username must be at least 3 characters' }
    }
    if (password.length < 8) {
      return { success: false, error: 'Password must be at least 8 characters' }
    }

    const normalizedUsername = normalizeUsername(username)
    
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('username', '==', normalizedUsername))
    const querySnapshot = await getDocs(q)
    
    if (!querySnapshot.empty) {
      return { success: false, error: 'Username already exists' }
    }

    const passwordHash = await hashPassword(password)
    
    const userData: UserData = {
      username: normalizedUsername,
      displayName: displayName.trim(),
      passwordHash,
      industry: industry.trim(),
      jobRole: jobRole.trim(),
      countryRegion: countryRegion.trim(),
      role: 'user',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    }

    const docRef = await addDoc(usersRef, userData)
    
    const session: UserSession = {
      userId: docRef.id,
      username: normalizedUsername,
      displayName: displayName.trim(),
      loggedInAt: Date.now()
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    }

    return { success: true, userId: docRef.id }
  } catch (error) {
    console.error('Sign up error:', error)
    return { success: false, error: 'An error occurred during sign up' }
  }
}

export async function signIn(
  username: string,
  password: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const normalizedUsername = normalizeUsername(username)
    
    const usersRef = collection(db, 'users')
    const q = query(usersRef, where('username', '==', normalizedUsername))
    const querySnapshot = await getDocs(q)
    
    if (querySnapshot.empty) {
      return { success: false, error: 'Invalid username or password' }
    }

    const userDoc = querySnapshot.docs[0]
    const userData = userDoc.data() as UserData
    
    const passwordHash = await hashPassword(password)
    
    if (passwordHash !== userData.passwordHash) {
      return { success: false, error: 'Invalid username or password' }
    }

    const session: UserSession = {
      userId: userDoc.id,
      username: userData.username,
      displayName: userData.displayName,
      loggedInAt: Date.now()
    }
    
    if (typeof window !== 'undefined') {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session))
    }

    return { success: true }
  } catch (error) {
    console.error('Sign in error:', error)
    return { success: false, error: 'An error occurred during sign in' }
  }
}

export function getSession(): UserSession | null {
  if (typeof window === 'undefined') {
    return null
  }
  
  try {
    const sessionData = localStorage.getItem(SESSION_KEY)
    if (!sessionData) {
      return null
    }
    return JSON.parse(sessionData) as UserSession
  } catch (error) {
    console.error('Error getting session:', error)
    return null
  }
}

export function signOut(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(SESSION_KEY)
  }
}

export function isAuthenticated(): boolean {
  return getSession() !== null
}
