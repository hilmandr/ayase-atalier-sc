import Container from "~/components/container";
import Link from "next/link";
import { Metadata } from "next";
import { RxCaretRight } from "react-icons/rx";
import { Project } from "~/server/db/schema";

export const metadata: Metadata = {
  title: "Projects - Ayase Atalier",
};

export default async function ProjectItemPage() {
  return (
    <>
      <Container>
        <div className="flex w-full items-center pt-32">
          <Link href="/">
            <p className="font-bold">Home </p>
          </Link>
          <RxCaretRight />
          <p className="cursor-default">Projects</p>
        </div>
        <div className="grid grid-cols-1 gap-10 py-10 md:grid-cols-2 lg:grid-cols-3">
          {[]?.map((project: Project, i) => (
            <Link
              href={`/projects/${project?.slug}`}
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
                  <h3 className="font-bold">{project?.title}</h3>
                  <h4 className="text-xs font-light tracking-widest">
                    {project?.place}
                  </h4>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
