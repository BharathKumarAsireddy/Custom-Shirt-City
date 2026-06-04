import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Custom Shirt City — Premium Custom Apparel in West Palm Beach",
    template: "%s | Custom Shirt City",
  },
  description:
    "Premium custom screen printing, embroidery, and graphic printing on T-shirts, Polos, Hoodies, Jackets, Hats, and Long Sleeves. Factory-direct pricing since 2012.",
  keywords: [
    "custom shirts",
    "screen printing",
    "embroidery",
    "custom apparel",
    "West Palm Beach",
    "bulk order",
    "custom hoodies",
    "custom polos",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main className="pt-16 lg:pt-20">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
