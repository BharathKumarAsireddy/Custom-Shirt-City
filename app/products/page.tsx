import { Metadata } from "next";
import { products, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { StarsBackground } from "@/components/ui/stars";

export const metadata: Metadata = { title: "All Products" };

export default function AllProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <StarsBackground className="py-14 px-4 w-full">
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-2">
            Our Catalog
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            All Products
          </h1>
          <p className="text-gray-300 max-w-xl">
            Browse our full collection of premium custom apparel — T-Shirts, Polos, Hoodies,
            Jackets, Hats, and Long Sleeves. Factory-direct pricing on everything.
          </p>
        </div>
      </StarsBackground>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          <Link
            href="/products"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-[#1a2744] text-white"
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products/${cat.slug}`}
              className="px-5 py-2 rounded-full text-sm font-semibold bg-white text-gray-600 border border-gray-200 hover:bg-[#1a2744] hover:text-white hover:border-[#1a2744] transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Products grouped by category */}
        {categories.map((cat) => {
          const catProducts = products.filter((p) => p.categorySlug === cat.slug);
          return (
            <section key={cat.slug} className="mb-16">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-[#1a2744]">{cat.name}</h2>
                  <p className="text-sm text-gray-500 mt-1">{cat.description}</p>
                </div>
                <Link
                  href={`/products/${cat.slug}`}
                  className="text-sm font-semibold text-[#f59e0b] hover:text-[#d97706] transition-colors whitespace-nowrap"
                >
                  View all →
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <hr className="mt-12 border-gray-200" />
            </section>
          );
        })}
      </div>
    </div>
  );
}
