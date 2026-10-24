import Button from './Button'

function EmptyState({ icon, title, text, actionLabel, actionTo }) {
  return (
    <div className="py-10 text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-peach text-3xl">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mx-auto mt-1 max-w-sm text-sm text-brown/70">{text}</p>

      {actionLabel && (
        <div className="mt-6">
          <Button to={actionTo}>{actionLabel}</Button>
        </div>
      )}
    </div>
  )
}

export default EmptyState