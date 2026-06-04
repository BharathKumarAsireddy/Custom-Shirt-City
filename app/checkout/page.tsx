"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useCart } from "@/context/CartContext";
import CheckoutForm, { OrderSuccess } from "@/components/CheckoutForm";
import Image from "next/image";
import Link from "next/link";
import { Lock, ShoppingBag } from "lucide-react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function CheckoutPage() {
  const router = useRouter();
  const { items, totalPrice, totalItems, clearCart } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [orderComplete, setOrderComplete] = useState(false);

  const shipping = totalPrice >= 100 ? 0 : 9.99;
  const tax = totalPrice * 0.07;
  const orderTotal = totalPrice + shipping + tax;

  useEffect(() => {
    if (totalItems === 0) return;

    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: orderTotal }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError("Could not initialize payment. Please try again.");
        }
      })
      .catch(() => setError("Network error. Please refresh and try again."));
  }, [totalItems, orderTotal]);

  function handleSuccess() {
    clearCart();
    setOrderComplete(true);
  }

  if (totalItems === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4">
        <ShoppingBag size={64} className="text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-[#1a2744] mb-2">Your cart is empty</h1>
        <p className="text-gray-500 mb-6">Add some items before checking out.</p>
        <Link
          href="/products"
          className="bg-[#1a2744] text-white font-bold px-8 py-3.5 rounded-full hover:bg-[#243560] transition-colors"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl shadow-sm p-10 w-full max-w-md">
          <OrderSuccess onContinue={() => router.push("/products")} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1a2744] py-12 px-4">
        <div className="max-w-7xl mx-auto flex items-center gap-3">
          <Lock size={20} className="text-[#f59e0b]" />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Secure Checkout</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#1a2744] mb-6">Payment Details</h2>
              <p className="text-sm text-gray-500 mb-6">
                We accept credit cards, debit cards, Apple Pay, and Google Pay — all secured by Stripe.
              </p>

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 mb-6">
                  {error}
                </div>
              )}

              {clientSecret ? (
                <Elements
                  stripe={stripePromise}
                  options={{
                    clientSecret,
                    appearance: {
                      theme: "stripe",
                      variables: {
                        colorPrimary: "#1a2744",
                        colorText: "#1f2937",
                        borderRadius: "12px",
                        fontFamily: "system-ui, sans-serif",
                      },
                    },
                  }}
                >
                  <CheckoutForm totalPrice={orderTotal} onSuccess={handleSuccess} />
                </Elements>
              ) : !error ? (
                <div className="flex flex-col items-center justify-center py-12 gap-3">
                  <div className="w-8 h-8 border-3 border-[#1a2744] border-t-transparent rounded-full animate-spin" />
                  <p className="text-sm text-gray-400">Preparing secure payment...</p>
                </div>
              ) : null}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 sticky top-24">
              <h2 className="text-lg font-bold text-[#1a2744] mb-5">Order Summary</h2>

              {/* Items */}
              <div className="space-y-3 mb-5 max-h-64 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.product.id}-${item.size}`} className="flex gap-3">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                      <Image
                        src={item.product.image}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-[#1a2744] line-clamp-1">
                        {item.product.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        Size: {item.size} · Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="text-sm font-bold text-[#1a2744] flex-shrink-0">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <hr className="border-gray-100 mb-4" />

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (7%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <hr className="border-gray-100" />
                <div className="flex justify-between font-extrabold text-[#1a2744] text-base">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-100">
                <Link
                  href="/cart"
                  className="text-xs text-gray-400 hover:text-[#1a2744] transition-colors"
                >
                  ← Edit cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
