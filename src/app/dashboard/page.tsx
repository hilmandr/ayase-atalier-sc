import { Bubble, Building, Sms } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { stringify } from "querystring";
import { useState } from "react";
import Container from "~/components/common/container";
import Header from "~/components/dashboard/layout/header";
import DataShow from "~/components/dashboard/show-data";
import useDebounce from "~/hooks/use-debounce";
import { englebert } from "~/lib/constant";
import { cn } from "~/lib/utils";
import { Project } from "~/server/db/schema";
import { api } from "~/trpc/react";

export default function Home() {
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
          <DataShow />
        </Container>
      </div>
    </>
  );
}
