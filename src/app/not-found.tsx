"use client";

import { Nav } from "@/components/nav";
import { ChevronLeft } from "feather-icons-react";
import Link from "next/link";
import { useMenu } from "./context/hamburger-menu";
import { cn } from "../lib/cn";

export default function NotFound() {
  const { menuIsOpen } = useMenu();

  return (
    <main
      className={cn(
        "flex flex-col lg:flex-row min-h-screen",
        menuIsOpen && "lg:flex-col",
      )}
    >
      <Nav active="/contact" />
      <div className="flex-1 p-12 max-w-lg w-full m-auto pb-[189px] lg:pb-12 flex flex-col gap-4 items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Page not found
        </h1>
        <p className="text-sm text-center">
          If you think this is an error, please send me an email at{" "}
          <a
            href="mailto:sawyerbivens.com"
            className="underline cursor-pointer"
          >
            sawyerbivens06@gmail.com
          </a>
        </p>
        <Link
          className="bg-black text-white p-2 cursor-pointer rounded-sm text-center flex flex-row items-center gap-2 justify-center hover:shadow-sm shadow-black/50 hover:shadow-black/50 duration-200 font-semibold w-full"
          href="/"
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Back to All Photos</span>
        </Link>
      </div>
    </main>
  );
}
