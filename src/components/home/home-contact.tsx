"use client";
import React from "react";
import Image from "next/image";

export default function HomeContact() {
  return (
    <>
      <h1 className="pt-24 text-center text-5xl font-normal" id="contact">
        anc
      </h1>
      <div className="grid gap-x-10 gap-y-20 px-0 py-10 sm:grid-cols-1 lg:grid-cols-2 lg:px-32 lg:py-20">
        <div className="relative hidden aspect-[7/10] max-w-xs md:block">
          <Image className="" src="/image/contact.jpg" alt="" fill></Image>
        </div>
        <div className="flex flex-col">
          <p className="leading-loose">anc</p>
          <div className="pt-10">
            <label htmlFor="">xyz</label>
            <input
              type="text"
              className="h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="pt-10">
            <label htmlFor="">xyz</label>
            <input
              type="text"
              className="h-10 w-full border-b border-black px-2 py-1 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="justify-start pt-10">
            <button className="flex h-14 w-36 items-center justify-center rounded-full border bg-black py-2 text-white transition-all duration-150 hover:border-stone-800 hover:bg-white hover:text-black">
              <p className="text-center">xyz</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
