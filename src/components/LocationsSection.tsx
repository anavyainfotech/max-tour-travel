"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Landmark, Sparkles, Star } from "lucide-react";

interface LocationInfo {
  name: "Gaya" | "Bodhgaya" | "Rajgir" | "Patna";
  hindiName: string;
  tagline: string;
  desc: string;
  keySpots: string[];
  image: string;
  toursCount: number;
  highlightTag: string;
}

const locationsData: LocationInfo[] = [
  {
    name: "Gaya",
    hindiName: "गया जी",
    tagline: "Holy Land of Ancestral Salvation & Pind Daan",
    desc: "Renowned globally for ancestral Pind Daan rituals along the holy Falgu river, the ancient Vishnupad Temple bearing footprints of Lord Vishnu, and Mangla Gauri Shaktipeeth temple atop Bhasmakut hill.",
    keySpots: ["Vishnupad Temple", "Falgu River Ghats", "Akshayavat Banyan Tree", "Mangla Gauri Shaktipeeth"],
    image: "/images/gaya.jpg",
    toursCount: 14,
    highlightTag: "Must Visit Pilgrimage"
  },
  {
    name: "Bodhgaya",
    hindiName: "बोधगया",
    tagline: "The Cradle of Buddhist Enlightenment",
    desc: "Home to the revered UNESCO Mahabodhi Temple, the sacred Bodhi Tree where Siddhartha Gautama attained enlightenment, 80ft Great Buddha Statue, and international Buddhist monasteries.",
    keySpots: ["Mahabodhi Temple", "Sacred Bodhi Tree", "80-ft Great Buddha Statue", "Dungeshwari Cave Temples"],
    image: "/images/bodhgaya.jpg",
    toursCount: 18,
    highlightTag: "UNESCO World Heritage"
  },
  {
    name: "Rajgir",
    hindiName: "राजगीर",
    tagline: "Valley of Hot Springs, Glass Skywalk & Peace Stupa",
    desc: "Ancient Magadha capital surrounded by seven scenic hills. Famous for the aerial ropeway to Vishwa Shanti Stupa on Gridhakuta hill, healing hot water sulfur springs (Brahmakund), India's famous Glass Bridge, and Nalanda ruins.",
    keySpots: ["Vishwa Shanti Stupa", "Rajgir Glass Bridge", "Hot Water Springs", "Nalanda University Ruins"],
    image: "/images/rajgir.jpg",
    toursCount: 15,
    highlightTag: "Adventure & Heritage"
  },
  {
    name: "Patna",
    hindiName: "पटना",
    tagline: "Historic Capital & Spiritual Gateway of Bihar",
    desc: "Ancient Pataliputra city featuring the iconic granary dome Golghar, the revered Takht Sri Patna Sahib (birthplace of Guru Gobind Singh Ji), world-class Bihar Museum, and magnificent evening Ganga Aarti at Gandhi Ghat.",
    keySpots: ["Takht Sri Patna Sahib", "Golghar Monument", "Bihar Museum", "Ganga Aarti Ghat"],
    image: "/images/patna.jpg",
    toursCount: 10,
    highlightTag: "Capital Gateway"
  }
];

export default function LocationsSection({ onSelectLocation }: { onSelectLocation?: (loc: string) => void }) {
  return (
    <section id="locations" className="py-16 px-4 bg-slate-50/70">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE SACRED BIHAR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Popular Bihar Circuit Destinations
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
              Explore authentic spiritual heritage with handpicked accommodation and verified cab connectivity.
            </p>
          </div>

          <Link
            href="/locations"
            className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1.5 uppercase tracking-wider"
          >
            <span>Explore All 4 Circuits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Locations Grid (MMT Style: rounded-3xl with clean borders and cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locationsData.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col sm:flex-row group"
            >
              {/* Image side */}
              <div className="sm:w-5/12 relative h-60 sm:h-auto min-h-[220px] overflow-hidden bg-slate-100">
                <Image
                  src={loc.image}
                  alt={`${loc.name} - ${loc.tagline}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent sm:hidden" />
                
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                  <span className="px-3 py-1 rounded-full bg-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-md">
                    {loc.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 font-bold text-[10px]">
                    {loc.hindiName}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-lg bg-white/90 backdrop-blur-sm text-slate-800 font-bold text-[11px] shadow-sm">
                    {loc.highlightTag}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="sm:w-7/12 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider">
                      {loc.toursCount}+ Tours &amp; Cabs
                    </span>
                    <span className="text-xs text-amber-500 font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-500" /> 4.9
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {loc.name}
                  </h3>
                  
                  <p className="text-xs text-orange-600/90 font-semibold mb-2 line-clamp-1">
                    {loc.tagline}
                  </p>

                  <p className="text-xs text-slate-500 font-normal line-clamp-2 leading-relaxed mb-4">
                    {loc.desc}
                  </p>

                  {/* Key attractions pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {loc.keySpots.slice(0, 3).map((spot, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-medium"
                      >
                        {spot}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-slate-500">
                    Daily AC Cab Service
                  </span>
                  <Link
                    href={`/tours?location=${encodeURIComponent(loc.name)}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wide group/btn"
                  >
                    <span>View Tours</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}