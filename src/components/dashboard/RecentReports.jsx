import { Link } from 'react-router-dom'
import Card from '../ui/Card'
import EmptyState from '../ui/EmptyState'

function RecentReports({ reports }) {
  return (
    <Card>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold">Recent reports</h3>
        {reports.length > 0 && (
          <Link to="/history" className="text-sm font-semibold text-plum hover:underline">
            View all
          </Link>
        )}
      </div>

      {reports.length === 0 ? (
        <EmptyState
          icon="🖼️"
          title="No reports yet"
          text="Upload your first website screenshot to see a design score here."
          actionLabel="Start your first analysis"
          actionTo="/analyze"
        />
      ) : (
        <ul className="divide-y divide-peach">
          {reports.slice(0, 3).map(report => (
            <li key={report.id} className="flex items-center justify-between py-3">
              <div>
                <p className="font-medium">{report.site}</p>
                <p className="text-sm text-brown/70">{report.date}</p>
              </div>
              <span
                className={`rounded-full px-3 py-1 text-sm font-semibold ${
                  report.score >= 75 ? 'bg-plum text-white' : 'bg-blush'
                }`}
              >
                {report.score}
              </span>
            </li>
          ))}
        </ul>
      )}
    </Card>
  )
}

export default RecentReports