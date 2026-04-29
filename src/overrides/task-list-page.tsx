import type { TaskKey } from '@/lib/site-config'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

export async function TaskListPageOverride({ task, category }: { task: TaskKey; category?: string }) {
  if (task === 'image') {
    const { ImageListPageOverride } = await import('./image-list-page')
    return <ImageListPageOverride category={category} />
  }
  return null
}
