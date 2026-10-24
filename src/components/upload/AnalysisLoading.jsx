import { useState, useEffect } from 'react'

const messages = [
  'Reading your layout...',
  'Checking colors and contrast...',
  'Reviewing typography and spacing...',
  'Preparing your report...',
]

const TICK = 100

function AnalysisLoading({ duration }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const stepSize = 100 / (duration / TICK)

    const timer = setInterval(() => {
      setProgress(current => Math.min(current + stepSize, 100))
    }, TICK)

    return () => clearInterval(timer)
  }, [duration])

  const messageIndex = Math.min(Math.floor(progress / 25), messages.length - 1)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-brown/60 px-6">
      <div
        role="status"
        aria-live="polite"
        className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl"
      >
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-peach border-t-plum" />
        <h3 className="mt-4 text-lg font-semibold">Analyzing your design</h3>
        <p className="mt-1 text-sm text-brown/70">{messages[messageIndex]}</p>

        <div className="mt-5 h-2 rounded-full bg-peach">
          <div
            className="h-2 rounded-full bg-plum transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-brown/70">{Math.round(progress)}%</p>
      </div>
    </div>
  )
}

export default AnalysisLoading