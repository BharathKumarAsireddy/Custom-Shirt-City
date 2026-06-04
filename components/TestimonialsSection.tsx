import { Star, Quote } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Event Coordinator",
    text: "Custom Shirt City delivered 200 shirts in 72 hours for our corporate event. The quality was outstanding and every shirt looked exactly as designed. Absolutely blown away by the turnaround!",
    rating: 5,
    initials: "MT",
  },
  {
    name: "Sarah M.",
    role: "School Spirit Club Director",
    text: "We ordered custom hoodies for our entire school and the factory-direct pricing saved us thousands compared to other vendors. The embroidery was crisp and the fabric quality is premium.",
    rating: 5,
    initials: "SM",
  },
  {
    name: "James R.",
    role: "Small Business Owner",
    text: "I've tried a dozen custom apparel companies. Custom Shirt City is in a different league — their West Palm Beach facility lets you see your order firsthand. Real people, real quality.",
    rating: 5,
    initials: "JR",
  },
  {
    name: "Priya K.",
    role: "Non-Profit Director",
    text: "From the design consultation to delivery, everything was seamless. Our awareness campaign shirts turned heads at every event. We'll never go anywhere else.",
    rating: 5,
    initials: "PK",
  },
  {
    name: "Derek L.",
    role: "Sports Team Manager",
    text: "Ordered 50 performance polos for our team. The Dri-FIT fabric held up beautifully through the whole season. Great pricing, great service, fast shipping.",
    rating: 5,
    initials: "DL",
  },
  {
    name: "Amanda C.",
    role: "Marketing Manager",
    text: "Custom Shirt City's online ordering is so easy, and the results are professional-grade. The hats we ordered for our trade show booth got more compliments than anything else we brought!",
    rating: 5,
    initials: "AC",
  },
  {
    name: "Kevin B.",
    role: "HR Director",
    text: "We outfitted 300 employees with branded shirts for our company retreat. Flawless execution from start to finish. Our team looked cohesive and professional — everyone loved them.",
    rating: 5,
    initials: "KB",
  },
  {
    name: "Lisa N.",
    role: "University Club President",
    text: "Best prices we've ever found on custom hoodies, and the quality is top-notch. The colors were vibrant and held up after dozens of washes. We re-order every semester.",
    rating: 5,
    initials: "LN",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="bg-[#243560] rounded-2xl p-6 flex flex-col gap-4 hover:bg-[#2d4070] transition-colors w-80 flex-shrink-0">
      <Quote size={28} className="text-[#f59e0b] opacity-60" />
      <p className="text-gray-200 text-sm leading-relaxed flex-1">"{t.text}"</p>
      <div className="flex gap-0.5">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-[#f59e0b]" fill="#f59e0b" />
        ))}
      </div>
      <div className="flex items-center gap-3 pt-2 border-t border-[#1a2744]">
        <div className="w-10 h-10 rounded-full bg-[#f59e0b] flex items-center justify-center text-[#1a2744] font-bold text-sm flex-shrink-0">
          {t.initials}
        </div>
        <div>
          <p className="text-white font-semibold text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden" id="testimonials">
      <StarsBackground className="py-20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center">
            <p className="text-[#f59e0b] font-semibold text-sm uppercase tracking-widest mb-2">
              What Our Customers Say
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Loved by Thousands
            </h2>
            <hr className="section-divider max-w-xs mx-auto" />
          </div>
        </div>

        <div className="marquee-wrapper">
          <div className="marquee-track gap-6 px-6">
            {doubled.map((t, i) => (
              <div key={i} className="px-3">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div>
      </StarsBackground>
    </section>
  );
}
