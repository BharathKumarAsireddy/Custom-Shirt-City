import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/lib/products";
import Link from "next/link";
import { ArrowRight, Truck, RefreshCw, Headphones, Award } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars";

export const metadata: Metadata = {
  title: "Custom Shirt City — Premium Custom Apparel in West Palm Beach",
};

const perks = [
  { icon: Truck, title: "72-Hour Rush Orders", desc: "Need it fast? We deliver." },
  { icon: Award, title: "Factory-Direct Quality", desc: "Best price, best quality guaranteed." },
  { icon: Headphones, title: "Expert Support", desc: "Our team guides you every step." },
  { icon: RefreshCw, title: "Easy Reorders", desc: "Your designs saved on file." },
];

export default function HomePage() {
  const featured = getFeaturedProducts(8);

  return (
    <>
      <HeroSection />

      {/* Perks Bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1a2744]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-[#1a2744]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a2744]">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <CategoryGrid />

      {/* Featured / Sale Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f59e0b] font-semibold text-sm uppercase tracking-widest mb-2">
              Limited Time Offers
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744] mb-4">
              Featured Sale Items
            </h2>
            <hr className="section-divider max-w-xs mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 border-2 border-[#1a2744] text-[#1a2744] font-semibold px-8 py-3.5 rounded-full hover:bg-[#1a2744] hover:text-white transition-colors"
            >
              Browse All Products
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section>
        <StarsBackground className="py-20 w-full">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#f59e0b] font-semibold text-sm uppercase tracking-widest mb-3">
                About Us
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                West Palm Beach's Premier
                <br />
                Custom Apparel Company
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Since 2012, Custom Shirt City has been the trusted choice for businesses, schools,
                and organizations who demand factory-direct pricing without sacrificing quality. Our
                West Palm Beach facility gives you direct access to your order — because real people
                deserve real accountability.
              </p>
              <p className="text-gray-300 leading-relaxed mb-8">
                From corporate uniforms to event merchandise, we combine the ease of a world-class
                online store with the soul of a local brick-and-mortar operation.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#1a2744] font-semibold px-8 py-3.5 rounded-full hover:bg-[#fbbf24] transition-colors"
              >
                Learn Our Story
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "12+", label: "Years in Business" },
                { value: "50K+", label: "Orders Fulfilled" },
                { value: "5★", label: "Customer Rating" },
                { value: "72hr", label: "Rush Turnaround" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#243560] rounded-2xl p-6 text-center">
                  <p className="text-3xl font-extrabold text-[#f59e0b] mb-1">{value}</p>
                  <p className="text-sm text-gray-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </StarsBackground>
      </section>

      {/* Testimonials Preview */}
      <TestimonialsSection />

      {/* CTA Banner */}
      <section>
        <StarsBackground className="py-20 w-full">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <p className="text-[#f59e0b] font-semibold text-sm uppercase tracking-widest mb-3">
              Get Started Today
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Get factory-direct pricing on all your custom apparel needs. No minimum order required.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#1a2744] font-bold px-8 py-4 rounded-full hover:bg-[#fbbf24] transition-colors"
              >
                Start Shopping
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-[#1a2744] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </StarsBackground>
      </section>
    </>
  );
}
