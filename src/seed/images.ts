import sharp from 'sharp'

const palettes = [
  ['#2f6bff', '#7aa2ff'],
  ['#0f766e', '#5eead4'],
  ['#9333ea', '#d8b4fe'],
  ['#c2410c', '#fdba74'],
  ['#1d4ed8', '#22d3ee'],
  ['#be123c', '#fda4af'],
  ['#15803d', '#bef264'],
  ['#334155', '#94a3b8'],
]

const escape = (text: string) => text.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!)

// Placeholder artwork so the demo needs no stock photos: a gradient with soft shapes and a label
export async function placeholderImage(label: string, index: number, width = 1200, height = 800): Promise<Buffer> {
  const [from, to] = palettes[index % palettes.length]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <circle cx="${width * 0.78}" cy="${height * 0.3}" r="${height * 0.32}" fill="#fff" fill-opacity="0.14"/>
    <circle cx="${width * 0.18}" cy="${height * 0.86}" r="${height * 0.22}" fill="#fff" fill-opacity="0.1"/>
    <text x="${width * 0.06}" y="${height * 0.88}" font-family="Helvetica, Arial, sans-serif" font-size="${Math.round(height * 0.07)}" font-weight="700" fill="#fff">${escape(label)}</text>
  </svg>`
  return sharp(Buffer.from(svg)).png().toBuffer()
}

export async function avatarImage(initials: string, index: number): Promise<Buffer> {
  const [from, to] = palettes[(index + 3) % palettes.length]
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
    <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${from}"/><stop offset="1" stop-color="${to}"/></linearGradient></defs>
    <rect width="400" height="400" fill="url(#g)"/>
    <text x="200" y="245" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="150" font-weight="700" fill="#fff">${escape(initials)}</text>
  </svg>`
  return sharp(Buffer.from(svg)).png().toBuffer()
}

export async function logoImage(name: string): Promise<Buffer> {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="80">
    <rect width="320" height="80" fill="none"/>
    <text x="160" y="52" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="800" fill="#424955">${escape(name)}</text>
  </svg>`
  return sharp(Buffer.from(svg)).png().toBuffer()
}
