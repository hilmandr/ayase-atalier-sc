"use client";

import Link from "next/link";
import { format } from "date-fns";
import { GrView } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Project } from "~/server/db/schema";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { useCallback, useState } from "react";
import { Button } from "~/components/ui/button";
import BasePagination from "~/components/common/base-pagination";
import { useSearchParams } from "next/navigation";
import useDebounce from "~/hooks/use-debounce";
import { Input } from "~/components/ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Warning2 } from "iconsax-react";

export default function ProjectsTable() {
  const [selectedProject, setSelectedProject] = useState<Project | undefined>(
    undefined,
  );
  const [showDilaog, setShowDialog] = useState<boolean>(false);
  const handleShowDialog = (project: Project) => {
    setShowDialog((prev) => !prev);
    setSelectedProject(project);
  };
  const deleteProjectMutation = api.project.deleteProject.useMutation({
    onSuccess: () => {
      toast.success("Delete Project Success!");
      refetch();
    },
  });

  const handleProject = useCallback(
    (id: string) => {
      deleteProjectMutation.mutate({ id });
    },
    [deleteProjectMutation],
  );

  // state
  const [searchProject, setSearchProject] = useState("");

  const debounceSearch = useDebounce(searchProject, 500);

  // query
  const { data: projects, refetch } = api.project.getProjects.useQuery({
    search: debounceSearch,
  });

  // pagination
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  return (
    <>
      <div className="my-5 flex w-80">
        <Input
          type="text"
          placeholder="Search Sender Name..."
          value={searchProject}
          onChange={(e) => setSearchProject(e.target.value)}
        />
      </div>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            {/* <TableHead>No</TableHead> */}
            <TableHead className="">Projects</TableHead>
            <TableHead>Place</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="">Client</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        {projects?.length === 0 ? (
          <>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={5} className="text-center">
                  There is nothing to show. Please add some project.
                </TableCell>
              </TableRow>
            </TableFooter>
          </>
        ) : (
          <>
            {projects?.slice((page - 1) * 10, page * 10).map((project) => (
              <>
                <TableBody>
                  <TableRow>
                    {/* <TableCell>{project.id}</TableCell> */}
                    <TableCell>{project?.title}</TableCell>
                    <TableCell>{project?.place}</TableCell>
                    <TableCell>
                      {format(
                        project?.date ? new Date(project?.date) : new Date(),
                        "dd MMM, yyyy",
                      )}
                    </TableCell>
                    <TableCell>{project?.client}</TableCell>
                    <TableCell>
                      <div className="flex">
                        <Button asChild className="h-8" variant="ghost">
                          <Link href={`/dashboard/projects/${project.slug}`}>
                            <GrView size={16} />
                          </Link>
                        </Button>
                        <Button asChild className="h-8" variant="ghost">
                          <Link
                            href={`/dashboard/projects/edit/${project.slug}`}
                          >
                            <AiOutlineEdit size={16} />
                          </Link>
                        </Button>
                        <Button
                          className="h-8"
                          variant="ghost"
                          onClick={() => handleShowDialog(project)}
                        >
                          <FaRegTrashAlt fill="red" size={16} />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
                <Dialog open={showDilaog} onOpenChange={setShowDialog}>
                  <DialogContent className="items-center justify-center sm:max-w-[425px]">
                    <div className="flex w-full flex-col items-center justify-center space-y-4 py-2">
                      <DialogHeader className="items-center justify-center">
                        <DialogTitle>
                          <Warning2 size="56" color="#3a3a3a" variant="Bold" />
                        </DialogTitle>
                        <DialogDescription className="flex flex-col items-center justify-center">
                          <p className="text-lg text-slate-900">
                            Delete Project
                          </p>
                          <p>Are you sure want to delete this project?</p>
                          <p>This action cannot be undone.</p>
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex w-full items-center justify-center gap-4">
                        <DialogClose asChild>
                          <Button className="w-28" variant="outline">
                            Tidak
                          </Button>
                        </DialogClose>
                        <Button
                          asChild
                          className="w-28 cursor-pointer"
                          onClick={() => handleProject(project.id)}
                          variant="destructive"
                        >
                          <span>Ya</span>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </>
            ))}
          </>
        )}
      </Table>
      <div className="mt-4 flex w-full">
        <BasePagination totalCount={projects?.length} />
      </div>
    </>
  );
}
