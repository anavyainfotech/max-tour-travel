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
    <div className="bg-[#f4f7fb]">
      
      {/* Customer Registration Section (MMT Style) */}
      <section id="registration" className="py-16 px-4 bg-gradient-to-r from-orange-600 via-amber-600 to-sky-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6">
              <span className="px-3 py-1 rounded-md bg-white/20 text-white text-[11px] font-bold uppercase tracking-wider inline-block mb-3 backdrop-blur-md">
                VIP PILGRIM &amp; TRAVELER CLUB
              </span>
              <h2 className="text-2xl sm:text-4xl font-black leading-tight mb-3 tracking-tight">
                Register &amp; Unlock Instant ₹500 Discount
              </h2>
              <p className="text-xs sm:text-sm text-white/90 font-light leading-relaxed mb-6">
                Create your free member account today to receive personalized tour updates, priority cab allocation during Bodhgaya peak season, and exclusive member discounts.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <span className="text-xs font-medium">Instant ₹500 booking voucher on your first trip</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <span className="text-xs font-medium">Priority booking during Pitrupaksha Gaya &amp; Buddha Jayanti</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                  </div>
                  <span className="text-xs font-medium">24/7 dedicated personal tour concierge support</span>
                </div>
              </div>
            </div>

            {/* Right Registration Form (MMT Style: rounded-lg) */}
            <div className="lg:col-span-6 bg-white rounded-lg p-6 sm:p-8 text-gray-900 shadow-xl border border-gray-100">
              {regSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900">
                    Account Created Successfully!
                  </h3>
                  <p className="text-xs text-gray-600">
                    Welcome to Max Tour &amp; Travel, <strong>{regData.fullName}</strong>! Use coupon code <span className="font-mono font-bold text-orange-600 bg-orange-50 px-2 py-0.5 rounded">MAX500</span> during checkout.
                  </p>
                  <button
                    type="button"
                    onClick={() => setRegSuccess(false)}
                    className="px-5 py-2 rounded-lg bg-orange-600 text-white font-bold text-xs uppercase cursor-pointer"
                  >
                    Register Another Member
                  </button>
                </div>
              ) : (
                <form onSubmit={handleRegSubmit} className="space-y-3.5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600 block mb-0.5">
                      USER REGISTRATION
                    </span>
                    <h3 className="text-lg font-black text-gray-900">
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
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium"
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
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium"
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
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Your City / State *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Patna / Delhi"
                        value={regData.city}
                        onChange={(e) => setRegData({ ...regData, city: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Password *</label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={regData.password}
                        onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium"
                      />
                    </div>
                  </div>

                  <div className="pt-1">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <UserCheck className="w-4 h-4" /> Complete Registration &amp; Claim ₹500
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-1">
                24X7 CUSTOMER CARE
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                Contact Max Tour &amp; Travel
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
                Reach us via Phone, WhatsApp, Email or visit our Bodhgaya head office.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Contact Details & Social Media Box */}
            <div className="lg:col-span-5 bg-white rounded-lg p-6 border border-gray-200 shadow-sm space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  Bodhgaya &amp; Bihar Operations Desk
                </h3>
                <p className="text-xs text-gray-500 font-normal">
                  Head Office located near Mahabodhi Temple with branch counters at Patna Junction and Gaya Airport.
                </p>
              </div>

              {/* Channels */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-gray-400 block">Phone &amp; WhatsApp Hotline</span>
                    <a href="tel:+919876543210" className="text-sm font-bold text-gray-900 hover:text-orange-600 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-gray-400 block">Email Support</span>
                    <a href="mailto:info@maxtourtravel.com" className="text-sm font-bold text-gray-900 hover:text-sky-600 transition-colors">
                      info@maxtourtravel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-gray-400 block">Main Address</span>
                    <p className="text-xs font-medium text-gray-800 leading-snug">
                      Main Temple Road, Near Kalachakra Ground, Bodhgaya, Bihar 824231
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-gray-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2.5">
                  Follow Us:
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold hover:opacity-90"
                  >
                    <Camera className="w-3.5 h-3.5" /> Instagram
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-bold hover:bg-blue-700"
                  >
                    <Share2 className="w-3.5 h-3.5" /> Facebook
                  </a>

                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600 text-white text-xs font-bold hover:bg-red-700"
                  >
                    <Video className="w-3.5 h-3.5" /> YouTube
                  </a>
                </div>
              </div>

            </div>

            {/* Right Contact Form & Interactive Map */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Message Form */}
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                {contactSuccess ? (
                  <div className="text-center py-6 space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
                    <h4 className="text-lg font-bold text-gray-900">Message Delivered!</h4>
                    <p className="text-xs text-gray-500">We will respond within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleContactSubmit} className="space-y-3">
                    <h3 className="text-base font-black text-gray-900">Send an Instant Message</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={contactData.name}
                          onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={contactData.phone}
                          onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="you@email.com"
                          value={contactData.email}
                          onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-gray-700 mb-1">Requirement</label>
                        <select
                          value={contactData.subject}
                          onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium bg-gray-50"
                        >
                          <option value="Tour Package Booking">Tour Package Booking</option>
                          <option value="Car / Cab Rental">Car / Cab Rental</option>
                          <option value="Bus / Group Tour">Bus / Group Tour</option>
                          <option value="Hotel Booking">Hotel Booking</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-gray-700 mb-1">Your Message *</label>
                      <textarea
                        rows={2}
                        required
                        placeholder="Write your travel dates or requirements..."
                        value={contactData.message}
                        onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                        className="w-full p-2.5 rounded-lg border border-gray-200 focus:border-blue-500 focus:outline-none text-xs font-medium"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" /> Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Map Embed (MMT Style: rounded-lg) */}
              <div className="bg-white rounded-lg p-3 border border-gray-200 shadow-sm overflow-hidden">
                <div className="w-full h-52 rounded-lg overflow-hidden border border-gray-200">
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
