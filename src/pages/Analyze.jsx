import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UploadDropzone from '../components/upload/UploadDropzone'
import ImagePreview from '../components/upload/ImagePreview'
import FileInfo from '../components/upload/FileInfo'
import SampleGallery from '../components/upload/SampleGallery'
import AnalysisOptions from '../components/upload/AnalysisOptions'
import AnalyzeButton from '../components/upload/AnalyzeButton'
import AnalysisLoading from '../components/upload/AnalysisLoading'
import FormError from '../components/ui/FormError'
import { sampleWebsites } from '../data/sampleWebsites'
import { focusAreas } from '../data/focusAreas'
import { validateScreenshot } from '../utils/fileHelpers'

const ANALYSIS_DURATION = 3000

function Analyze() {
  const navigate = useNavigate()

  const [screenshot, setScreenshot] = useState(null)
  const [dimensions, setDimensions] = useState(null)
  const [error, setError] = useState('')
  const [analyzing, setAnalyzing] = useState(false)
  const [options, setOptions] = useState({
    focus: focusAreas.map(area => area.id),
    depth: 'quick',
  })

   useEffect(() => {
    if (!analyzing) return

    const reportId = screenshot?.sampleId ?? 'demo-1'
    const timer = setTimeout(() => navigate(`/reports/${reportId}`), ANALYSIS_DURATION)

    return () => clearTimeout(timer)
  }, [analyzing, navigate, screenshot])

  function releaseCurrentImage() {
    if (screenshot?.isUpload) {
      URL.revokeObjectURL(screenshot.src)
    }
  }

  function handleFileSelected(file) {
    const message = validateScreenshot(file)

    if (message) {
      setError(message)
      return
    }

    setError('')
    releaseCurrentImage()
    setScreenshot({
      name: file.name,
      size: file.size,
      src: URL.createObjectURL(file),
      isUpload: true,
    })
  }

  function handleSampleSelected(sample) {
    setError('')
    releaseCurrentImage()
    setScreenshot({ name: sample.name, src: sample.image, sampleId: sample.id })
  }

  function handleRemove() {
    releaseCurrentImage()
    setScreenshot(null)
    setDimensions(null)
  }

  let hint = ''
  if (!screenshot) {
    hint = 'Choose a screenshot or a sample first.'
  } else if (options.focus.length === 0) {
    hint = 'Select at least one thing to check.'
  }
  const canAnalyze = hint === ''

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Review a website design</h2>
        <p className="text-brown/70">
          Upload a screenshot or pick a sample, then start the analysis.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {screenshot ? (
            <div className="space-y-3">
              <ImagePreview
                src={screenshot.src}
                alt={`Preview of ${screenshot.name}`}
                onReplace={handleFileSelected}
                onRemove={handleRemove}
                onLoad={setDimensions}
              />
              <FileInfo
                name={screenshot.name}
                size={screenshot.size}
                dimensions={dimensions}
              />
              <FormError message={error} />
            </div>
          ) : (
            <UploadDropzone onFileSelected={handleFileSelected} error={error} />
          )}

          <SampleGallery
            samples={sampleWebsites}
            selectedId={screenshot?.sampleId}
            onSelect={handleSampleSelected}
          />
        </div>

        <div className="space-y-4">
          <AnalysisOptions options={options} onChange={setOptions} />
          <AnalyzeButton
            disabled={!canAnalyze}
            hint={hint}
            onClick={() => setAnalyzing(true)}
          />
        </div>
      </div>

      {analyzing && <AnalysisLoading duration={ANALYSIS_DURATION} />}
    </div>
  )
}

export default Analyze