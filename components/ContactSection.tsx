"use client";

import { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Instagram,
  Facebook,
  Linkedin,
  Send,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "./contexts/LanguageContext";
import { motion } from "framer-motion";

// Teks dalam dua bahasa
const translations = {
  id: {
    contactMe: "Hubungi Saya",
    subtitle: "Dengan senang hati akan merespon pesan Anda",
    name: "Nama Lengkap",
    email: "Alamat Email",
    message: "Tulis Pesan Anda",
    sendViaWhatsApp: "Kirim via WhatsApp",
    sendMessage: "Kirim Pesan",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    facebook: "Facebook",
    emaill: "Email",
    linkedin: "LinkedIn",
    location: "Lokasi",
    locationValue: "Bojonegoro, Jawa Timur",

    formTitle: "Ada yang ingin ditanyakan?",
    formSubtitle: "Isi formulir di bawah jika anda tertarik kepada saya",
    sending: "Mengirim...",
    successMessage: "Pesan berhasil terkirim! Terima kasih telah menghubungi.",
  },
  en: {
    contactMe: "Get in Touch",
    subtitle: "I'll be happy to respond to your message",
    name: "Full Name",
    email: "Email Address",
    message: "Write Your Message",
    sendViaWhatsApp: "Send via WhatsApp",
    sendMessage: "Send Message",
    whatsapp: "WhatsApp",
    instagram: "Instagram",
    facebook: "Facebook",
    emaill: "Email",
    linkedin: "LinkedIn",
    location: "Location",
    locationValue: "Bojonegoro, Jawa Timur",
    formTitle: "Have a question?",
    formSubtitle: "Fill out the form below if you're interested in me",
    sending: "Sending...",
    successMessage: "Message sent successfully! Thank you for reaching out.",
  },
};

// Animasi konfigurasi
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

export default function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formTouched, setFormTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  // Reset status setelah beberapa detik
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Mark field as touched
    if (!formTouched[name as keyof typeof formTouched]) {
      setFormTouched({
        ...formTouched,
        [name as keyof typeof formTouched]: true,
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setFormTouched({ ...formTouched, [name]: true });
  };

  const isFormValid = form.name && form.email && form.message;

  const handleSendWhatsApp = async () => {
    if (!isFormValid) return;

    try {
      setIsSubmitting(true);
      const { name, email, message } = form;
      const phoneNumber = "+6282244621417";
      const text = `${
        language === "id" ? "Halo, saya" : "Hello, I am"
      } ${name}%0AEmail: ${email}%0A${
        language === "id" ? "Pesan" : "Message"
      }: ${message}`;
      const url = `https://wa.me/${phoneNumber}?text=${text}`;

      // Simulasi delay jaringan
      await new Promise((resolve) => setTimeout(resolve, 800));

      window.open(url, "_blank");

      // Reset form setelah berhasil
      setForm({ name: "", email: "", message: "" });
      setFormTouched({ name: false, email: false, message: false });
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="text-primary w-5 h-5" />,
      label: t.whatsapp,
      value: "+62 822-4462-1417",
      href: "https://wa.me/+6282244621417",
    },
    {
      icon: <Instagram className="text-primary w-5 h-5" />,
      label: t.instagram,
      value: "@rochim123_real",
      href: "https://www.instagram.com/rochim123_real",
    },
    {
      icon: <Facebook className="text-primary w-5 h-5" />,
      label: t.facebook,
      value: "Liva.puji.arochim",
      href: "https://www.facebook.com/Liva.puji.arochim",
    },
    {
      icon: <Mail className="text-primary w-5 h-5" />,
      label: t.email,
      value: "livapujiarochim714@gmail.com",
      href: "mailto:livapujiarochim714@gmail.com",
    },
    {
      icon: <Linkedin className="text-primary w-5 h-5" />,
      label: t.linkedin,
      value: "livapujiarochim",
      href: "https://linkedin.com/in/livapujiarochim",
    },
  ];

  const additionalInfo = [
    {
      icon: <MapPin className="text-primary w-5 h-5" />,
      label: t.location,
      value: t.locationValue,
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/10 dark:bg-blue-500/10 rounded-full filter blur-3xl translate-x-1/3 translate-y-1/3" />

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400 bg-clip-text text-transparent inline-block">
            {t.contactMe}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-lg mx-auto text-lg">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Kontak Info - Kiri */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg shadow-blue-100 dark:shadow-none border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                {language === "id" ? "Informasi Kontak" : "Contact Information"}
              </h3>

              <div className="space-y-6">
                {/* Main contact methods */}
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{
                      x: 5,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <ContactItem
                      icon={item.icon}
                      label={item.label}
                      value={item.value}
                      href={item.href}
                    />
                  </motion.div>
                ))}

                {/* Divider */}
                <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>

                {/* Additional info */}
                {additionalInfo.map((item, index) => (
                  <motion.div
                    key={`add-${index}`}
                    variants={itemVariants}
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="font-medium text-gray-800 dark:text-white">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Form Kanan */}
          <motion.div className="lg:col-span-3" variants={containerVariants}>
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl shadow-blue-100 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                {t.formTitle}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                {t.formSubtitle}
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {t.name} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder={t.name}
                      value={form.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`focus:ring-primary bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-300 ${
                        formTouched.name && !form.name
                          ? "border-red-500 dark:border-red-500"
                          : ""
                      }`}
                      disabled={isSubmitting}
                      required
                    />
                    {formTouched.name && !form.name && (
                      <p className="mt-1 text-sm text-red-500">
                        {language === "id"
                          ? "Nama harus diisi"
                          : "Name is required"}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {t.emaill} <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      placeholder={t.email}
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`focus:ring-primary bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-300 ${
                        formTouched.email && !form.email
                          ? "border-red-500 dark:border-red-500"
                          : ""
                      }`}
                      disabled={isSubmitting}
                      required
                    />
                    {formTouched.email && !form.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {language === "id"
                          ? "Email harus diisi"
                          : "Email is required"}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      {t.message} <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t.message}
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`focus:ring-primary resize-none bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 rounded-lg transition-all duration-300 ${
                        formTouched.message && !form.message
                          ? "border-red-500 dark:border-red-500"
                          : ""
                      }`}
                      disabled={isSubmitting}
                      required
                    />
                    {formTouched.message && !form.message && (
                      <p className="mt-1 text-sm text-red-500">
                        {language === "id"
                          ? "Pesan harus diisi"
                          : "Message is required"}
                      </p>
                    )}
                  </div>
                </div>

                <motion.div
                  whileTap={{ scale: isFormValid && !isSubmitting ? 0.97 : 1 }}
                >
                  <Button
                    onClick={handleSendWhatsApp}
                    className={`w-full py-6 rounded-xl text-lg font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                      !isFormValid
                        ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
                        : "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                    }`}
                    disabled={isSubmitting || !isFormValid}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-3">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t.sending}</span>
                      </div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>{t.sendMessage}</span>
                      </>
                    )}
                  </Button>
                </motion.div>

                {/* Success message */}
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-700 text-green-800 dark:text-green-100 p-4 rounded-lg text-center"
                  >
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10 3L4.5 8.5L2 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <p>{t.successMessage}</p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const Content = () => (
    <>
      <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
        <p className="font-medium text-gray-800 dark:text-white">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 hover:text-primary transition-colors group"
      >
        <Content />
      </Link>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <Content />
    </div>
  );
}
