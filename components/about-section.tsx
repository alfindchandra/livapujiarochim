"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "./contexts/LanguageContext";
import {
  GraduationCap,
  Briefcase,
  User,
  MapPin,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

export default function AboutSection() {
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
    about: {
      id: "Tentang Saya",
      en: "About Me",
    },
    personalInfo: {
      id: "Informasi Pribadi",
      en: "Personal Information",
    },
    education: {
      id: "Pendidikan",
      en: "Education",
    },
    experience: {
      id: "Pengalaman",
      en: "Experience",
    },
    name: {
      id: "Nama",
      en: "Name",
    },
    birthplace: {
      id: "Tempat, tanggal lahir",
      en: "Place, date of birth",
    },
    address: {
      id: "Alamat",
      en: "Address",
    },
    phone: {
      id: "No Telepon",
      en: "Phone",
    },
    gender: {
      id: "Jenis Kelamin",
      en: "Gender",
    },
    religion: {
      id: "Agama",
      en: "Religion",
    },
    nationality: {
      id: "Kewarganegaraan",
      en: "Nationality",
    },
    email: {
      id: "Email",
      en: "Email",
    },
    status: {
      id: "Status",
      en: "Status",
    },
    male: {
      id: "Laki-laki",
      en: "Male",
    },
    single: {
      id: "Belum Menikah",
      en: "Single",
    },
    present: {
      id: "Sekarang",
      en: "Present",
    },
  };

  const personalInfo = [
    {
      icon: User,
      label: translations.name,
      value: "Liva Puji ARochim",
    },
    {
      icon: Calendar,
      label: translations.birthplace,
      value:
        language === "id"
          ? "Bojonegoro, 26 April 2001"
          : "Bojonegoro, April 26, 2001",
    },
    {
      icon: Mail,
      label: translations.email,
      value: "livapuji14@gmail.com",
    },
    {
      icon: Phone,
      label: translations.phone,
      value: "+62822-4462-1417",
    },
    {
      icon: User,
      label: translations.gender,
      value: translations.male[language],
    },
    {
      icon: User,
      label: translations.religion,
      value: "Islam",
    },
    {
      icon: User,
      label: translations.nationality,
      value: language === "id" ? "Indonesia" : "Indonesian",
    },
    {
      icon: User,
      label: translations.status,
      value: translations.single[language],
    },
    {
      icon: MapPin,
      label: translations.address,
      value:
        language === "id"
          ? "Ds. Cancung Rt 13 Rw 04, Кес. Bubulan, Bojonegoro"
          : "Cancung Village Rt 13 Rw 04, Bubulan District, Bojonegoro",
    },
  ];

  const education = [
    {
      institution: "Universitas Terbuka",
      degree:
        language === "id"
          ? "S1 Manajemen, (IPK 3,57)"
          : "Bachelor of Management, (GPA 3.57)",
      period: "2020-2024",
    },
    {
      institution: "MAN 2 Bojonegoro",
      degree:
        language === "id" ? "Sekolah Menengah Atas" : "Senior High School",
      period: "2016-2019",
    },
    {
      institution: "SMPN 3 Bojonegoro",
      degree:
        language === "id" ? "Sekolah Menengah Pertama" : "Junior High School",
      period: "2013-2016",
    },
    {
      institution: "SDN Cancung 1",
      degree: language === "id" ? "Sekolah Dasar" : "Elementary School",
      period: "2007-2013",
    },
  ];

  const experience = [
    {
      position:
        language === "id"
          ? "Wakil Ketua Unit Kegiatan Mahasiswa"
          : "Vice Chairman of Student Activity Unit",
      company: language === "id" ? "Universitas Terbuka" : "Open University",
      period: "",
    },
    {
      position:
        language === "id"
          ? "Sekertaris Pusat Kegiatan Mahasiswa"
          : "Secretary of Student Activity Center",
      company: language === "id" ? "Universitas Terbuka" : "Open University",
      period: "",
    },
    {
      position:
        language === "id"
          ? "Magang di BLK Teknik Mesin"
          : "Internship at BLK Mechanical Engineering",
      company:
        language === "id" ? "Balai Latihan Kerja" : "Job Training Center",
      period: "",
    },
    {
      position:
        language === "id"
          ? "Magang di PT Danliris Teknik Dasar pengelasan"
          : "Internship at PT Danliris Basic Welding Techniques",
      company: "PT Danliris",
      period: "",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-left">
          <h2 className="text-3xl text-center font-bold tracking-tight md:text-4xl">
            {translations.about[language]}
          </h2>
          <div className="mt-12">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="personal">
                  {translations.personalInfo[language]}
                </TabsTrigger>
                <TabsTrigger value="education">
                  {translations.education[language]}
                </TabsTrigger>
                <TabsTrigger value="experience">
                  {translations.experience[language]}
                </TabsTrigger>
              </TabsList>

              {/* Personal Information */}
              <TabsContent value="personal" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{translations.personalInfo[language]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {personalInfo.map((info, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">
                              {info.label[language]}
                            </p>
                            <p className="font-medium">{info.value}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Education */}
              <TabsContent value="education" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{translations.education[language]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <GraduationCap className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{edu.institution}</h3>
                            <p className="text-sm text-muted-foreground">
                              {edu.degree}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {edu.period}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Experience */}
              <TabsContent value="experience" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>{translations.experience[language]}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {experience.map((exp, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{exp.position}</h3>
                            <p className="text-sm text-muted-foreground">
                              {exp.company}
                            </p>
                            {exp.period && (
                              <p className="mt-1 text-xs text-muted-foreground">
                                {exp.period}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
