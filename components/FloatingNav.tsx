"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useQRFocus } from "@/lib/QRFocusContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Code of Conduct", href: "/code-of-conduct" },
  {
    label: "Register Now",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScu7YOzdz3O9q9VH8AuUj4vAKdJLjh6tWrbMnaplqSe8H7g0A/viewform",
  },
];

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { qrFocused } = useQRFocus();

  if (qrFocused) return null;

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Full Navbar for large screens */}
      <nav className="hidden lg:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-blue-500/20 bg-[#030615b3] backdrop-blur-lg shadow-md">
          <Link href="/">
            <img
              src="/codefestConly.svg"
              alt="Codefest Logo"
              className="h-8 w-auto"
            />
          </Link>
          {navLinks.map((link) =>
            link.label === "Register Now" ? (
              <a
                key={link.href}
                href={link.href}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#e7e5e4cc] font-medium text-sm px-3 py-1 rounded-md transition-colors hover:text-blue-500"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      </nav>

      {/* Hamburger Menu for small screens */}
      <div className="lg:hidden">
        <button
          onClick={toggleDrawer}
          className="fixed top-6 left-6 z-50 bg-[#030615b3] backdrop-blur-lg p-3 rounded-xl border border-blue-500/20 shadow-md flex items-center justify-center text-stone-300 transition-all"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleDrawer}
        />

        {/* Drawer */}
        <nav
          className={`fixed top-0 left-0 h-screen w-[300px] bg-[#030615f2] backdrop-blur-lg z-50 pt-20 px-6 pb-6 flex flex-col gap-2 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Link href="/">
            <img
              src="/codefestConly.svg"
              alt="Codefest Logo"
              className="h-8 w-auto mb-6"
            />
          </Link>
          {navLinks.map((link) =>
            link.label === "Register Now" ? (
              <a
                key={link.href}
                href={link.href}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold mt-2 px-4 py-3 rounded-xl block w-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleDrawer}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 text-base font-medium px-4 py-3 rounded-xl block w-full transition-colors hover:bg-white/10"
                onClick={toggleDrawer}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </>
  );
}
