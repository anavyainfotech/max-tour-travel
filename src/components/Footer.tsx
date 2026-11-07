import NextLink from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Camera, Share2, Video, Heart, ShieldCheck, Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1726] text-white pt-16 pb-8 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 shrink-0 bg-white rounded-2xl p-1.5 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="Max Tour and Travel Gaya"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white leading-none">
                  MAX <span className="text-orange-500">TOUR &amp; TRAVEL</span>
                </span>
                <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-1">
                  Gaya · Bodhgaya · Rajgir · Patna
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-normal leading-relaxed mb-6">
              Premier travel &amp; pilgrimage logistics partner based in Gaya &amp; Bodhgaya. Commercial GPS-enabled tourist vehicles, zero hidden costs, and authentic Bihar hospitality.
            </p>
            <div className="flex items-center gap-2.5">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:to-pink-500 text-slate-300 hover:text-white flex items-center justify-center transition-all">
                <Camera className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> EXPLORE CIRCUITS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-normal">
              <li><NextLink href="/" className="hover:text-white transition-colors">Home Portal</NextLink></li>
              <li><NextLink href="/tours" className="hover:text-white transition-colors">All Packages &amp; Pricing</NextLink></li>
              <li><NextLink href="/seasonal-tours" className="hover:text-white transition-colors">Winter &amp; Pitrupaksha Special</NextLink></li>
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Destinations (Gaya, Bodhgaya, Rajgir, Patna)</NextLink></li>
              <li><NextLink href="/booking" className="hover:text-white transition-colors">Cab &amp; Ticket Booking</NextLink></li>
              <li><NextLink href="/about" className="hover:text-white transition-colors">About Us</NextLink></li>
              <li><NextLink href="/team" className="hover:text-white transition-colors">Our Leadership Team</NextLink></li>
              <li><NextLink href="/register" className="hover:text-white transition-colors">Member Registration (₹500 Off)</NextLink></li>
            </ul>
          </div>

          {/* Col 3: Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> SACRED GAYA CIRCUIT
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-normal">
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Gaya — Vishnupad Mandir &amp; Falgu Ghat</NextLink></li>
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Bodhgaya — Mahabodhi Temple &amp; 80ft Buddha</NextLink></li>
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Rajgir — Glass Skywalk, Ropeway &amp; Hot Springs</NextLink></li>
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Patna — Takht Sri Patna Sahib &amp; Golghar</NextLink></li>
              <li><NextLink href="/tours" className="hover:text-white transition-colors">Nalanda University Ruins Special Tour</NextLink></li>
            </ul>
          </div>

          {/* Col 4: Contact Hotline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" /> 24X7 ASSISTANCE
            </h4>
            <div className="space-y-3.5 text-xs text-slate-400 font-normal">
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white text-slate-200 font-bold text-sm">+91 98765 43210</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:info@maxtourtravel.com" className="hover:text-white">info@maxtourtravel.com</a>
              </p>
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">Station Road, Near Railway Gumti, Gaya, Bihar 823001</span>
              </p>
            </div>
            <div className="mt-6">
              <NextLink
                href="/booking"
                className="inline-block w-full py-3 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-center text-xs font-extrabold uppercase tracking-wider transition-all shadow-md shadow-orange-500/20"
              >
                Instant Online Booking
              </NextLink>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2026 Max Tour &amp; Travel. All rights reserved. Bihar Tourism Reg. Partner.</p>
          <p className="text-slate-400">Crafted with high quality standards for pilgrims &amp; travelers worldwide.</p>
        </div>

      </div>
    </footer>
  );
}