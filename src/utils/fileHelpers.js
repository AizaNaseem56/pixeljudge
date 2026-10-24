const allowedTypes = ['image/png', 'image/jpeg', 'image/webp']
const maxSizeInMB = 5

export function validateScreenshot(file) {
  if (!allowedTypes.includes(file.type)) {
    return 'Please choose a PNG, JPG or WebP image.'
  }

  if (file.size > maxSizeInMB * 1024 * 1024) {
    return `The image must be smaller than ${maxSizeInMB} MB.`
  }

  return ''
}

export function formatFileSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}