import { TaskListPage } from "@/components/tasks/task-list-page";
import { buildTaskMetadata } from "@/lib/seo";
import { taskPageMetadata } from "@/config/site.content";

export const revalidate = 3;

export const generateMetadata = () =>
  buildTaskMetadata("image", {
    path: "/images",
    title: taskPageMetadata.image.title,
    description: taskPageMetadata.image.description,
  });

type TaskPageSearchParams = Promise<{ category?: string }> | { category?: string };

export default async function ImageSharingPage({ searchParams }: { searchParams?: TaskPageSearchParams }) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  return <TaskListPage task="image" category={resolvedSearchParams?.category} />;
}
