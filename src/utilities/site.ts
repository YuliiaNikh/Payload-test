// Site-wide name and description used in page titles, Open Graph and the admin panel
export const SITE_NAME = 'Payload Test'
export const SITE_DESCRIPTION = 'A website built with Payload and Next.js.'

// True only on the live production deployment, not previews or local dev
export const isProductionDeployment = process.env.VERCEL_ENV === 'production'
