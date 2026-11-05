"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Menu, X, UserCheck, Ticket, Compass } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-xs">
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-sky-600 text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-medium">
              <Phone className="w-3 h-3" /> 24/7 Helpline: +91 98765 43210
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:flex items-center gap-1 font-medium">
              <Mail className="w-3 h-3" /> info@maxtourtravel.com
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-semibold">
              ⭐ Top Rated Bihar Tourism
            </span>
            <Link
              href="#registration"
              className="bg-amber-400 hover:bg-amber-300 text-gray-900 font-bold px-3 py-0.5 rounded-full text-[11px] transition-colors"
            >
              Sign Up / Register
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-16 h-16 shrink-0 transition-transform group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Max Tour & Travel"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-orange-600 leading-none">
              MAX <span className="text-sky-600">TOUR &amp; TRAVEL</span>
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mt-1">
              Bodhgaya · Gaya · Patna · Rajgir
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-gray-700">
          <Link href="#home" className="hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="#all-tours" className="hover:text-orange-600 transition-colors">
            All Tours
          </Link>
          <Link href="#seasonal-tours" className="hover:text-orange-600 transition-colors">
            Seasonal Tours
          </Link>
          <Link href="#locations" className="hover:text-orange-600 transition-colors">
            Locations
          </Link>
          <Link href="#ticket-booking" className="hover:text-orange-600 transition-colors flex items-center gap-1">
            <Ticket className="w-4 h-4 text-orange-500" /> Ticket Booking
          </Link>
          <Link href="#about" className="hover:text-orange-600 transition-colors">
            About Us
          </Link>
          <Link href="#our-team" className="hover:text-orange-600 transition-colors">
            Our Team
          </Link>
          <Link href="#contact" className="hover:text-orange-600 transition-colors">
            Contact Us
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="#registration"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-orange-500 text-orange-600 text-xs font-bold hover:bg-orange-50 transition-all"
          >
            <UserCheck className="w-3.5 h-3.5" /> Register
          </Link>
          <Link
            href="#ticket-booking"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-orange-500/25 hover:from-orange-600 hover:to-amber-600 transition-all hover:scale-105"
          >
            <Compass className="w-4 h-4" /> Book Trip
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex lg:hidden items-center gap-2">
          <Link
            href="#ticket-booking"
            className="px-3 py-1.5 bg-orange-600 text-white rounded-full text-xs font-bold"
          >
            Book
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-700 hover:text-orange-600 focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-orange-100 px-4 py-5 shadow-xl space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-gray-100">
            <Link
              href="#home"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 text-gray-800"
            >
              Home
            </Link>
            <Link
              href="#all-tours"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 text-gray-800"
            >
              All Tours
            </Link>
            <Link
              href="#seasonal-tours"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 text-gray-800"
            >
              Seasonal Tours
            </Link>
            <Link
              href="#locations"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 text-gray-800"
            >
              Locations
            </Link>
            <Link
              href="#ticket-booking"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 text-gray-800"
            >
              Ticket Booking
            </Link>
            <Link
              href="#about"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 text-gray-800"
            >
              About Us
            </Link>
            <Link
              href="#our-team"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 text-gray-800"
            >
              Our Team
            </Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 text-gray-800"
            >
              Contact Us
            </Link>
          </div>
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="#registration"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-full border border-orange-500 text-orange-600 text-center text-xs font-bold uppercase tracking-wider"
            >
              Customer Registration
            </Link>
            <a
              href="tel:+919876543210"
              className="w-full py-2.5 rounded-full bg-orange-600 text-white text-center text-xs font-bold uppercase tracking-wider"
            >
              Call +91 98765 43210
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
