import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import JsonLd from "@/components/JsonLd";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ClearStack | Build it right, then automate it.",
  description: "Structured web design and AI automation for NZ small businesses. Agency-quality work, without the agency overhead.",
  keywords: ["web development", "Next.js", "AI automation", "NZ small business", "Auckland web design", "ClearStack"],
  authors: [{ name: "ClearStack" }],
  openGraph: {
    title: "ClearStack | Build it right, then automate it.",
    description: "Structured web design and AI automation for NZ small businesses. Agency-quality work, without the agency overhead.",
    url: "https://clearstack.nz",
    siteName: "ClearStack",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "ClearStack" }],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClearStack | Build it right, then automate it.",
    description: "Structured web design and AI automation for NZ small businesses.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${figtree.variable} scroll-smooth`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#F8F7FF" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <JsonLd />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
