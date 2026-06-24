import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://clearstack.co.nz"
  ),
  title: "ClearStack | Build it right, then automate it",
  description:
    "Custom websites and SaaS applications for NZ businesses. Designed for how you actually work, not adapted from a template.",
  alternates: {
    canonical: "/",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:light)').matches){document.documentElement.setAttribute('data-theme','light')}else{document.documentElement.setAttribute('data-theme','dark')}}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://clearstack.co.nz";

const localBusinessSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ClearStack",
  url: siteUrl,
  description:
    "Custom websites and SaaS applications for NZ businesses. Designed for how you actually work, not adapted from a template.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Auckland",
    addressCountry: "NZ",
  },
  areaServed: {
    "@type": "Country",
    name: "New Zealand",
  },
  knowsAbout: [
    "Web Design",
    "Web Development",
    "SaaS Development",
    "Web Applications",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: localBusinessSchema }}
        />
      </head>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
