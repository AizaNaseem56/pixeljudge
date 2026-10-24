import Button from '../ui/Button'

function AnalyzeButton({ disabled, hint, onClick }) {
  return (
    <div>
      <Button onClick={onClick} disabled={disabled} className="w-full">
        Analyze design
      </Button>

      {disabled && hint && (
        <p className="mt-2 text-center text-sm text-brown/70">{hint}</p>
      )}
    </div>
  )
}

export default AnalyzeButton