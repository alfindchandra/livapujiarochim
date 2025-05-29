"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, Globe, X, MessageSquareText } from "lucide-react";
import { useLanguage } from "./contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type NavItem = {
  label: {
    id: string;
    en: string;
  };
  href: string;
};

const navItems: NavItem[] = [
  {
    label: {
      id: "Beranda",
      en: "Home",
    },
    href: "/",
  },
  {
    label: {
      id: "Tentang",
      en: "About",
    },
    href: "#about",
  },
  {
    label: {
      id: "Galeri",
      en: "Gallery",
    },
    href: "#gallery",
  },
  {
    label: {
      id: "Kontak",
      en: "Contact",
    },
    href: "#contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!mounted) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-2 mx-10">
          <span className="text-xl font-bold">Liva Puji Arochim</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {language === "id" ? item.label.id : item.label.en}
            </Link>
          ))}
        </div>

        {/* Actions (Language, Theme, Contact) */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Ganti Bahasa</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toggleLanguage()}>
                <span className={language === "id" ? "font-bold" : ""}>
                  Indonesia
                </span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage()}>
                <span className={language === "en" ? "font-bold" : ""}>
                  English
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Contact Button */}
          <Link href="https://wa.me/+6282244621417?text=Halo,%20Saya%20ingin%20bertanya%20tentang%20anda">
            <Button className="gap-1">
              <MessageSquareText className="h-5 w-5 " />
              {language === "id" ? "Hubungi" : "Contact"}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-background md:hidden">
            <div className="container flex h-16 items-center justify-between pl-7">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold">Liva Puji Arochim</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <div className="container pt-5 grid gap-6 pb-8 bg-background px-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium"
                  onClick={toggleMenu}
                >
                  {language === "id" ? item.label.id : item.label.en}
                </Link>
              ))}
              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {language === "id" ? "Bahasa" : "Language"}
                  </span>
                  <Button variant="outline" onClick={toggleLanguage}>
                    {language === "id" ? "English" : "Indonesia"}
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {language === "id" ? "Tema" : "Theme"}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? (
                      <>
                        <Sun className="mr-2 h-4 w-4" />
                        {language === "id" ? "Terang" : "Light"}
                      </>
                    ) : (
                      <>
                        <Moon className="mr-2 h-4 w-4" />
                        {language === "id" ? "Gelap" : "Dark"}
                      </>
                    )}
                  </Button>
                </div>
                <Button className="mt-4">
                  {language === "id" ? "Kontak" : "Contact"}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
