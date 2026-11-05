import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, HeartHandshake, Compass, Users, CheckCircle2, Phone } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About Us — Max Tour & Travel",
  description: "Learn about Max Tour & Travel, Bihar's most trusted travel management company with 12+ years experience serving pilgrims and vacationers.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-sky-700 text-white py-16 px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
            WHO WE ARE
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            About Max Tour &amp; Travel
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Delivering authentic hospitality, spiritual peace of mind, and modern transportation infrastructure across sacred Bihar.
          </p>
        </div>

        {/* Detailed Story Content */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              
              <div className="lg:col-span-7 space-y-6 text-gray-700">
                <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">
                  OUR MISSION &amp; PHILOSOPHY
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
                  Transforming Pilgrimage &amp; Holidays in Bihar into Soul-Stirring Experiences
                </h2>
                <p className="text-base font-light leading-relaxed">
                  Founded with a deep love for Bihar&apos;s rich spiritual heritage, <strong className="text-gray-900 font-semibold">Max Tour &amp; Travel</strong> was born to eliminate travel uncertainties for visitors. Visiting the enlightenment seat of Lord Buddha in Bodhgaya or conducting ancestral rituals in Gaya should be moments of pure contemplation, not stressful negotiations with touts or unreliable cabs.
                </p>
                <p className="text-base font-light leading-relaxed">
                  Over the past 12 years, we have systematically built our own fleet of sanitized vehicles, established certified local tour guide networks, and tied up with verified 3★ and 4★ hotels so every guest experiences warmth, punctuality, and complete peace of mind.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 text-center">
                    <span className="text-3xl font-black text-orange-600 block">25,000+</span>
                    <span className="text-xs text-gray-600 font-medium">Pilgrims Hosted</span>
                  </div>
                  <div className="p-4 bg-sky-50 rounded-2xl border border-sky-100 text-center">
                    <span className="text-3xl font-black text-sky-600 block">50+</span>
                    <span className="text-xs text-gray-600 font-medium">Luxury Vehicles</span>
                  </div>
                  <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 text-center">
                    <span className="text-3xl font-black text-amber-600 block">4.9 / 5</span>
                    <span className="text-xs text-gray-600 font-medium">Google Rating</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/bodhgaya.jpg"
                    alt="Bodhgaya Mahabodhi Temple"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

            </div>

            {/* Why Choose Us Grid */}
            <div className="border-t border-gray-100 pt-16">
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 text-center mb-12">
                Why Travelers Trust Max Tour &amp; Travel
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-3xl bg-orange-50/50 border border-orange-100 space-y-3">
                  <ShieldCheck className="w-8 h-8 text-orange-600" />
                  <h4 className="text-xl font-bold text-gray-900">100% Certified Drivers</h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Commercial licensed, courteous drivers who know local temple shortcuts, historical facts, and speak polite Hindi and English.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-sky-50/50 border border-sky-100 space-y-3">
                  <Award className="w-8 h-8 text-sky-600" />
                  <h4 className="text-xl font-bold text-gray-900">Transparent Fixed Rates</h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Zero hidden surcharge. Toll taxes, parking slips, and driver night allowances are clearly factored into your package.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100 space-y-3">
                  <HeartHandshake className="w-8 h-8 text-emerald-600" />
                  <h4 className="text-xl font-bold text-gray-900">24/7 On-Ground Support</h4>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    Our on-ground support desk in Bodhgaya and Patna ensures instant assistance if flight timings change or sudden plans evolve.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 sm:p-12 text-white text-center shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                Ready to Experience Sacred Bihar with Comfort?
              </h3>
              <p className="text-white/90 text-sm max-w-xl mx-auto mb-6 font-light leading-relaxed">
                Speak directly with our founders and trip planners for custom itineraries and group discounts.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="tel:+919876543210"
                  className="px-8 py-3.5 rounded-full bg-white text-orange-600 font-bold text-xs uppercase tracking-wider hover:bg-orange-50 transition-all flex items-center gap-2 shadow"
                >
                  <Phone className="w-4 h-4" /> Call +91 98765 43210
                </a>
                <Link
                  href="/booking"
                  className="px-8 py-3.5 rounded-full border-2 border-white text-white font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-all"
                >
                  Book Instant Tickets
                </Link>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
