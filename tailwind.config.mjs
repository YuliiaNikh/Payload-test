/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--color-pardes-navy)',
              '--tw-prose-headings': 'var(--color-pardes-navy)',
              '--tw-prose-links': 'var(--color-pardes-red)',
              '--tw-prose-bold': 'var(--color-pardes-navy)',
              '--tw-prose-quotes': 'var(--color-pardes-navy)',
              '--tw-prose-quote-borders': 'var(--color-pardes-teal)',
              '--tw-prose-bullets': 'var(--color-pardes-red)',
              '--tw-prose-counters': 'var(--color-pardes-red)',
              '--tw-prose-hr': 'var(--color-pardes-border)',
              '--tw-prose-captions': 'var(--color-pardes-slate)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2.5rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '1.5rem',
              },
            },
          ],
        },
      },
    },
  },
}

export default config
