import { ReactNode } from "react";
import React from "react";
import Hero from "~/components/home/hero";
import Container from "~/components/common/container";
import HomeContact from "~/components/home/home-contact";

interface HomeLayoutProps {
  children: ReactNode;
  project: ReactNode;
}

export default function HomeLayout({ project, children }: HomeLayoutProps) {
  return (
    <>
      <Hero />
      <Container>
        {children}
        {project}
        <HomeContact />
        {/* {children} */}
      </Container>
    </>
  );
}
