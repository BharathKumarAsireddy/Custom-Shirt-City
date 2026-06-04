import { Metadata } from "next";
import Image from "next/image";
import { getProductsByCategory, getCategoryBySlug } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export const metadata: Metadata = { title: "Hats" };

export default function HatsPage() {
  const cat = getCategoryBySlug("hats")!;
  const items = getProductsByCategory("hats");

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <Image src={cat.image} alt={cat.name} fill className="object-cover" unoptimized />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-8 max-w-7xl mx-auto">
          <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-widest mb-2">Collections</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">{cat.name}</h1>
          <p className="text-gray-300 mt-2 max-w-md">{cat.description}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-sm text-gray-500 mb-8">{items.length} products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
