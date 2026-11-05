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
  Phone
} from "lucide-react";
import { tourPackages, TourPackage } from "@/data/travelData";

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
    <section id="all-tours" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div id="search-results" className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-600 block mb-2">
            EXPLORE OUR PACKAGES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            All Tours &amp; Pilgrimage Itineraries
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Covering sacred destinations across Bodhgaya, Gaya, Patna and Rajgir with customized vehicle choices.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-6 border-b border-gray-100">
          {/* Location Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase text-gray-400 mr-1">Locations:</span>
            {["All", "Bodhgaya", "Gaya", "Patna", "Rajgir"].map((loc) => {
              const isActive = (loc === "All" && !activeLocationFilter) || activeLocationFilter.toLowerCase() === loc.toLowerCase();
              return (
                <button
                  key={loc}
                  onClick={() => setActiveLocationFilter(loc === "All" ? "" : loc)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-orange-500 text-white shadow-md shadow-orange-500/25"
                      : "bg-gray-100 text-gray-700 hover:bg-orange-50"
                  }`}
                >
                  {loc === "All" ? "All Locations" : loc}
                </button>
              );
            })}
          </div>

          {/* Seasonal Filter Pills (Fulfills Seasonal Tours requirement) */}
          <div id="seasonal-tours" className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase text-gray-400 mr-1">Seasonal Tours:</span>
            {["All", "Winter Special", "Pilgrimage Season", "All Season"].map((season) => {
              const isActive = activeSeasonFilter === season;
              return (
                <button
                  key={season}
                  onClick={() => setActiveSeasonFilter(season)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/25"
                      : "bg-sky-50 text-sky-800 hover:bg-sky-100"
                  }`}
                >
                  {season}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 ? (
            <div className="col-span-full py-16 text-center bg-orange-50/50 rounded-3xl border border-orange-100">
              <p className="text-gray-600 font-medium mb-3">No tours matched your selected filters.</p>
              <button
                onClick={() => {
                  setActiveLocationFilter("");
                  setActiveSeasonFilter("All");
                }}
                className="px-5 py-2.5 rounded-full bg-orange-500 text-white text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filtered.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Tour Image with Badges */}
                  <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                    <Image
                      src={pkg.image}
                      alt={pkg.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                      <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-orange-600 font-bold text-[11px] uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> {pkg.location}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-sky-600 text-white font-bold text-[10px] uppercase tracking-wider shadow-sm">
                        {pkg.season}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                      <span>{pkg.rating}</span>
                      <span className="text-gray-300 font-normal">({pkg.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2 font-medium">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-orange-500" /> {pkg.duration}
                      </span>
                      <span>·</span>
                      <div className="flex items-center gap-1.5">
                        {pkg.vehicles.includes("Car") && <Car className="w-3.5 h-3.5 text-orange-500" />}
                        {pkg.vehicles.includes("Bus") && <Bus className="w-3.5 h-3.5 text-sky-500" />}
                        {pkg.vehicles.includes("Flight/Train") && <Plane className="w-3.5 h-3.5 text-purple-500" />}
                        <span className="text-gray-600">{pkg.vehicles.join(" / ")}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-3 leading-snug">
                      {pkg.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-4 line-clamp-2">
                      {pkg.description}
                    </p>

                    {/* Highlights bullet points */}
                    <div className="space-y-1.5 mb-4">
                      {pkg.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price and Action Footer */}
                <div className="p-6 pt-0 border-t border-gray-100 flex items-center justify-between mt-2">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-medium">Starting from</span>
                    <span className="text-2xl font-black text-orange-600">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </span>
                    <span className="text-[10px] text-gray-400 block font-normal">per person / all-incl</span>
                  </div>

                  <a
                    href="#ticket-booking"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider hover:from-orange-600 hover:to-amber-600 transition-all flex items-center gap-1.5 shadow-md shadow-orange-500/20"
                  >
                    Book Now <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
}
