"use client";

import Container from "~/components/container";
import Link from "next/link";
import { Metadata } from "next";
import { RxCaretRight } from "react-icons/rx";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "froala-editor/js/plugins/image.min.js";

interface PageParams {
  project: any;
}

export const generateMetadata = async ({
  project,
}: PageParams): Promise<Metadata> => {
  return {
    title: "",
    description: "",
  };
};

export default function ViewProject({ project }: PageParams) {
  return (
    <>
      <div className="flex w-full items-center justify-center">
        <div className="absolute z-10 h-[700px] w-full bg-black bg-opacity-50"></div>

        <div className="container absolute z-20 mx-auto h-full w-full px-5 lg:px-8">
          <div className="grid h-full w-full grid-cols-5 items-center text-white">
            <div className="col-span-5 grid gap-y-2 lg:col-span-3">
              <h1 className="text-4xl font-semibold md:text-4xl lg:text-6xl lg:leading-tight">
                {project.title}
              </h1>
              <h2 className="text-base font-normal lg:text-lg">
                {project.summary}
              </h2>
            </div>
          </div>
        </div>
        <div
          className="relative z-0 h-[700px] w-full bg-cover bg-center"
          //   style={{ backgroundImage: `url(${project.thumbnail})` }}
        ></div>
      </div>
      <Container>
        <div className="space-y-5 pt-24 md:px-32 lg:px-48 xl:px-[350px]">
          <div className="flex w-full items-center">
            <Link href="/">
              <p className="font-bold">Home </p>
            </Link>
            <RxCaretRight />
            <Link href="/projects">
              <p className="font-bold">Projects</p>
            </Link>
            <RxCaretRight />
            <p>{project.title}</p>
          </div>
          <FroalaEditorView model={project.content} />
        </div>
      </Container>
    </>
  );
}
