function createMockSite({ name, background, header, accent, text, card }) {
  const cards = [60, 290, 520]
    .map(x => `<rect x="${x}" y="340" width="210" height="110" rx="10" fill="${card}"/>`)
    .join('')

  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="${background}"/>
  <rect width="800" height="60" fill="${header}"/>
  <text x="30" y="38" font-family="Arial" font-size="22" font-weight="bold" fill="#ffffff">${name}</text>
  <text x="520" y="38" font-family="Arial" font-size="14" fill="#ffffff">Home    Shop    About    Contact</text>
  <text x="60" y="150" font-family="Arial" font-size="38" font-weight="bold" fill="${text}">Welcome to ${name}</text>
  <text x="60" y="195" font-family="Arial" font-size="16" fill="${text}" fill-opacity="0.45">Quality products made with care, just for you.</text>
  <rect x="60" y="235" width="160" height="48" rx="8" fill="${accent}"/>
  <text x="92" y="265" font-family="Arial" font-size="16" fill="#ffffff">Get started</text>
  ${cards}
</svg>`

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`
}

export const sampleWebsites = [
  {
    id: 'bakery',
    name: 'Bakery Shop',
    description: 'Warm colors, faint subtitle',
    image: createMockSite({
      name: 'Bakery Shop', background: '#fff4e6', header: '#7a4a2b',
      accent: '#e8833a', text: '#3b2a20', card: '#ffffff',
    }),
  },
  {
    id: 'travel',
    name: 'Travel Blog',
    description: 'Blue theme, light button',
    image: createMockSite({
      name: 'Travel Blog', background: '#e8f4fb', header: '#1d6fa5',
      accent: '#2a9d8f', text: '#12354a', card: '#ffffff',
    }),
  },
  {
    id: 'portfolio',
    name: 'Studio Portfolio',
    description: 'Dark theme layout',
    image: createMockSite({
      name: 'Studio Portfolio', background: '#1f2933', header: '#111827',
      accent: '#9b5de5', text: '#e5e7eb', card: '#323f4b',
    }),
  },
]