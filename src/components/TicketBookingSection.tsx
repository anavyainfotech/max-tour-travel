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
  Sparkles,
  ArrowRight,
  BadgeCheck
} from "lucide-react";
import confetti from "canvas-confetti";

export default function TicketBookingSection() {
  const [activeTab, setActiveTab] = useState<"car" | "bus" | "flight" | "hotel">("car");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    destination: "Gaya & Bodhgaya Pilgrimage",
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

  const tabs = [
    { id: "car", label: "Outstation AC Cab", icon: Car, subtitle: "Sedan, Innova Crysta, Tempo" },
    { id: "bus", label: "Deluxe Bus Booking", icon: Bus, subtitle: "Volvo & Tourist Coaches" },
    { id: "flight", label: "Flight / Train Assistance", icon: Plane, subtitle: "Patna & Gaya Airport" },
    { id: "hotel", label: "Verified Hotels & Ashrams", icon: Hotel, subtitle: "Near Vishnupad & Mahabodhi" },
  ] as const;

  return (
    <section id="ticket-booking" className="py-16 px-4 bg-[#f5f7fa]">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-1">
              INSTANT CONFIRMATION · ZERO HIDDEN FARES
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
              Book Tickets, Cabs &amp; Stays in Gaya Circuit
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1 max-w-2xl">
              Select your travel mode, pick preferred dates, and get immediate fare quotation with dedicated chauffeur assistance.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 bg-white px-3.5 py-2 rounded-full border border-slate-200/80 shadow-2xs flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Instant WhatsApp Confirmation
            </span>
          </div>
        </div>

        {/* MMT Category Tabs */}
        <div className="bg-white rounded-2xl p-2 shadow-sm border border-slate-200/80 flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 min-w-[150px] py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex flex-col sm:flex-row items-center justify-center gap-2 transition-all cursor-pointer ${
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/20"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-center sm:text-left">
                  <div>{tab.label}</div>
                  <div className={`text-[10px] font-normal ${isActive ? "text-orange-100" : "text-slate-400"}`}>
                    {tab.subtitle}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Box: Left Form + Right Real-world Fleet & Visual Proof */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Booking Form (MMT Card Style) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {activeTab === "car" && "Outstation Cab & Taxi Booking"}
                    {activeTab === "bus" && "Tourist Coach & Bus Ticket Inquiry"}
                    {activeTab === "flight" && "Patna / Gaya Airport Flight Transfer"}
                    {activeTab === "hotel" && "Gaya & Bodhgaya Hotel Stay"}
                  </h3>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Govt Authorized
                </span>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-gradient-to-b from-emerald-50 to-white rounded-2xl border border-emerald-200 my-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 mb-2">Booking Inquiry Received!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mb-4 font-normal">
                    Thank you <strong className="text-slate-900">{formData.name || "Customer"}</strong>. Our Gaya operations manager will call you within 10 minutes with vehicle details and driver contact.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800">
                    <Phone className="w-4 h-4 text-orange-600" />
                    Direct Dispatcher: +91 98765 43210
                  </div>
                  <div className="mt-6">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors"
                    >
                      Book Another Ride
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Mobile Number (WhatsApp) *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Destination Circuit *
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium bg-white"
                      >
                        <option value="Gaya & Bodhgaya Pilgrimage">Gaya &amp; Bodhgaya Pilgrimage (Vishnupad + Mahabodhi)</option>
                        <option value="Gaya Pind Daan Special">Gaya Falgu River Pind Daan Special</option>
                        <option value="Rajgir Glass Bridge & Nalanda">Rajgir Glass Bridge &amp; Nalanda Safari</option>
                        <option value="Patna Airport to Gaya/Bodhgaya">Patna Airport ⇄ Gaya / Bodhgaya Transfer</option>
                        <option value="Custom Bihar Circuit">Custom Multi-Day Bihar Circuit</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Travel Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.travelDate}
                        onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Preferred Vehicle Category
                      </label>
                      <select
                        value={formData.vehicleModel}
                        onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium bg-white"
                      >
                        <option value="Innova Crysta AC">Innova Crysta AC (6+1 Luxury)</option>
                        <option value="Swift Dzire AC">Swift Dzire / Sedan AC (4+1 Compact)</option>
                        <option value="Ertiga AC">Maruti Ertiga AC (6+1 Economy)</option>
                        <option value="Tempo Traveller AC">Deluxe 12-Seater Tempo Traveller</option>
                        <option value="Luxury Bus">25-45 Seater AC Tourist Coach</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1.5">
                        Passengers Count
                      </label>
                      <select
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium bg-white"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons (Couple)</option>
                        <option value="4">3-4 Persons (Family)</option>
                        <option value="6">5-7 Persons (Joint Family)</option>
                        <option value="12">8-15 Persons (Pilgrim Group)</option>
                        <option value="20+">20+ Persons (Monks / Sabha)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Special Request (Panda/Priest for Pind Daan, Wheelchair, Airport Pickup)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Need assistance at Gaya Vishnupad Temple ghat for father"
                      value={formData.specialRequest}
                      onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100 transition-all font-medium"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-2xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-98"
                    >
                      <Send className="w-4 h-4" />
                      <span>Confirm &amp; Request Instant Fare</span>
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2.5">
                      🔒 No upfront payment required to check availability. Instant quote on WhatsApp.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Micro Guarantees Strip */}
            <div className="grid grid-cols-3 gap-2 pt-4 mt-6 border-t border-slate-100 text-center">
              <div className="text-[11px] font-semibold text-slate-600 flex items-center justify-center gap-1">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-500" /> Clean AC Cabs
              </div>
              <div className="text-[11px] font-semibold text-slate-600 flex items-center justify-center gap-1">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-500" /> On-Time Pickup
              </div>
              <div className="text-[11px] font-semibold text-slate-600 flex items-center justify-center gap-1">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-500" /> Fixed Toll Included
              </div>
            </div>
          </div>

          {/* Right Visual Image Card (Real Gaya / Bodhgaya fleet experience) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Top Gaya Special Spotlight Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-slate-200 bg-slate-900 text-white p-6 h-64 sm:h-72 flex flex-col justify-end group">
              <Image
                src="/images/gaya.jpg"
                alt="Gaya Falgu River & Vishnupad Temple"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="relative z-10">
                <span className="px-3 py-1 rounded-full bg-orange-600 text-white font-bold text-[10px] uppercase tracking-wider inline-block mb-2">
                  Gaya Ji Special
                </span>
                <h4 className="text-xl font-black text-white leading-tight">
                  Vishnupad &amp; Falgu Ghat Pilgrimage Support
                </h4>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2 font-light">
                  Chauffeur drops you directly near temple gate. Authentic guidance for ancestral rites &amp; sacred Akshayavat parikrama.
                </p>
              </div>
            </div>

            {/* Bottom Bodhgaya & Luxury Cab Highlight */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between flex-1">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 block mb-1">
                  Fleet Quality Promise
                </span>
                <h4 className="text-base font-black text-slate-900">
                  Why Pilgrims Prefer Max Tour &amp; Travel?
                </h4>
                
                <ul className="mt-4 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">Experienced Local Drivers:</strong> Well-versed with Gaya lanes, Bodhgaya entry gates &amp; Rajgir ghat roads.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">No Surge Pricing:</strong> Transparent quotation with all parking, toll tax, and driver bata included.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-800">Flight &amp; Train Sync:</strong> Free driver waiting up to 60 mins for delayed Gaya / Patna flights.</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-400">Direct Chauffeur Helpline</div>
                  <div className="text-sm font-black text-slate-900">+91 98765 43210</div>
                </div>
                <Link
                  href="/contact"
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-700 text-xs font-bold transition-all"
                >
                  Contact Desk →
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}