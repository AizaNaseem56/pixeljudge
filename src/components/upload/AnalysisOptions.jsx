import Card from '../ui/Card'
import { focusAreas } from '../../data/focusAreas'

function AnalysisOptions({ options, onChange }) {
  function toggleFocus(id) {
    const focus = options.focus.includes(id)
      ? options.focus.filter(item => item !== id)
      : [...options.focus, id]

    onChange({ ...options, focus })
  }

  return (
    <Card>
      <h3 className="text-lg font-semibold">Review settings</h3>

      <fieldset className="mt-4">
        <legend className="mb-2 text-sm font-medium">What should we check?</legend>

        <div className="space-y-2">
          {focusAreas.map(area => (
            <label key={area.id} className="flex cursor-pointer items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={options.focus.includes(area.id)}
                onChange={() => toggleFocus(area.id)}
                className="h-4 w-4 accent-plum"
              />
              {area.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="depth" className="mb-1 block text-sm font-medium">
          Review depth
        </label>
        <select
          id="depth"
          value={options.depth}
          onChange={event => onChange({ ...options, depth: event.target.value })}
          className="w-full rounded-lg border border-brown/50 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-plum"
        >
          <option value="quick">Quick review</option>
          <option value="detailed">Detailed review</option>
        </select>
      </div>
    </Card>
  )
}

export default AnalysisOptions