"use client";
import { Bubble, Building, Sms } from "iconsax-react";
import Link from "next/link";
import { useState } from "react";
import useDebounce from "~/hooks/use-debounce";
import { api } from "~/trpc/react";

export default function DataShow() {
  // state
  const [searchProject, setSearchProject] = useState("");
  const [searchMessage, setSearchMessage] = useState("");

  const debounceSearchProjects = useDebounce(searchProject, 500);
  const debounceSearchMessages = useDebounce(searchMessage, 500);

  // query
  const { data: projects } = api.project.getProjects.useQuery({
    search: debounceSearchProjects,
  });
  const { data: messages } = api.message.getMessages.useQuery({
    search: debounceSearchMessages,
  });
  return (
    <div className="mt-16 grid w-full gap-8 text-white lg:grid-cols-3">
      <Link href="/dashboard/projects">
        <div className="flex aspect-video w-full flex-col rounded-2xl bg-[#284b63]">
          <div className="flex w-full flex-col p-10">
            <span>
              <Building size="40" color="#fafafa" variant="Bold" />
            </span>
            <div className="space-y-2 pt-6">
              <p>Projects Total</p>
              <p className="text-4xl font-semibold">{projects?.length}</p>
            </div>
          </div>
          {/* <div className=" w-full flex px-8">
                <p></p>
              </div> */}
        </div>
      </Link>
      <Link href="/dashboard/messages">
        <div className="flex aspect-video w-full flex-col rounded-2xl bg-[#3c6e71]">
          <div className="flex w-full flex-col p-10">
            <span>
              <Sms size="40" color="#fafafa" variant="Bold" />
            </span>
            <div className="space-y-2 pt-6">
              <p>Messages Total</p>
              <p className="text-4xl font-semibold">{messages?.length}</p>
            </div>
          </div>
          {/* <div className=" w-full flex px-8">
                <p></p>
              </div> */}
        </div>
      </Link>
      <div className="flex aspect-video w-full flex-col rounded-2xl bg-[#353535]">
        <div className="flex w-full flex-col p-10">
          <span>
            <Bubble size="40" color="#fafafa" variant="Bold" />
          </span>
          <div className="space-y-2 pt-6">
            <p>Total</p>
            <p className="text-4xl font-semibold">-</p>
          </div>
        </div>
        {/* <div className=" w-full flex px-8">
                <p></p>
              </div> */}
      </div>
    </div>
  );
}
