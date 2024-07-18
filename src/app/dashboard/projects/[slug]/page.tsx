import React, { useState } from "react";
import ViewProject from "~/components/dashboard/view-project";
import { Project } from "~/server/db/schema";
import { api } from "~/trpc/server";

interface PageParams {
  params: {
    slug: string;
  };
}
export default async function View({ params }: PageParams) {
  const project = await api.project.getProjectBySlug({ slug: params.slug });

  return (
    <>
      <div>
        <ViewProject project={project || ({} as Project)} />
      </div>
    </>
  );
}
