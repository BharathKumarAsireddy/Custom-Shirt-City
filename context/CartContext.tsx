"use client";

import React, { createContext, useContext, useReducer, useEffect, useState, useMemo } from "react";
import { Product } from "@/lib/products";

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface CartState {
  items: CartItem[];
}

type CartAction =
  | { type: "LOAD_CART"; payload: CartItem[] }
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { productId: string; size: string } }
  | { type: "UPDATE_QUANTITY"; payload: { productId: string; size: string; quantity: number } }
  | { type: "CLEAR_CART" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "LOAD_CART":
      return {
        items: action.payload.map((item) => ({
          ...item,
          quantity: Math.max(1, Number(item.quantity) || 1),
          product: {
            ...item.product,
            price: Number(item.product.price) || 0,
          },
        })),
      };
    case "ADD_ITEM": {
      const qty = Math.max(1, Number(action.payload.quantity) || 1);
      const idx = state.items.findIndex(
        (i) => i.product.id === action.payload.product.id && i.size === action.payload.size
      );
      if (idx >= 0) {
        const items = [...state.items];
        items[idx] = { ...items[idx], quantity: items[idx].quantity + qty };
        return { items };
      }
      return { items: [...state.items, { ...action.payload, quantity: qty }] };
    }
    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (i) => !(i.product.id === action.payload.productId && i.size === action.payload.size)
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        items: state.items
          .map((i) =>
            i.product.id === action.payload.productId && i.size === action.payload.size
              ? { ...i, quantity: Math.max(0, Number(action.payload.quantity) || 0) }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    case "CLEAR_CART":
      return { items: [] };
    default:
      return state;
  }
}

interface CartContextType {
  items: CartItem[];
  isHydrated: boolean;
  addItem: (product: Product, size: string, quantity?: number) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("csc-cart");
      if (saved) {
        const parsed: CartItem[] = JSON.parse(saved);
        dispatch({ type: "LOAD_CART", payload: parsed });
      }
    } catch {
      // ignore corrupt storage
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem("csc-cart", JSON.stringify(state.items));
    }
  }, [state.items, isHydrated]);

  const addItem = (product: Product, size: string, quantity = 1) =>
    dispatch({ type: "ADD_ITEM", payload: { product, size, quantity } });

  const removeItem = (productId: string, size: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: { productId, size } });

  const updateQuantity = (productId: string, size: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, size, quantity } });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalItems = useMemo(
    () => state.items.reduce((sum, i) => sum + i.quantity, 0),
    [state.items]
  );

  const totalPrice = useMemo(
    () => state.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    [state.items]
  );

  return (
    <CartContext.Provider
      value={{ items: state.items, isHydrated, addItem, removeItem, updateQuantity, clearCart, totalItems, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
