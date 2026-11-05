import Navbar from "@/components/Navbar";
import LocationsSection from "@/components/LocationsSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tour Locations — Bodhgaya, Gaya, Patna & Rajgir | Max Tour & Travel",
  description: "Explore in-depth tourist destinations in Bihar: Bodhgaya Mahabodhi Temple, Gaya Vishnupad, Patna Golghar & Sahib, and Rajgir Glass Bridge.",
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-sky-700 text-white py-16 px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
            DESTINATION DIRECTORY
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Our 4 Core Tour Locations
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Detailed guides, sacred spots, travel distances, and verified transport options for Bodhgaya, Gaya, Patna, and Rajgir.
          </p>
        </div>
        <LocationsSection />
      </main>
      <Footer />
    </div>
  );
}
