"use client";

import Link from "next/link";
import { Project } from "~/server/db/schema";
import Image from "next/image";
import { Element } from "react-scroll";

interface ProjectItemProps {
  project: Project[];
}

export default function ProjectsItem({ project }: ProjectItemProps) {
  return (
    <>
      <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3">
        {project.map((project, i) => (
          <Link
            href={`/projects/${project?.slug}`}
            className="flex flex-col"
            key={i}
          >
            <div className="group flex flex-col">
              <div className="relative flex aspect-video w-full overflow-hidden">
                <Image
                  src={project.thumbnail as string}
                  fill
                  alt=""
                  className="visible scale-110 transform object-cover object-center transition-all duration-500 group-hover:scale-100"
                ></Image>
              </div>
              <div className="flex flex-col p-3 text-center">
                <h3 className="font-bold">{project?.title}</h3>
                <h4 className="text-xs font-light tracking-widest">
                  {project?.place}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
