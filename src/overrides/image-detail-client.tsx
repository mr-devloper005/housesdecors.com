'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { ArrowLeft, Palette, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { ContentImage } from '@/components/shared/content-image'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import type { SitePost } from '@/lib/site-connector'
import type { SiteExperience } from '@/lib/site-experience'

function getImageUrls(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const mediaImages = Array.isArray(post.media)
    ? post.media.map((item) => item?.url).filter((value): value is string => typeof value === 'string' && value.length > 0)
    : []
  const contentImages = Array.isArray(content.images)
    ? content.images.filter((value): value is string => typeof value === 'string' && value.length > 0)
    : []
  const combined = [...mediaImages, ...contentImages]

  return combined.length ? Array.from(new Set(combined)) : ['/placeholder.svg?height=1400&width=1000']
}

function getDescriptionHtml(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const raw =
    (typeof content.body === 'string' && content.body.trim()) ||
    (typeof content.description === 'string' && content.description.trim()) ||
    (typeof post.summary === 'string' && post.summary.trim()) ||
    'A fuller room story, layout notes, and image context will appear here.'

  return formatRichHtml(raw, 'A fuller room story, layout notes, and image context will appear here.')
}

function getImageCategory(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  return (typeof content.roomType === 'string' && content.roomType) || post.tags?.[0] || 'Interior'
}

function getMaterials(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  return Array.isArray(content.materials) ? content.materials.filter((item): item is string => typeof item === 'string') : []
}

function getPalette(post: SitePost) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const palette = Array.isArray(content.colors) ? content.colors.filter((item): item is string => typeof item === 'string') : []
  return palette.length ? palette : ['#8B7355', '#D7C4AF', '#F6ECDD', '#3D2A20']
}

export function ImageDetailClient({
  post,
  relatedPosts,
  experience,
}: {
  post: SitePost
  relatedPosts: SitePost[]
  experience: SiteExperience
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeColor, setActiveColor] = useState('#8B7355')
  const images = useMemo(() => getImageUrls(post), [post])
  const currentImage = images[currentImageIndex] || images[0]
  const descriptionHtml = useMemo(() => getDescriptionHtml(post), [post])
  const materials = useMemo(() => getMaterials(post), [post])
  const palette = useMemo(() => getPalette(post), [post])
  const roomType = useMemo(() => getImageCategory(post), [post])
  const themeStyles = useMemo(
    () =>
      ({
        '--selected-color': activeColor,
        '--selected-soft': `${activeColor}22`,
        '--selected-mid': `${activeColor}66`,
      }) as CSSProperties,
    [activeColor]
  )

  return (
    <div className={`min-h-screen ${experience.pageClass} ${experience.fontClass}`} style={themeStyles}>
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/images" className="inline-flex items-center gap-2 text-sm font-semibold text-amber-900/75 hover:text-amber-950">
            <ArrowLeft className="h-4 w-4" />
            Back to gallery
          </Link>
        </div>

        <section className="mt-6 grid gap-6 xl:grid-cols-[minmax(0,1.08fr)_320px]">
          <div className={`overflow-hidden rounded-[2.4rem] ${experience.panelClass}`}>
            <div className="border-b px-6 py-5 sm:px-8" style={{ borderColor: 'var(--selected-mid)' }}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white" style={{ backgroundColor: 'var(--selected-color)' }}>
                  <Palette className="h-3.5 w-3.5" />
                  {roomType}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-900/55">
                  Image detail
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-amber-950 sm:text-4xl">
                {post.title}
              </h1>
            </div>

            <div className="grid gap-0 lg:grid-cols-[110px_minmax(0,1fr)]">
              <div className="order-2 flex gap-3 overflow-x-auto border-t px-6 py-5 lg:order-1 lg:flex-col lg:border-r lg:border-t-0 lg:px-4" style={{ borderColor: 'var(--selected-mid)' }}>
                {images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    onClick={() => {
                      setCurrentImageIndex(index)
                    }}
                    className={`relative h-20 w-20 flex-none overflow-hidden rounded-[1.1rem] border transition ${
                      currentImage === image
                        ? 'shadow-[0_10px_30px_rgba(120,53,15,0.18)]'
                        : 'hover:border-amber-400'
                    }`}
                    style={{ borderColor: currentImage === image ? 'var(--selected-color)' : 'var(--selected-mid)' }}
                  >
                    <ContentImage src={image} alt={`${post.title} ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>

              <div className="order-1 p-4 sm:p-6 lg:order-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem]" style={{ backgroundColor: 'var(--selected-soft)' }}>
                  <ContentImage
                    src={currentImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div
                    className="pointer-events-none absolute inset-0 transition duration-300"
                    style={{ backgroundColor: 'var(--selected-color)', opacity: 0.18, mixBlendMode: 'multiply' }}
                  />
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-5">
            <div className={`rounded-[2rem] p-6 ${experience.panelClass}`} style={{ background: 'linear-gradient(180deg, var(--selected-soft), transparent 58%)' }}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/60">About this image</p>
              <p className={`mt-4 text-sm leading-7 ${experience.mutedClass}`}>
                The detail page now puts the media first, then keeps the material and room notes in a separate rail so the page feels easier to scan.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div className={`rounded-[1.25rem] p-3 ${experience.softPanelClass}`}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-900/55">Views</p>
                  <p className="mt-2 text-xl font-semibold text-amber-950">2.4k</p>
                </div>
                <div className={`rounded-[1.25rem] p-3 ${experience.softPanelClass}`}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-900/55">Saves</p>
                  <p className="mt-2 text-xl font-semibold text-amber-950">318</p>
                </div>
                <div className={`rounded-[1.25rem] p-3 ${experience.softPanelClass}`}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-900/55">Format</p>
                  <p className="mt-2 text-xl font-semibold text-amber-950">JPG</p>
                </div>
              </div>
            </div>

            <div className={`rounded-[2rem] p-6 ${experience.panelClass}`} style={{ background: 'linear-gradient(180deg, var(--selected-soft), transparent 58%)' }}>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/60">Material palette</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {palette.map((color, index) => (
                  <button
                    key={`${color}-${index}`}
                    type="button"
                    onClick={() => setActiveColor(color)}
                    className="space-y-2 text-left"
                  >
                    <div
                      className={`h-12 w-12 rounded-2xl border shadow-sm transition ${activeColor === color ? 'scale-110' : 'hover:scale-105'}`}
                      style={{
                        backgroundColor: color,
                        borderColor: activeColor === color ? '#ffffff' : 'rgba(255,255,255,0.7)',
                        boxShadow: activeColor === color ? `0 0 0 3px ${color}` : undefined,
                      }}
                    />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-900/55">{color}</p>
                  </button>
                ))}
              </div>
              {materials.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {materials.map((material) => (
                    <span key={material} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${experience.softPanelClass}`}>
                      {material}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>

          </aside>
        </section>

        <section className="mt-8 grid gap-6 xl:grid-cols-[minmax(0,1fr)_300px]">
          <div className={`rounded-[2.2rem] p-6 sm:p-8 ${experience.panelClass}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/60">Description</p>
            <RichContent html={descriptionHtml} className="mt-5 max-w-4xl prose-p:leading-8" />
          </div>

          <div className="space-y-5">
            {post.tags?.length ? (
              <div className={`rounded-[2rem] p-6 ${experience.panelClass}`}>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/60">Tags</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.slice(0, 8).map((tag) => (
                    <span key={tag} className={`rounded-full px-3 py-1.5 text-xs font-semibold ${experience.softPanelClass}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            <div className={`rounded-[2rem] p-6 ${experience.panelClass}`}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/60">
                <Sparkles className="h-4 w-4" />
                Layout note
              </div>
              <p className={`mt-4 text-sm leading-7 ${experience.mutedClass}`}>
                This page now feels closer to an image library detail view instead of a generic post template, which is a better fit for housesdecors.
              </p>
            </div>
          </div>
        </section>

        {relatedPosts.length ? (
          <section className="mt-12">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-900/60">More to explore</p>
                <h2 className="mt-2 text-2xl font-semibold text-amber-950">Related image cards</h2>
              </div>
              <Link href="/images" className="text-sm font-semibold text-amber-900/70 hover:text-amber-950">
                View all
              </Link>
            </div>
            <div className="flex gap-5 overflow-x-auto pb-3">
              {relatedPosts.map((relatedPost) => {
                const image = getImageUrls(relatedPost)[0]
                const summary = relatedPost.summary?.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
                return (
                  <Link
                    key={relatedPost.id}
                    href={`/images/${relatedPost.slug}`}
                    className="group w-[320px] flex-none overflow-hidden rounded-[2rem] border bg-[#fffaf2] shadow-[0_18px_50px_rgba(120,53,15,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(120,53,15,0.14)]"
                    style={{ borderColor: 'var(--selected-mid)' }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: 'var(--selected-soft)' }}>
                      <ContentImage
                        src={image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.05]"
                      />
                    </div>
                    <div className="border-t bg-[#fffaf2] px-4 py-5 sm:px-5" style={{ borderColor: 'var(--selected-mid)' }}>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#b7875a]">
                        {getImageCategory(relatedPost)}
                      </p>
                      <h3 className="mt-3 text-[1.05rem] font-semibold leading-8 text-amber-950">
                        {relatedPost.title}
                      </h3>
                      {summary ? (
                        <p className="mt-2 line-clamp-2 text-sm leading-7 text-amber-950/70">
                          {summary}
                        </p>
                      ) : null}
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  )
}
