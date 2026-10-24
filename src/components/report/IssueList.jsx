import { useState } from 'react'
import IssueCard from './IssueCard'
import EmptyState from '../ui/EmptyState'

const filters = [
  { id: 'all', label: 'All' },
    { id: 'critical', label: 'Critical' },
  { id: 'high', label: 'High' },
  { id: 'medium', label: 'Medium' },
  { id: 'low', label: 'Low' },
]

function IssueList({ issues }) {
  const [filter, setFilter] = useState('all')

  const visibleIssues =
    filter === 'all' ? issues : issues.filter(issue => issue.severity === filter)

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold">Suggested improvements</h3>

        <div className="flex flex-wrap gap-2">
          {filters.map(item => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === item.id ? 'bg-plum text-white' : 'bg-white hover:bg-peach'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {visibleIssues.length === 0 ? (
        <EmptyState icon="✅" title="Nothing here" text="No issues were found in this group." />
      ) : (
        <div className="space-y-4">
          {visibleIssues.map(issue => (
            <IssueCard key={issue.id} issue={issue} />
          ))}
        </div>
      )}
    </section>
  )
}

export default IssueList