import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/navigation";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s | ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${inter.variable} h-full antialiased`}>
//       <head>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className="flex min-h-full flex-col bg-surface font-body-md text-on-surface selection:bg-primary-fixed-dim">
//         <Header />
//         <main className="flex-1">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }




const siteUrl = "https://damizpah-microcredit.waltersgroups.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Damizpah Micro Credit | Trusted Loans in Ghana",
    template: `%s | Damizpah Micro Credit`,
  },

  description:
    "Damizpah Micro Credit provides reliable microcredit services, affordable loans, and financial solutions for individuals and businesses in Ghana.",

  keywords: [
    "Damizpah",
    "Damizpah Micro Credit",
    "Microcredit Ghana",
    "Loans Ghana",
    "Small business loans Ghana",
    "Financial services Ghana",
  ],

  authors: [
    {
      name: "Damizpah Micro Credit",
    },
  ],

  creator: "Damizpah Micro Credit",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Damizpah Micro Credit | Trusted Loans in Ghana",
    description:
      "Affordable microcredit and financial solutions for individuals and businesses in Ghana.",
    url: siteUrl,
    siteName: "Damizpah Micro Credit",
    locale: "en_GH",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Damizpah Micro Credit",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Damizpah Micro Credit | Trusted Loans in Ghana",
    description:
      "Affordable microcredit and financial solutions in Ghana.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Damizpah Micro Credit",
              url: siteUrl,
              description:
                "Damizpah Micro Credit provides microcredit services and financial solutions in Ghana.",
              areaServed: "Ghana",
            }),
          }}
        />
      </head>

      <body className="flex min-h-full flex-col bg-surface font-body-md text-on-surface selection:bg-primary-fixed-dim">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
