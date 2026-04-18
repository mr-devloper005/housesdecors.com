import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Interior inspiration, image-first',
  },
  footer: {
    tagline: 'Curated home & decor imagery',
  },
  hero: {
    badge: 'Rooms, palettes, and ideas',
    title: ['Discover decor', 'through immersive imagery.'],
    description:
      'Browse a calm, gallery-style feed of interior and decor photography—organized for quick scanning, mood boards, and saving what you love.',
    primaryCta: {
      label: 'Explore gallery',
      href: '/images',
    },
    secondaryCta: {
      label: 'Search images',
      href: '/search',
    },
    searchPlaceholder: 'Search rooms, styles, colors, and moods',
    focusLabel: 'Focus',
    featureCardBadge: 'latest cover rotation',
    featureCardTitle: 'Fresh imagery sets the tone for every visit.',
    featureCardDescription:
      'Large visuals, soft spacing, and clear hierarchy keep attention on the photos—not on chrome.',
  },
  home: {
    metadata: {
      title: 'Houses Decors — interior & decor imagery',
      description:
        'A gallery-first experience for interior design inspiration: browse images, filter visually, and save favorites.',
      openGraphTitle: 'Houses Decors — interior & decor imagery',
      openGraphDescription:
        'Discover curated home and decor photography in a premium, easy-to-scan layout.',
      keywords: ['interior design', 'home decor', 'inspiration gallery', 'decor images', 'room ideas'],
    },
    introBadge: 'About this gallery',
    introTitle: 'Built for people who think in color, texture, and light.',
    introParagraphs: [
      'This site centers on imagery: full-bleed photos, generous spacing, and typography that stays out of the way.',
      'Navigation stays minimal so you can move from hero to grid to detail pages without friction.',
      'Whether you are sourcing a renovation or collecting references, the layout rewards visual scanning first.',
    ],
    sideBadge: 'At a glance',
    sidePoints: [
      'Gallery-first homepage with masonry-friendly rhythm.',
      'Forest green accents on warm cream for a grounded, premium feel.',
      'Lightweight motion—subtle fades, no gimmicky effects.',
      'Fast on mobile: optimized images and simple interactions.',
    ],
    primaryLink: {
      label: 'Open gallery',
      href: '/images',
    },
    secondaryLink: {
      label: 'Search',
      href: '/search',
    },
  },
  cta: {
    badge: 'Start collecting',
    title: 'Save ideas, compare palettes, and build your own visual library.',
    description:
      'Create an account to keep favorites synced in your browser and return to the imagery that fits your project.',
    primaryCta: {
      label: 'Join free',
      href: '/register',
    },
    secondaryCta: {
      label: 'Browse gallery',
      href: '/images',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and stories',
    description: 'Read articles, stories, guides, and long-form posts across topics and interests.',
  },
  listing: {
    title: 'Listings and discoverable pages',
    description: 'Explore listings, services, brands, and structured pages organized for easier browsing.',
  },
  classified: {
    title: 'Classifieds and announcements',
    description: 'Browse classifieds, offers, notices, and time-sensitive posts across categories.',
  },
  image: {
    title: 'Images and visual posts',
    description: 'Explore image-led posts, galleries, and visual stories from across the platform.',
  },
  profile: {
    title: 'Profiles and public pages',
    description: 'Discover public profiles, brand pages, and identity-focused posts in one place.',
  },
  sbm: {
    title: 'Curated links and saved resources',
    description: 'Browse useful links, saved references, and curated resources organized for discovery.',
  },
  pdf: {
    title: 'PDFs and downloadable resources',
    description: 'Open reports, documents, and downloadable resources shared across the platform.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings connect naturally with articles, images, resources, and other content types so supporting information stays easy to reach from the same platform.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is built for stories, explainers, guides, and long-form reading across topics and interests.',
      'Articles connect with listings, images, resources, and other content types so deeper reading can lead naturally into related discovery.',
      'Use this section to browse thoughtful posts, revisit useful writing, and move into supporting content when you want more context.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open images', href: '/images' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Imagery leads here: full-width photos, gallery pacing, and tags that help you scan moods, palettes, and room types quickly.',
      'Open any post for a focused view—then jump to search when you want to narrow by keyword or style.',
      'Save what resonates and return anytime; the layout stays calm so the photos stay loud.',
    ],
    links: [
      { label: 'Search the gallery', href: '/search' },
      { label: 'Upload an image', href: '/create/image' },
      { label: 'About the site', href: '/about' },
    ],
  },
  profile: {
    title: 'Profiles, identities, and public pages',
    paragraphs: [
      'Profiles capture the identity behind a business, creator, brand, or project and help visitors understand who is behind the content they are exploring.',
      'These pages work as trust anchors across the site and connect naturally with stories, listings, documents, and other post types.',
      'Browse profiles to understand people and brands more clearly, then continue into related content from the same source.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'Browse images', href: '/images' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related stories, listings, or resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library hosts reports, guides, downloadable files, and longer-form document resources that support reading and discovery.',
      'These resources work alongside stories, listings, and profiles, helping document-style content stay connected to the rest of the platform.',
      'Browse by category to find relevant files quickly, then continue into related sections when you want more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'See listings', href: '/listings' },
      { label: 'Explore profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
