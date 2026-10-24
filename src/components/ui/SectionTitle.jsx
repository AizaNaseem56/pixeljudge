function SectionTitle({ title, subtitle, light = false }) {
  return (
    <div className="mb-12 text-center">
      <h2 className={`text-3xl font-bold ${light ? 'text-white' : ''}`}>{title}</h2>
      <p className={`mt-2 ${light ? 'text-white/85' : 'text-brown/70'}`}>{subtitle}</p>
    </div>
  )
}

export default SectionTitle