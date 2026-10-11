"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about-me", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setIsOpen(false);
    };

    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <nav className="px-4 pt-8 md:px-8">
      <div className="flex items-center justify-between">
        <p className="text-base font-bold">Erfan Kashef</p>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className="rounded-md p-2 transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current md:hidden"
            >
              <IconMenu2 size={28} aria-hidden="true" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            showCloseButton={false}
            className="gap-0 border-gray-primary bg-background text-foreground data-[side=left]:w-[min(85vw,22rem)] md:hidden"
          >
            <SheetHeader className="flex-row items-center justify-between border-b border-gray-primary p-6">
              <div>
                <SheetTitle className="text-lg font-bold text-foreground">
                  Menu
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigate the portfolio
                </SheetDescription>
              </div>
              <SheetClose asChild>
                <button
                  type="button"
                  aria-label="Close menu"
                  className="rounded-md p-2 transition-colors hover:bg-foreground/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                >
                  <IconX size={24} aria-hidden="true" />
                </button>
              </SheetClose>
            </SheetHeader>

            <div className="flex flex-1 flex-col justify-center gap-6 px-6">
              {links.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.href}
                    className="group text-xl font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
                  >
                    <span className="text-primary">#</span> {item.label}
                  </Link>
                </SheetClose>
              ))}
            </div>

            <div className="border-t border-gray-primary p-6 text-center text-sm text-gray-primary">
              © 2024 Erfan Kashef
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden gap-8 md:flex">
          {links.map((item) => (
            <Link key={item.label} href={item.href} className="cursor-pointer">
              <p className="text-base font-medium">
                <span className="text-primary">#</span> {item.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
