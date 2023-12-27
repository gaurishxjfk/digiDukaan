"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useRef, useState } from "react";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { useOnClickEsc } from "@/hooks/useOnClickEsc";

const NavItems = () => {
  const [activeNavItem, setActiveNavItem] = useState<null | string>(null);

  const handleActiveNavItems = (value: null | string) =>
    setActiveNavItem(value);

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => handleActiveNavItems(null));
  useOnClickEsc(() => handleActiveNavItems(null))
  
  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category) => (
        <NavItem
          category={category}
          key={category.value}
          activeNavItem={activeNavItem}
          handleActiveNavItems={handleActiveNavItems}
        />
      ))}
    </div>
  );
};

export default NavItems;
