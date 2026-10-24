import { useState } from 'react'
import Button from '../ui/Button'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-cream/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-brand text-xl text-plum">
          PixelJudge
        </a>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-plum">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <Button to="/login" variant="outline">Login</Button>
          <Button to="/signup">Sign up</Button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <ul className="space-y-3 px-6 pb-4 text-sm font-medium md:hidden">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex gap-3">
            <Button to="/login" variant="outline">Login</Button>
            <Button to="/signup">Sign up</Button>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Navbar