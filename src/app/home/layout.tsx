import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeepGok — Infinite Depth. Infinite Possibilities.",
  description:
    "We create intelligent software, AI-powered tools and digital experiences that make technology simpler for everyone.",
  openGraph: {
    title: "DeepGok — Infinite Depth. Infinite Possibilities.",
    description:
      "We create intelligent software, AI-powered tools and digital experiences that make technology simpler for everyone.",
    type: "website",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
