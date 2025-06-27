import { ChevronRight } from "feather-icons-react";
import Link from "next/link";

export default function notFound() {
  return (
    <main className="max-w-2xl flex flex-col mx-auto min-h-screen">
      <nav className="px-8 py-12 sticky top-0 bg-white/80 backdrop-blur-md">
        <Link href="/" className="font-semibold">
          Sawyer Bivens Photography
        </Link>
        <p className="text-sm">Sherwood, AR</p>
      </nav>
      <section className="px-8 flex flex-col gap-12 flex-1 pb-[140px]">
        <header className="flex flex-col gap-12 my-auto">
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl md:text-4xl font-bold text-center">
              Page not found
            </h1>
            <p className="text-sm text-center">
              If you think this is an error, please send me an email at{" "}
              <a href="mailto:sawyerbivens.com">sawyerbivens06@gmail.com</a>
            </p>
          </div>
          <Link
            href="/"
            className="group bg-black rounded-sm p-4 text-white cursor-pointer flex items-center flex-row gap-2 font-semibold justify-center"
          >
            <span>Home</span>
            <ChevronRight className="text-white h-4 w-4 group-hover:ml-1 duration-200" />
          </Link>
        </header>
      </section>
    </main>
  );
}
