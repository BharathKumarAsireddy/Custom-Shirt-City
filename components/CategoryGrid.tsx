import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/products";
import { StarsBackground } from "@/components/ui/stars";

export default function CategoryGrid() {
  return (
    <section>
      <StarsBackground className="py-20 w-full">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#f59e0b] font-semibold text-sm uppercase tracking-widest mb-2">
            Browse by Category
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Shop Our Collections
          </h2>
          <hr className="section-divider max-w-xs mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                unoptimized
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744]/90 via-[#1a2744]/30 to-transparent" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white font-bold text-sm sm:text-base leading-tight">
                  {cat.name}
                </p>
                <div className="flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-[#f59e0b] text-xs font-medium">Shop now</span>
                  <ArrowRight size={12} className="text-[#f59e0b]" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-[#f59e0b] text-[#1a2744] font-semibold px-8 py-3.5 rounded-full hover:bg-[#fbbf24] transition-colors"
          >
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
      </StarsBackground>
    </section>
  );
}
