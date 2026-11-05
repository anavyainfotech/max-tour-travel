"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Car, 
  Bus, 
  Plane, 
  Hotel, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  User, 
  Calendar, 
  ShieldCheck,
  Send,
  Star,
  Sparkles
} from "lucide-react";
import confetti from "canvas-confetti";

export default function TicketBookingSection() {
  const [activeTab, setActiveTab] = useState<"car" | "bus" | "flight" | "hotel">("car");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Bodhgaya",
    travelDate: "",
    passengers: "2",
    vehicleModel: "Innova Crysta AC",
    specialRequest: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  return (
    <section id="ticket-booking" className="py-16 px-4 bg-[#f4f7fb]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-1">
              INSTANT CONFIRMATION
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              Book Tickets, Cabs &amp; Stays in Bihar
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
              Select your service, choose travel dates and get instant quotation with zero commission.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-gray-500 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
              ⚡ Instant WhatsApp Confirmation
            </span>
          </div>
        </div>

        {/* MMT Category Tabs */}
        <div className="bg-white rounded-lg p-2 shadow-sm border border-gray-200 flex flex-wrap gap-2 mb-6">
          <button
            type="button"
            onClick={() => setActiveTab("car")}
            className={`flex-1 min-w-[130px] py-3 px-4 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "car"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Car className="w-4 h-4" />
            <span>Outstation Cab</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("bus")}
            className={`flex-1 min-w-[130px] py-3 px-4 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "bus"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Bus className="w-4 h-4" />
            <span>Deluxe Bus</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("flight")}
            className={`flex-1 min-w-[130px] py-3 px-4 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "flight"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Plane className="w-4 h-4" />
            <span>Flight / Train</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("hotel")}
            className={`flex-1 min-w-[130px] py-3 px-4 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
              activeTab === "hotel"
                ? "bg-orange-500 text-white shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <Hotel className="w-4 h-4" />
            <span>Hotel Stay</span>
          </button>
        </div>

        {/* Tab Detail Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Feature Showcase Card */}
          <div className="lg:col-span-5 bg-white rounded-lg p-6 border border-gray-200 shadow-sm space-y-5">
            {activeTab === "car" && (
              <>
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/luxury-travel.jpg"
                    alt="Car Ticket Rental"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-md flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-orange-400" /> Sedan &amp; Innova Crysta
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Outstation Chauffeur Cabs &amp; Airport Taxi
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Guaranteed on-time pickup from Gaya International Airport (GAY), Patna Airport (PAT), and round-trips to Bodhgaya, Rajgir, and Nalanda.
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Commercial Yellow Plate verified luxury vehicles</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>All Tolls, State Taxes &amp; Driver Allowances Included</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Zero Cancellation fee up to 6 hours before journey</span>
                  </div>
                </div>
                <div className="p-3.5 bg-orange-50 rounded-lg border border-orange-200 flex items-center justify-between">
                  <span className="text-xs text-orange-700 font-bold">Gaya Airport ⇄ Bodhgaya Taxi</span>
                  <span className="text-base font-black text-gray-900">₹799 Only</span>
                </div>
              </>
            )}

            {activeTab === "bus" && (
              <>
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/luxury-travel.jpg"
                    alt="Bus Ticket Booking"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-md flex items-center gap-1.5">
                    <Bus className="w-3.5 h-3.5 text-sky-400" /> AC Volvo &amp; Mini-Coaches
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Deluxe Pilgrim &amp; Tourist Group Bus Booking
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Comfortable pushback seating buses for 17 to 45 passengers. Ideal for Buddhist meditation groups, family marriages, and heritage circuits.
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Air suspension with high panoramic windows</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Dedicated onboard luggage helper &amp; route planner</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Full Bihar Buddhist circuit charter packages</span>
                  </div>
                </div>
                <div className="p-3.5 bg-sky-50 rounded-lg border border-sky-200 flex items-center justify-between">
                  <span className="text-xs text-sky-700 font-bold">Patna ⇄ Bodhgaya Daily Coach</span>
                  <span className="text-base font-black text-gray-900">₹499 / Seat</span>
                </div>
              </>
            )}

            {activeTab === "flight" && (
              <>
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/patna.jpg"
                    alt="Flight Ticket Assistance"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-md flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-purple-400" /> Confirmed Ticketing
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Flight &amp; Confirmed Train Booking Desk
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Domestic and international ticketing for Gaya Airport (seasonal charters from Bangkok, Colombo, Paro) and Patna Airport with instant seat selection.
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Direct connection with Indigo, Air India, SpiceJet</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Vande Bharat &amp; Rajdhani Tatkal quota assistance</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>24x7 boarding gate &amp; terminal assistance</span>
                  </div>
                </div>
                <div className="p-3.5 bg-purple-50 rounded-lg border border-purple-200 flex items-center justify-between">
                  <span className="text-xs text-purple-700 font-bold">Delhi ⇄ Gaya / Patna Fares</span>
                  <span className="text-base font-black text-gray-900">Best Price Assured</span>
                </div>
              </>
            )}

            {activeTab === "hotel" && (
              <>
                <div className="relative w-full h-48 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src="/images/bodhgaya.jpg"
                    alt="Hotel Booking"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-md flex items-center gap-1.5">
                    <Hotel className="w-3.5 h-3.5 text-emerald-400" /> Handpicked Stays
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  3★, 4★ &amp; Sacred Temple Heritage Hotels
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  Hand-verified properties located within walking radius of Mahabodhi Temple and Vishnupad Ghats. Free Wi-Fi, 24x7 hot water, and pure satvik dining.
                </p>
                <div className="space-y-2.5 pt-1">
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Complimentary breakfast buffet &amp; mineral water</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Pay at hotel option available</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Special Pitrupaksha &amp; Buddha Jayanti group tariffs</span>
                  </div>
                </div>
                <div className="p-3.5 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-between">
                  <span className="text-xs text-emerald-700 font-bold">Bodhgaya AC Deluxe Room</span>
                  <span className="text-base font-black text-gray-900">from ₹1,499 / Night</span>
                </div>
              </>
            )}
          </div>

          {/* Right Live Booking Form (MMT Clean Style) */}
          <div className="lg:col-span-7 bg-white rounded-lg p-6 sm:p-8 border border-gray-200 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">
                  Booking Request Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-gray-900">{formData.name}</strong>. Our booking officer will call or WhatsApp you on <strong className="text-gray-900">{formData.phone}</strong> within 10 minutes with vehicle number and driver details.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-lg bg-orange-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition-colors cursor-pointer"
                >
                  Book Another Journey
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-gray-100 pb-3 mb-2">
                  <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest block">
                    FAST CHECKOUT PORTAL
                  </span>
                  <h3 className="text-lg sm:text-xl font-black text-gray-900">
                    Enter Traveler &amp; Schedule Details
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Lead Traveler Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">WhatsApp / Mobile Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Destination *</label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs sm:text-sm font-medium bg-gray-50 focus:bg-white"
                    >
                      <option value="Bodhgaya">Bodhgaya</option>
                      <option value="Gaya">Gaya</option>
                      <option value="Patna">Patna</option>
                      <option value="Rajgir">Rajgir</option>
                      <option value="All Bihar Circuit">All 4 Cities Circuit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Journey Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs sm:text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Guests / Vehicle</label>
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs sm:text-sm font-medium bg-gray-50 focus:bg-white"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2-3">2-3 (Dzire / Sedan)</option>
                      <option value="4-6">4-6 (Innova Crysta)</option>
                      <option value="8-12">8-12 (Deluxe Tempo)</option>
                      <option value="20+">20+ (Tourist Coach)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Special Travel Preferences (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Airport pickup time, Pind Daan priest arrangement, hotel near temple..."
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs sm:text-sm font-medium"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs sm:text-sm uppercase tracking-wider shadow-md shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Confirm &amp; Get Instant Quote
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2">
                    🔒 Guaranteed Best Tariff. Instant callback within 10 minutes.
                  </p>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
