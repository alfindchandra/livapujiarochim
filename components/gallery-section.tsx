"use client";

import Image from "next/image";
import { useLanguage } from "./contexts/LanguageContext";

const images = [
  { src: "/image/1.jpg", alt: "Image 1" },
  { src: "/image/2.jpg", alt: "Image 2" },
  { src: "/image/3.jpg", alt: "Image 3" },
  { src: "/image/4.jpg", alt: "Image 4" },
];

export default function GallerySection() {
  const { language } = useLanguage();

  const translations = {
    title: {
      id: "Galeri",
      en: "Gallery",
    },
    description: {
      id: "Berikut beberapa kegiatan saya aktif dalam organisasi dan perkuliahan.",
      en: "Here are some of my active activities in organizations and studies.",
    },
  };
  return (
    <section id="gallery" className="py-20 bg-muted/10">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {translations.title[language]}
        </h2>
        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          {translations.description[language]}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl shadow-lg group relative"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={500}
                height={200}
                className=" group-hover:scale-105 transition-transform duration-300 inset-0 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
