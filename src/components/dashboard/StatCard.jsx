import Card from '../ui/Card'

function StatCard({ label, value, progress }) {
  return (
    <Card>
      <p className="text-sm text-brown/70">{label}</p>
      <p className="mt-1 text-3xl font-bold text-plum">{value}</p>

      {progress !== undefined && (
        <div className="mt-3 h-2 rounded-full bg-peach">
          <div
            className="h-2 rounded-full bg-plum"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </Card>
  )
}

export default StatCard