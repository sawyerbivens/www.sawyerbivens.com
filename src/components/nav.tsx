"use client";

import Link, { type LinkProps } from "next/link";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Link as LinkIcon,
  Mail,
  Menu,
  X,
} from "feather-icons-react";
import { cn } from "@/app/lib/cn";
import { useMenu } from "@/app/context/hamburger-menu";

interface SidebarLinkProps extends LinkProps {
  className?: string;
  children?: React.ReactNode;
  active?: boolean;
  icon?: React.ReactNode;
  target?: "_blank";
}
function SidebarLink(props: SidebarLinkProps) {
  const { icon, className, active, children, ...linkProps } = props;
  return (
    <Link
      className={cn(
        "border border-transparent duration-200 p-2 hover:bg-gray-100 rounded-sm flex flex-row gap-2 items-center cursor-pointer",
        active && "border-black hover:bg-transparent",
        className,
      )}
      {...linkProps}
    >
      {icon ? icon : <LinkIcon className="h-4 w-4" />}
      {children}
    </Link>
  );
}

export function Nav({ active }: { active?: string }) {
  const { menuIsOpen, toggleMenu } = useMenu();
  const [showAlbums, setShowAlbums] = useState(true);

  useEffect(() => {
    if (menuIsOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [menuIsOpen]);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 lg:left-0 lg:bottom-0 bg-white/80 backdrop-blur-lg lg:w-[299px] lg:border-r z-50 lg:h-screen",
          menuIsOpen &&
            "sticky lg:bottom-auto lg:border-r-0 lg:w-full lg:right-0 bg-white backdrop-blur-lg lg:h-[141px]",
        )}
      >
        <header
          className={cn(
            "p-12 border-b flex lg:flex-col gap-4 z-50 w-full",
            menuIsOpen && "lg:flex-row",
          )}
        >
          <div className="flex flex-col flex-1">
            <h3 className="font-semibold">Sawyer Bivens Photography</h3>
            <p className="text-sm">Sherwood, AR</p>
          </div>
          <Link
            href="/contact"
            className={cn(
              "hidden lg:flex bg-black text-white p-2 cursor-pointer rounded-sm text-center flex-row items-center gap-2 justify-center hover:shadow-sm shadow-black/50 hover:shadow-black/50 duration-200 font-semibold",
              menuIsOpen && "hidden lg:hidden",
            )}
          >
            <Mail className="h-4 w-4" />
            <span>Contact Me</span>
          </Link>
          <button
            className={cn(
              "p-1 lg:hidden cursor-pointer",
              menuIsOpen && "lg:flex",
            )}
            onClick={() => toggleMenu()}
          >
            <Menu className={cn("h-6 w-6", menuIsOpen && "hidden")} />
            <X className={cn("h-6 w-6", !menuIsOpen && "hidden")} />
          </button>
        </header>
        <div
          className={cn(
            "px-12 py-8 hidden lg:flex flex-col gap-2",
            menuIsOpen && "lg:hidden",
          )}
        >
          <button
            className="duration-200 p-2 hover:bg-gray-100 rounded-sm flex flex-row gap-2 items-center cursor-pointer"
            onClick={() => setShowAlbums((prev) => !prev)}
          >
            <ChevronDown
              className={cn("h-4 w-4 duration-200", showAlbums && "rotate-180")}
            />
            <p>Albums</p>
          </button>
          <div
            className={cn("ml-8 flex flex-col gap-2", !showAlbums && "hidden")}
          >
            <SidebarLink href="/" active={active === "/"}>
              All Photos
            </SidebarLink>
            <SidebarLink href="/albums/35mm" active={active === "/albums/35mm"}>
              35mm Film
            </SidebarLink>
            <SidebarLink
              href="/albums/portraits"
              active={active === "/albums/portraits"}
            >
              Portraits
            </SidebarLink>
            <SidebarLink
              href="/albums/landscapes"
              active={active === "/albums/landscapes"}
            >
              Landscapes
            </SidebarLink>
            <SidebarLink
              href="/albums/restaraunts"
              active={active === "/albums/restaraunts"}
            >
              Restaraunts
            </SidebarLink>
            <SidebarLink
              href="/albums/architecture"
              active={active === "/albums/architecture"}
            >
              Architecture
            </SidebarLink>
          </div>
          <SidebarLink
            href="https://www.facebook.com/profile.php?id=61577675495117"
            target="_blank"
            icon={<Facebook className="h-4 w-4" />}
          >
            My Facebook
          </SidebarLink>
          <SidebarLink
            href="https://www.instagram.com/sawyerbiv.photo"
            target="_blank"
            icon={<Instagram className="h-4 w-4" />}
          >
            My Instagram
          </SidebarLink>
        </div>
      </nav>
      {menuIsOpen && (
        <div className="flex flex-col inset-0 fixed top-0 left-0 right-0 bottom-0 p-12 pt-[189px] z-40 bg-white overflow-y-scroll">
          <div className="flex flex-col gap-2 max-w-lg mx-auto w-full">
            <Link
              href="/contact"
              className="bg-black text-white p-4 cursor-pointer mb-10 rounded-sm text-center flex flex-row items-center gap-2 justify-center hover:shadow-sm shadow-black/50 hover:shadow-black/50 duration-200 font-semibold"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </Link>
            <SidebarLink href="/" active={active === "/"} className="p-4">
              All Photos
            </SidebarLink>
            <SidebarLink
              href="/albums/35mm"
              active={active === "/albums/35mm"}
              className="p-4"
            >
              35mm Film
            </SidebarLink>
            <SidebarLink
              href="/albums/portraits"
              active={active === "/albums/portraits"}
              className="p-4"
            >
              Portraits
            </SidebarLink>
            <SidebarLink
              href="/albums/landscapes"
              active={active === "/albums/landscapes"}
              className="p-4"
            >
              Landscapes
            </SidebarLink>
            <SidebarLink
              href="/albums/restaraunts"
              active={active === "/albums/restaraunts"}
              className="p-4"
            >
              Restaraunts
            </SidebarLink>
            <SidebarLink
              href="/albums/architecture"
              active={active === "/albums/architecture"}
              className="p-4"
            >
              Architecture
            </SidebarLink>
            <SidebarLink
              href="https://www.facebook.com/profile.php?id=61577675495117"
              className="p-4"
              target="_blank"
              icon={<Facebook className="h-4 w-4" />}
            >
              My Facebook
            </SidebarLink>
            <SidebarLink
              href="https://www.instagram.com/sawyerbiv.photo"
              className="p-4"
              target="_blank"
              icon={<Instagram className="h-4 w-4" />}
            >
              My Instagram
            </SidebarLink>
          </div>
        </div>
      )}
    </>
  );
}
