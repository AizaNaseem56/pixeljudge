import Card from '../ui/Card'
import SeverityBadge from './SeverityBadge'

const levels = ['critical', 'high', 'medium', 'low']

function IssueSummary({ issues }) {
  return (
    <Card>
     <div className="mt-4 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
        <h3 className="text-lg font-semibold">Issue summary</h3>
        <p className="text-sm text-brown/70">{issues.length} issues found</p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        {levels.map(level => (
          <div key={level} className="rounded-lg bg-cream p-4">
            <p className="text-3xl font-bold">
              {issues.filter(issue => issue.severity === level).length}
            </p>
            <div className="mt-2">
              <SeverityBadge severity={level} />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

export default IssueSummary