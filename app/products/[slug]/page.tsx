"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, use } from "react";
import { ShoppingCart, ArrowLeft, Check, Tag, ChevronRight } from "lucide-react";
import { getProductBySlug, getProductsByCategory, Product } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

interface Props {
  params: Promise<{ slug: string }>;
}

function ProductDetail({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const related = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  function handleAddToCart() {
    addItem(product, selectedSize, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-1 text-xs text-gray-500">
            <Link href="/" className="hover:text-[#1a2744] transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/products" className="hover:text-[#1a2744] transition-colors">Products</Link>
            <ChevronRight size={12} />
            <Link href={`/products/${product.categorySlug}`} className="hover:text-[#1a2744] transition-colors">
              {product.category}
            </Link>
            <ChevronRight size={12} />
            <span className="text-[#1a2744] font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link
          href={`/products/${product.categorySlug}`}
          className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-[#1a2744] mb-6 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to {product.category}
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-3xl p-6 sm:p-10 shadow-sm">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
                priority
              />
              {product.onSale && (
                <span className="absolute top-4 left-4 bg-[#f59e0b] text-[#1a2744] text-sm font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <Tag size={14} />
                  ON SALE
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col">
            <p className="text-[#f59e0b] text-sm font-semibold uppercase tracking-wider mb-2">
              {product.category}
            </p>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1a2744] mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-extrabold text-[#1a2744]">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-gray-400 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                  <Check size={15} className="text-[#f59e0b] flex-shrink-0 mt-0.5" />
                  {f}
                </li>
              ))}
            </ul>

            {/* Size Selector */}
            {product.sizes.length > 1 && (
              <div className="mb-6">
                <p className="text-sm font-semibold text-[#1a2744] mb-2">
                  Size: <span className="text-[#f59e0b]">{selectedSize}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold border-2 transition-colors ${
                        selectedSize === size
                          ? "border-[#1a2744] bg-[#1a2744] text-white"
                          : "border-gray-200 text-gray-600 hover:border-[#1a2744]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#1a2744] mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-[#1a2744] transition-colors flex items-center justify-center"
                >
                  −
                </button>
                <span className="w-12 text-center font-bold text-[#1a2744]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-xl border-2 border-gray-200 text-gray-600 font-bold hover:border-[#1a2744] transition-colors flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-base transition-all duration-200 ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-[#1a2744] text-white hover:bg-[#f59e0b] hover:text-[#1a2744]"
                }`}
              >
                <ShoppingCart size={20} />
                {added ? "Added to Cart!" : "Add to Cart"}
              </button>
              <Link
                href="/cart"
                className="px-6 py-4 rounded-xl border-2 border-[#1a2744] text-[#1a2744] font-bold hover:bg-[#1a2744] hover:text-white transition-colors text-center text-base"
              >
                View Cart
              </Link>
            </div>

            <p className="text-xs text-gray-400 mt-4 text-center">
              Secure checkout · Free shipping on orders over $100
            </p>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-[#1a2744] mb-8">
              More from {product.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default function ProductDetailPage({ params }: Props) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return <ProductDetail product={product} />;
}
