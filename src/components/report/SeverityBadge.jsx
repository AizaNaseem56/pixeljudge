const styles = {
  critical: 'bg-brown text-white',
  high: 'bg-plum text-white',
  medium: 'bg-mauve text-white',
  low: 'bg-blush text-brown',
}

const labels = {
  critical: '⚠ Critical',
  high: 'High',
  medium: 'Medium',
  low: 'Low',
}

function SeverityBadge({ severity }) {
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${styles[severity]}`}>
      {labels[severity]}
    </span>
  )
}

export default SeverityBadge