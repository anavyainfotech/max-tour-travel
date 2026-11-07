"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, Ticket, ShieldCheck, Sparkles, HelpCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Packages", href: "/tours" },
    { label: "Gaya Special", href: "/locations" },
    { label: "Quick Book", href: "/booking", highlight: true },
    { label: "Seasonal", href: "/seasonal-tours" },
    { label: "About Us", href: "/about" },
    { label: "Leadership", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
      {/* Top Announcement Bar - MMT Clean Style */}
      <div className="bg-[#0f294d] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold tracking-wide">
              <Sparkles className="w-3 h-3" />
              <span>Gaya, Bodhgaya &amp; Rajgir Verified Travel Partner</span>
            </span>
            <span className="hidden md:inline text-white/30">|</span>
            <a href="tel:+919876543210" className="hidden md:flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>24x7 Helpline: +91 98765 43210</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Govt. Registered Fleet
            </span>
            <Link
              href="/register"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-3 py-1 rounded-full text-[10px] sm:text-[11px] shadow-sm transition-all"
            >
              Get ₹500 Voucher
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl p-1 bg-gradient-to-br from-amber-50 to-orange-50 border border-orange-200/60 shadow-sm flex items-center justify-center transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Max Tour & Travel Gaya"
              width={52}
              height={52}
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight leading-none text-slate-900">
              MAX <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">TOUR &amp; TRAVEL</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase mt-1">
              Gaya · Bodhgaya · Rajgir · Patna
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-1 font-medium text-[13px] text-slate-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "bg-orange-50 text-orange-600 font-bold"
                    : "hover:bg-slate-50 hover:text-orange-600"
                } ${
                  link.highlight
                    ? "text-orange-600 font-bold bg-orange-50/80 border border-orange-200/80 hover:bg-orange-100"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50 text-xs font-semibold transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-orange-600" />
            <span>Call Chauffeur</span>
          </a>
          <Link
            href="/booking"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold shadow-md shadow-orange-500/20 hover:shadow-lg transition-all"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-slate-100 px-5 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 mt-2 flex flex-col gap-2">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-200 text-slate-800 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-orange-600" />
                Call +91 98765 43210
              </a>
              <Link
                href="/booking"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm shadow-md"
              >
                Instant Online Booking
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
