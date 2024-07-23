import { Metadata } from "next";
import React from "react";
import ViewProject from "~/components/main/view-project";
import { Project } from "~/server/db/schema";
import { api } from "~/trpc/server";
interface PageParams {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params,
}: PageParams): Promise<Metadata> => {
  const post = await api.project.getProjectBySlug({ slug: params.slug });
  return {
    title: post?.title + " - Ayaase Atalier",
    description: post?.summary,
    openGraph: {
      title: post?.title + " - Ayaase Atalier",
      description: post?.summary,
      images: ["/image/" + post?.thumbnail as string],
    },
     twitter: {
      card: "summary_large_image",
      images: ["/image/" + post?.thumbnail as string],
    },
  };
};

export default async function ProjectPage({ params }: PageParams) {
  const projects = await api.project.getProjectBySlug({ slug: params.slug });
  return (
    <>
      <div>
        <ViewProject project={projects || ({} as Project)} />
      </div>
    </>
  );
}
