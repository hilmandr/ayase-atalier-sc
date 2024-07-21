"use client";
import { usePathname } from "next/navigation";
import SideNav from "~/components/dashboard/layout/sidenav";
import { Toaster } from "~/components/ui/sonner";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <div className="flex h-screen min-h-screen w-full">
        <SideNav />
        <main className="flex w-full">{children}</main>
        {/* <Footer /> */}
      </div>
      <Toaster />
    </>
  );
}
