import { IMenu, IMenuDashboard } from "@/types";
import { Mulish, Englebert } from "next/font/google";
import { Building3, Messages1, NoteText, Category2 } from "iconsax-react";

export const mulish = Mulish({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
export const englebert = Englebert({
  subsets: ["latin"],
  weight: "400",
});

export const MENU: IMenu[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Works",
    path: "/projects",
  },
  {
    label: "Contact",
    path: "/#contact",
  },
];

export const MENU_DASHBOARD: IMenuDashboard[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: Category2,
  },
  {
    label: "Projects",
    path: "/dashboard/projects",
    icon: Building3,
  },
  {
    label: "Articles",
    path: "/dashboard/articles",
    icon: NoteText,
  },
  {
    label: "Messages",
    path: "/dashboard/messages",
    icon: Messages1,
  },
];
