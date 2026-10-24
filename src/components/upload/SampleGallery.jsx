import SampleCard from './SampleCard'

function SampleGallery({ samples, selectedId, onSelect }) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-semibold">Or try a sample website</h3>

      <div className="grid gap-4 sm:grid-cols-3">
        {samples.map(sample => (
          <SampleCard
            key={sample.id}
            sample={sample}
            selected={sample.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default SampleGallery