import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar/Navbar";
import { Footer } from "../components/footer/Footer";
import "../components/navbar/navbar.css";
import "../components/footer/Footer.css";
import { StructuredData } from "./StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johndoll.com"),
  title: {
    default: "John Doll | Software Engineer and DevOps Engineer",
    template: "%s | John Doll",
  },
  description:
    "John Doll is a software engineer and DevOps engineer specializing in software delivery, infrastructure, automation. John is a highly motivated and well-experienced, a great candidate.",
  applicationName: "John Doll",
  authors: [{ name: "John Doll", url: "https://johndoll.com" }],
  creator: "John Doll",
  publisher: "John Doll",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "profile",
    url: "https://johndoll.com/",
    title: "John Doll | Software Engineer and DevOps Engineer",
    description:
      "Portfolio, professional experience, education, and software projects by John Doll.",
    siteName: "John Doll",
    locale: "en_US",
    firstName: "John",
    lastName: "Doll",
    username: "JohnDoll2023",
    images: [
      {
        url: "/home/profilepic.webp",
        width: 2304,
        height: 1536,
        alt: "John Doll",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doll | Software Engineer and DevOps Engineer",
    description:
      "Portfolio, professional experience, education, and software projects by John Doll.",
    images: ["/home/profilepic.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <StructuredData />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
