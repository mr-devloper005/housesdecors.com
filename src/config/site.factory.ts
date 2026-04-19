import type { SiteFactoryRecipe } from '@/design/factory/types'

export const SITE_FACTORY_RECIPE: SiteFactoryRecipe = {
  brandPack: 'directory-clean',
  navbar: 'compact-bar',
  footer: 'columns-footer',
  homeLayout: 'image-profile-home',
  motionPack: 'minimal',
  primaryTask: 'image',
  enabledTasks: ['image'],
  taskLayouts: {
    listing: 'listing-directory',
    classified: 'classified-market',
    article: 'article-editorial',
    image: 'image-masonry',
    profile: 'profile-business',
    sbm: 'sbm-curation',
  },
}
