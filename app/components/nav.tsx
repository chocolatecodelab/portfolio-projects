'use client'

import Link from 'next/link'
import { use, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const navItems = {
  '/': {
    key: 'nav.home',
  },
  '/projects': {
    key: 'nav.projects',
  },
  '/about': {
    key: 'nav.about',
  },
  '/contact': {
    key: 'nav.contact',
  },
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-900/60">
      <nav className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight">
          {t('nav.logo')}
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {Object.entries(navItems).map(([path, { key }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-medium"
              >
                {t(key)}
              </Link>
            )
          })}
          
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
            className="flex items-center space-x-1 px-3 py-1.5 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-md transition-colors"
          >
            <span className="text-base">🌐</span>
            <span>{language === 'en' ? 'ID' : 'EN'}</span>
          </button>
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
            {Object.entries(navItems).map(([path, { key }]) => (
              <Link
                key={path}
                href={path}
                className="text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors font-medium py-2"
                onClick={() => setOpen(false)}
              >
                {t(key)}
              </Link>
            ))}
            
            {/* Language Toggle in Mobile */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 border border-neutral-300 dark:border-neutral-700 rounded-md transition-colors mt-2"
            >
              <span className="text-base">🌐</span>
              <span>{language === 'en' ? 'Bahasa Indonesia' : 'English'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
