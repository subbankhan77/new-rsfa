"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  const resultsSubmenu = [
    { name: "State Result", href: "/results/state" },
    { name: "National Result", href: "/results/national" },
    { name: "International Result", href: "/results/international" },
  ]

  return (
    <>
     {/* Top Social Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            {/* Social Media Icons */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.324-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.324C5.902 8.247 7.053 7.757 8.35 7.757s2.448.49 3.324 1.297c.876.876 1.366 2.027 1.366 3.324s-.49 2.448-1.366 3.324c-.876.876-2.027 1.366-3.324 1.366z"/>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-300 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          <div>
            <Link href="/auth" className="inline-block">
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-2 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-blue-500">
                Login / Register
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <Image
                src="/rfac.jpeg"
                alt="RSFA Logo"
                width={90}
                height={60}
                className="rounded-full object-contain shadow-lg border-2 border-blue-200"
              />
              <div className="flex flex-col">
                <h1 className="text-lg font-bold text-gray-800 leading-tight">
                  Rajasthan State Fencing Association
                </h1>
                <p className="text-xs text-gray-600 leading-tight">
                  (Registered under the Society Act, Govt of Rajasthan)
                </p>
                <p className="text-xs text-gray-600 leading-tight">
                  Affiliated with: Fencing Association of India, Rajasthan Olympic Association, Rajasthan State Sports Council
                </p>
              </div>
            </div>

            {/* Right Side Logos */}
            <div className="flex items-center space-x-4">
                <div className="hidden lg:block">
          <a 
            href="https://www.fencingindia.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="relative bg-white rounded-full p-1">
              <Image
                src="/india.png"
                alt="India Olympic Association"
                width={170}
                height={150}
                className="rounded-full object-contain shadow-lg border-2 border-blue-200"
              />
            </div>
          </a>
        </div>

        {/* Right Side - Multiple Logos */}
        <div className="flex items-center space-x-3">
          {/* RSOA Logo */}
          <div className="hidden sm:block">
            <a 
              href="https://www.rajasthanstateolympic.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative bg-white rounded-full p-1">
                <Image
                  src="/rsoa.png"
                  alt="Rajasthan State Olympic Association"
                  width={80}
                  height={60}
                  className="rounded-full object-contain shadow-lg border-2 border-blue-200"
                />
              </div>
            </a>
          </div>

          {/* RSSC Logo */}
          <div className="hidden md:block">
            <a 
              href="https://www.rssc.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative bg-white rounded-full p-1">
                <Image
                  src="/rssc.jpg"
                  alt="Rajasthan State Sports Council"
                  width={50}
                  height={80}
                  className="rounded-full object-contain shadow-lg border-2 border-blue-200"
                />
              </div>
            </a>
          </div>
        </div>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="bg-gray-100 border-t">
          <div className="container mx-auto px-150">
            <ul className="flex justify-start space-x-8 py-3">
              <li>
                <Link href="/" className="text-red-600 font-semibold hover:text-red-800">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-red-600 font-semibold hover:text-red-800">
                  ABOUT
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-red-600 font-semibold hover:text-red-800">
                  CONTACT
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-red-600 font-semibold hover:text-red-800">
                  GALLERY
                </Link>
              </li>
              {/* Results Dropdown */}
              <li className="relative group">
                <button
                  className={`text-red-600 font-semibold hover:text-red-800 flex items-center ${pathname.startsWith('/results') ? 'text-red-800' : ''}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  RESULTS
                  <svg 
                    className={`ml-1 w-4 h-4 transform transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                  {resultsSubmenu.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors ${pathname === item.href ? 'bg-red-50 text-red-600' : ''}`}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}