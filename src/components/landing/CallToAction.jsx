import Button from '../ui/Button'

function CallToAction() {
  return (
    <section className="relative isolate overflow-hidden bg-brown px-6 py-20 text-center text-white">
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum/70 blur-3xl" />

      <h2 className="text-3xl font-bold">Ready to review your design?</h2>
      <p className="mt-2 text-white/85">Upload your first screenshot and see your score.</p>
      <div className="mt-6">
        <Button to="/signup" variant="secondary">
          Try PixelJudge free
        </Button>
      </div>
    </section>
  )
}

export default CallToAction