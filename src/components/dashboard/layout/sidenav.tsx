import Link from "next/link";

import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import { MENU_DASHBOARD } from "~/lib/constant";
import { LogoHitam } from "~/components/common/logo";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <>
      <div className="z-20 flex min-h-screen w-[20%] flex-col overflow-hidden bg-slate-50">
        <div className="flex h-24 w-full items-center justify-center">
          <LogoHitam />
        </div>
        <div className="flex flex-col gap-2 py-4 pr-4 text-stone-900">
          {MENU_DASHBOARD.map((menu, i) => (
            <div className="" key={i}>
              <Link href={menu.path} className="text-sm text-white">
                <div
                  className={cn(
                    "flex w-full transform items-center gap-6 rounded-r-full bg-slate-50 p-5 pl-8 text-slate-900 transition-all duration-300 hover:bg-[#162479] hover:text-slate-50",
                    {
                      "bg-[#162479] text-slate-50":
                        pathname.split("/")[2] == menu.path.split("/")[2],
                    },
                  )}
                >
                  <menu.icon size={25} variant="Bold" />
                  <h2>{menu.label}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
