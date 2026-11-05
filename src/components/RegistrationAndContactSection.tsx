"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  UserCheck,
  Video,
  Share2,
  Camera
} from "lucide-react";
import confetti from "canvas-confetti";

export default function RegistrationAndContactSection() {
  const [regData, setRegData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    newsletter: true
  });
  const [regSuccess, setRegSuccess] = useState(false);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Tour Inquiry",
    message: ""
  });
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleRegSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRegSuccess(true);
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSuccess(true);
    try {
      confetti({ particleCount: 70, spread: 50, origin: { y: 0.6 } });
    } catch {
      // ignore
    }
  };

  return (
    <div className="bg-orange-50/40">
      
      {/* Customer Registration Section (User Requirement: Registration) */}
      <section id="registration" className="py-20 px-4 bg-gradient-to-r from-orange-600 via-amber-600 to-sky-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6">
              <span className="px-3.5 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider inline-block mb-4 backdrop-blur-md">
                VIP PILGRIM &amp; TRAVELER CLUB
              </span>
              <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-4 tracking-tight">
                Register with Max Tour &amp; Unlock Instant ₹500 Discount
              </h2>
              <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed mb-8">
                Create your free member account today to receive personalized tour updates, priority cab allocation during Bodhgaya peak season, and exclusive member discounts on car, bus, flight, and hotel bookings.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  </div>
                  <span className="text-sm font-medium">Instant ₹500 booking voucher on your first trip</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  </div>
                  <span className="text-sm font-medium">Priority booking during Pitrupaksha Gaya &amp; Buddha Jayanti</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-amber-300" />
                  </div>
                  <span className="text-sm font-medium">24/7 dedicated personal tour concierge support</span>
                </div>
              </div>
            </div>

            {/* Right Registration Form */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 text-gray-900 shadow-2xl">
              {regSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900">
                    Account Created Successfully!
                  </h3>
                  <p className="text-sm text-gray-600">
                    Welcome to Max Tour &amp; Travel, <strong>{regData.fullName}</strong>! Your registration voucher has been generated. Use code <span className="font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">MAX500</span> while booking.
                  </p>
                  <button
                    type="button"
                    onClick={() => setRegSuccess(false)}
                    className="px-6 py-2 rounded-full bg-orange-600 text-white font-bold text-xs uppercase"
                  >
                    Register Another Member
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">
                      USER REGISTRATION
                    </span>
                    <h3 className="text-2xl font-black text-gray-900">
                      Create Your Free Travel Account
                    </h3>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Amit Anand"
                      value={regData.fullName}
                      onChange={(e) => setRegData({ ...regData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={regData.email}
                        onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={regData.phone}
                        onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your City / State *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Patna / Delhi / Varanasi"
                        value={regData.city}
                        onChange={(e) => setRegData({ ...regData, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Create Password *</label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={regData.password}
                        onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-101"
                    >
                      <UserCheck className="w-4 h-4" /> Complete Registration &amp; Get ₹500 Off
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Contact Us Section (Mobile, Instagram, Facebook, Youtube, Email, Map) */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-600 block mb-2">
              GET IN TOUCH WITH US
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Contact Us 24/7
            </h2>
            <p className="text-base text-gray-600 font-normal">
              Have questions about tour itineraries, temple timings, or cab availability? Reach us through any channel below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Details & Social Media Box */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-8 border border-orange-100 shadow-xl space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Max Tour &amp; Travel Office
                </h3>
                <p className="text-sm text-gray-600">
                  Head Office located centrally near the sacred Mahabodhi Temple with branch offices in Patna and Gaya.
                </p>
              </div>

              {/* Required Channels from Image: Mobile, Email, Map */}
              <div className="space-y-5">
                {/* Mobile Number */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-400 block">Mobile Number (24/7 Hotline)</span>
                    <a href="tel:+919876543210" className="text-base font-bold text-gray-900 hover:text-orange-600 transition-colors">
                      +91 98765 43210
                    </a>
                    <span className="text-xs text-gray-500 block">WhatsApp: +91 98765 43210</span>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-400 block">Official Email</span>
                    <a href="mailto:info@maxtourtravel.com" className="text-base font-bold text-gray-900 hover:text-sky-600 transition-colors">
                      info@maxtourtravel.com
                    </a>
                    <span className="text-xs text-gray-500 block">booking@maxtourtravel.com</span>
                  </div>
                </div>

                {/* Physical Map Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase text-gray-400 block">Head Office Address</span>
                    <p className="text-sm font-medium text-gray-800 leading-snug">
                      Main Temple Road, Near Kalachakra Ground, Bodhgaya, Bihar 824231
                    </p>
                    <span className="text-xs text-gray-500 block mt-0.5">Patna Branch: Frazer Road, Near Patna Junction</span>
                  </div>
                </div>
              </div>

              {/* Social Channels (Instagram, Facebook, Youtube) */}
              <div className="pt-6 border-t border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-4">
                  Connect on Social Media:
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    <Camera className="w-4 h-4" /> Instagram Page
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                  >
                    <Share2 className="w-4 h-4" /> Facebook Page
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-red-600 text-white text-xs font-bold hover:bg-red-700 transition-colors"
                  >
                    <Video className="w-4 h-4" /> YouTube Channel
                  </a>
                </div>
              </div>

            </div>

            {/* Right Contact Form & Interactive Map */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Message Form */}
              <div className="bg-white rounded-3xl p-8 border border-orange-100 shadow-xl">
                {contactSuccess ? (
                  <div className="text-center py-8 space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
                    <h4 className="text-xl font-bold text-gray-900">Message Delivered!</h4>
                    <p className="text-xs text-gray-600">Our customer support representative will reply to your email / phone shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <h3 className="text-xl font-black text-gray-900 mb-2">Send an Instant Message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={contactData.name}
                          onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Phone Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={contactData.phone}
                          onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="you@email.com"
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">Subject</label>
                        <select
                          value={contactData.subject}
                          onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                          className="w-full px-3 py-2.5 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium bg-gray-50"
                        >
                          <option value="Tour Package Booking">Tour Package Booking</option>
                          <option value="Car / Cab Rental">Car / Cab Rental</option>
                          <option value="Bus / Group Tour">Bus / Group Tour</option>
                          <option value="Flight / Train Ticket">Flight / Train Ticket</option>
                          <option value="Hotel Booking">Hotel Booking</option>
                          <option value="General Question">General Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your Message *</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Write your travel dates, questions, or vehicle preference..."
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        className="w-full p-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none text-sm font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-8 py-3 rounded-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center gap-2 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" /> Submit Message
                    </button>
                  </form>
                )}
              </div>

              {/* Map Embed (User Requirement: Map) */}
              <div className="bg-white rounded-3xl p-4 border border-orange-100 shadow-xl overflow-hidden">
                <div className="flex items-center justify-between mb-3 px-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-orange-500" /> Interactive Location Map
                  </span>
                  <span className="text-[11px] text-gray-400">Bodhgaya &amp; Bihar Tourist Circuit</span>
                </div>
                <div className="w-full h-64 rounded-2xl overflow-hidden border border-gray-200 relative">
                  <iframe
                    title="Max Tour and Travel Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14488.948218991738!2d84.98188179999999!3d24.695889399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32c525f0e9b93%3A0x6b5c328965609355!2sMahabodhi%20Temple!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
