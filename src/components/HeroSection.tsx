"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Search, 
  MapPin, 
  Calendar, 
  Car, 
  Bus, 
  Plane, 
  Hotel, 
  ArrowRight, 
  ShieldCheck, 
  Star, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

interface HeroProps {
  onSearch: (loc: string, vehicle: string) => void;
}

export default function HeroSection({ onSearch }: HeroProps) {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const handleSearchClick = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(selectedLocation, selectedVehicle);
    const element = document.getElementById("search-results");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-amber-50/50 to-white pt-10 pb-20">
      {/* Decorative Animated Floating Blobs & Car Pattern */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-300/20 to-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-wider mb-5">
              <Sparkles className="w-4 h-4 text-orange-500 animate-spin" />
              <span>Bihar&apos;s #1 Spiritual &amp; Heritage Tour Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.12] tracking-tight mb-6">
              Discover Sacred <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-sky-600">
                Bodhgaya, Gaya,
              </span> <br />
              Patna &amp; Rajgir
            </h1>

            <p className="text-base sm:text-lg text-gray-600 max-w-xl mb-8 leading-relaxed font-normal">
              Experience hassle-free travel with pre-verified sanitized cars, deluxe tour buses, flight/train ticket booking, luxury hotel suites, and dedicated local pilgrimage guides.
            </p>

            {/* Quick Vehicle Type Icons Row */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="text-xs font-bold uppercase text-gray-400">Available Transport:</span>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-white px-3 py-1.5 rounded-full border border-orange-100 shadow-xs">
                <Car className="w-3.5 h-3.5 text-orange-500" /> Car Rentals (Innova / Sedan)
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-white px-3 py-1.5 rounded-full border border-orange-100 shadow-xs">
                <Bus className="w-3.5 h-3.5 text-sky-500" /> Deluxe Tourist Buses
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-white px-3 py-1.5 rounded-full border border-orange-100 shadow-xs">
                <Plane className="w-3.5 h-3.5 text-purple-500" /> Flight &amp; Train
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-700 bg-white px-3 py-1.5 rounded-full border border-orange-100 shadow-xs">
                <Hotel className="w-3.5 h-3.5 text-emerald-500" /> 3★ &amp; 4★ Hotels
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#ticket-booking"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-sm tracking-wider uppercase hover:from-orange-600 hover:to-amber-600 transition-all flex items-center gap-2.5 shadow-lg shadow-orange-500/30 hover:scale-105"
              >
                Book Tickets &amp; Hotels <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="#all-tours"
                className="px-8 py-4 rounded-full border-2 border-orange-500 text-orange-600 font-bold text-sm tracking-wider uppercase hover:bg-orange-50 transition-all hover:scale-105"
              >
                Explore All Packages
              </Link>
            </div>
          </div>

          {/* Right Hero Visual Column (Animated Arch with Buddha Logo Art) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-[340px] h-[400px] sm:w-[400px] sm:h-[460px] bg-gradient-to-tr from-amber-500 via-orange-500 to-amber-400 rounded-t-full rounded-b-3xl p-6 shadow-2xl flex flex-col items-center justify-between overflow-hidden group">
              {/* Floating Golden Circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-xl pointer-events-none" />
              <div className="absolute bottom-10 -left-10 w-40 h-40 bg-white/20 rounded-full blur-xl pointer-events-none" />

              {/* Animated Floating Car Icon */}
              <div className="absolute top-1/2 right-6 animate-float z-20 bg-white p-3 rounded-2xl shadow-xl border border-orange-100 text-orange-600 flex items-center gap-2">
                <Car className="w-5 h-5 text-orange-500" />
                <span className="text-xs font-black">24x7 Cab Service</span>
              </div>

              {/* Centered Big Logo */}
              <div className="relative w-full h-[260px] flex items-center justify-center pt-4">
                <Image
                  src="/logo.png"
                  alt="Max Tour and Travel Logo"
                  fill
                  priority
                  className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Quick Trust Highlights Ribbon */}
              <div className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg text-center z-10 border border-orange-100">
                <div className="flex items-center justify-around text-xs font-bold text-gray-800">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                    <span>4.9/5 Rating</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Govt Approved</span>
                  </div>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>15k+ Happy Trips</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Searching Page / Interactive Search Bar (Matching User Requirement) */}
        <div id="search-bar" className="mt-14 max-w-5xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-orange-100">
          <div className="mb-4 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-600 flex items-center gap-1.5">
              <Search className="w-4 h-4" /> SEARCHING PAGE / INSTANT TRIP FINDER
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
              Find Your Ideal Tour or Transport in Bihar
            </h2>
          </div>

          <form onSubmit={handleSearchClick} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Location Selector */}
            <div className="sm:col-span-5 relative">
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">
                Select Location
              </label>
              <div className="relative">
                <MapPin className="w-5 h-5 text-orange-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-orange-500 focus:outline-none text-sm font-semibold text-gray-800 transition-colors"
                >
                  <option value="">All Locations (Bodhgaya, Gaya, Patna, Rajgir)</option>
                  <option value="Bodhgaya">Bodhgaya (Mahabodhi Temple, Buddha)</option>
                  <option value="Gaya">Gaya (Vishnupad, Pind Daan, Falgu)</option>
                  <option value="Patna">Patna (Golghar, Patna Sahib, Museum)</option>
                  <option value="Rajgir">Rajgir (Glass Bridge, Ropeway, Stupa)</option>
                </select>
              </div>
            </div>

            {/* Vehicle / Booking Mode */}
            <div className="sm:col-span-4 relative">
              <label className="block text-xs font-bold text-gray-600 mb-1 uppercase tracking-wide">
                Vehicle / Booking Type
              </label>
              <div className="relative">
                <Car className="w-5 h-5 text-sky-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  value={selectedVehicle}
                  onChange={(e) => setSelectedVehicle(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-sky-500 focus:outline-none text-sm font-semibold text-gray-800 transition-colors"
                >
                  <option value="">All Vehicles &amp; Tickets</option>
                  <option value="Car">Car Ticket / Private Cab</option>
                  <option value="Bus">Bus Ticket / Deluxe AC Bus</option>
                  <option value="Flight/Train">Flight / Train Ticket</option>
                  <option value="Hotel">Hotel Booking</option>
                </select>
              </div>
            </div>

            {/* Search Submit Button */}
            <div className="sm:col-span-3 pt-5 sm:pt-0">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm uppercase tracking-wider shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
              >
                <Search className="w-4 h-4" /> Search Tours
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
