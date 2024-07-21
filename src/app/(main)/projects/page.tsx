"use client";
import Container from "~/components/common/container";
import ProjectsItem from "~/components/main/projects";
import { api } from "~/trpc/react";
import { useState } from "react";
import useDebounce from "~/hooks/use-debounce";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Skeleton } from "~/components/ui/skeleton";

export default function ProjectItemPage() {
  // state
  const [searchProject, setSearchProject] = useState("");

  const debounceSearch = useDebounce(searchProject, 500);

  // query
  const { data: projects, isLoading } = api.project.getProjects.useQuery({
    search: debounceSearch,
  });

  if (isLoading) {
    return (
      <>
        <Container>
          <div className="flex w-full items-center pt-32">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Projects</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
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
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <div className="flex w-full items-center pt-32">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Projects</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <ProjectsItem project={projects || []} />
      </Container>
    </>
  );
}
