"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (totalItems === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4 py-20">
        <ShoppingBag size={72} className="text-gray-300 mb-6" />
        <h1 className="text-3xl font-bold text-[#1a2744] mb-3">Your Cart is Empty</h1>
        <p className="text-gray-500 mb-8 max-w-sm">
          Looks like you haven't added anything yet. Browse our collection and find something you'll love.
        </p>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-[#1a2744] text-white font-bold px-8 py-4 rounded-full hover:bg-[#f59e0b] hover:text-[#1a2744] transition-colors"
        >
          Shop All Products
          <ArrowRight size={18} />
        </Link>
      </div>
    );
  }

  const shipping = totalPrice >= 100 ? 0 : 9.99;
  const tax = totalPrice * 0.07;
  const orderTotal = totalPrice + shipping + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1a2744] py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Your Cart
          </h1>
          <p className="text-gray-300 mt-1">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="bg-white rounded-2xl p-5 flex gap-5 shadow-sm border border-gray-100"
              >
                {/* Image */}
                <Link href={`/products/${item.product.slug}`} className="relative w-24 h-24 rounded-xl overflow-hidden bg-gray-50 flex-shrink-0">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-xs text-[#f59e0b] font-semibold uppercase tracking-wider mb-0.5">
                        {item.product.category}
                      </p>
                      <Link
                        href={`/products/${item.product.slug}`}
                        className="font-semibold text-[#1a2744] text-sm leading-snug hover:text-[#f59e0b] transition-colors line-clamp-2"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-gray-400 mt-1">Size: {item.size}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id, item.size)}
                      className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0 p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity control */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1a2744] transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#1a2744] transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Line total */}
                    <div className="text-right">
                      <p className="font-bold text-[#1a2744]">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-400">${item.product.price.toFixed(2)} each</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-[#1a2744] font-semibold hover:text-[#f59e0b] transition-colors mt-2"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-[#1a2744] mb-5">Order Summary</h2>

              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Tax (7%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between font-bold text-[#1a2744]">
                  <span>Total</span>
                  <span className="text-lg">${orderTotal.toFixed(2)}</span>
                </div>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-gray-400 mb-4 text-center">
                  Add ${(100 - totalPrice).toFixed(2)} more for free shipping
                </p>
              )}

              <Link
                href="/checkout"
                className="w-full flex items-center justify-center gap-2 bg-[#f59e0b] text-[#1a2744] font-bold py-4 rounded-xl hover:bg-[#fbbf24] transition-colors"
              >
                Proceed to Checkout
                <ArrowRight size={18} />
              </Link>

              <p className="text-xs text-gray-400 text-center mt-4">
                🔒 Secure checkout · Credit card, Apple Pay, Google Pay
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
