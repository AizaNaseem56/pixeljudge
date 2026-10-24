import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'Dashboard', to: '/dashboard', icon: '🏠' },
  { label: 'New Analysis', to: '/analyze', icon: '📤' },
  { label: 'Report History', to: '/history', icon: '🗂️' },
]

function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-20 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-60 bg-linear-to-b from-plum via-midnight to-brown p-4 text-peach transition-transform md:translate-x-0 print:hidden ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Link to="/" className="mb-8 block px-3 font-brand text-2xl text-white">
          PixelJudge
        </Link>

        <nav className="space-y-1">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-mauve text-white' : 'hover:bg-white/10'
                }`
              }
            >
              <span>{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar