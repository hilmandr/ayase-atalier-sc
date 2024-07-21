import React, { useState } from "react";
import ViewProject from "~/components/dashboard/projects/view-project";
import { Project } from "~/server/db/schema";
import { api } from "~/trpc/server";

interface PageParams {
  params: {
    slug: string;
  };
}
export default async function View({ params }: PageParams) {
  const projects = await api.project.getProjectBySlug({ slug: params.slug });

  return (
    <>
      <div>
        <ViewProject project={projects || ({} as Project)} />
      </div>
    </>
  );
}
