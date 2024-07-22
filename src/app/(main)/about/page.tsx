import React from "react";
import Image from "next/image";
import Container from "~/components/common/container";

export default function About() {
  return (
    <>
      <Container>
        <h5 className="pt-32 text-left text-xl">About Ayase Atalier</h5>
        <div className="grid w-full grid-cols-1 justify-between gap-x-24 gap-y-6 pb-20 pt-5 lg:grid-cols-2">
          <div className="">
            <h1 className="text-5xl font-bold">Not what you think</h1>
          </div>
          <div className="flex w-full flex-col text-left text-base font-normal sm:text-xl">
            <h1 className="">Ayase Atalier is not just architecture.</h1>
            <h1 className="">Ayase Atalier is not just interior design.</h1>
            <h1 className="">And Ayase Atalier is not just construction.</h1>
            <h1 className="pt-2">
              We are all of the spaces in between, and the possibilities beyond
              all of them.
            </h1>
          </div>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 flex-col gap-x-24 gap-y-5 pb-20 lg:grid-cols-2">
          <div className="relative mx-auto flex aspect-[6/3] w-80 items-center justify-center lg:w-96">
            <Image
              src="/image/brandmark hitam-01.png"
              alt=""
              className="aspect-[6/3] w-full"
              fill
            ></Image>
          </div>
          <div className="flex w-full">
            <p className="text-justify text-base">
              Ayase Atelier is a distinguished architecture and interior design
              firm renowned for its unwavering commitment to professionalism and
              excellence. With a team of seasoned architects and gifted interior
              designers, the firm excels in transforming clients visions into
              breathtaking and practical realities. Every project undertaken by
              Ayase Atelier is characterized by a blend of innovative thinking,
              aesthetic sophistication, and meticulous attention to detail. The
              firm&#39;s dedication to maintaining the highest standards of
              quality ensures that each design not only meets but exceeds the
              expectations of their discerning clientele.
            </p>
          </div>
          <div className="flex w-full lg:col-start-2">
            <p className="text-justify text-base">
              Client satisfaction is at the heart of Ayase Atelier&#39;s ethos,
              with a tailored approach that honors the unique needs and
              personalities of each client. The firm is also deeply committed to
              sustainability, integrating eco-friendly practices and materials
              into their projects to promote environmental responsibility. This
              dual focus on individual client needs and broader ecological
              impact makes Ayase Atelier a leader in the industry. Whether
              crafting luxurious residential spaces or dynamic commercial
              environments, Ayase Atelier stands out as the premier choice for
              those seeking refined and sophisticated design solutions.
            </p>
          </div>
        </div>
      </Container>
      <div className="bg-black px-10 text-white lg:px-32">
        <Container>
          <div className="flex w-full items-center justify-center py-14">
            <h1 className="text-center text-5xl font-bold">Our Team</h1>
          </div>
          <div className="grid w-full items-center justify-between gap-x-20 lg:grid-cols-2 lg:gap-y-10">
            <div className="w-full lg:max-w-xl">
              <h1 className="text-base font-semibold">Btari Larasati Kirana</h1>
              <span className="align-top text-xs font-normal">Principal</span>
              <p className="text-justify text-base font-normal">
                Leads her architecture and interior design firm with an
                unwavering commitment to professionalism and excellence. Under
                her visionary leadership, Ayase Atelier has become synonymous
                with innovative and sophisticated design solutions. Btari&#39;s
                keen eye for detail and her dedication to quality ensure that
                every project not only meets but exceeds client expectations.
                Her ability to harmoniously blend aesthetics with functionality,
                while incorporating sustainable practices, has positioned Ayase
                Atelier as a premier choice in the industry for those seeking
                elegant and bespoke designs.
              </p>
            </div>
            <div className="relative mt-10 flex aspect-[1/1] w-full lg:mt-0">
              <Image
                src="/image/about/our-team-01.jpeg"
                alt=""
                width={300}
                height={120}
                className="h-full w-full object-cover object-center"
              ></Image>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
