import { useLocation } from 'react-router-dom'
import NotificationMenu from './NotificationMenu'
import ProfileMenu from './ProfileMenu'

const titles = {
  '/dashboard': 'Dashboard',
  '/analyze': 'New Analysis',
  '/history': 'Report History',
}

function getTitle(pathname) {
  if (titles[pathname]) return titles[pathname]
  if (pathname.endsWith('/redesign')) return 'Redesign Preview'
  if (pathname.startsWith('/reports/')) return 'Analysis Results'
  return 'PixelJudge'
}

function Topbar({ onMenuClick }) {
  const { pathname } = useLocation()

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between bg-cream px-6 py-4 shadow-sm print:hidden">
      <div className="flex items-center gap-3">
        <button onClick={onMenuClick} className="text-2xl md:hidden" aria-label="Open menu">
          ☰
        </button>
        <h1 className="text-xl font-bold">{getTitle(pathname)}</h1>
      </div>

      <div className="flex items-center gap-3">
        <NotificationMenu />
        <ProfileMenu />
      </div>
    </header>
  )
}

export default Topbar