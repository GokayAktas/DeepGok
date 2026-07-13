import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DeepGok",
  description: "DeepGok — A premium design language built for humans and AI.",
  openGraph: {
    title: "DeepGok",
    description: "A premium design language built for humans and AI.",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        {/* Small logo */}
        <img
          src="/favicon.svg"
          alt="DeepGok"
          className="h-16 w-auto mx-auto mb-8"
        />

        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Deep<span className="text-primary">Gok</span>
        </h1>

        <p className="mt-4 text-sm sm:text-base text-white/30 leading-relaxed">
          Explore the design language that defines the DeepGok brand — built for humans and AI.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/brand-kit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white text-sm font-medium hover:bg-secondary transition-all duration-200"
          >
            Brand Kit →
          </Link>
        </div>
      </div>

      {/* Footer */}
      <p className="absolute bottom-8 text-xs text-white/10">
        © {new Date().getFullYear()} DeepGok
      </p>
    </div>
  );
}
