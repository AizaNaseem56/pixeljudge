import Card from '../ui/Card'
import ScoreProgressBar from './ScoreProgressBar'
import { focusAreas } from '../../data/focusAreas'

function ScoreBreakdown({ scores }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold">Score breakdown</h3>

      <div className="mt-4 space-y-4">
        {focusAreas.map(area => (
          <ScoreProgressBar key={area.id} label={area.label} value={scores[area.id]} />
        ))}
      </div>
    </Card>
  )
}

export default ScoreBreakdown