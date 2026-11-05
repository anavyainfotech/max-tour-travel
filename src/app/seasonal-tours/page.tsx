import Navbar from "@/components/Navbar";
import AllToursSection from "@/components/AllToursSection";
import Footer from "@/components/Footer";
import { Snowflake, Sun, CloudRain, Sparkles } from "lucide-react";

export const metadata = {
  title: "Seasonal Tours — Max Tour & Travel",
  description: "Winter specials, pilgrimage season packages, and monsoon green tours across Bodhgaya, Rajgir, Gaya and Patna.",
};

export default function SeasonalToursPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-sky-700 via-indigo-700 to-orange-600 text-white py-16 px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
            CURATED FOR EVERY WEATHER &amp; FESTIVAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Seasonal Tour Packages
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Experience Bihar in its best seasons: pleasant winter pilgrimages, Pitrupaksha Gaya special packages, and monsoon hill trips to Rajgir.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold">
              <Snowflake className="w-4 h-4 text-sky-300" /> Winter Specials (Oct - Mar)
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold">
              <Sparkles className="w-4 h-4 text-amber-300" /> Pilgrimage Season (Pitrupaksha &amp; Buddha Purnima)
            </div>
            <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 text-xs font-semibold">
              <CloudRain className="w-4 h-4 text-emerald-300" /> Green Rajgir Hills (Jul - Sep)
            </div>
          </div>
        </div>

        <AllToursSection />
      </main>
      <Footer />
    </div>
  );
}
