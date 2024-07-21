"use client";
import Container from "~/components/common/container";
import Header from "~/components/dashboard/layout/header";
import MessagesTable from "~/components/dashboard/messages/message-table";

export default function MessagesPage() {
  return (
    <>
      <div className="flex h-full w-full bg-white text-sm">
        <Container>
          <Header />
          <div className="flex w-full flex-col pt-8">
            <h1 className="text-lg">Messages From Contact Page</h1>
            <MessagesTable />
          </div>
        </Container>
      </div>
    </>
  );
}
