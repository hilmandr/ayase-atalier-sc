import React from "react";
import Link from "next/link";
import Image from "next/image";

export function LogoPutih() {
  return (
    <>
      <Link href="/">
        <Image
          src="/image/brandmark putih-01.png"
          alt=""
          width={100}
          height={100}
          className=" cursor-pointer"
        ></Image>
      </Link>
    </>
  );
}
export function LogoHitam() {
  return (
    <>
      <Link href="/">
        <Image
          src="/image/brandmark hitam-01.png"
          alt=""
          width={100}
          height={100}
          className=" cursor-pointer"
        ></Image>
      </Link>
    </>
  );
}
