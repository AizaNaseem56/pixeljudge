import { useState } from 'react'

function Dropdown({ trigger, label, width = 'w-64', children }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label={label}
        aria-expanded={open}
        className="rounded-full focus-visible:ring-2 focus-visible:ring-plum"
      >
        {trigger}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className={`absolute right-0 z-20 mt-2 rounded-lg bg-white py-2 shadow-lg ${width}`}>
            {children}
          </div>
        </>
      )}
    </div>
  )
}

export default Dropdown