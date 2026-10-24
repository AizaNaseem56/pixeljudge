import { useState } from 'react'
import Dropdown from '../ui/Dropdown'

const initialNotifications = [
  { id: 1, text: 'Your report for bakery-shop.com is ready.', time: '2 hours ago', read: false },
  { id: 2, text: 'You have 1 free analysis left this month.', time: 'Yesterday', read: false },
  { id: 3, text: 'Welcome to PixelJudge!', time: '3 days ago', read: true },
]

function NotificationMenu() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const unreadCount = notifications.filter(item => !item.read).length

  function markAllRead() {
    setNotifications(notifications.map(item => ({ ...item, read: true })))
  }

  return (
    <Dropdown
      label="Notifications"
      width="w-80"
      trigger={
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm">
          🔔
          {unreadCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-plum text-xs font-bold text-white">
              {unreadCount}
            </span>
          )}
        </span>
      }
    >
      <div className="flex items-center justify-between px-4 pb-2">
        <p className="font-semibold">Notifications</p>
        {unreadCount > 0 && (
          <button onClick={markAllRead} className="text-xs font-semibold text-plum hover:underline">
            Mark all as read
          </button>
        )}
      </div>

      <ul className="max-h-72 divide-y divide-peach overflow-y-auto">
        {notifications.map(item => (
          <li key={item.id} className={`px-4 py-3 text-sm ${item.read ? '' : 'bg-peach/40'}`}>
            <p>{item.text}</p>
            <p className="mt-1 text-xs text-brown/70">{item.time}</p>
          </li>
        ))}
      </ul>
    </Dropdown>
  )
}

export default NotificationMenu