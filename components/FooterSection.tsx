"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  MapPin,
  ArrowRight,
  Heart,
  Github,
  Twitter,
  LayersIcon,
  PersonStanding,
  Database,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "./contexts/LanguageContext";

// Teks dalam dua bahasa
const translations = {
  id: {
    navigation: "Navigasi",
    home: "Beranda",
    about: "Tentang",
    portfolio: "Galeri",
    contact: "Kontak",
    socialMedia: "Media Sosial",
    followMe: "Ikuti saya di media sosial",
    quickContact: "Kontak Cepat",
    newsletter: "Newsletter",
    newsletterDesc: "Dapatkan update terbaru dan tips dari saya",
    emailPlaceholder: "Masukkan email Anda",
    subscribe: "Berlangganan",
    subscribing: "Berlangganan...",
    subscribeSuccess: "Terima kasih! Anda berhasil berlangganan.",
    footerBottom: "Dibuat dengan",
    footerBottomEnd: "oleh",
    allRights: "Hak Cipta Dilindungi",
    recentWork: "Karya Terbaru",
    viewAll: "Lihat Semua",
    mySkills: "Keahlian Saya",
    microsoft: "Microsoft Office",
    communication: "Komunikasi",
    dataanal: "Analisis Data",
  },
  en: {
    navigation: "Navigation",
    home: "Home",
    about: "About",
    portfolio: "Gallery",
    contact: "Contact",
    socialMedia: "Social Media",
    followMe: "Follow me on social media",
    quickContact: "Quick Contact",
    newsletter: "Newsletter",
    newsletterDesc: "Get latest updates and tips from me",
    emailPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    subscribing: "Subscribing...",
    subscribeSuccess: "Thank you! You have successfully subscribed.",
    footerBottom: "Made with",
    footerBottomEnd: "by",
    allRights: "All Rights Reserved",
    recentWork: "Recent Work",
    viewAll: "View All",
    mySkills: "My Skills",
    microsoft: "Microsoft Office",
    communication: "Communication",
    dataanal: "Data Analysis",
  },
};

// Animasi konfigurasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

export default function FooterSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  const navigationLinks = [
    { name: t.home, href: "#home" },
    { name: t.about, href: "#about" },
    { name: t.portfolio, href: "#gallery" },
    { name: t.contact, href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/rochim123_real",
      name: "Instagram",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/Liva.puji.arochim",
      name: "Facebook",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/livapujiarochim",
      name: "LinkedIn",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://twitter.com/livapujiarochim",
      name: "Twitter",
    },
  ];

  const skills = [
    { icon: <LayersIcon className="w-4 h-4" />, label: t.microsoft },
    { icon: <PersonStanding className="w-4 h-4" />, label: t.communication },
    { icon: <Database className="w-4 h-4" />, label: t.dataanal },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      value: "livapujiarochim@gmail.com",
      href: "mailto:livapujiarochim@gmail.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      value: "+62 822-4462-1417",
      href: "https://wa.me/6282244621417",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      value: "Jawa Timur, Indonesia",
      href: null,
    },
  ];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);

    // Simulasi API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubscribing(false);
    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 5000);
  };

  return (
    <footer className="bg-muted/30 text-white relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Footer Content */}
      <motion.div
        className="container mx-auto px-4 pt-16 pb-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Liva Puji Arochim
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {language === "id"
                  ? "Seorang lulusan manajemen yang memiliki pengalaman dalam organisasi dan magang di bidang teknik."
                  : "A passionate management graduate with experience in organizational leadership and technical internships."}
              </p>
            </div>

            {/* Quick Contact */}
            <div>
              <h4 className="text-lg font-semibold mb-4">{t.quickContact}</h4>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-gray-800 rounded-lg">
                      {info.icon}
                    </div>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-gray-400 text-sm">
                        {info.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">{t.navigation}</h4>
            <nav className="space-y-3">
              {navigationLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors group flex items-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Skills & Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">{t.mySkills}</h4>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors">
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            {/* Social Media */}
            <div className="mt-0">
              <h4 className="text-lg font-semibold mb-4">{t.socialMedia}</h4>
              <p className="text-gray-400 text-sm mb-4">{t.followMe}</p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 hover:bg-primary/20 rounded-lg transition-all hover:scale-110"
                    whileHover={{ y: -3 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              className="flex items-center gap-2 text-gray-400"
              variants={itemVariants}
            >
              <span>
                © {currentYear} Liva Puji Arochim. {t.allRights}.
              </span>
            </motion.div>

            <motion.div
              className="flex items-center gap-1 text-gray-400"
              variants={itemVariants}
            >
              <span>{t.footerBottom}</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>{t.footerBottomEnd}</span>
              <span className="text-primary font-semibold">
                Liva Puji Arochim
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating decoration */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2" />
    </footer>
  );
}
