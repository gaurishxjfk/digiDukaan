"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CartImage from "../../../public/hippo-empty-cart.png";

interface CartItem {
  name: string;
  price: number;
}
//{name: "dd", price: 12}
const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const addToCart = (item: CartItem) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };
  return (
    <>
    {/*  inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 */}
      <div className="fixed inset-0 h-full w-full top-0 z-50 right-0 bg-white/30	backdrop-blur-sm "></div>
      <div className="bg-white absolute h-screen top-0 z-50 right-0 shadow-xl w-full md:w-[50%] lg:w-[40%] xl:w-[30%]">
        <div className="mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Shopping Cart
          </h1>
          {cartItems.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div
                aria-hidden="true"
                className="relative mb-4 h-40 w-40 text-muted-foreground"
              >
                <Image
                  src={CartImage}
                  fill
                  loading="eager"
                  alt="empty shopping cart hippo"
                />
              </div>
              <h3 className="font-semibold text-2xl">Your cart is empty</h3>
              <p className="text-muted-foreground text-center">
                Whoops! Nothing to show here yet.
              </p>
            </div>
          ) : (
            <ul className="space-y-2">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b py-2"
                >
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold">{item.name}</span>
                    <span className="text-gray-500">
                      (${item.price.toFixed(2)})
                    </span>
                  </div>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
          {cartItems.length > 0 && (
            <div className="mt-4">
              <p className="text-lg font-semibold">
                Total: ${calculateTotal().toFixed(2)}
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-700">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
