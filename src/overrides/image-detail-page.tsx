import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { fetchTaskPostBySlug, fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { getSiteExperience } from '@/lib/site-experience'
import { ImageDetailClient } from './image-detail-client'

export async function ImageDetailPageOverride({ slug }: { slug: string }) {
  const post = await fetchTaskPostBySlug('image', slug)
  const relatedPosts = await fetchTaskPosts('image', 8)
  const experience = getSiteExperience(SITE_CONFIG.baseUrl)
  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() ||
    process.env.CONTACT_EMAIL?.trim() ||
    'hello@housesdecors.com'

  if (!post) {
    return (
      <div className={`min-h-screen ${experience.pageClass} ${experience.fontClass}`}>
        <NavbarShell />
        <main className="mx-auto max-w-7xl px-4 py-20 text-center">
          <h1 className="text-3xl font-semibold text-amber-950">Image not found</h1>
          <Link href="/images" className={`mt-4 inline-flex rounded-full px-6 py-3 ${experience.buttonClass}`}>
            Back to Gallery
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <ImageDetailClient
      post={post}
      relatedPosts={relatedPosts.filter((item) => item.slug !== post.slug).slice(0, 4)}
      experience={experience}
      contactEmail={contactEmail}
    />
  )
}
