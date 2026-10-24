import { Link } from 'react-router-dom'

function QuickActionCard({ icon, title, text, to }) {
  return (
    <Link
      to={to}
      className="block rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blush text-2xl">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-brown/70">{text}</p>
    </Link>
  )
}

export default QuickActionCard