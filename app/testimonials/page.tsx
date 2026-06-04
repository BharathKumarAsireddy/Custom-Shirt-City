import { Metadata } from "next";
import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars";

export const metadata: Metadata = { title: "Testimonials" };

const stats = [
  { value: "5.0", label: "Average Rating", sub: "Based on 200+ reviews" },
  { value: "98%", label: "Satisfaction Rate", sub: "From verified customers" },
  { value: "72hr", label: "Rush Delivery", sub: "On-time guarantee" },
  { value: "50K+", label: "Happy Customers", sub: "And counting" },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <StarsBackground className="py-20 px-4 w-full">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="text-[#f59e0b]" fill="#f59e0b" />
            ))}
          </div>
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">
            Customer Reviews
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            What Our Clients Say
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Thousands of businesses, schools, and organizations have trusted Custom Shirt City for
            premium custom apparel. Here's what they have to say.
          </p>
        </div>
      </StarsBackground>

      {/* Stats */}
      <section className="py-12 bg-[#f59e0b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, sub }) => (
              <div key={label} className="text-center">
                <p className="text-4xl sm:text-5xl font-extrabold text-[#1a2744] mb-1">{value}</p>
                <p className="text-[#1a2744] font-semibold text-sm">{label}</p>
                <p className="text-[#1a2744]/60 text-xs mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Testimonials Grid */}
      <TestimonialsSection />

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#1a2744] mb-4">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-gray-500 mb-8">
            Experience the Custom Shirt City difference — factory-direct quality, fast turnaround,
            and a team that truly cares about your order.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#1a2744] text-white font-bold px-8 py-4 rounded-full hover:bg-[#243560] transition-colors"
            >
              Start Shopping <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-[#1a2744] text-[#1a2744] font-bold px-8 py-4 rounded-full hover:bg-[#1a2744] hover:text-white transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
