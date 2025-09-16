import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const footerLinks = ['Home', 'About', 'Privacy Policy', 'Terms of Service', 'Contact']

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

          {/* Center: Footer Links */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {footerLinks.map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right: Dropdown placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Dropdown</option>
              </select>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 AIgnition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
