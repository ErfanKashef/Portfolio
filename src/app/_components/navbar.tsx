"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="pt-8 px-4 md:px-8">
      <div className="flex justify-between items-center">
        <p className="text-base font-bold">Erfan Kashef</p>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 hover:bg-gray-700 rounded-md transition-colors"
          >
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

      {/* Sidebar Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-background shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b">
            <p className="text-lg font-bold">Menu</p>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
            >
              <IconX size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-6 space-y-6">
            <Link
              href="/"
              className="cursor-pointer group"
              onClick={() => setIsOpen(false)}
            >
              <p className="text-xl font-medium group-hover:text-primary transition-colors">
                <span className="text-primary">#</span> Home
              </p>
            </Link>
            <Link
              href="/projects"
              className="cursor-pointer group"
              onClick={() => setIsOpen(false)}
            >
              <p className="text-xl font-medium group-hover:text-primary transition-colors">
                <span className="text-primary">#</span> Projects
              </p>
            </Link>
            <Link
              href="/about-me"
              className="cursor-pointer group"
              onClick={() => setIsOpen(false)}
            >
              <p className="text-xl font-medium group-hover:text-primary transition-colors">
                <span className="text-primary">#</span> About
              </p>
            </Link>
            <Link
              href="#contact"
              scroll={true}
              className="cursor-pointer group"
              onClick={() => setIsOpen(false)}
            >
              <p className="text-xl font-medium group-hover:text-primary transition-colors">
                <span className="text-primary">#</span> Contact
              </p>
            </Link>
          </div>

          {/* Footer */}
          <div className="p-6 border-t">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Erfan Kashef
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
