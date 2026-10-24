import { useState } from 'react'
import WelcomeBanner from '../components/dashboard/WelcomeBanner'
import StatCard from '../components/dashboard/StatCard'
import QuickActionCard from '../components/dashboard/QuickActionCard'
import RecentReports from '../components/dashboard/RecentReports'
import { sampleReports } from '../data/sampleReports'

const PLAN_LIMIT = 3

const quickActions = [
  { icon: '📤', title: 'Upload a screenshot', text: 'Start a new design review.', to: '/analyze' },
  { icon: '🌐', title: 'Try a sample website', text: 'See what a review looks like.', to: '/analyze' },
  { icon: '🗂️', title: 'View past reports', text: 'Open your saved reviews.', to: '/history' },
]

function Dashboard() {
  const [showReports, setShowReports] = useState(true)

  const reports = showReports ? sampleReports : []
  const used = reports.length
  const totalScore = reports.reduce((sum, report) => sum + report.score, 0)
  const averageScore = used === 0 ? '–' : Math.round(totalScore / used)

  const stats = [
    { label: 'Analyses used', value: `${used} / ${PLAN_LIMIT}`, progress: (used / PLAN_LIMIT) * 100 },
    { label: 'Remaining this month', value: PLAN_LIMIT - used },
    { label: 'Average score', value: averageScore },
  ]

  return (
    <div className="space-y-8">
      <WelcomeBanner />

      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map(stat => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <section>
        <h3 className="mb-4 text-lg font-semibold">Quick actions</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {quickActions.map(action => (
            <QuickActionCard key={action.title} {...action} />
          ))}
        </div>
      </section>

      <RecentReports reports={reports} />

      <button
        onClick={() => setShowReports(!showReports)}
        className="text-sm text-brown/70 underline"
      >
        Demo: {showReports ? 'show new-user view' : 'show sample reports'}
      </button>
    </div>
  )
}

export default Dashboard