import { Bubble, Building, Sms } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { stringify } from "querystring";
import Container from "~/components/common/container";
import Header from "~/components/dashboard/layout/header";
import { englebert } from "~/lib/constant";
import { cn } from "~/lib/utils";
import { Project } from "~/server/db/schema";
import { api } from "~/trpc/react";

interface ProjectItemProps {
  project: Project[];
}

export default function Home({ project }: ProjectItemProps) {
  return (
    <>
      <div className="flex h-full w-full bg-white text-sm">
        <Container>
          <Header />
          <div className="mt-20 flex h-48 w-full items-center rounded-3xl bg-[#a7b4ff]">
            <div className="flex w-full flex-col p-10">
              <h1 className={cn("text-6xl font-black", englebert.className)}>
                Hi, Btari Larasati
              </h1>
              <h2 className="text-base font-semibold">
                Let&apos;s add more project and article to be shown in your
                website!
              </h2>
            </div>
            <div className="relative mr-10 flex h-64 w-full justify-end">
              <div className="relative flex aspect-[6/4] overflow-auto">
                <Image
                  src="/image/dashboard/hero.png"
                  alt=""
                  fill
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="mt-16 grid w-full gap-8 text-white lg:grid-cols-3">
            <Link href="/dashboard/projects">
              <div className="flex aspect-video w-full flex-col rounded-2xl bg-[#284b63]">
                <div className="flex w-full flex-col p-10">
                  <span>
                    <Building size="40" color="#fafafa" variant="Bold" />
                  </span>
                  <div className="space-y-2 pt-6">
                    <p>Projects Total</p>
                    <p className="text-4xl font-semibold">22</p>
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
                    <p className="text-4xl font-semibold">27</p>
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
                  <p className="text-4xl font-semibold">27</p>
                </div>
              </div>
              {/* <div className=" w-full flex px-8">
                <p></p>
              </div> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
