"use client";

import { ContactForm } from "@/components/contact-form";
import { Nav } from "@/components/nav";
import { Warning } from "@/components/warning";
import { ChevronLeft } from "feather-icons-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="flex flex-col lg:flex-row min-h-screen">
      <Nav active="/contact" />
      <div className="flex-1 p-12 max-w-lg w-full m-auto pb-[189px] lg:pb-12 flex flex-col gap-4 items-center justify-center">
        <ContactForm />
        <Warning expires={new Date(1751605200 * 1000)}>
          <p>
            I may take longer than usual to respond during the week of Jun
            30th-Jul 4th. I will respond to any messages as soon as possible.
          </p>
          <p className="mt-2">Thank you for your understanding.</p>
        </Warning>
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
