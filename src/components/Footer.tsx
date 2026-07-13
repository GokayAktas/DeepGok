import { Github } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 border-t border-white/[0.04]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <p className="font-heading text-sm font-semibold text-white">
              DeepGok Brand Kit<span className="text-white/20">™</span>
            </p>
            <p className="mt-1 text-xs text-white/30">
              A design language for humans and AI.
            </p>
          </div>

          {/* GitHub + Copyright */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 transition-colors duration-200"
            >
              <Github className="w-4 h-4" />
            </a>
            <p className="text-xs text-white/20">
              &copy; {year} DeepGok. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
