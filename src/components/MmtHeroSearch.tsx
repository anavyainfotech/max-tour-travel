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
  Sparkles,
  ShieldCheck,
  Star,
  CheckCircle2,
  ChevronDown,
  ArrowRight
} from "lucide-react";

export default function MmtHeroSearch() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<"tours" | "cars" | "buses" | "flights" | "hotels">("tours");
  const [fromCity, setFromCity] = useState("Patna (PAT)");
  const [toCity, setToCity] = useState("Bodhgaya & Gaya");
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

  const categoryTabs = [
    { id: "tours", label: "Holiday Tours", icon: Compass, badge: "Popular" },
    { id: "cars", label: "Outstation Cabs", icon: Car, badge: "Instant" },
    { id: "buses", label: "Tourist Buses", icon: Bus, badge: null },
    { id: "flights", label: "Flight / Train", icon: Plane, badge: null },
    { id: "hotels", label: "Verified Hotels", icon: Hotel, badge: "Upto 30% Off" },
  ] as const;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b1e36] via-[#0d2e53] to-[#f5f7fa] pt-8 pb-16 px-4">
      
      {/* Background Gaya/Bodhgaya subtle backdrop glow */}
      <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
        <Image
          src="/images/gaya.jpg"
          alt="Gaya Vishnupad Temple Backdrop"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-orange-500/15 via-sky-400/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Tagline & Value Banner */}
        <div className="text-center text-white mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Bihar&apos;s #1 Dedicated Gaya &amp; Buddhist Circuit Travel Network</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15] drop-shadow-sm">
            Book Pilgrimage Tours &amp; Verified Cabs in <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200">
              Gaya, Bodhgaya, Patna &amp; Rajgir
            </span>
          </h1>
          <p className="text-sm sm:text-base text-slate-200 font-normal max-w-2xl mx-auto mt-3 drop-shadow">
            Guaranteed AC Cabs, Gaya Pind Daan rituals, Bodhgaya temple circuits &amp; handpicked boutique hotels.
          </p>
        </div>

        {/* MMT-Style Floating Super Card */}
        <div className="bg-white rounded-3xl shadow-[0_15px_40px_-5px_rgba(0,0,0,0.18)] border border-slate-100 overflow-hidden">
          
          {/* Top Category Tabs (MMT Pill Strip) */}
          <div className="flex items-center justify-start sm:justify-center border-b border-slate-100 bg-slate-50/80 overflow-x-auto scrollbar-none px-3 py-3 gap-2 sm:gap-3">
            {categoryTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`relative flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-orange-600 shadow-sm border border-orange-200/80 -translate-y-0.5"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <div className={`p-1.5 rounded-xl ${isActive ? "bg-orange-50 text-orange-600" : "bg-slate-100 text-slate-500"}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isActive ? "bg-orange-500 text-white" : "bg-slate-200 text-slate-700"
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Form Fields: Big MMT-Style Interactive Input Blocks */}
          <form onSubmit={handleSearch} className="p-4 sm:p-7">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 bg-slate-50 p-2.5 rounded-2xl border border-slate-200/90">
              
              {/* FROM Column */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-orange-400 hover:shadow-sm transition-all cursor-pointer group">
                <span className="text-[11px] uppercase font-bold text-slate-400 block tracking-wider mb-1">
                  FROM (PICKUP POINT)
                </span>
                <select
                  value={fromCity}
                  onChange={(e) => setFromCity(e.target.value)}
                  className="w-full text-base font-bold text-slate-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="Patna (PAT)">Patna (Airport / Station)</option>
                  <option value="Gaya (GAY)">Gaya (Airport / Station)</option>
                  <option value="Bodhgaya">Bodhgaya Temple Area</option>
                  <option value="Rajgir">Rajgir Town</option>
                  <option value="Varanasi">Varanasi (Kashi)</option>
                </select>
                <span className="text-[11px] text-slate-500 font-normal truncate block mt-0.5">
                  Doorstep / Airport pickup
                </span>
              </div>

              {/* TO / DESTINATION Column */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-orange-400 hover:shadow-sm transition-all cursor-pointer group">
                <span className="text-[11px] uppercase font-bold text-slate-400 block tracking-wider mb-1">
                  TO (SACRED CIRCUIT)
                </span>
                <select
                  value={toCity}
                  onChange={(e) => setToCity(e.target.value)}
                  className="w-full text-base font-bold text-orange-600 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="Bodhgaya & Gaya">Gaya &amp; Bodhgaya Circuit</option>
                  <option value="Gaya Vishnupad">Gaya (Vishnupad &amp; Pind Daan)</option>
                  <option value="Bodhgaya Mahabodhi">Bodhgaya (Mahabodhi Temple)</option>
                  <option value="Rajgir & Nalanda">Rajgir &amp; Nalanda Glass Bridge</option>
                  <option value="Patna City">Patna Sahib &amp; City Tour</option>
                </select>
                <span className="text-[11px] text-slate-500 font-normal truncate block mt-0.5">
                  Direct darshan &amp; sightseeing
                </span>
              </div>

              {/* DEPARTURE DATE Column */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-orange-400 hover:shadow-sm transition-all cursor-pointer group">
                <span className="text-[11px] uppercase font-bold text-slate-400 block tracking-wider mb-1 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-orange-500" /> TRAVEL DATE
                </span>
                <input
                  type="date"
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  className="w-full text-base font-bold text-slate-900 bg-transparent focus:outline-none cursor-pointer"
                />
                <span className="text-[11px] text-emerald-600 font-semibold truncate block mt-0.5">
                  ✓ Free rescheduling allowed
                </span>
              </div>

              {/* PASSENGERS & VEHICLE Column */}
              <div className="bg-white p-4 rounded-xl border border-slate-100 hover:border-orange-400 hover:shadow-sm transition-all cursor-pointer group">
                <span className="text-[11px] uppercase font-bold text-slate-400 block tracking-wider mb-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-sky-500" /> TRAVELERS &amp; VEHICLE
                </span>
                <select
                  value={passengers}
                  onChange={(e) => setPassengers(e.target.value)}
                  className="w-full text-base font-bold text-slate-900 bg-transparent focus:outline-none cursor-pointer"
                >
                  <option value="2-3 Guests, Swift Dzire AC">2-3 Guests (Sedan / Dzire AC)</option>
                  <option value="4-6 Guests, Innova Crysta AC">4-6 Guests (Innova Crysta AC)</option>
                  <option value="8-12 Guests, Deluxe Tempo AC">8-12 Guests (Deluxe Tempo)</option>
                  <option value="20+ Monks/Pilgrims, AC Bus">20+ Group (Deluxe AC Bus)</option>
                </select>
                <span className="text-[11px] text-slate-500 font-normal truncate block mt-0.5">
                  Chauffeur included, GPS tracked
                </span>
              </div>

            </div>

            {/* Bottom Special Fares & MMT Search Button */}
            <div className="mt-5 flex flex-wrap items-center justify-between gap-4 pt-2">
              
              {/* Fare Option Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 mr-1">Special Fare:</span>
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-full bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200/90 shadow-2xs"
                >
                  ⚡ Regular Guaranteed Fare
                </button>
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200 cursor-pointer transition-colors"
                >
                  Senior Citizen / Pind Daan Special
                </button>
                <button
                  type="button"
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200 cursor-pointer transition-colors"
                >
                  Buddhist Pilgrims &amp; Monks
                </button>
              </div>

              {/* Search Action Button */}
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-orange-500/30 transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>SEARCH {activeCategory.toUpperCase()}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </form>

        </div>

        {/* Gaya Featured Destination Quick Badges */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs text-white/90">
          <span className="text-amber-300 font-bold uppercase tracking-wider text-[11px]">Popular Circuit Searches:</span>
          <Link href="/tours" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 transition-colors">
            📍 Gaya Vishnupad Mandir &amp; Phalgu River
          </Link>
          <Link href="/tours" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 transition-colors">
            📍 Bodhgaya UNESCO Mahabodhi Temple
          </Link>
          <Link href="/tours" className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/15 transition-colors">
            📍 Rajgir Glass Skywalk &amp; Ropeway
          </Link>
        </div>

        {/* Quick Offer Strips Under Search (MMT Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-md flex items-center gap-3.5 transition-all hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 font-extrabold text-sm border border-orange-200">
              ₹500
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">Use Promo Code MAX500</h4>
              <p className="text-[11px] text-slate-500 font-normal">Get instant ₹500 off on your first Gaya or Bodhgaya tour booking.</p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-md flex items-center gap-3.5 transition-all hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">100% Verified Fleet &amp; Drivers</h4>
              <p className="text-[11px] text-slate-500 font-normal">Commercial yellow plates, police-verified chauffeurs with zero cancellation fees.</p>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-white/50 shadow-md flex items-center gap-3.5 transition-all hover:-translate-y-0.5">
            <div className="w-11 h-11 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
              <Star className="w-5 h-5 fill-amber-500" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-xs sm:text-sm">4.9/5 Star Guest Trust</h4>
              <p className="text-[11px] text-slate-500 font-normal">Over 25,000+ happy pilgrims hosted across Gaya &amp; Bihar circuit.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}