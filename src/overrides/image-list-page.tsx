import { normalizeCategory } from '@/lib/categories'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'
import { getSiteExperience } from '@/lib/site-experience'
import { ImageListClient } from './image-list-client'

export async function ImageListPageOverride({ category }: { category?: string }) {
  const posts = await fetchTaskPosts('image', 30)
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const experience = getSiteExperience(SITE_CONFIG.baseUrl)

  return (
    <ImageListClient
      initialPosts={posts}
      category={normalizedCategory}
      experience={experience}
    />
  )
}
