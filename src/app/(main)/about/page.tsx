import React from "react";
import Image from "next/image";
import Container from "~/components/container";

export default function About() {
  return (
    <>
      <Container>
        <h5 className="pt-40 text-left text-xl">About Ayase Atalier</h5>
        <div className="flex grid w-full grid-cols-1 justify-between gap-x-24 gap-y-6 pb-20 pt-5 lg:grid-cols-2">
          <div className="">
            <h1 className="text-5xl font-bold">Not what you think</h1>
          </div>
          <div className="flex w-full flex-col text-left text-base font-normal sm:text-xl">
            <h1 className="">Ayase Atalier is not just architecture.</h1>
            <h1 className="">Ayase Atalier is not just interior design.</h1>
            <h1 className="">And Ayase Atalier is not just construction.</h1>
            <h1 className="pt-2">
              We are all of the spaces in between, and the possibilities beyond
              all of them.
            </h1>
          </div>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 flex-col gap-x-24 gap-y-5 pb-20 lg:grid-cols-2">
          <div className="relative mx-auto flex aspect-[6/3] w-80 items-center justify-center lg:w-96">
            <Image
              src="/image/brandmark hitam-01.png"
              alt=""
              className="aspect-[6/3] w-full"
              fill
            ></Image>
          </div>
          <div className="flex w-full">
            <p className="text-justify text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex w-full lg:col-start-2">
            <p className="text-justify text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </Container>
      <div className="bg-black text-white">
        <Container>
          <div className="flex w-full items-center justify-center py-14">
            <h1 className="text-center text-5xl font-bold">Our Team</h1>
          </div>
          <div className="flex grid w-full grid-cols-1 items-center justify-between gap-x-20 gap-y-10 lg:grid-cols-2">
            <div>
              <h1 className="text-base font-semibold">Btari Larasati Kirana</h1>
              <span className="align-top text-xs font-normal">Principal</span>
              <p className="text-justify text-base font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="relative flex w-full">
              <Image
                src="/image/about/our-team-01.jpeg"
                alt=""
                width={300}
                height={120}
                className=""
              ></Image>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
