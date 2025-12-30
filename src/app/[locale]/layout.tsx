import type { Metadata } from "next";
import { getI18n, getCurrentLocale } from "@/locales/server";
import { I18nProviderClient } from "@/locales/client";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yearsOfExperience = new Date().getFullYear() - 2021;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();
  return {
    title: t("pageTitle"),
    description: t("pageDescription", { years: yearsOfExperience.toString() }),
    keywords: [
      "Web Developer",
      "Frontend Developer",
      "Next.js",
      "Vue.js",
      "JavaScript",
      "React",
      "TypeScript",
      "Full Stack Developer",
    ],
    authors: [{ name: "Juan Daniel Sanchez Ramirez" }],
    creator: "Juan Daniel Sanchez Ramirez",
    openGraph: {
      title: t("pageTitle"),
      description: t("pageDescription", { years: yearsOfExperience }),
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary",
      title: t("pageTitle"),
      description: t("pageDescription", { years: yearsOfExperience }),
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const lang = await getCurrentLocale();
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} container mx-auto max-w-5xl antialiased`}
      >
        <I18nProviderClient locale={lang}>{children}</I18nProviderClient>
      </body>
    </html>
  );
}
