"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 flex-shrink-0 overflow-hidden rounded-full">
              <Image
                src="/DB_logo.png"
                alt="Daniela Bontecou"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="font-medium hidden sm:inline">
              Daniela Bontecou
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            className="block md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="hover:text-gray-600">
              Work
            </Link>
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/resume" className="hover:text-gray-600">
              Resume
            </Link>
            <Link href="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-4">
              <Link
                href=""
                className="hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className="hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/resume"
                className="hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </Link>
              <Link
                href="/contact"
                className="hover:text-gray-600 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
      <div className="border-b border-gray-100"></div>
    </header>
  );
}
