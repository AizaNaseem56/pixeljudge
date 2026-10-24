function SampleCard({ sample, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(sample)}
      aria-pressed={selected}
      className={`overflow-hidden rounded-xl bg-white text-left shadow transition hover:-translate-y-1 hover:shadow-lg ${
        selected ? 'ring-2 ring-plum' : ''
      }`}
    >
      <img
        src={sample.image}
        alt={`${sample.name} website screenshot`}
        className="aspect-video w-full object-cover"
      />
      <div className="p-3">
        <p className="font-semibold">{sample.name}</p>
        <p className="text-sm text-brown/70">{sample.description}</p>
      </div>
    </button>
  )
}

export default SampleCard