"use client";

import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Lock, CheckCircle } from "lucide-react";

interface Props {
  totalPrice: number;
  onSuccess: () => void;
}

export default function CheckoutForm({ totalPrice, onSuccess }: Props) {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;

    setProcessing(true);
    setErrorMsg(null);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setErrorMsg(error.message ?? "Payment failed. Please try again.");
      setProcessing(false);
    } else {
      onSuccess();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-gray-50 rounded-2xl p-5">
        <PaymentElement
          options={{
            layout: "tabs",
          }}
        />
      </div>

      {errorMsg && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full flex items-center justify-center gap-2 bg-[#f59e0b] text-[#1a2744] font-bold py-4 rounded-xl hover:bg-[#fbbf24] transition-colors disabled:opacity-60 text-base"
      >
        {processing ? (
          <span className="w-5 h-5 border-2 border-[#1a2744] border-t-transparent rounded-full animate-spin" />
        ) : (
          <Lock size={18} />
        )}
        {processing ? "Processing..." : `Pay $${totalPrice.toFixed(2)}`}
      </button>

      <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
        <span className="flex items-center gap-1">
          <Lock size={11} /> SSL Secured
        </span>
        <span>·</span>
        <span>Powered by Stripe</span>
        <span>·</span>
        <span>Apple Pay & Google Pay accepted</span>
      </div>
    </form>
  );
}

interface SuccessProps {
  onContinue: () => void;
}

export function OrderSuccess({ onContinue }: SuccessProps) {
  return (
    <div className="text-center py-10">
      <CheckCircle size={72} className="text-green-500 mx-auto mb-5" />
      <h3 className="text-2xl font-extrabold text-[#1a2744] mb-2">Order Confirmed!</h3>
      <p className="text-gray-500 mb-8 max-w-sm mx-auto">
        Thank you for your purchase! You'll receive a confirmation email shortly. Our team will begin
        processing your custom order right away.
      </p>
      <button
        onClick={onContinue}
        className="inline-flex items-center gap-2 bg-[#1a2744] text-white font-bold px-8 py-4 rounded-full hover:bg-[#243560] transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
}
