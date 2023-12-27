"use client";
import { PRODUCT_CATEGORIES } from "@/config";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  activeNavItem: null | string;
  handleActiveNavItems: (str: null | string) => void;
}
const NavItem = ({
  category,
  activeNavItem,
  handleActiveNavItems,
}: NavItemProps) => {
  


  return (
    <div className="flex">
      <div className="relative flex items-center">
        <button
          className={`flex gap-1.5 hover:bg-slate-100 p-1 rounded-md ${
            activeNavItem === category.value && "bg-slate-100"
          }`}
          onClick={() =>
            activeNavItem === category.value
              ? handleActiveNavItems(null)
              : handleActiveNavItems(category.value)
          }
        >
          {category.label}
          <ChevronDown
            className={`${
              activeNavItem === category.value ? "rotate-180" : ""
            }  transition-all ease-in-out delay-300 w-4 text-gray-500`}
          />
        </button>
      </div>

      {activeNavItem === category.value ? (
        <div
          className={`absolute inset-x-0 top-full text-sm text-gray-300 animate-fade-in animate-slide-in-from-topanimate-in`}
        >
          <div
            className="absolute inset-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />
          <div className="relative bg-white">
            <div className="mx-auto max-w-7xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((i) => (
                    <div
                      key={i.name}
                      className="group relative text-base sm:text-sm"
                    >
                      <div className="relative aspect-video overflow-hidden rounded-lg bg-slate-100 group-hover:opacity-75">
                        <Image
                          src={i.imageSrc}
                          alt={i.name}
                          fill={true}
                          className="object-cover object-center"
                        />
                      </div>
                      <Link
                        href={i.href}
                        className="mt-6 block font-medium text-gray-900 "
                      >
                        {i.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Shop now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
