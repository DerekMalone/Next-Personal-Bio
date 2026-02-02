"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 p-3 z-50 bg-brand-light/90 dark:bg-brand-dark/90 backdrop-blur-sm shadow-sm border-b border-brand-forest/10 dark:border-brand-teal/10">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            width={64}
            height={64}
            src="/images/personal-logos/personal_logo_light_mode.svg"
            className="h-10 w-auto dark:hidden"
            alt="Derek Malone Logo"
          />
          <Image
            width={64}
            height={64}
            src="/images/personal-logos/personal_logo_dark_mode.svg"
            className="h-10 w-auto hidden dark:block"
            alt="Derek Malone Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <Link href={link.href} legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <span className="uppercase font-semibold">{link.label}</span>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle - Desktop */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <Icon
                icon={theme === "dark" ? "lucide:sun" : "lucide:moon"}
                className="h-5 w-5"
              />
            </Button>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Theme Toggle - Mobile */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <Icon
                icon={theme === "dark" ? "lucide:sun" : "lucide:moon"}
                className="h-5 w-5"
              />
            </Button>
          )}

          {/* Mobile Menu */}
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Icon icon="lucide:menu" className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-brand-light dark:bg-brand-dark">
              <SheetHeader>
                <SheetTitle className="text-brand-dark dark:text-brand-light">
                  Navigation
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setSheetOpen(false)}
                    className="text-lg font-semibold uppercase text-brand-dark dark:text-brand-light hover:text-brand-teal transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
