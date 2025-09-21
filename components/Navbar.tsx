import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const navItems = ['About', 'News', 'Veronica', 'Roadmap', 'AIgnition Academy', 'Use Cases']
  const getHref = (item: string) => {
    if (item === 'About') return '/about'
    // keep other links dead for now
    return '#'
  }

  const isActive = (item: string) => {
    if (item === 'About') return router.pathname === '/about'
    return false
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container mx-auto h-14 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="AIgnition logo" width={210} height={50} className="w-auto" priority />
        </Link>
        
        {/* Desktop Navigation + Auth */}
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item} 
                href={getHref(item)} 
                className={`transition-colors ${
                  isActive(item)
                    ? 'text-blue-600 underline underline-offset-4' 
                    : 'hover:text-blue-600 hover:underline underline-offset-4'
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          
          {/* Auth buttons */}
          <div className="flex items-center space-x-3 ml-6">
            <Link href="#" className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium">
              LOG IN
            </Link>
            <Link href="#" className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-semibold">
              SIGN UP
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navItems.map((item) => (
              <Link
                key={item}
                href={getHref(item)}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive(item)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* Mobile auth buttons */}
            <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
              <Link
                href="#"
                className="block mx-3 py-2 px-4 text-base font-medium border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                LOG IN
              </Link>
              <Link
                href="#"
                className="block mx-3 py-2 px-4 text-base font-semibold bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
