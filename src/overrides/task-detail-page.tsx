import type { TaskKey } from '@/lib/site-config'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

export async function TaskDetailPageOverride({ task, slug }: { task: TaskKey; slug: string }) {
  if (task === 'image') {
    const { ImageDetailPageOverride } = await import('./image-detail-page')
    return <ImageDetailPageOverride slug={slug} />
  }
  return null
}
