import Header from "~/components/dashboard/header";
import Container from "~/components/container";
import InputProject from "~/components/dashboard/input-project";
import Link from "next/link";
import { RxCaretRight } from "react-icons/rx";

export default function InputProjectPage() {
  return (
    <>
      <div className="flex h-full w-full bg-white text-sm">
        <Container>
          <Header />
          <div className="flex w-full flex-col pt-8">
            <div className="flex w-full items-center">
              <Link href="">
                <p className="font-bold">Dashboard</p>
              </Link>
              <RxCaretRight />
              <Link href="/dashboard/projects">
                <p className="font-bold">Projects</p>
              </Link>
              <RxCaretRight />
              <p>Input Project</p>
            </div>
            <InputProject />
          </div>
        </Container>
      </div>
    </>
  );
}
