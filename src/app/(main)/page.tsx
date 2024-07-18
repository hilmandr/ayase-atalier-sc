import Image from "next/image";
import Container from "~/components/container";
import Hero from "~/components/home/hero";
import HomeProject from "~/components/home/home-project";
import HomeContact from "~/components/home/home-contact";
import { Project } from "~/server/db/schema";

interface ProjectItem2Props {
  project: Project[];
}

export default async function Home({ project }: ProjectItem2Props) {
  return (
    <>
      <Hero />
      <Container>
        <div className="flex w-full flex-col items-center justify-between gap-4 bg-white py-28 lg:flex-row lg:gap-10">
          <div className="relative h-[312px] w-full">
            <Image
              src="/image/projects/ksm/ksm-01.jpeg"
              alt=""
              fill
              className="object-cover object-center"
            ></Image>
          </div>
          <div className="max-w-lg text-black">
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <HomeProject project={[]} />
        <HomeContact />
      </Container>
    </>
  );
}
