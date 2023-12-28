"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CartImage from "../../../public/hippo-empty-cart.png";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { formatPrice } from "@/lib/utils";

interface CartItem {
  name: string;
  price: number;
}
//{name: "dd", price: 12}
const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([{ name: "dd", price: 12 }]);
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
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden={true}
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"

        />
        <span className='ml-2 text-sm font-medium text-gray-600 group-hover:text-gray-800'>
          {isMounted ? cartItems.length : 0}
        </span>
      </SheetTrigger>
      <SheetContent className='flex w-full flex-col pr-0 sm:max-w-lg'>
        <SheetHeader className='space-y-2.5 pr-6'>
          <SheetTitle>Cart ({cartItems.length})</SheetTitle>
        </SheetHeader>
        {
          cartItems.length < 0 ? (
            <>
              {/* <div className='flex w-full flex-col pr-6'>
                <ScrollArea>
                  {items.map(({ product }) => (
                    <CartItem
                      product={product}
                      key={product.id}
                    />
                  ))}
                </ScrollArea>
              </div> */}
              <div className='space-y-4 pr-6'>
                <Separator />
                <div className='space-y-1.5 text-sm'>
                  <div className='flex'>
                    <span className='flex-1'>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className='flex'>
                    <span className='flex-1'>
                      Transaction Fee
                    </span>
                    <span>{formatPrice(cartItems.length + 1)}</span>
                  </div>
                  <div className='flex'>
                    <span className='flex-1'>Total</span>
                    <span>
                      {formatPrice(cartItems.length)}
                    </span>
                  </div>
                </div>

                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                      href='/cart'
                      className={buttonVariants({
                        className: 'w-full',
                      })}>
                      Continue to Checkout
                    </Link>
                  </SheetTrigger>
                </SheetFooter>
              </div>
            </>
          ) : (
            <div className='flex h-full flex-col items-center justify-center space-y-1'>
              <div
                aria-hidden='true'
                className='relative mb-4 h-60 w-60 text-muted-foreground'>
                <Image
                  src='/hippo-empty-cart.png'
                  fill
                  alt='empty shopping cart hippo'
                />
              </div>
              <div className='text-xl font-semibold'>
                Your cart is empty
              </div>
              <SheetTrigger asChild>
                <Link
                  href='/products'
                  className={buttonVariants({
                    variant: 'link',
                    size: 'sm',
                    className:
                      'text-sm text-muted-foreground',
                  })}>
                  Add items to your cart to checkout
                </Link>
              </SheetTrigger>
            </div>
          )
        }
      </SheetContent>

    </Sheet >
  );
};

export default Cart;
