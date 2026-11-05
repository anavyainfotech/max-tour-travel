"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  Compass, 
  Car, 
  Bus, 
  Plane, 
  Hotel, 
  MapPin, 
  Calendar, 
  Users, 
  Search, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle2
} from "lucide-react";

export default function MmtHeroSearch() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<"tours" | "cars" | "buses" | "flights" | "hotels">("tours");
  const [fromCity, setFromCity] = useState("Patna (PAT)");
  const [toCity, setToCity] = useState("Bodhgaya");
  const [departDate, setDepartDate] = useState("2026-11-10");
  const [passengers, setPassengers] = useState("2 Adults, Economy Cab");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeCategory === "tours") {
      router.push(`/tours?location=${encodeURIComponent(toCity)}`);
    } else {
      router.push(`/booking?type=${activeCategory}&to=${encodeURIComponent(toCity)}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0a2240] via-[#0d3461] to-[#f4f7fb] pt-8 pb-20 px-4">
      
      {/* Background Subtle Map Graphic Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Tagline */}
        <div className="text-center text-white mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Bihar&apos;s Premier Online Travel &amp; Cab Booking Platform</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Explore Sacred Bodhgaya, Gaya, Patna &amp; Rajgir
          </h1>
          <p className="text-sm sm:text-base text-sky-100 font-light max-w-2xl mx-auto mt-2">
            Instant booking for Holiday Packages, Chauffeur Cabs, Tourist Buses, Flights &amp; Handpicked Hotels.
          </p>
        </div>

        {/* MMT-Style Floating Super Card */}
        <div className="bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden">
          
          {/* Top Category Tabs (MMT Style) */}
          <div className="flex items-center justify-start sm:justify-center border-b border-gray-100 bg-gray-50/70 overflow-x-auto scrollbar-none px-2 py-2 gap-1 sm:gap-3">
            <button
              type="button"
              onClick={() => setActiveCategory("tours")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === "tours"
                  ? "bg-white text-orange-600 shadow-sm border border-orange-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
              }`}
            >
              <Compass className={`w-4 h-4 ${activeCategory === "tours" ? "text-orange-600" : "text-gray-400"}`} />
              <span>Holiday Tours</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("cars")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === "cars"
                  ? "bg-white text-orange-600 shadow-sm border border-orange-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
              }`}
            >
              <Car className={`w-4 h-4 ${activeCategory === "cars" ? "text-orange-600" : "text-gray-400"}`} />
              <span>Outstation Cabs</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("buses")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === "buses"
                  ? "bg-white text-orange-600 shadow-sm border border-orange-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
              }`}
            >
              <Bus className={`w-4 h-4 ${activeCategory === "buses" ? "text-orange-600" : "text-gray-400"}`} />
              <span>Bus Tickets</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("flights")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === "flights"
                  ? "bg-white text-orange-600 shadow-sm border border-orange-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
              }`}
            >
              <Plane className={`w-4 h-4 ${activeCategory === "flights" ? "text-orange-600" : "text-gray-400"}`} />
              <span>Flights / Trains</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveCategory("hotels")}
              className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-bold text-xs sm:text-sm whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === "hotels"
                  ? "bg-white text-orange-600 shadow-sm border border-orange-200"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/70"
              }`}
            >
              <Hotel className={`w-4 h-4 ${activeCategory === "hotels" ? "text-orange-600" : "text-gray-400"}`} />
              <span>Hotels &amp; Homestays</span>
            </button>
          </div>

          {/* Form Fields: Big MMT-Style Interactive Input Blocks */}
          <form onSubmit={handleSearch} className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 bg-gray-50/80 p-2 rounded-lg border border-gray-200/80">
              
              {/* FROM Column */}
              <div className="bg-white p-3.5 rounded-lg border border-transparent hover:border-blue-400 transition-colors cursor-pointer group">
                <span className="text-[11px] uppercase font-bold text-gray-400 block tracking-wider">
                  FROM (PICKUP)
                </span>
                <select
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full text-base sm:text-lg font-black text-gray-900 bg-transparent focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="Patna (PAT)">Patna (Airport / Station)</option>
                  <option value="Gaya (GAY)">Gaya (Airport / Station)</option>
                  <option value="Bodhgaya">Bodhgaya Temple Area</option>
                  <option value="Rajgir">Rajgir Town</option>
                  <option value="Varanasi">Varanasi (Kashi)</option>
                </select>
                <span className="text-[11px] text-gray-500 font-medium truncate block">
                  Bihar &amp; Pan-India Pickup
                </span>
              </div>

              {/* TO / DESTINATION Column */}
              <div className="bg-white p-3.5 rounded-lg border border-transparent hover:border-blue-400 transition-colors cursor-pointer group">
                <span className="text-[11px] uppercase font-bold text-gray-400 block tracking-wider">
                  TO (DESTINATION)
                </span>
                <select
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full text-base sm:text-lg font-black text-orange-600 bg-transparent focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="Bodhgaya">Bodhgaya (Mahabodhi)</option>
                  <option value="Gaya">Gaya (Vishnupad / Pind Daan)</option>
                  <option value="Rajgir">Rajgir (Glass Bridge &amp; Ropeway)</option>
                  <option value="Patna">Patna (Golghar &amp; Patna Sahib)</option>
                  <option value="Nalanda">Nalanda University Ruins</option>
                </select>
                <span className="text-[11px] text-gray-500 font-medium truncate block">
                  Select preferred circuit
                </span>
              </div>

              {/* DEPARTURE DATE Column */}
              <div className="bg-white p-3.5 rounded-lg border border-transparent hover:border-blue-400 transition-colors cursor-pointer group">
                <span className="text-[11px] uppercase font-bold text-gray-400 block tracking-wider flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-orange-500" /> DEPART DATE
                </span>
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  className="w-full text-base sm:text-lg font-black text-gray-900 bg-transparent focus:outline-none cursor-pointer mt-0.5"
                />
                <span className="text-[11px] text-gray-500 font-medium truncate block">
                  Easy flexible cancellation
                </span>
              </div>

              {/* PASSENGERS & VEHICLE Column */}
              <div className="bg-white p-3.5 rounded-lg border border-transparent hover:border-blue-400 transition-colors cursor-pointer group">
                <span className="text-[11px] uppercase font-bold text-gray-400 block tracking-wider flex items-center gap-1">
                  <Users className="w-3 h-3 text-sky-500" /> TRAVELERS &amp; VEHICLE
                </span>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full text-base sm:text-lg font-black text-gray-900 bg-transparent focus:outline-none cursor-pointer mt-0.5"
                >
                  <option value="2 Adults, Sedan AC">2-3 Guests (Sedan / Dzire)</option>
                  <option value="4-6 Adults, Innova AC">4-6 Guests (Innova Crysta)</option>
                  <option value="8-12 Adults, Tempo AC">8-12 Group (Deluxe Tempo)</option>
                  <option value="20+ Monks/Pilgrims, Bus">20+ Group (Deluxe Bus)</option>
                </select>
                <span className="text-[11px] text-gray-500 font-medium truncate block">
                  Sanitized, GPS Enabled
                </span>
              </div>

            </div>

            {/* Bottom Special Fares & MMT Search Button */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
              
              {/* Fare Option Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-gray-500 mr-1">Special Fares:</span>
                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold border border-orange-200">
                  ⚡ Regular Fares
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200 cursor-pointer">
                  Senior Citizen / Pilgrim
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-50 hover:bg-gray-100 text-gray-600 text-xs font-medium border border-gray-200 cursor-pointer">
                  Buddhist Group / Monks
                </span>
              </div>

              {/* Search Action Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black text-sm uppercase tracking-wider rounded-lg shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-102"
              >
                <Search className="w-5 h-5" /> SEARCH {activeCategory.toUpperCase()}
              </button>

            </div>
          </form>

        </div>

        {/* Quick Offer Strips Under Search (MMT Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-black text-sm">
              ₹500
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">Use Code MAX500</h4>
              <p className="text-[11px] text-gray-500">Get ₹500 instant off on your first Bihar tour booking.</p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">100% Sanitized Fleet</h4>
              <p className="text-[11px] text-gray-500">Verified commercial chauffeurs with zero cancellation fees.</p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-4 rounded-lg border border-white/20 shadow-sm flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-xs sm:text-sm">4.9/5 Star Guest Rating</h4>
              <p className="text-[11px] text-gray-500">Over 25,000+ national &amp; international pilgrims hosted.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
