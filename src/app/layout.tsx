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
    default: "John Doll",
    template: "%s",
  },
  description: "John Doll",
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
    title: "John Doll",
    description: "John Doll",
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
    title: "John Doll",
    description: "John Doll",
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
        <a className="skip-link" href="#main-content">
          Skip to main content
        </a>
        <Navbar />
        <div id="main-content" className="flex min-h-0 flex-1 flex-col">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
