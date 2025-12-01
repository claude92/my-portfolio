import { useState } from 'react'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => setIsOpen((prev) => !prev)
  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-slate-950/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-semibold uppercase tracking-[0.4em] text-emerald-300">
          CM
        </a>

        <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.4em] text-slate-300 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-full border border-white/20 px-3 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white transition hover:border-white/60 md:hidden"
          onClick={handleToggle}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`md:hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden border-t border-white/5 bg-slate-950/90 px-6 transition-all duration-300`}
      >
        <div className="flex flex-col gap-4 py-6 text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

