"use client";

import Footer from "~/components/footer";
import Header from "~/components/header";
import { usePathname } from "next/navigation";
import Providers from "~/components/providers";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <Providers>
      <Header />
      <div className="flex min-h-screen w-full flex-col">
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </div>
    </Providers>
  );
}
