"use client";
import React from "react";
import Link from "next/link";
import { Element } from "react-scroll";
import { Project } from "~/server/db/schema";

interface ProjectItem2Props {
  project: Project[];
}

export default function HomeProject({ project }: ProjectItem2Props) {
  return (
    <>
      <Element name="project">
        <div className="flex">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-5xl font-normal capitalize">byz</h1>
            <Link
              href="/projects"
              className="rounded-full border border-stone-800 bg-white px-5 py-2 text-sm text-stone-900 transition-all duration-100 hover:bg-black hover:text-white"
            >
              byx
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-5 pt-5 md:grid-cols-2 lg:grid-cols-3">
          {project?.map((projects, i) => (
            <Link
              href={`/projects/${projects.slug}`}
              className="flex flex-col"
              key={i}
            >
              <div className="group flex flex-col">
                <div className="relative flex aspect-video w-full overflow-hidden">
                  {/* <Image
                  src={project.thumbnail as string}
                  fill
                  alt=""
                  className="object-cover transform transition-all scale-110 group-hover:scale-100 duration-500 visible object-center"
                ></Image> */}
                </div>
                <div className="flex flex-col p-3 text-center">
                  <h3 className="font-bold">{projects?.title}</h3>
                  <h4 className="text-xs font-light tracking-widest">
                    {projects?.place}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Element>
    </>
  );
}
