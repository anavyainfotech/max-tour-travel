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
  Sparkles
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
        <div id="search-results" className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-gray-100 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-1">
              CURATED TOUR PACKAGES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Top Pilgrimage &amp; Holiday Packages
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
              Handcrafted itineraries featuring verified stays, private cabs, entry passes &amp; dedicated guides.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold rounded-lg flex items-center gap-1.5">
              <BadgePercent className="w-4 h-4 text-amber-600" /> ₹500 OFF with code MAX500
            </span>
          </div>
        </div>

        {/* MMT Style Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-[#f8fafc] p-3 rounded-lg border border-gray-200">
          {/* Location Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-gray-400 mr-2 uppercase">Destinations:</span>
            {["All", "Bodhgaya", "Gaya", "Patna", "Rajgir"].map((loc) => {
              const isActive = (loc === "All" && !activeLocationFilter) || activeLocationFilter.toLowerCase() === loc.toLowerCase();
              return (
                <button
                  key={loc}
                  onClick={() => setActiveLocationFilter(loc === "All" ? "" : loc)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-orange-500 text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
                  }`}
                >
                  {loc === "All" ? "All Locations" : loc}
                </button>
              );
            })}
          </div>

          {/* Seasonal Filters */}
          <div id="seasonal-tours" className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-gray-400 mr-2 uppercase">Season:</span>
            {["All", "Winter Special", "Pilgrimage Season", "All Season"].map((season) => {
              const isActive = activeSeasonFilter === season;
              return (
                <button
                  key={season}
                  onClick={() => setActiveSeasonFilter(season)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-sky-600 text-white shadow-sm"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-sky-300"
                  }`}
                >
                  {season}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tour Cards Grid (MMT Style: rounded-lg with clean pricing and badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length === 0 ? (
            <div className="col-span-full py-16 text-center bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-600 font-medium mb-3">No tours matched your selected filters.</p>
              <button
                onClick={() => {
                  setActiveLocationFilter("");
                  setActiveSeasonFilter("All");
                }}
                className="px-5 py-2 rounded-lg bg-orange-500 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filtered.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Tour Image with Badges */}
                  <div className="relative w-full h-52 overflow-hidden bg-gray-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <span className="px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-white font-bold text-[11px] uppercase tracking-wider flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-orange-400" /> {pkg.location}
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-orange-600 text-white font-bold text-[10px] uppercase tracking-wider">
                        {pkg.season}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-gray-900 px-2 py-1 rounded-md text-xs font-black flex items-center gap-1 shadow-sm">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      <span>{pkg.rating}</span>
                      <span className="text-gray-400 font-normal text-[11px]">({pkg.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 font-medium">
                      <span className="flex items-center gap-1 text-gray-700 font-semibold">
                        <Clock className="w-3.5 h-3.5 text-orange-500" /> {pkg.duration}
                      </span>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        {pkg.vehicles.includes("Car") && <Car className="w-3.5 h-3.5 text-orange-500" />}
                        {pkg.vehicles.includes("Bus") && <Bus className="w-3.5 h-3.5 text-sky-500" />}
                        {pkg.vehicles.includes("Flight/Train") && <Plane className="w-3.5 h-3.5 text-purple-500" />}
                        <span className="text-gray-600">{pkg.vehicles.join(" / ")}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2 leading-snug line-clamp-1">
                      {pkg.title}
                    </h3>

                    <p className="text-xs text-gray-600 font-normal leading-relaxed mb-4 line-clamp-2">
                      {pkg.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 mb-2 bg-gray-50 p-2.5 rounded-lg border border-gray-100">
                      {pkg.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[11px] text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and Action Footer (MMT Style) */}
                <div className="p-5 pt-3 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-medium">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-gray-900">
                        ₹{pkg.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-[11px] text-gray-500 font-normal">/ person</span>
                    </div>
                  </div>

                  <Link
                    href="/booking"
                    className="px-5 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-black text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    Book Now <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
