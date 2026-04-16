export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'hd9m2q7x4v',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Houses Decors',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Image-led home and decor inspiration',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A gallery-style site for visual inspiration, design images, and decor discovery.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'housesdecors.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://housesdecors.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

