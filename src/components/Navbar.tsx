"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, Menu, X, UserCheck, Ticket, Compass } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Tours", href: "/tours" },
    { label: "Seasonal", href: "/seasonal-tours" },
    { label: "Locations", href: "/locations" },
    { label: "Booking", href: "/booking", highlight: true },
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-orange-100 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-sky-700 text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <a href="tel:+919876543210" className="flex items-center gap-1 font-semibold hover:underline">
              <Phone className="w-3 h-3 shrink-0" />
              <span>+91 98765 43210</span>
            </a>
            <span className="hidden md:inline text-white/40">|</span>
            <span className="hidden md:flex items-center gap-1 text-white/90">
              <Mail className="w-3 h-3 shrink-0" /> info@maxtourtravel.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline bg-white/20 px-2 py-0.5 rounded text-[10px] font-semibold">
              ⭐ Govt Approved
            </span>
            <Link
              href="/register"
              className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] transition-colors whitespace-nowrap"
            >
              Register (Get ₹500 Off)
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Max Tour & Travel"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-black tracking-tight text-orange-600 leading-none">
              MAX <span className="text-sky-600">TOUR &amp; TRAVEL</span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-gray-500 mt-1 hidden xs:block">
              Bodhgaya · Gaya · Patna · Rajgir
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links (Clean Single Line with shrink-0 and whitespace-nowrap) */}
        <nav className="hidden xl:flex items-center gap-5 text-sm font-semibold text-gray-700">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`whitespace-nowrap transition-colors py-1 ${
                  isActive
                    ? "text-orange-600 font-bold border-b-2 border-orange-500"
                    : "hover:text-orange-600"
                } ${link.highlight ? "flex items-center gap-1 text-orange-600" : ""}`}
              >
                {link.highlight && <Ticket className="w-3.5 h-3.5 text-orange-500" />}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <Link
            href="/register"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-orange-500 text-orange-600 text-xs font-bold hover:bg-orange-50 transition-all whitespace-nowrap"
          >
            <UserCheck className="w-3.5 h-3.5" /> Register
          </Link>
          <Link
            href="/booking"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all hover:scale-105 whitespace-nowrap"
          >
            <Compass className="w-4 h-4" /> Book Tickets
          </Link>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex xl:hidden items-center gap-2">
          <Link
            href="/booking"
            className="px-3 py-1.5 bg-orange-600 text-white rounded-full text-xs font-bold uppercase tracking-wider"
          >
            Book
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-orange-600 focus:outline-none rounded-xl border border-gray-200"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-5 h-5 text-orange-600" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-b border-orange-100 px-4 py-5 shadow-2xl space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gray-100">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center justify-between ${
                    isActive
                      ? "bg-orange-50 text-orange-600 border border-orange-200"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.highlight && <Ticket className="w-3.5 h-3.5 text-orange-500" />}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-2 pt-1">
            <Link
              href="/register"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-xl border border-orange-500 text-orange-600 text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <UserCheck className="w-4 h-4" /> Customer Registration
            </Link>
            <a
              href="tel:+919876543210"
              className="w-full py-2.5 rounded-xl bg-orange-600 text-white text-center text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-orange-500/25"
            >
              <Phone className="w-4 h-4" /> Call +91 98765 43210
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
