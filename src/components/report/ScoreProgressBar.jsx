function ScoreProgressBar({ label, value }) {
  return (
    <div>
      <div className="mb-1 flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-semibold">{value}</span>
      </div>

      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2.5 rounded-full bg-peach"
      >
        <div className="h-2.5 rounded-full bg-plum" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}

export default ScoreProgressBar