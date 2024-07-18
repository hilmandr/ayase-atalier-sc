"use client";

import LenisScroll from "./lennis-scroll";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <LenisScroll>{children}</LenisScroll>;
}
