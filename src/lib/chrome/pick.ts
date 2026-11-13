type Ref = number | { id: number } | null | undefined

export type Appearance = {
  header?: 'default' | 'custom' | 'none' | null
  headerRef?: Ref
  footer?: 'default' | 'custom' | 'none' | null
  footerRef?: Ref
} | null | undefined

// A header/footer id to load, "none" to hide it, or "fallback" for the plain bar when nothing is set up
export type ChromeChoice = number | 'none' | 'fallback'

const idOf = (ref: Ref): number | null => (ref == null ? null : typeof ref === 'object' ? ref.id : ref)

function pick(mode: 'default' | 'custom' | 'none' | null | undefined, ref: Ref, fallback: Ref): ChromeChoice {
  if (mode === 'none') return 'none'
  const chosen = mode === 'custom' ? idOf(ref) : null
  return chosen ?? idOf(fallback) ?? 'fallback'
}

export function pickChrome(appearance: Appearance, defaults: { header: Ref; footer: Ref }) {
  return {
    header: pick(appearance?.header, appearance?.headerRef, defaults.header),
    footer: pick(appearance?.footer, appearance?.footerRef, defaults.footer),
  }
}
