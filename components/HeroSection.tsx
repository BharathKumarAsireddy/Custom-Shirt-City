import Link from "next/link";
import { ArrowRight, Zap, Shield, Star } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1a2744] -mt-16 lg:-mt-20">
      {/* Background video with overlay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#f59e0b]/20 border border-[#f59e0b]/40 rounded-full px-4 py-1.5 mb-6">
            <Star size={14} className="text-[#f59e0b]" fill="#f59e0b" />
            <span className="text-[#f59e0b] text-sm font-medium">
              West Palm Beach's #1 Custom Apparel
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            High-Quality Custom
            <br />
            <span className="text-[#f59e0b]">Apparel & Merch</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
            Factory-direct pricing with the quality you deserve. Custom screen printing,
            embroidery, and graphic printing for businesses, schools, and organizations since 2012.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#1a2744] font-bold px-8 py-4 rounded-full hover:bg-[#fbbf24] transition-colors text-sm sm:text-base"
            >
              Shop All Products
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#1a2744] transition-colors text-sm sm:text-base"
            >
              Get a Quote
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { icon: Zap, label: "72-Hour Rush", sub: "Fast turnaround" },
              { icon: Shield, label: "Factory Direct", sub: "Best price guarantee" },
              { icon: Star, label: "Since 2012", sub: "Trusted quality" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f59e0b]/20 flex items-center justify-center">
                  <Icon size={18} className="text-[#f59e0b]" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{label}</p>
                  <p className="text-gray-400 text-xs">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <div className="w-0.5 h-8 bg-white/30 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-[#f59e0b]" />
      </div>
    </section>
  );
}
