import EditProjectForm from "~/components/dashboard/edit-project";
import { Project } from "~/server/db/schema";
import { api } from "~/trpc/server";

interface PageParams {
  params: {
    slug: string;
  };
}
export default async function EditProject({ params }: PageParams) {
  const project = await api.project.getProjectBySlug({ slug: params.slug });
  return (
    <>
      <EditProjectForm project={project || ({} as Project)} />
    </>
  );
}
