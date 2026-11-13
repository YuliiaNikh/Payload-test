// Simple outline icons for footer social links (currentColor, 24px grid)
const icons: Record<string, string> = {
  linkedin: 'M4 4h16v16H4zM8 10v6M8 7.5v.01M12 16v-6M12 12.5c0-1.5 1-2.5 2.3-2.5S16 11 16 12.5V16',
  facebook: 'M12 21a9 9 0 100-18 9 9 0 000 18zM14.5 8H13a2 2 0 00-2 2v11M9 13h5',
  instagram: 'M7 3h10a4 4 0 014 4v10a4 4 0 01-4 4H7a4 4 0 01-4-4V7a4 4 0 014-4zM12 16a4 4 0 100-8 4 4 0 000 8zM17.5 6.5v.01',
  x: 'M4 4l16 16M20 4L4 20',
  youtube: 'M3 8.5A3.5 3.5 0 016.5 5h11A3.5 3.5 0 0121 8.5v7a3.5 3.5 0 01-3.5 3.5h-11A3.5 3.5 0 013 15.5zM10 9l5 3-5 3z',
}

const names: Record<string, string> = { linkedin: 'LinkedIn', facebook: 'Facebook', instagram: 'Instagram', x: 'X', youtube: 'YouTube' }

export const socialName = (platform: string) => names[platform] ?? platform

export function SocialIcon({ platform }: { platform: string }) {
  const d = icons[platform]
  if (!d) return null
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
