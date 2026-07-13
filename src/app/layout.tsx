import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { LanguageProvider } from "@/context/LanguageContext";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DeepGok Brand Kit",
  description:
    "A premium design language built for humans and AI. Consistent, minimal, and thoughtfully crafted.",
  openGraph: {
    title: "DeepGok Brand Kit",
    description:
      "A premium design language built for humans and AI. Consistent, minimal, and thoughtfully crafted.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${GeistSans.variable} font-sans bg-background text-white antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
