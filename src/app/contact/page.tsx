import Navbar from "@/components/Navbar";
import RegistrationAndContactSection from "@/components/RegistrationAndContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us — 24/7 Helpline & Office Address | Max Tour & Travel",
  description: "Contact Max Tour & Travel via phone (+91 98765 43210), email (info@maxtourtravel.com), Instagram, Facebook, YouTube, or visit our Bodhgaya office.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-sky-700 text-white py-16 px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
            WE ARE HERE FOR YOU 24/7
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Contact Max Tour &amp; Travel
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Get instant answers regarding cab rentals, bus bookings, Buddhist pilgrimage packages, or custom itineraries.
          </p>
        </div>
        <RegistrationAndContactSection />
      </main>
      <Footer />
    </div>
  );
}
