import React from "react";

import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-between gap-4 bg-white py-28 lg:flex-row lg:gap-10">
        <div className="relative h-[312px] w-full">
          <Image
            src="/image/projects/CMC Room/375899388_644602734318477_6722222323585571905_n.jpg"
            alt=""
            fill
            className="h-full w-full object-cover object-center"
          ></Image>
        </div>
        <div className="max-w-lg text-black">
          <p className="text-justify">
            Combining innovation, aesthetics, and meticulous attention to
            detail, the firm ensures that every creation not only meets the
            highest quality standards but also reflects the unique personality
            and needs of each client. Their dedication to client satisfaction
            and commitment to environmental sustainability form the foundation
            of every project, making Ayase Atelier the premier choice for those
            seeking elegant and sophisticated design.
          </p>
        </div>
      </div>
    </>
  );
}
