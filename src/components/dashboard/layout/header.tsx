"use client";
import { format } from "date-fns";
import { signOut } from "next-auth/react";
import { RxCaretDown } from "react-icons/rx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function Header() {
  return (
    <>
      <div className="flex w-full items-center justify-between pt-5">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold">DASHBOARD</h1>
          <p>{format(new Date(), "iiii, dd MMM yyyy")}</p>
        </div>
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex w-full items-center">
              <div className="flex h-10 w-10 items-center justify-center bg-black">
                <h1 className="text-white">BL</h1>
              </div>
              <RxCaretDown size={20} />
            </DropdownMenuTrigger>
            <DropdownMenuContent side={"bottom"}>
              <DropdownMenuLabel>Btari Larasati</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => signOut()}
                className="cursor-pointer"
              >
                Log Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
}
