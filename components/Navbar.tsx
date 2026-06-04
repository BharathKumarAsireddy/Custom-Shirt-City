"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4">
      {/* Subtle top gradient so logo/cart stay readable on any page bg */}
      <div className="absolute inset-0 h-28 bg-gradient-to-b from-black/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="https://customshirtcity.com/wp-content/uploads/2026/04/logo-120x119.webp"
              alt="Custom Shirt City"
              width={42}
              height={42}
              className="rounded drop-shadow-lg"
              unoptimized
            />
            <span className="text-white font-bold text-sm sm:text-base leading-tight drop-shadow-md">
              Custom Shirt City
            </span>
          </Link>

          {/* Desktop — single pill nav */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-[#111827]/75 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/10 shadow-2xl">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#f59e0b] text-[#1a2744] font-semibold shadow"
                      : "text-gray-200 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Cart + mobile toggle */}
          <div className="flex items-center gap-1">
            <Link
              href="/cart"
              className="relative p-2 text-white hover:text-[#f59e0b] transition-colors drop-shadow"
            >
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#f59e0b] text-[#1a2744] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems > 99 ? "99+" : totalItems}
                </span>
              )}
            </Link>
            <button
              className="lg:hidden p-2 text-white hover:text-[#f59e0b] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden relative mt-2 mx-4 bg-[#111827]/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-xl">
          <nav className="px-3 py-3 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#f59e0b] text-[#1a2744] font-semibold"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
