import { Link } from 'react-router-dom'
import Dropdown from '../ui/Dropdown'

function ProfileMenu() {
  return (
    <Dropdown
      label="Account menu"
      width="w-48"
      trigger={
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum font-semibold text-white">
          U
        </span>
      }
    >
      <p className="px-4 py-1 text-xs text-brown/70">Signed in as Demo user</p>
      <Link to="/" className="block px-4 py-2 text-sm hover:bg-peach/50">
        Log out
      </Link>
    </Dropdown>
  )
}

export default ProfileMenu