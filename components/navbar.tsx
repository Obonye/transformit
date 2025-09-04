"use client";

import React, { useState } from "react";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { Avatar } from "@heroui/avatar";

import ContactUsModal from "./contact-us-modal";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    
    // Handle external routes (start with /)
    if (href.startsWith('/') && !href.startsWith('/#')) {
      window.location.href = href;
      return;
    }
    
    // Handle anchor links (for smooth scrolling)
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Logo Section */}
      <NavbarContent className="basis-1/5 md:basis-1/4">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <Avatar className="p-2 bg-black" src="/Asset 8@4x.png" />
            <p className="font-bold text-inherit">TransformIT</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Centered Navigation */}
      <NavbarContent
        className="hidden md:flex basis-1/2 justify-center"
        justify="center"
      >
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer",
              )}
              color="foreground"
              href={item.href}
              //onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right Side Content */}
      <NavbarContent className="hidden md:flex basis-1/4" justify="end">
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <ContactUsModal />
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {siteConfig.navMenuItems.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className={clsx(
                linkStyles({ color: "foreground" }),
                "w-full text-lg cursor-pointer",
              )}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <ContactUsModal />
        </NavbarMenuItem>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
