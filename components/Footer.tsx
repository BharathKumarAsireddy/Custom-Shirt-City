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
              {[
                { label: "IG" },
                { label: "FB" },
                { label: "LI" },
                { label: "X" },
              ].map(({ label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-[#1a2744] flex items-center justify-center text-gray-400 hover:text-[#f59e0b] hover:bg-[#243560] transition-colors text-xs font-bold"
                >
                  {label}
                </a>
              ))}
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
