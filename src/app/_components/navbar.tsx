"use client";
import { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="pt-8 px-4 md:px-8">
      <div className="flex justify-between items-center">
        <p className="text-base font-bold">Erfan Kashef</p>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="cursor-pointer">
            <p className="text-base font-medium">
              <span className="text-primary">#</span> Home
            </p>
          </Link>
          <Link href="/projects" className="cursor-pointer">
            <p className="text-base font-medium">
              <span className="text-primary">#</span> Projects
            </p>
          </Link>
          <Link href="/about-me" className="cursor-pointer">
            <p className="text-base font-medium">
              <span className="text-primary">#</span> About
            </p>
          </Link>
          <Link href="#contact" scroll={true} className="cursor-pointer">
            <p className="text-base font-medium">
              <span className="text-primary">#</span> Contact
            </p>
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col items-start gap-4 mt-4 md:hidden">
          <Link
            href="/"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <p className="text-base font-medium">
              <span className="text-primary">#</span> Home
            </p>
          </Link>
          <Link
            href="/projects"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <p className="text-base font-medium">
              <span className="text-primary">#</span> Projects
            </p>
          </Link>
          <Link
            href="/about-me"
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <p className="text-base font-medium">
              <span className="text-primary">#</span> About
            </p>
          </Link>
          <Link
            href="#contact"
            scroll={true}
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <p className="text-base font-medium">
              <span className="text-primary">#</span> Contact
            </p>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
