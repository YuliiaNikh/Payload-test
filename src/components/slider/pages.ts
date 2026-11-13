// Start positions a visitor can jump to: with 7 slides and 3 per view, positions 0..4
export function pageCount(slides: number, perView: number): number {
  return Math.max(1, slides - Math.max(1, perView) + 1)
}

// Next/previous start position, wrapping around at the ends
export function stepTo(current: number, delta: number, pages: number): number {
  return (((current + delta) % pages) + pages) % pages
}
