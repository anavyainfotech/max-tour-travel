"use client";

import { useState } from "react";
import Image from "next/image";
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
  CreditCard,
  Send
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
    <section id="ticket-booking" className="py-20 px-4 bg-gradient-to-b from-white via-orange-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-600 block mb-2">
            INSTANT TICKET &amp; STAY BOOKINGS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Book Car, Bus, Flight &amp; Hotel Tickets
          </h2>
          <p className="text-base text-gray-600 font-normal">
            One-stop seamless booking for your Bodhgaya, Gaya, Patna &amp; Rajgir journey with guaranteed best rates and 24x7 support.
          </p>
        </div>

        {/* 4 Ticket Category Tabs (Car, Bus, Flight/Flet, Hotel) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            type="button"
            onClick={() => setActiveTab("car")}
            className={`px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2.5 transition-all shadow-sm cursor-pointer ${
              activeTab === "car"
                ? "bg-orange-500 text-white shadow-orange-500/25 scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
            }`}
          >
            <Car className="w-5 h-5" />
            <span>Car Ticket / Cab Rental</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("bus")}
            className={`px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2.5 transition-all shadow-sm cursor-pointer ${
              activeTab === "bus"
                ? "bg-orange-500 text-white shadow-orange-500/25 scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
            }`}
          >
            <Bus className="w-5 h-5" />
            <span>Bus Ticket Booking</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("flight")}
            className={`px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2.5 transition-all shadow-sm cursor-pointer ${
              activeTab === "flight"
                ? "bg-orange-500 text-white shadow-orange-500/25 scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
            }`}
          >
            <Plane className="w-5 h-5" />
            <span>Flight &amp; Train Ticket</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("hotel")}
            className={`px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-2.5 transition-all shadow-sm cursor-pointer ${
              activeTab === "hotel"
                ? "bg-orange-500 text-white shadow-orange-500/25 scale-105"
                : "bg-white text-gray-700 border border-gray-200 hover:border-orange-300"
            }`}
          >
            <Hotel className="w-5 h-5" />
            <span>Hotel Booking</span>
          </button>
        </div>

        {/* Tab Detail Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Feature Showcase */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-orange-100 shadow-xl space-y-6">
            {activeTab === "car" && (
              <>
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-orange-100">
                  <Image
                    src="/images/luxury-travel.jpg"
                    alt="Car Ticket Rental"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-orange-400" /> Private AC Cabs
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Car Ticket &amp; Chauffeur Rental
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Choose from swift sedans (Dzire, Etios), premium MPVs (Innova Crysta, Ertiga), and luxury SUVs for Bodhgaya local, Gaya airport drops, and Rajgir day-tours.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Clean &amp; 100% Sanitized vehicles with GPS tracking</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Polite, local expert drivers fluent in Hindi &amp; English</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Transparent pricing: No hidden toll or night charge surprises</span>
                  </div>
                </div>
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200">
                  <span className="text-xs text-orange-600 font-bold uppercase tracking-wider block">Special Offer</span>
                  <span className="text-lg font-black text-gray-900">Gaya Airport to Bodhgaya Cab starting @ ₹799</span>
                </div>
              </>
            )}

            {activeTab === "bus" && (
              <>
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-sky-100">
                  <Image
                    src="/images/luxury-travel.jpg"
                    alt="Bus Ticket Booking"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Bus className="w-3.5 h-3.5 text-sky-400" /> Deluxe Tourist Buses
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Deluxe AC Coach &amp; Mini-Bus Booking
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ideal for large pilgrim groups, Buddhist monk delegations, school tours, and family reunions. Available in 17, 26, 35, and 45-seater luxury configurations.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Pushback reclining seats with ample luggage space</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Dedicated tour manager and assistant on board</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Full circuit coverage: Patna - Nalanda - Rajgir - Bodhgaya</span>
                  </div>
                </div>
                <div className="p-4 bg-sky-50 rounded-2xl border border-sky-200">
                  <span className="text-xs text-sky-600 font-bold uppercase tracking-wider block">Group Deal</span>
                  <span className="text-lg font-black text-gray-900">Daily Patna ⇄ Bodhgaya Volvo Coach @ ₹499/Seat</span>
                </div>
              </>
            )}

            {activeTab === "flight" && (
              <>
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-purple-100">
                  <Image
                    src="/images/patna.jpg"
                    alt="Flight and Train Ticket"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-purple-400" /> Flight &amp; Train Tickets
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Flight (Flet) &amp; Train Ticket Assistance
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Instant ticket confirmations for Gaya International Airport (GAY) &amp; Patna Airport (PAT). Direct Tatkal &amp; confirmed train ticketing across Indian Railways (IRCTC).
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Domestic &amp; International flight booking (Thai, Colombo, Bhutan)</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Tatkal &amp; Premium Tatkal train booking assistance</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Free re-scheduling and instant cancellation refunds</span>
                  </div>
                </div>
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200">
                  <span className="text-xs text-purple-600 font-bold uppercase tracking-wider block">Exclusive Fare</span>
                  <span className="text-lg font-black text-gray-900">Delhi ⇄ Patna &amp; Gaya Flight Special Fares</span>
                </div>
              </>
            )}

            {activeTab === "hotel" && (
              <>
                <div className="relative w-full h-48 rounded-2xl overflow-hidden bg-emerald-100">
                  <Image
                    src="/images/bodhgaya.jpg"
                    alt="Hotel Booking"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <Hotel className="w-3.5 h-3.5 text-emerald-400" /> Verified Stays
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Handpicked 3★, 4★ &amp; Luxury Heritage Hotels
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Stay within walking distance of the sacred Mahabodhi Temple in Bodhgaya or near Vishnupad in Gaya. Complimentary breakfast, high-speed WiFi, and 24x7 hot water.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Pre-inspected hygienic rooms with pure vegetarian dining</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Walking proximity to major sacred temples and ropeway</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Special corporate and pilgrimage bulk discounts</span>
                  </div>
                </div>
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <span className="text-xs text-emerald-600 font-bold uppercase tracking-wider block">Best Price Guarantee</span>
                  <span className="text-lg font-black text-gray-900">Bodhgaya AC Deluxe Room starting @ ₹1,499/Night</span>
                </div>
              </>
            )}
          </div>

          {/* Right Live Booking Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-orange-100 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-gray-900">
                  Booking Request Received!
                </h3>
                <p className="text-sm text-gray-600 max-w-md mx-auto">
                  Thank you, <strong className="text-gray-900">{formData.name}</strong>. Our booking officer will call you on <strong className="text-gray-900">{formData.phone}</strong> within 15 minutes to confirm your {activeTab.toUpperCase()} booking and send ticket details.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full bg-orange-500 text-white font-bold text-xs uppercase tracking-wider hover:bg-orange-600 transition-colors"
                >
                  Make Another Booking
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-gray-100 pb-4 mb-2">
                  <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                    FAST CONFIRMATION FORM
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 mt-1">
                    Book Your {activeTab === "car" ? "Car / Cab" : activeTab === "bus" ? "Bus Ticket" : activeTab === "flight" ? "Flight / Train Ticket" : "Hotel Suite"}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Mobile / WhatsApp Number *</label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Destination *</label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-3 py-3 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium bg-gray-50 focus:bg-white"
                    >
                      <option value="Bodhgaya">Bodhgaya</option>
                      <option value="Gaya">Gaya</option>
                      <option value="Patna">Patna</option>
                      <option value="Rajgir">Rajgir</option>
                      <option value="All 4 Cities Circuit">All 4 Cities Circuit</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Travel Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full px-3 py-3 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Passengers / Guests</label>
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full px-3 py-3 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium bg-gray-50 focus:bg-white"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3-4">3 - 4 Family</option>
                      <option value="5-7">5 - 7 Group (Innova)</option>
                      <option value="8+">8+ Group (Tempo / Bus)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Special Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need Hindi speaking driver, wheelchair support, hotel near temple, airport pickup at 10 AM..."
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full p-3 rounded-2xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-101"
                  >
                    <Send className="w-4 h-4" /> Confirm &amp; Request Instant Booking
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2.5">
                    🔒 100% Confidential. Instant response on call &amp; WhatsApp within 15 minutes.
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
