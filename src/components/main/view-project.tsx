"use client";

import Container from "~/components/common/container";
import Link from "next/link";
import { Metadata } from "next";
import { RxCaretRight } from "react-icons/rx";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";
import "froala-editor/js/plugins/image.min.js";
import { GalleryRemove } from "iconsax-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

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
        <div className="absolute z-10 h-[760px] w-full bg-black bg-opacity-50"></div>

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
        {project.thumbnail == "" ? (
          <div className="relative flex h-[760px] w-full items-center justify-center overflow-hidden bg-gray-100">
            <GalleryRemove
              size={100}
              className="scale-110 transform text-gray-400/75 transition-all duration-500 group-hover:scale-100"
              variant="Bold"
            />
          </div>
        ) : (
          <div
            className="relative z-0 h-[760px] w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${project.thumbnail})` }}
          ></div>
        )}
      </div>
      <Container>
        <div className="space-y-5 pb-7 pt-20 md:px-32 lg:px-48 xl:px-[350px]">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{project.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div dangerouslySetInnerHTML={{ __html: project.content }} />
        </div>
      </Container>
    </>
  );
}
