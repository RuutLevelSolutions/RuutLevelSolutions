import type { Metadata } from "next";

import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ruutlevel.com"),
  title: "Ruut Level Solutions | Root-Level Solutions for Real-World Problems",
  description:
    "Ruut Level Solutions builds practical digital products, service platforms, automation systems, and custom software that solve real-world problems for customers and businesses.",
  keywords: [
    "root-level solutions company",
    "practical digital products",
    "custom software development",
    "business automation solutions",
    "grocery delivery platform development",
    "remote help platform",
    "web application development",
  ],
  openGraph: {
    title: "Ruut Level Solutions | Root-Level Solutions for Real-World Problems",
    description:
      "Practical digital products and business platforms built to solve day-to-day problems, improve customer convenience, and support business growth.",
    url: "https://www.ruutlevel.com",
    siteName: "Ruut Level Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruut Level Solutions | Root-Level Solutions for Real-World Problems",
    description:
      "Practical digital products, automation systems, service platforms, and custom software for real-world business and customer needs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
