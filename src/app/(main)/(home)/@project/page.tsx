"use client";
import { EmojiSad } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import { Element } from "react-scroll";
import ProjectsItem from "~/components/main/projects";
import { Skeleton } from "~/components/ui/skeleton";
import useDebounce from "~/hooks/use-debounce";
import { api } from "~/trpc/react";

export default function HomeSectionProject() {
  // state
  const [searchProject, setSearchProject] = useState("");

  const debounceSearch = useDebounce(searchProject, 500);

  // query
  const {
    data: projects,
    refetch,
    isLoading,
  } = api.project.getProjects.useQuery({
    search: debounceSearch,
  });

  if (isLoading) {
    return (
      <Element name="project">
        <div className="flex">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-5xl font-normal capitalize">WORKS</h1>
            <Link
              href="/projects"
              className="rounded-full border border-stone-800 bg-white px-5 py-2 text-sm text-stone-900 transition-all duration-100 hover:bg-black hover:text-white"
            >
              Discover More
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 py-10 pt-5 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(3)].map((i) => (
            <div className="group flex flex-col" key={i}>
              <Skeleton className="relative flex aspect-video w-full" />
              <div className="mt-2 flex w-full flex-col items-center justify-center gap-2">
                <Skeleton className="h-5 w-[300px]" />
                <Skeleton className="h-5 w-[150px]" />
              </div>
            </div>
          ))}
        </div>
      </Element>
    );
  }

  return (
    <>
      <Element name="project">
        <div className="flex">
          <div className="flex w-full items-center justify-between">
            <h1 className="text-5xl font-normal capitalize">WORKS</h1>
            <Link
              href="/projects"
              className="rounded-full border border-stone-800 bg-white px-5 py-2 text-sm text-stone-900 transition-all duration-100 hover:bg-black hover:text-white"
            >
              Discover More
            </Link>
          </div>
        </div>

        {projects?.length === 0 ? (
          <>
            <div className="flex aspect-[4/1.5] w-full flex-col items-center justify-center">
              <EmojiSad size="96" color="#333333" variant="TwoTone" />
              <h1 className="pt-5">
                Oops! There is no project to show at this time.
              </h1>
            </div>
          </>
        ) : (
          <>
            <ProjectsItem project={projects || []} />
          </>
        )}
      </Element>
    </>
  );
}
