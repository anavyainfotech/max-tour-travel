"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Star, 
  Car, 
  Bus, 
  Plane, 
  ArrowRight, 
  CheckCircle2, 
  BadgePercent,
  Sparkles,
  ShieldCheck,
  Calendar
} from "lucide-react";
import { tourPackages } from "@/data/travelData";

interface ToursProps {
  filterLocation?: string;
  filterVehicle?: string;
}

export default function AllToursSection({ filterLocation = "", filterVehicle = "" }: ToursProps) {
  const [activeLocationFilter, setActiveLocationFilter] = useState(filterLocation);
  const [activeSeasonFilter, setActiveSeasonFilter] = useState("All");

  const filtered = tourPackages.filter((pkg) => {
    const matchesLoc = !activeLocationFilter || pkg.location.toLowerCase() === activeLocationFilter.toLowerCase();
    const matchesSeason = activeSeasonFilter === "All" || pkg.season === activeSeasonFilter;
    const matchesVeh = !filterVehicle || pkg.vehicles.some((v) => v.toLowerCase().includes(filterVehicle.toLowerCase()));
    return matchesLoc && matchesSeason && matchesVeh;
  });

  return (
    <section id="all-tours" className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header (MMT Travel Style) */}
        <div id="search-results" className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-100 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>HANDCRAFTED ITINERARIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Top Gaya &amp; Buddhist Holiday Packages
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
              Complete itineraries featuring verified hotel stays, sanitized private cabs, VIP darshan passes &amp; local guides.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold rounded-full flex items-center gap-1.5 shadow-2xs">
              <BadgePercent className="w-4 h-4 text-amber-600" /> ₹500 Instant OFF with code MAX500
            </span>
          </div>
        </div>

        {/* MMT Style Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-slate-50/90 p-3 rounded-2xl border border-slate-200/80">
          
          {/* Location Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 mr-2 uppercase tracking-wide">Destination:</span>
            {["All", "Gaya", "Bodhgaya", "Rajgir", "Patna"].map((loc) => {
              const isActive = (loc === "All" && !activeLocationFilter) || activeLocationFilter.toLowerCase() === loc.toLowerCase();
              return (
                <button
                  key={loc}
                  onClick={() => setActiveLocationFilter(loc === "All" ? "" : loc)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-orange-300 hover:text-orange-600"
                  }`}
                >
                  {loc === "All" ? "All Circuits" : loc}
                </button>
              );
            })}
          </div>

          {/* Seasonal Filters */}
          <div id="seasonal-tours" className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-400 mr-2 uppercase tracking-wide">Filter:</span>
            {["All", "Winter Special", "Pilgrimage Season", "All Season"].map((season) => {
              const isActive = activeSeasonFilter === season;
              return (
                <button
                  key={season}
                  onClick={() => setActiveSeasonFilter(season)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {season}
                </button>
              );
            })}
          </div>

        </div>

        {/* Tour Cards Grid (MMT Style: rounded-3xl with clean borders and pricing tags) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={pkg.image}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white font-bold text-[11px] shadow-sm">
                      {pkg.location}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-orange-600/90 backdrop-blur-md text-white font-semibold text-[10px]">
                      {pkg.season}
                    </span>
                  </div>

                  {/* Rating badge */}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-xs font-bold text-slate-800 flex items-center gap-1 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{pkg.rating}</span>
                    <span className="text-[10px] text-slate-400 font-normal">({pkg.reviewsCount})</span>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1 drop-shadow">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <h3 className="font-extrabold text-base text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-1 mb-2">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal line-clamp-2 leading-relaxed mb-4">
                    {pkg.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 mb-4 bg-slate-50 p-3 rounded-2xl border border-slate-100">
                    {pkg.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Transport inclusion badges */}
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <span className="text-[11px] font-bold text-slate-400 uppercase">Includes:</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
                      <Car className="w-3 h-3 text-orange-500" /> AC Cab
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 text-[11px] font-medium">
                      <ShieldCheck className="w-3 h-3 text-sky-500" /> Guide
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Footer: Price & MMT Action CTA */}
              <div className="px-5 py-4 bg-slate-50/70 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Starting From</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-black text-slate-900">₹{pkg.price.toLocaleString("en-IN")}</span>
                    <span className="text-[11px] text-slate-400 font-normal">/person</span>
                  </div>
                </div>

                <Link
                  href={`/booking?package=${encodeURIComponent(pkg.title)}`}
                  className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-sm transition-all flex items-center gap-1.5 group-hover:scale-105"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* View All Bottom Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Need a customized Gaya or Bodhgaya itinerary?</h4>
              <p className="text-xs text-slate-300 font-light">We arrange custom tempo travellers, multi-day monastery tours &amp; pandit services for Pind Daan.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-md"
          >
            Custom Quote
          </Link>
        </div>

      </div>
    </section>
  );
}