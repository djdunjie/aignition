import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
  User,
  UserCredential
} from 'firebase/auth'
import { auth } from './firebase'

/**
 * Sign up a new user with email and password
 */
export const signUp = async (
  email: string, 
  password: string
): Promise<UserCredential> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    return userCredential
  } catch (error) {
    console.error('Error signing up:', error)
    throw error
  }
}

/**
 * Sign in an existing user with email and password
 */
export const signIn = async (
  email: string, 
  password: string
): Promise<UserCredential> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential
  } catch (error) {
    console.error('Error signing in:', error)
    throw error
  }
}

/**
 * Sign out the current user
 */
export const signOut = async (): Promise<void> => {
  try {
    await firebaseSignOut(auth)
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}

/**
 * Get the current user
 */
export const getCurrentUser = (): User | null => {
  return auth.currentUser
}