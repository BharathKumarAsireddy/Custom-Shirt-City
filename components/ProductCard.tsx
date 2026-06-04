"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Tag } from "lucide-react";
import { Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  function handleQuickAdd() {
    const defaultSize = product.sizes[2] ?? product.sizes[0];
    addItem(product, defaultSize, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="product-card bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="relative block overflow-hidden aspect-square bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          unoptimized
        />
        {product.onSale && (
          <span className="absolute top-3 left-3 bg-[#f59e0b] text-[#1a2744] text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Tag size={10} />
            SALE
          </span>
        )}
      </Link>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs text-[#f59e0b] font-semibold uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="text-sm font-semibold text-gray-800 hover:text-[#1a2744] transition-colors line-clamp-2 leading-snug mb-2"
        >
          {product.name}
        </Link>

        <div className="flex items-center gap-2 mb-4 mt-auto">
          <span className="text-lg font-bold text-[#1a2744]">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
          {product.originalPrice && (
            <span className="text-xs text-green-600 font-semibold">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          )}
        </div>

        <button
          onClick={handleQuickAdd}
          className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 ${
            added
              ? "bg-green-500 text-white"
              : "bg-[#1a2744] text-white hover:bg-[#f59e0b] hover:text-[#1a2744]"
          }`}
        >
          <ShoppingCart size={15} />
          {added ? "Added!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}
