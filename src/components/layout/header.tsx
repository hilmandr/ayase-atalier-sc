"use client";
import React, { useMemo } from "react";
import Link from "next/link";
import Container from "../common/container";
import { useState } from "react";
import { cn } from "~/lib/utils";
import { LogoPutih, LogoHitam } from "../common/logo";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { MENU } from "~/lib/constant";
import { usePathname } from "next/navigation";
import { useScrollPosition } from "~/hooks/use-scroll-position";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  // Hooks
  const pathname = usePathname();
  const actualPathName = useMemo<string>(() => {
    const arrPathname = pathname.split("/");
    arrPathname.splice(0, 1);
    return `/${arrPathname.join("/")}`;
  }, [pathname]);
  const scrollPosition = useScrollPosition();

  // State
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuVars: Variants = {
    initial: {
      scaleX: 0,
    },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars: Variants = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.5,
        type: "linear",
        ease: [0.76, 0, 0.24, 1],
      },
    },
    open: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.7,
        type: "linear",
        delay: 0.5 + i * 0.1,
        ease: [0.215, 0.61, 0.355, 1],
        opacity: { duration: 0.5 },
      },
    }),
  };
  const navVars: Variants = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <div
        className={cn(
          "fixed z-50 w-full transform items-center bg-transparent text-white transition-all duration-500",
          {
            "transform bg-black transition-all duration-500":
              actualPathName !== "/",
          },
          {
            "transform bg-black transition-all duration-500":
              scrollPosition > 100,
          },
        )}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={menuVars}
              className="fixed right-0 z-[49] flex h-screen w-full origin-right items-center justify-center bg-white lg:w-[480px]"
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="absolute left-0 top-0 px-4 py-4 sm:px-12 md:px-24 lg:hidden">
                <LogoHitam />
              </div>
              <motion.div
                variants={navVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col gap-4"
              >
                {MENU.map((menu, i) => (
                  <div className="overflow-hidden" key={i}>
                    <motion.div variants={mobileLinkVars}>
                      <Link
                        href={menu.path}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={cn(
                          "perspective-origin-bottom-left perspective-200 group relative text-[36px] font-semibold leading-tight text-black",
                        )}
                      >
                        {menu.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex flex-1">
              <LogoPutih />
            </div>
            <div className="relative flex cursor-pointer flex-row items-center gap-3">
              <button
                className={cn(
                  "z-50 flex h-12 w-12 cursor-pointer flex-col items-center justify-center rounded-full border border-stone-900 bg-white",
                )}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={cn(
                    "relative m-auto block h-[2px] w-[40%] transform bg-black transition-all duration-200",
                    {
                      "top-[4px] rotate-45 transform transition-all duration-200":
                        isOpen,
                    },
                  )}
                ></div>
                <div
                  className={cn(
                    "relative m-auto -mt-4 block h-[2px] w-[40%] transform bg-black transition-all duration-200",
                    {
                      "-top-[1px] -rotate-45 transform transition-all duration-200":
                        isOpen,
                    },
                  )}
                ></div>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
