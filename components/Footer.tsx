import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0d1628] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="https://customshirtcity.com/wp-content/uploads/2026/04/logo-120x119.webp"
                alt="Custom Shirt City"
                width={48}
                height={48}
                className="rounded"
                unoptimized
              />
              <span className="text-white font-bold text-lg leading-tight">
                Custom Shirt City
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Premium custom apparel since 2012. Factory-direct pricing with the quality
              you deserve — for businesses, schools, and organizations.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/customshirt.city?igsh=MWdnazNzeGptMXh6Yw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1a2744] flex items-center justify-center text-gray-400 hover:text-[#f59e0b] hover:bg-[#243560] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1a2744] flex items-center justify-center text-gray-400 hover:text-[#f59e0b] hover:bg-[#243560] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Google"
                className="w-9 h-9 rounded-full bg-[#1a2744] flex items-center justify-center text-gray-400 hover:text-[#f59e0b] hover:bg-[#243560] transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Products
            </h3>
            <ul className="space-y-2">
              {[
                { label: "T-Shirts", href: "/products/t-shirts" },
                { label: "Polos", href: "/products/polos" },
                { label: "Hoodies", href: "/products/hoodies" },
                { label: "Jackets", href: "/products/jackets" },
                { label: "Hats", href: "/products/hats" },
                { label: "Long Sleeves", href: "/products/long-sleeves" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Contact", href: "/contact" },
                { label: "All Products", href: "/products" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-400 hover:text-[#f59e0b] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-gray-400">
                <MapPin size={16} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                <span>4500 Belvedere Rd, Suite G<br />West Palm Beach, FL 33415</span>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Phone size={16} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                <a href="tel:5617189193" className="hover:text-[#f59e0b] transition-colors">
                  561-718-9193
                </a>
              </li>
              <li className="flex gap-3 text-sm text-gray-400">
                <Mail size={16} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:printablelogos@gmail.com"
                  className="hover:text-[#f59e0b] transition-colors lowercase"
                >
                  printablelogos@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-[#1a2744] my-10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Custom Shirt City. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms & Conditions</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Shipping Details</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
