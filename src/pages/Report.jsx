import { useParams } from 'react-router-dom'
import Card from '../components/ui/Card'
import EmptyState from '../components/ui/EmptyState'
import OverallScoreCard from '../components/report/OverallScoreCard'
import ScoreBreakdown from '../components/report/ScoreBreakdown'
import IssueSummary from '../components/report/IssueSummary'
import IssueList from '../components/report/IssueList'
import ReportActions from '../components/report/ReportActions'
import { reportDetails } from '../data/reportDetails'

function Report() {
  const { reportId } = useParams()
  const report = reportDetails[reportId]

  if (!report) {
    return (
      <Card>
        <EmptyState
          icon="🔍"
          title="Report not found"
          text="We could not find this report. Start a new analysis to create one."
          actionLabel="New analysis"
          actionTo="/analyze"
        />
      </Card>
    )
  }

  const scoreValues = Object.values(report.scores)
  const overallScore = Math.round(
    scoreValues.reduce((sum, value) => sum + value, 0) / scoreValues.length
  )

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">{report.site}</h2>
          <p className="text-brown/70">Analyzed on {report.date}</p>
        </div>
       <ReportActions reportId={reportId} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <OverallScoreCard score={overallScore} />
        <div className="lg:col-span-2">
          <ScoreBreakdown scores={report.scores} />
        </div>
      </div>

      <IssueSummary issues={report.issues} />
      <IssueList issues={report.issues} />
    </div>
  )
}

export default Report