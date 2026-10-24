import { useState } from 'react'
import Button from '../ui/Button'

function ReportActions({ reportId }) {
  const [copied, setCopied] = useState(false)

  async function handleShare() {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-wrap gap-3 print:hidden">
      <Button variant="outline" onClick={handleShare}>
        {copied ? 'Link copied!' : 'Share report'}
      </Button>
      <Button variant="outline" onClick={() => window.print()}>
        Export PDF
      </Button>
      <Button to={`/reports/${reportId}/redesign`} variant="dark">
        View redesign
      </Button>
    </div>
  )
}

export default ReportActions