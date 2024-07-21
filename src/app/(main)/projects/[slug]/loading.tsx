import React from "react";
import { Skeleton } from "~/components/ui/skeleton";

export default function LoadingProjectDetail() {
  return (
    <>
      <div className="flex w-full items-center">
        <Skeleton className="h-[760px] w-full" />
        <div className="absolute ml-20 flex flex-col gap-5">
          <Skeleton className="h-16 sm:w-[280px] md:w-[380px] lg:w-[560px]" />
          <Skeleton className="h-16 sm:w-[140px] md:w-[140px] lg:w-[360px]" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-5 sm:w-[270px] md:w-[270px] lg:w-[760px]" />
            <Skeleton className="h-5 sm:w-[270px] md:w-[270px] lg:w-[760px]" />
          </div>
        </div>
      </div>
    </>
  );
}
