import Link from 'next/link'

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
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 supports-[backdrop-filter]:dark:bg-neutral-900/60">
      <nav className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="font-bold text-xl tracking-tight">
          Nazar's Portfolio
        </Link>

        {/* Navigation Links */}
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
      </nav>
    </header>
  )
}
