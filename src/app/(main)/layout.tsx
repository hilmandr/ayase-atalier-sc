"use client";

import { Toaster } from "sonner";
import Providers from "~/components/common/providers";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";

export default function MainLayout({
  children,
  project,
}: {
  children: React.ReactNode;
  project: React.ReactNode;
}) {
  return (
    <Providers>
      <Header />
      <div className="flex min-h-screen w-full flex-col">
        <main className="w-full flex-1">{children}</main>
        <Footer />
        <Toaster />
      </div>
    </Providers>
  );
}
