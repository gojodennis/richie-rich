"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform duration-300">
              R
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Richie is Rich</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-accent hover:text-accent-hover text-sm font-medium transition-colors">Home</Link>
            <Link href="/technology" className="text-muted hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Money Tech</Link>
            <Link href="/features" className="text-muted hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Flex Features</Link>
            <Link href="/pricing" className="text-muted hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">How Much?</Link>
            <Link href="/faq" className="text-muted hover:text-white text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300">Argued Questions</Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-muted hover:text-white text-sm font-medium transition-colors">
              I already have an account
            </button>
            <button className="bg-surface hover:bg-border text-white text-sm font-medium px-4 py-2 rounded-full border border-border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow-[0_4px_12px_rgba(255,255,255,0.05)]">
              Stop Being Broke
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted hover:text-white focus:outline-none transition-transform active:scale-95"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b border-border absolute w-full left-0 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-accent text-base font-medium">Home</Link>
            <Link href="/technology" className="block px-3 py-2 text-muted hover:text-white text-base font-medium">Money Tech</Link>
            <Link href="/features" className="block px-3 py-2 text-muted hover:text-white text-base font-medium">Flex Features</Link>
            <Link href="/pricing" className="block px-3 py-2 text-muted hover:text-white text-base font-medium">How Much?</Link>
            <Link href="/faq" className="block px-3 py-2 text-muted hover:text-white text-base font-medium">Argued Questions</Link>
            <div className="pt-4 flex flex-col gap-2 border-t border-border mt-2 pb-2">
              <button className="w-full text-left px-3 py-2 text-muted hover:text-white text-base font-medium">
                I already have an account
              </button>
              <button className="w-full bg-surface text-white text-base font-medium px-4 py-3 rounded-lg border border-border hover:bg-border transition-colors">
                Stop Being Broke
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
