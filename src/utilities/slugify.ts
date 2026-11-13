// Unicode-aware: keeps letters in any script (Hebrew URLs are allowed), drops marks and punctuation
export function slugify(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/\p{M}/gu, '')
    .replace(/['"`’׳״]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '')
}
