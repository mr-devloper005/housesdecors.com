import { TaskListPage } from "@/components/tasks/task-list-page";
import { buildTaskMetadata } from "@/lib/seo";
import { taskPageMetadata } from "@/config/site.content";

export const revalidate = 3;

export const generateMetadata = () =>
  buildTaskMetadata("profile", {
    path: "/profile",
    title: taskPageMetadata.profile.title,
    description: taskPageMetadata.profile.description,
  });

type TaskPageSearchParams = Promise<{ category?: string }> | { category?: string };

export default async function ProfilePage({ searchParams }: { searchParams?: TaskPageSearchParams }) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  return <TaskListPage task="profile" category={resolvedSearchParams?.category} />;
}
