import Navbar from "@/components/Navbar";
import AllToursSection from "@/components/AllToursSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "All Tour Packages — Max Tour & Travel",
  description: "Browse comprehensive tour packages across Bodhgaya, Gaya, Patna and Rajgir with customized vehicle choices: Car, Bus, and Flight assistance.",
};

export default function ToursPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-sky-700 text-white py-16 px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
            DESTINATION &amp; VEHICLE PACKAGES
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            All Bihar Tour Packages
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Choose from sacred Bodhgaya Buddhist retreats, holy Gaya Pind Daan darshans, Rajgir Glass Bridge adventures, and Patna cultural excursions.
          </p>
        </div>
        <AllToursSection />
      </main>
      <Footer />
    </div>
  );
}
