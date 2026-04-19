import { defineSiteTheme } from '@/config/site.theme.defaults'

export const SITE_THEME = defineSiteTheme({
  shell: 'studio',
  hero: {
    variant: 'forest-gallery',
    eyebrow: 'Interior & decor imagery',
  },
  home: {
    layout: 'studio-showcase',
    primaryTask: 'image',
    featuredTaskKeys: ['image'],
  },
  navigation: {
    variant: 'compact',
  },
  footer: {
    variant: 'columns',
  },
  cards: {
    listing: 'listing-elevated',
    article: 'editorial-feature',
    image: 'studio-panel',
    profile: 'studio-panel',
    classified: 'catalog-grid',
    pdf: 'catalog-grid',
    sbm: 'editorial-feature',
    social: 'studio-panel',
    org: 'catalog-grid',
    comment: 'editorial-feature',
  },
})
