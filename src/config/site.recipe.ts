import type { SiteRecipe } from '@/design/factory/recipe-types'

export const SITE_RECIPE: SiteRecipe = {
  productFamily: 'visual',
  themePack: 'housesdecors-visual',
  homepageTemplate: 'image-profile-home',
  navbarTemplate: 'compact-bar',
  footerTemplate: 'dense-footer',
  motionPack: 'studio-stagger',
  primaryTask: 'image',
  enabledTasks: ['image'],
  taskTemplates: {
    image: 'image-masonry'
  },
  manualOverrides: {
    navbar: false,
    footer: false,
    homePage: false,
    taskListPage: false,
    taskDetailPage: false,
    taskCard: false,
    contactPage: false,
    loginPage: false,
    registerPage: false,
  },
}


