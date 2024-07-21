"use client";
import React from "react";
import Link from "next/link";
import { PiArrowCircleDownThin } from "react-icons/pi";
import { Link as LinkRS } from "react-scroll";

export default function Hero() {
  return (
    <>
      <div className="relative z-10 h-[100dvh] w-full bg-[url('/image/hero.jpg')] bg-cover bg-center">
        <div className="absolute -z-10 h-full w-full bg-black bg-opacity-50">
          {/* <Container> */}
          <div className="container relative z-0 mx-auto flex h-full w-full flex-col justify-center px-5 text-white md:flex lg:px-8">
            <div className="grid grid-cols-5">
              <div className="col-span-3 grid">
                <h1 className="text-4xl font-semibold md:text-4xl lg:text-6xl lg:leading-tight">
                  We Help You To Bring Your Dream Building.
                </h1>
                <Link
                  href="/projects"
                  className="mt-4 w-48 rounded-full border border-white bg-transparent px-6 py-4 text-center transition-all duration-200 hover:bg-white hover:text-black"
                >
                  Discover Projects
                </Link>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
              <LinkRS
                to="project"
                spy={true}
                smooth="easeInOutQuart"
                offset={-100}
                duration={2000}
              >
                <PiArrowCircleDownThin
                  className="relative cursor-pointer"
                  size={60}
                />
              </LinkRS>
            </div>
          </div>
          {/* </Container> */}
        </div>
      </div>
    </>
  );
}
