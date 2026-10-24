import Card from '../ui/Card'

const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS

function getScoreLabel(score) {
  if (score >= 80) return 'Great design'
  if (score >= 65) return 'Good, with room to improve'
  return 'Needs attention'
}

function OverallScoreCard({ score }) {
  return (
    <Card>
      <p className="text-sm text-brown/70">Overall design score</p>

      <div className="relative mx-auto mt-4 h-40 w-40">
        <svg viewBox="0 0 128 128" className="h-full w-full -rotate-90">
          <circle cx="64" cy="64" r={RADIUS} fill="none" strokeWidth="12" className="stroke-peach" />
          <circle
            cx="64"
            cy="64"
            r={RADIUS}
            fill="none"
            strokeWidth="12"
            strokeLinecap="round"
            className="stroke-plum"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - score / 100)}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-plum">{score}</span>
          <span className="text-xs text-brown/70">out of 100</span>
        </div>
      </div>

      <p className="mt-4 text-center font-semibold">{getScoreLabel(score)}</p>
    </Card>
  )
}

export default OverallScoreCard