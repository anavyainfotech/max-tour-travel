"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Eye, ShieldCheck, Landmark } from "lucide-react";

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
    desc: "Home to the revered UNESCO Mahabodhi Temple, the sacred Bodhi Tree where Siddhartha Gautama attained enlightenment, 80ft Great Buddha Statue, and monasteries built by Japan, Thailand, Sri Lanka, Bhutan & Vietnam.",
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
    hindiName: "राजगीर",
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

export default function LocationsSection({ onSelectLocation }: { onSelectLocation: (loc: string) => void }) {
  return (
    <section id="locations" className="py-20 px-4 bg-orange-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-600 block mb-2">
            DESTINATION SPOTLIGHT
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Popular Tour Locations
          </h2>
          <p className="text-base text-gray-600 font-normal">
            Deep dive into Bihar&apos;s 4 most sought-after cultural, spiritual, and adventure travel hubs.
          </p>
        </div>

        {/* 4 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locationsData.map((loc) => (
            <div
              key={loc.name}
              className="bg-white rounded-3xl overflow-hidden border border-orange-100 shadow-md hover:shadow-2xl hover:border-orange-300 transition-all flex flex-col sm:flex-row group"
            >
              {/* Image side */}
              <div className="sm:w-1/2 relative h-64 sm:h-auto min-h-[260px] overflow-hidden bg-gray-100">
                <Image
                  src={loc.image}
                  alt={loc.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent sm:hidden" />
                <div className="absolute bottom-4 left-4 sm:top-4 sm:left-4 z-10">
                  <span className="px-3.5 py-1 rounded-full bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-md">
                    {loc.name}
                  </span>
                </div>
              </div>

              {/* Content side */}
              <div className="sm:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">
                      {loc.hindiName}
                    </span>
                    <span className="text-xs font-semibold text-gray-400">
                      {loc.toursCount}+ Packages
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {loc.tagline}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-4">
                    {loc.desc}
                  </p>

                  <div className="mb-4">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">
                      Must-Visit Attractions:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.keySpots.map((spot, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-orange-50 text-orange-800 text-[11px] font-medium"
                        >
                          {spot}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <button
                    onClick={() => onSelectLocation(loc.name)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    View All {loc.name} Tours <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href="#ticket-booking"
                    className="p-2 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white transition-colors"
                    title="Book ticket to this destination"
                  >
                    <Landmark className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
