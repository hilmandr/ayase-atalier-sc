"use client";
import Link from "next/link";
import Header from "~/components/dashboard/layout/header";
import Container from "~/components/common/container";

import { Button } from "~/components/ui/button";
import { IoIosAddCircle } from "react-icons/io";
import { Input } from "~/components/ui/input";
import { api } from "~/trpc/react";
import ProjectsTable from "~/components/dashboard/projects/project-table";
import { Suspense } from "react";

export default function InputProjectPage() {
  return (
    <>
      <div className="flex h-full w-full bg-white text-sm">
        <Container>
          <Header />
          <div className="flex w-full flex-col pt-8">
            <div className="flex w-full items-center justify-between">
              <div className="flex w-full items-center gap-4">
                <div className="">
                  <h1 className="text-lg">Manage your projects</h1>
                </div>
                <div className="">
                  <Button asChild className="h-8 w-full">
                    <Link href="/dashboard/projects/input" className="gap-2">
                      <IoIosAddCircle size={16} /> <p>Add Project</p>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Suspense>
                <ProjectsTable />
              </Suspense>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
