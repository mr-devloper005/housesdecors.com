'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Compass, Grid3X3, Search, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { CATEGORY_OPTIONS } from '@/lib/categories'
import { normalizeCategory } from '@/lib/categories'
import type { SitePost } from '@/lib/site-connector'
import type { SiteExperience } from '@/lib/site-experience'

function getImageUrl(post: SitePost) {
  const mediaUrl = Array.isArray(post.media) ? post.media.find((item) => item?.url)?.url : undefined
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const contentImages = Array.isArray(content.images) ? content.images.find((item) => typeof item === 'string') : undefined
  const logo = typeof content.logo === 'string' ? content.logo : undefined

  return mediaUrl || contentImages || logo || '/placeholder.svg?height=1200&width=900'
}

function getCategory(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const contentCategory = typeof content.category === 'string' ? content.category : ''
  return contentCategory || post.tags?.[0] || 'Interior'
}

function getNormalizedPostCategories(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const categories: string[] = []

  if (typeof content.category === 'string' && content.category.trim()) {
    categories.push(normalizeCategory(content.category))
  }

  if (Array.isArray(post.tags)) {
    post.tags.forEach((tag) => {
      if (typeof tag === 'string' && tag.trim()) {
        categories.push(normalizeCategory(tag))
      }
    })
  }

  return Array.from(new Set(categories))
}

function getDescription(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const raw = typeof content.description === 'string' ? content.description : post.summary || ''
  return raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
}

export function ImageListClient({
  initialPosts,
  category,
  experience,
}: {
  initialPosts: SitePost[]
  category: string
  experience: SiteExperience
}) {
  const [selectedCategory, setSelectedCategory] = useState(category)

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') return initialPosts
    return initialPosts.filter((post) => {
      const postCategories = getNormalizedPostCategories(post)
      return postCategories.includes(selectedCategory)
    })
  }, [initialPosts, selectedCategory])

  const featuredPost = filteredPosts[0]
  const spotlightPosts = filteredPosts.slice(1, 4)
  const galleryPosts = filteredPosts.slice(4)

  return (
    <div className={`min-h-screen ${experience.pageClass} ${experience.fontClass}`}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(280px,320px)]">
          <div className={`overflow-hidden rounded-[2.2rem] ${experience.panelClass}`}>
            <div className="grid gap-8 p-6 lg:grid-cols-[minmax(0,1fr)_240px] lg:p-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-white/80 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-900">
                  <Compass className="h-4 w-4" />
                  Image discovery
                </div>
                <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.05em] text-amber-950 sm:text-5xl">
                  Find room ideas the way you browse a visual library.
                </h1>
                <p className={`mt-4 max-w-2xl text-sm leading-8 ${experience.mutedClass}`}>
                  We shifted this page toward a cleaner stock-gallery rhythm: stronger imagery, tighter metadata, and faster scanning from one decor concept to the next.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/search" className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold ${experience.buttonClass}`}>
                    Search gallery
                    <Search className="h-4 w-4" />
                  </Link>
                  <Link href="/profile" className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white px-5 py-3 text-sm font-semibold text-amber-950 transition hover:bg-amber-50">
                    Explore creators
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className={`rounded-[1.8rem] p-5 ${experience.softPanelClass}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/70">Browse mode</p>
                <div className="mt-4 space-y-3">
                  <div className="rounded-[1.3rem] border border-amber-200 bg-white/80 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-900/60">Collection</p>
                    <p className="mt-2 text-2xl font-semibold text-amber-950">{filteredPosts.length}</p>
                    <p className="mt-1 text-sm text-amber-900/70">image posts ready to explore</p>
                  </div>
                  <div className="rounded-[1.3rem] border border-amber-200 bg-white/80 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-900/60">Focus</p>
                    <p className="mt-2 text-base font-semibold text-amber-950">Image-first cards</p>
                    <p className="mt-1 text-sm text-amber-900/70">Less text noise, more material and room cues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`rounded-[2.2rem] p-6 ${experience.panelClass}`}>
            <div className="flex items-center gap-2 text-sm font-semibold text-amber-950">
              <Grid3X3 className="h-4 w-4" />
              Quick filters
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  selectedCategory === 'all'
                    ? 'bg-amber-900 text-white'
                    : 'border border-amber-200 bg-white text-amber-950 hover:bg-amber-50'
                }`}
              >
                All
              </button>
              {CATEGORY_OPTIONS.slice(0, 8).map((item) => (
                <button
                  key={item.slug}
                  onClick={() => setSelectedCategory(item.slug)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                    selectedCategory === item.slug
                      ? 'bg-amber-900 text-white'
                      : 'border border-amber-200 bg-white text-amber-950 hover:bg-amber-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className={`mt-6 rounded-[1.5rem] p-4 ${experience.softPanelClass}`}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/70">
                <Sparkles className="h-4 w-4" />
                Surface notes
              </div>
              <p className={`mt-3 text-sm leading-7 ${experience.mutedClass}`}>
                The new layout keeps the browse flow lighter and closer to an inspiration wall, which suits this project better than a text-heavy archive page.
              </p>
            </div>
          </div>
        </section>

        {featuredPost ? (
          <section className={`mt-8 rounded-[2.3rem] p-4 sm:p-5 ${experience.panelClass}`}>
            <div className="flex gap-5 overflow-x-auto pb-2">
              {[featuredPost, ...spotlightPosts].map((post, idx) => (
                <Link
                  key={post.id}
                  href={`/images/${post.slug}`}
                  className={`group w-[380px] flex-none overflow-hidden rounded-[2rem] border border-amber-200 bg-white ${idx === 0 ? 'shadow-[0_26px_80px_rgba(120,53,15,0.12)]' : 'shadow-[0_18px_50px_rgba(120,53,15,0.08)]'}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-amber-100">
                    <ContentImage
                      src={getImageUrl(post)}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                      priority={idx === 0}
                    />
                    {idx === 0 ? <div className="absolute inset-0 bg-gradient-to-t from-[#23150d]/80 via-[#23150d]/10 to-transparent" /> : null}
                  </div>
                  <div className="p-4 sm:p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-900/60">
                      {getCategory(post)}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-amber-950">{post.title}</h3>
                    <p className={`mt-2 line-clamp-2 text-sm leading-7 ${experience.mutedClass}`}>
                      {getDescription(post) || 'Open the full image detail page for the larger gallery, room notes, and related inspiration.'}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/60">Gallery</p>
              <h2 className="mt-2 text-2xl font-semibold text-amber-950">Browse the latest image cards</h2>
            </div>
            <p className={`text-sm ${experience.mutedClass}`}>{filteredPosts.length} results</p>
          </div>

          <div className="flex items-start gap-5 overflow-x-auto pb-3">
            {galleryPosts.map((post, index) => {
              const aspectClass =
                index % 5 === 0 ? 'aspect-[3/4]' : index % 4 === 0 ? 'aspect-[4/3]' : 'aspect-[4/5]'

              return (
                <Link
                  key={post.id}
                  href={`/images/${post.slug}`}
                  className="group block w-[300px] flex-none self-start overflow-hidden rounded-[1.8rem] border border-amber-200 bg-[#fffdf8] shadow-[0_18px_50px_rgba(120,53,15,0.08)]"
                >
                  <div className={`relative overflow-hidden bg-amber-100 ${aspectClass}`}>
                    <ContentImage
                      src={getImageUrl(post)}
                      alt={post.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.05]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#20120b]/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-900/60">
                          {getCategory(post)}
                        </p>
                        <h3 className="mt-2 text-lg font-semibold leading-tight text-amber-950">
                          {post.title}
                        </h3>
                      </div>
                      <ArrowRight className="mt-1 h-4 w-4 text-amber-900/60 transition group-hover:translate-x-0.5 group-hover:text-amber-950" />
                    </div>
                    <p className={`mt-3 line-clamp-2 text-sm leading-7 ${experience.mutedClass}`}>
                      {getDescription(post) || 'See the full image view for a larger composition and more project context.'}
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
