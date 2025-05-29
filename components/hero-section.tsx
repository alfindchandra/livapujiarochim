"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./contexts/LanguageContext";
import Link from "next/link";

export default function HeroSection() {
  const { language } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const translations = {
    greeting: {
      id: "Halo, Saya",
      en: "Hello, I'm",
    },
    role: {
      id: "Lulusan Manajemen & Profesional",
      en: "Management Graduate & Professional",
    },
    description: {
      id: "Lulusan S1 Manajemen dengan pengalaman dalam kepemimpinan organisasi dan magang di bidang teknik.",
      en: "Management graduate with experience in organizational leadership and technical internships.",
    },
    downloadCV: {
      id: "Unduh CV",
      en: "Download CV",
    },
    contactMe: {
      id: "Hubungi Saya",
      en: "Contact Me",
    },
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Abstract Background Elements */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      {/* Dots Pattern */}
      <div className="absolute top-20 right-10 hidden h-48 w-48 opacity-20 lg:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-primary" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-20 left-10 hidden h-48 w-48 opacity-20 lg:block">
        <div className="grid grid-cols-6 gap-2">
          {[...Array(36)].map((_, i) => (
            <div key={i} className="h-2 w-2 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="flex flex-col items-center md:px-15 px-0 gap-12 lg:flex-row lg:gap-16">
          {/* Image */}
          <div className="relative flex-shrink-0">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 md:h-80 md:w-80">
              <Image
                src="/liva.jpg"
                alt="Liva Puji Arochim"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-primary/20 md:-bottom-4 md:-right-4 md:h-32 md:w-32" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-lg font-medium text-primary md:text-xl">
              {translations.greeting[language]}
            </p>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl lg:text-6xl">
              Liva Puji Arochim
            </h1>
            <p className="mt-3 text-xl font-medium text-muted-foreground md:text-2xl">
              {translations.role[language]}
            </p>
            <p className="mt-6 max-w-2xl text-muted-foreground">
              {translations.description[language]}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link href="">
                <Button className="gap-2">
                  <Download className="h-4 w-4" />
                  {translations.downloadCV[language]}
                </Button>
              </Link>
              <Link href="mailto:alfindwichandrautbjn@gmail.com">
                <Button variant="outline" className="gap-2">
                  <Mail className="h-4 w-4" />
                  {translations.contactMe[language]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
