import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Zap, Heart, Award } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars";

export const metadata: Metadata = { title: "About Us" };

const team = [
  {
    name: "Amanda Lee",
    role: "Creative Head",
    initials: "AL",
    bio: "Amanda leads all creative direction, ensuring every custom design exceeds client expectations with artistic precision.",
  },
  {
    name: "Lee Stoner",
    role: "Marketing Head",
    initials: "LS",
    bio: "Lee drives our brand strategy and client relationships, connecting businesses with the perfect custom apparel solutions.",
  },
  {
    name: "Monica Gala",
    role: "Graphic Designer",
    initials: "MG",
    bio: "Monica brings client visions to life with stunning graphic designs that translate beautifully onto any garment.",
  },
];

const values = [
  {
    icon: Zap,
    title: "Fast City Turnaround",
    desc: "Speed is in our DNA. Our optimized workflows ensure your order arrives on time — every time. 72-hour rush orders are a specialty.",
  },
  {
    icon: Award,
    title: "Factory-Direct Quality",
    desc: "We operate our own West Palm Beach facility, giving you direct control, transparency, and the best price-to-quality ratio in the industry.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    desc: "Custom apparel serves real purposes — family reunions, corporate events, school pride. We treat every order as an opportunity to bring people together.",
  },
  {
    icon: Target,
    title: "Excellence in Every Stitch",
    desc: "From screen printing to embroidery, our craftsmanship meets the highest standards. We inspect every order before it leaves our doors.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <StarsBackground className="py-20 px-4 w-full">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-3">
            Our Story
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            About Custom Shirt City
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Since 2012, we've been the trusted partner for businesses, schools, and organizations
            who demand factory-direct pricing with the quality they deserve.
          </p>
        </div>
      </StarsBackground>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#f59e0b] font-semibold text-sm uppercase tracking-widest mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl font-extrabold text-[#1a2744] mb-6">
                A Trusted Name in Custom Apparel
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Custom Shirt City was founded in 2012 with a simple mission: give every business,
                school, and organization access to the same factory-direct pricing that large
                corporations enjoy — without sacrificing quality or speed.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Operating from our West Palm Beach facility, we combine the ease of a world-class
                online store with the accountability of a local brick-and-mortar business. Our
                clients can walk in, see their order in progress, and speak directly with the people
                crafting it.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From small team uniforms to bulk corporate orders of thousands of pieces, we handle
                every project with the same level of care and precision. Our specialties include
                custom screen printing, professional embroidery, and digital graphic printing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1a2744] text-white font-semibold px-8 py-3.5 rounded-full hover:bg-[#243560] transition-colors"
              >
                Get in Touch
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2012", label: "Year Founded" },
                { value: "50K+", label: "Orders Delivered" },
                { value: "5★", label: "Average Rating" },
                { value: "72hr", label: "Rush Turnaround" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-[#1a2744] rounded-2xl p-8 text-center">
                  <p className="text-4xl font-extrabold text-[#f59e0b] mb-2">{value}</p>
                  <p className="text-sm text-gray-300 font-medium">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <StarsBackground className="py-20 w-full">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f59e0b] font-semibold text-sm uppercase tracking-widest mb-2">
              What Drives Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Our Core Values
            </h2>
            <hr className="section-divider max-w-xs mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-[#243560] rounded-2xl p-6 border border-[#2d4070]">
                <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/15 flex items-center justify-center mb-4">
                  <Icon size={22} className="text-[#f59e0b]" />
                </div>
                <h3 className="font-bold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        </StarsBackground>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#f59e0b] font-semibold text-sm uppercase tracking-widest mb-2">
              The People Behind the Brand
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a2744] mb-4">
              Meet Our Team
            </h2>
            <hr className="section-divider max-w-xs mx-auto" />
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="w-20 h-20 rounded-full bg-[#1a2744] flex items-center justify-center text-[#f59e0b] text-2xl font-bold mx-auto mb-4">
                  {member.initials}
                </div>
                <h3 className="font-bold text-[#1a2744] text-lg">{member.name}</h3>
                <p className="text-[#f59e0b] text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <StarsBackground className="py-16 w-full">
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-300 mb-8">
              Join thousands of satisfied clients who trust Custom Shirt City for all their custom
              apparel needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#1a2744] font-bold px-8 py-4 rounded-full hover:bg-[#fbbf24] transition-colors"
              >
                Shop Now <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-[#1a2744] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </StarsBackground>
      </section>
    </div>
  );
}
