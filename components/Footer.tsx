import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const navItems = ['About', 'News', 'Veronica', 'Roadmap', 'AIgnition Academy', 'Use Cases']

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-8">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left: Logo */}
          <div className="flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="AIgnition logo" 
                width={210} 
                height={50} 
                className="w-auto" 
                priority 
              />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right: Empty space */}
          <div className="hidden lg:block"></div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            2025 AIgnition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
