"use client";

import { useState } from "react";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import GallerySection from "@/components/gallery-section";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Page = () => {
  const [language, toggleLanguage] = useState<"id" | "en">("id");

  const handleLanguageChange = () => {
    toggleLanguage(language === "id" ? "en" : "id");
  };

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
      <FooterSection />
      <button onClick={handleLanguageChange}>Change Language</button>
    </main>
  );
};

export default Page;
