import NextLink from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Camera, Share2, Video, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8 border-t-4 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 shrink-0 bg-white rounded-xl p-1">
                <Image
                  src="/logo.png"
                  alt="Max Tour and Travel"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black text-orange-400">
                MAX <span className="text-sky-400">TOUR &amp; TRAVEL</span>
              </span>
            </div>
            <p className="text-xs text-stone-400 font-light leading-relaxed mb-6">
              Premier travel &amp; pilgrimage logistics partner across Bodhgaya, Gaya, Patna, and Rajgir. Certified vehicles, transparent fares, and genuine spiritual hospitality.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-pink-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors">
                <Camera className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-blue-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 hover:bg-red-600 text-stone-300 hover:text-white flex items-center justify-center transition-colors">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-orange-400 mb-4">
              PAGES &amp; SECTIONS
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li><NextLink href="/" className="hover:text-white transition-colors">Home Page</NextLink></li>
              <li><NextLink href="/tours" className="hover:text-white transition-colors">All Tours &amp; Packages</NextLink></li>
              <li><NextLink href="/seasonal-tours" className="hover:text-white transition-colors">Seasonal Tours</NextLink></li>
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Destinations (Bodhgaya, Gaya, Patna, Rajgir)</NextLink></li>
              <li><NextLink href="/booking" className="hover:text-white transition-colors">Ticket Booking (Car, Bus, Flight, Hotel)</NextLink></li>
              <li><NextLink href="/about" className="hover:text-white transition-colors">About Us</NextLink></li>
              <li><NextLink href="/team" className="hover:text-white transition-colors">Our Team (Rohit, Mohit, Sohan)</NextLink></li>
              <li><NextLink href="/register" className="hover:text-white transition-colors">User Registration</NextLink></li>
              <li><NextLink href="/contact" className="hover:text-white transition-colors">Contact Us</NextLink></li>
            </ul>
          </div>

          {/* Col 3: Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-sky-400 mb-4">
              SACRED DESTINATIONS
            </h4>
            <ul className="space-y-2 text-xs text-stone-400 font-light">
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Bodhgaya — Mahabodhi Temple &amp; Bodhi Tree</NextLink></li>
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Gaya — Vishnupad Mandir &amp; Pind Daan</NextLink></li>
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Rajgir — Glass Bridge, Ropeway &amp; Hot Springs</NextLink></li>
              <li><NextLink href="/locations" className="hover:text-white transition-colors">Patna — Golghar, Takht Sri Patna Sahib</NextLink></li>
              <li><NextLink href="/tours" className="hover:text-white transition-colors">Nalanda University Ruins Special Excursion</NextLink></li>
            </ul>
          </div>

          {/* Col 4: Contact Hotline */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-4">
              24X7 ASSISTANCE
            </h4>
            <div className="space-y-3 text-xs text-stone-400 font-light">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white text-stone-200 font-medium">+91 98765 43210</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <a href="mailto:info@maxtourtravel.com" className="hover:text-white">info@maxtourtravel.com</a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Main Temple Road, Near Kalachakra Ground, Bodhgaya, Bihar</span>
              </p>
            </div>
            <div className="mt-5">
              <NextLink
                href="/booking"
                className="inline-block w-full py-2.5 rounded-full bg-orange-600 hover:bg-orange-500 text-white text-center text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Instant Ticket Booking
              </NextLink>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <p>© 2026 Max Tour &amp; Travel. All Rights Reserved. Built with Modern Next.js.</p>
          <p className="flex items-center gap-1">
            Crafted for Bodhgaya, Gaya, Patna &amp; Rajgir Tourism <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          </p>
        </div>

      </div>
    </footer>
  );
}
