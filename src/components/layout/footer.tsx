import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../common/container";
import { MENU } from "~/lib/constant";

const Footer = () => {
  return (
    <>
      <div className="flex w-full items-center overflow-hidden bg-black text-base text-white">
        {/* <div className=" relative -right-[100px] sm:-right-[600px]">
          <p className=" flex w-full font-normal text-[120pt] opacity-20 whitespace-nowrap absolute select-none">
            Ayase Atalier
          </p>
        </div> */}
        <Container>
          <div className="flex w-full gap-10 py-14">
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold tracking-widest">SITE MAP</h1>
              {MENU.map((menu, i) => (
                <Link href={menu.path} className="" key={i}>
                  {menu.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-semibold tracking-widest">CONTACT</h1>
              <p className="font-light">+62 812 3456 7890</p>
              <p className="font-light">ayaseatalier@gmail.com</p>
              <Link href="">
                <h1 className="font-semibold tracking-widest">INSTAGRAM</h1>
              </Link>
            </div>
          </div>
          <div className="flex w-full items-center justify-between pb-5">
            <p className="font-light">
              Copyright &copy; ayaseatalier.com 2023.
            </p>

            <div className="">
              <div className="flex h-10 w-20">
                <Link href="/" className="relative w-full">
                  <Image
                    src="/image/logogram putih-01.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
