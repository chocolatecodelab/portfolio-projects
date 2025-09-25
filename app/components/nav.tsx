'use client'

import Link from 'next/link'
import { use, useState } from 'react'

const navItems = {
  '/': {
    name: 'Home',
  },
  '/projects': {
    name: 'Projects',
  },
  '/about': {
    name: 'About',
  },
  '/contact': {
    name: 'Contact',
  },
}

export function Navbar() {
  const [open, setOpen] = useState(false)


  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-900/60">
      <nav className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight">
          Nazar's Portfolio
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-medium"
              >
                {name}
              </Link>
            )
          })}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
        className="md:hidden flex items-center"
        onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <svg
            className="w-7 h-7 text-neutral-700 dark:text-neutral-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex flex-col space-y-2">
            {Object.entries(navItems).map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium py-2"
                onClick={() => setOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
