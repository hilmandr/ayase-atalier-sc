"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import React from "react";

interface ProjectContentProps {
  content: MDXRemoteSerializeResult;
}

export default function MDXContent({ content }: ProjectContentProps) {
  return (
    <div className=" justify-center text-justify prose prose-stone max-w-full prose-sm mt-10 lg:text-lg text-base leading-relaxed pb-10">
      <MDXRemote {...content} />
    </div>
  );
}
