"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Landmark } from "lucide-react";

interface LocationInfo {
  name: "Bodhgaya" | "Gaya" | "Patna" | "Rajgir";
  hindiName: string;
  tagline: string;
  desc: string;
  keySpots: string[];
  image: string;
  toursCount: number;
}

const locationsData: LocationInfo[] = [
  {
    name: "Bodhgaya",
    hindiName: "बोधगया",
    tagline: "The Cradle of Buddhist Enlightenment",
    desc: "Home to the revered UNESCO Mahabodhi Temple, the sacred Bodhi Tree where Siddhartha Gautama attained enlightenment, 80ft Great Buddha Statue, and international Buddhist monasteries.",
    keySpots: ["Mahabodhi Temple", "Sacred Bodhi Tree", "80-ft Great Buddha Statue", "Dungeshwari Cave Temples"],
    image: "/images/bodhgaya.jpg",
    toursCount: 12
  },
  {
    name: "Gaya",
    hindiName: "गया जी",
    tagline: "Holy Land of Ancestral Salvation & Pind Daan",
    desc: "Renowned globally for ancestral Pind Daan rituals along the holy Falgu river, the ancient Vishnupad Temple bearing footprints of Lord Vishnu, and Mangla Gauri Shaktipeeth temple atop Bhasmakut hill.",
    keySpots: ["Vishnupad Temple", "Falgu River Ghats", "Akshayavat Banyan Tree", "Mangla Gauri Shaktipeeth"],
    image: "/images/gaya.jpg",
    toursCount: 8
  },
  {
    name: "Rajgir",
    hindiName: "राजगीr",
    tagline: "Valley of Hot Springs, Glass Skywalk & Peace Stupa",
    desc: "Ancient capital surrounded by seven scenic hills. Famous for the aerial ropeway to Vishwa Shanti Stupa on Gridhakuta hill, healing hot water sulfur springs (Brahmakund), India's famous Glass Bridge, and Nalanda University ruins.",
    keySpots: ["Vishwa Shanti Stupa", "Rajgir Glass Bridge", "Hot Water Springs", "Nalanda University Ruins"],
    image: "/images/rajgir.jpg",
    toursCount: 15
  },
  {
    name: "Patna",
    hindiName: "पटना",
    tagline: "Historic Capital & Spiritual Gateway of Bihar",
    desc: "Ancient Pataliputra city featuring the iconic granary dome Golghar, the revered Takht Sri Patna Sahib (birthplace of Guru Gobind Singh Ji), world-class Bihar Museum, and magnificent evening Ganga Aarti at Gandhi Ghat.",
    keySpots: ["Takht Sri Patna Sahib", "Golghar Monument", "Bihar Museum", "Ganga Aarti Ghat"],
    image: "/images/patna.jpg",
    toursCount: 10
  }
];

export default function LocationsSection({ onSelectLocation }: { onSelectLocation?: (loc: string) => void }) {
  return (
    <section id="locations" className="py-16 px-4 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-1">
              DESTINATION DIRECTORY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Popular Bihar Tour Destinations
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
              Explore heritage circuits with handpicked accommodation and verified cab connectivity.
            </p>
          </div>

          <Link
            href="/tours"
            className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1 uppercase tracking-wider"
          >
            Explore All 40+ Tours <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Locations Grid (MMT Style: rounded-lg) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locationsData.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col sm:flex-row group"
            >
              {/* Image side */}
              <div className="sm:w-5/12 relative h-56 sm:h-auto min-h-[220px] overflow-hidden bg-gray-100">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm">
                    {loc.name}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="sm:w-7/12 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                      {loc.hindiName}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {loc.toursCount}+ Packages
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-1">
                    {loc.tagline}
                  </h3>

                  <p className="text-xs text-gray-600 font-normal leading-relaxed mb-3 line-clamp-2">
                    {loc.desc}
                  </p>

                  <div className="mb-3">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                      Key Highlights:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {loc.keySpots.slice(0, 3).map((spot, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded-md bg-gray-50 border border-gray-200 text-gray-700 text-[10px] font-medium"
                        >
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <Link
                    href={`/tours?location=${encodeURIComponent(loc.name)}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wider group-hover:translate-x-1 transition-transform"
                  >
                    View Packages <ArrowRight className="w-3 h-3" />
                  </Link>

                  <Link
                    href={`/booking?destination=${encodeURIComponent(loc.name)}`}
                    className="px-3 py-1.5 rounded-md bg-orange-50 hover:bg-orange-500 text-orange-600 hover:text-white text-xs font-bold transition-colors flex items-center gap-1"
                  >
                    <Landmark className="w-3.5 h-3.5" /> Book Cab
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
