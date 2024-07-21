"use client";

import { useState } from "react";

import { Eye } from "iconsax-react";
import { Input } from "~/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Message } from "~/server/db/schema";
import { api } from "~/trpc/react";
import useDebounce from "~/hooks/use-debounce";
import { useSearchParams } from "next/navigation";
import BasePagination from "~/components/common/base-pagination";

export default function MessagesTable() {
  // state
  const [searchMessage, setSearchMessage] = useState("");

  const debounceSearch = useDebounce(searchMessage, 500);

  // query
  const { data: messages, refetch } = api.message.getMessages.useQuery({
    search: debounceSearch,
  });

  // pagination
  const searchParams = useSearchParams();
  const search = searchParams.get("search") as string;
  const page = Number(searchParams.get("page")) || 1;

  return (
    <>
      <div className="my-5 flex w-80">
        <Input
          type="text"
          placeholder="Search Sender Name..."
          value={searchMessage}
          onChange={(e) => setSearchMessage(e.target.value)}
        />
      </div>
      <div className="overflow-hidden rounded-xl border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>View</TableHead>
            </TableRow>
          </TableHeader>
          {messages?.length === 0 ? (
            <>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    There is nothing to show. Please add some project.
                  </TableCell>
                </TableRow>
              </TableFooter>
            </>
          ) : (
            <>
              {messages?.slice((page - 1) * 10, page * 10).map((message, i) => (
                <>
                  <TableBody>
                    <TableRow>
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{message.name}</TableCell>
                      <TableCell>{message.email}</TableCell>
                      <TableCell>{message.message}</TableCell>
                      <TableCell>{format(message.time, "PPP")}</TableCell>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger>
                            <Eye size="26" color="#223DEE" variant="Bulk" />
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                Message from {message.name}
                              </DialogTitle>
                              <DialogDescription className="mt-4 text-black">
                                <div className="grid grid-cols-2">
                                  <div className="flex flex-col">
                                    <p>Sender&#39;s Name</p>
                                    <p>Email</p>

                                    <p>Time</p>
                                  </div>
                                  <div className="flex flex-col">
                                    <p>: {message.name}</p>
                                    <p>: {message.email}</p>

                                    <p>: {format(message.time, "PPpp")}</p>
                                  </div>
                                </div>
                                <div className="mt-4 flex w-full flex-col">
                                  <div className="flex w-full rounded-lg border">
                                    <p className="p-3">{message.message}</p>
                                  </div>
                                </div>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </>
              ))}
            </>
          )}
        </Table>
        <div className="mt-4 flex w-full">
          <BasePagination totalCount={messages?.length} />
        </div>
      </div>
    </>
  );
}
