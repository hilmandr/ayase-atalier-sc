import React from "react";
import ViewProject from "~/components/view-project";
interface PageParams {
  params: {
    slug: string;
  };
}

export default async function ProjectPage({ params }: PageParams) {
  return (
    <>
      <div>
        <ViewProject project={{}} />
      </div>
    </>
  );
}
