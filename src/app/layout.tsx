import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClearStack | Modern Web Solutions",
  description: "ClearStack specializes in creating beautiful websites and powerful web applications that help businesses grow and succeed in the digital world.",
  keywords: ["web development", "web design", "web applications", "business websites", "digital solutions", "ClearStack"],
  authors: [{ name: "ClearStack Team" }],
  openGraph: {
    title: "ClearStack | Modern Web Solutions",
    description: "ClearStack specializes in creating beautiful websites and powerful web applications that help businesses grow and succeed in the digital world.",
    url: "https://clearstack.com",
    siteName: "ClearStack",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ClearStack - Modern Web Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearStack | Modern Web Solutions",
    description: "ClearStack specializes in creating beautiful websites and powerful web applications that help businesses grow and succeed in the digital world.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-black text-white overflow-x-hidden`}>
        <div className="fixed inset-0 -z-10 h-full w-full bg-black bg-[radial-gradient(#111_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
        {children}
      </body>
    </html>
  );
}
