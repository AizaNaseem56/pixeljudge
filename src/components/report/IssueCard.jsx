import Card from '../ui/Card'
import SeverityBadge from './SeverityBadge'
import { focusAreas } from '../../data/focusAreas'

function IssueCard({ issue }) {
  const category = focusAreas.find(area => area.id === issue.category)?.label

  return (
    <Card>
      <div className="flex items-start gap-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-plum font-bold text-white">
          {issue.id}
        </div>

        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h4 className="font-semibold">{issue.title}</h4>
            <SeverityBadge severity={issue.severity} />
            <span className="text-xs text-brown/70">{category}</span>
          </div>

          <p className="mt-2 text-sm">{issue.explanation}</p>

          <p className="mt-3 rounded-lg bg-peach/50 p-3 text-sm">
            <span className="font-semibold">Suggested fix: </span>
            {issue.fix}
          </p>
        </div>
      </div>
    </Card>
  )
}

export default IssueCard