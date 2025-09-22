"use client";

import { useState } from "react";
import { Menu, X, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#E6E6E6]/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 relative">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-14 h-14 flex-shrink-0 overflow-hidden rounded-full">
              <Image
                src="https://i.imgur.com/kofHxWf.png"
                alt="Daniela Bontecou"
                width={56}
                height={56}
                className="object-cover"
              />
            </div>
            <span className="font-medium hidden sm:inline">
              Daniela Bontecou
            </span>
          </Link>

          {/* Desktop navigation - centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="hover:underline underline-offset-4 transition-all">
              Projects
            </Link>
            <Link href="/about" className="hover:underline underline-offset-4 transition-all">
              About
            </Link>
            <Link href="/contact" className="hover:underline underline-offset-4 transition-all">
              Contact
            </Link>
          </nav>

          {/* Right side - LinkedIn icon for desktop, menu button for mobile */}
          <div className="flex items-center gap-4">
            <Link
              href="https://www.linkedin.com/in/daniela-bontecou"
              target="_blank"
              className="hidden md:block hover:opacity-70 transition-opacity"
              aria-label="LinkedIn Profile"
            >
              <div className="text-black font-bold text-2xl">
                in
              </div>
            </Link>

            {/* Mobile menu button */}
            <button
              className="block md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="hover:underline underline-offset-4 py-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="hover:underline underline-offset-4 py-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:underline underline-offset-4 py-2 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="https://www.linkedin.com/in/daniela-bontecou"
                target="_blank"
                className="hover:underline underline-offset-4 py-2 transition-all flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-black font-bold">in</span>
                LinkedIn
              </Link>
            </nav>
          </div>
        )}
      </div>
      <div className="border-b border-gray-100"></div>
    </header>
  );
}
