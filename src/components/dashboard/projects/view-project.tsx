"use client";

import React, { useState } from "react";
import { Project } from "~/server/db/schema";

interface PageParams {
  project: Project;
}
export default function ViewProject({ project }: PageParams) {
  return (
    <>
      <div>
        <h1>{project.title}</h1>
        <div>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      </div>
    </>
  );
}
