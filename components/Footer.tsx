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
                href={item === 'Home' ? '/' : item === 'About' ? '/about' : '#'}
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

        {/* Social Icons */}
        <div className="mt-8 flex items-center justify-center gap-5">
          {/* Facebook */}
          <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06C2 17.08 5.66 21.2 10.44 22v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.5-3.88 3.8-3.88 1.1 0 2.25.2 2.25.2v2.46h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.79l-.45 2.9h-2.34V22C18.34 21.2 22 17.08 22 12.06Z"/></svg>
          </a>
          {/* X (Twitter) */}
          <a href="#" aria-label="X" className="text-gray-500 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3 3h3.6l5.4 7.38L18.9 3H22l-7.77 9.51L22 21h-3.6l-6.04-8.25L5.1 21H2l8.28-10.14L3 3Z"/></svg>
          </a>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM18 6.2a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/></svg>
          </a>
          {/* LinkedIn */}
          <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5ZM3 8.25h3.88V21H3Zm6.37 0h3.72v1.74h.05a4.08 4.08 0 0 1 3.67-2.02c3.92 0 4.64 2.58 4.64 5.93V21h-3.88v-5.3c0-1.27 0-2.9-1.77-2.9s-2.04 1.38-2.04 2.8V21H9.37Z"/></svg>
          </a>
          {/* Telegram */}
          <a href="#" aria-label="Telegram" className="text-gray-500 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M21.94 4.62c.32-1.16-.82-1.62-1.68-1.27L2.7 10.64c-1.14.46-1.12 1.1-.2 1.38l4.7 1.47 10.92-6.9c.52-.32.99-.15.6.2l-8.85 8.03-.33 4.95c.48 0 .69-.22.96-.47l2.3-2.23 4.79 3.54c.89.49 1.53.24 1.76-.83l2.02-9.58c.35-1.4-.54-2.03-1.78-1.3l-11.8 7.03"/></svg>
          </a>
          {/* YouTube */}
          <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M23.5 7.2a3.03 3.03 0 0 0-2.13-2.14C19.57 4.5 12 4.5 12 4.5s-7.57 0-9.37.56A3.03 3.03 0 0 0 .5 7.2 31.5 31.5 0 0 0 0 12c0 1.63.12 3.24.5 4.8a3.03 3.03 0 0 0 2.13 2.14C4.43 19.5 12 19.5 12 19.5s7.57 0 9.37-.56a3.03 3.03 0 0 0 2.13-2.14c.38-1.56.5-3.17.5-4.8 0-1.63-.12-3.24-.5-4.8ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z"/></svg>
          </a>
          {/* WeChat */}
          <a href="#" aria-label="WeChat" className="text-gray-500 hover:text-blue-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M9.5 3C5.91 3 3 5.24 3 8c0 1.51.81 2.86 2.08 3.85L4.5 14l2.66-1.1c.72.2 1.49.3 2.34.3 3.59 0 6.5-2.24 6.5-5S13.09 3 9.5 3Zm-2 .75a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM20 10.5c0-2.4-2.23-4.36-5.07-4.84.46.6.72 1.28.72 1.99 0 3.03-2.79 5.5-6.22 5.96 1.03 1.6 3.12 2.72 5.57 2.72.85 0 1.62-.1 2.34-.3l2.66 1.1-.58-2.15C19.19 13.36 20 12.01 20 10.5Zm-4 1.25a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm3 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z"/></svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; 2025 AIgnition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
