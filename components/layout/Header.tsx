'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-rose-100 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-rose-600">
            🎉 Party Supply Calculator
          </Link>
          
          <button
            className="md:hidden p-2 text-gray-600 hover:text-rose-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-rose-600 transition-colors">Home</Link>
            <Link href="/how-to-use" className="text-gray-600 hover:text-rose-600 transition-colors">How to Use</Link>
            <Link href="/faq" className="text-gray-600 hover:text-rose-600 transition-colors">FAQ</Link>
            <Link href="/blog" className="text-gray-600 hover:text-rose-600 transition-colors">Blog</Link>
            <Link href="/about" className="text-gray-600 hover:text-rose-600 transition-colors">About</Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-600 hover:text-rose-600 transition-colors">Home</Link>
            <Link href="/how-to-use" className="block text-gray-600 hover:text-rose-600 transition-colors">How to Use</Link>
            <Link href="/faq" className="block text-gray-600 hover:text-rose-600 transition-colors">FAQ</Link>
            <Link href="/blog" className="block text-gray-600 hover:text-rose-600 transition-colors">Blog</Link>
            <Link href="/about" className="block text-gray-600 hover:text-rose-600 transition-colors">About</Link>
          </div>
        )}
      </nav>
    </header>
  )
}
