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
  Sparkles,
  Gift,
  ArrowRight
} from "lucide-react";
import confetti from "canvas-confetti";

export default function RegistrationAndContactSection() {
  const [regData, setRegData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "Gaya",
    password: "",
    newsletter: true
  });
  const [regSuccess, setRegSuccess] = useState(false);

  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Gaya Tour & Cab Inquiry",
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
    <div className="bg-[#f5f7fa]">
      
      {/* Customer Registration Section (MMT Exclusive Club Banner) */}
      <section id="registration" className="py-16 px-4 bg-gradient-to-r from-[#0d2a4a] via-[#103a66] to-[#0a2240] text-white relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-6">
              <span className="px-3.5 py-1.5 rounded-full bg-orange-500/20 text-amber-300 border border-orange-400/30 text-[11px] font-bold uppercase tracking-wider inline-flex items-center gap-1.5 mb-4">
                <Gift className="w-3.5 h-3.5" />
                <span>MAX PILGRIM &amp; TRAVELER CLUB</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-4 tracking-tight">
                Register &amp; Unlock Instant ₹500 Discount Voucher
              </h2>
              <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed mb-6">
                Create your member profile to receive verified driver updates, priority cab allocation during Gaya Pitrupaksha and Bodhgaya peak season, and exclusive member discounts.
              </p>
              
              <div className="space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-100">Instant ₹500 promo code applied on your first booking</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-100">Priority booking during Gaya Pitrupaksha Pind Daan season</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-100">24/7 dedicated personal pilgrimage concierge support</span>
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100">
              <div className="mb-6">
                <h3 className="text-xl font-black text-slate-900">
                  Create Traveler Account
                </h3>
                <p className="text-xs text-slate-500 font-normal mt-1">
                  Join 15,000+ members and save on car rental and tour packages.
                </p>
              </div>

              {regSuccess ? (
                <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Registration Complete!</h4>
                  <p className="text-xs text-slate-600 mb-4 font-normal">
                    Welcome aboard! Your ₹500 discount voucher has been activated for <strong className="text-slate-900">{regData.fullName}</strong>.
                  </p>
                  <div className="p-3 bg-white rounded-xl border border-dashed border-emerald-400 text-center">
                    <span className="text-xs font-bold text-slate-500 block mb-0.5">Your Promo Code:</span>
                    <span className="text-base font-black text-orange-600 tracking-wider">MAX500</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleRegSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={regData.fullName}
                      onChange={(e) => setRegData({ ...regData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 transition-colors font-medium"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={regData.phone}
                        onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 transition-colors font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="yourname@gmail.com"
                        value={regData.email}
                        onChange={(e) => setRegData({ ...regData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 transition-colors font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Your City / State</label>
                      <input
                        type="text"
                        placeholder="e.g. Patna, Gaya, Delhi, etc."
                        value={regData.city}
                        onChange={(e) => setRegData({ ...regData, city: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 transition-colors font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Set Password</label>
                      <input
                        type="password"
                        required
                        placeholder="••••••••"
                        value={regData.password}
                        onChange={(e) => setRegData({ ...regData, password: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 transition-colors font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer mt-2"
                  >
                    Register &amp; Claim ₹500 Voucher
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Contact Us Section with Direct Office Channels */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-100 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>GAYA HEAD OFFICE &amp; CHANNELS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Get In Touch With Our Dispatch Desk
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                Reach us directly for custom group quotations, temple pass assistance, or emergency cab booking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 border border-orange-200">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">24/7 Phone &amp; WhatsApp Support</h4>
                  <p className="text-xs text-slate-500 mb-2 font-normal">Direct driver dispatch and booking desk.</p>
                  <a href="tel:+919876543210" className="text-base font-black text-orange-600 hover:underline">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-600 flex items-center justify-center shrink-0 border border-sky-200">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Official Email Inquiry</h4>
                  <p className="text-xs text-slate-500 mb-2 font-normal">For corporate, school, and group booking quotations.</p>
                  <a href="mailto:info@maxtourtravel.com" className="text-sm font-bold text-sky-700 hover:underline">
                    info@maxtourtravel.com
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm">Gaya &amp; Bodhgaya Branch Offices</h4>
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    <strong>Gaya Branch:</strong> Station Road, Near Railway Gumti, Gaya, Bihar 823001<br />
                    <strong>Bodhgaya Desk:</strong> Main Temple Road, Near Kalachakra Ground, Bodhgaya
                  </p>
                </div>
              </div>

            </div>

            {/* Right Contact Message Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <h3 className="font-extrabold text-lg text-slate-900 mb-1">
                Send Us a Direct Message
              </h3>
              <p className="text-xs text-slate-500 font-normal mb-6">
                Fill the form below and our tour consultant will call you back within 15 minutes.
              </p>

              {contactSuccess ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-base">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-600 mt-1 font-normal">
                    We have received your note and will reach out to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Rakesh Singh"
                        value={contactData.name}
                        onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 font-medium"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">Contact Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={contactData.phone}
                        onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 font-medium"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Subject</label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 font-medium bg-white"
                    >
                      <option value="Gaya Vishnupad & Pind Daan Tour">Gaya Vishnupad &amp; Pind Daan Tour</option>
                      <option value="Bodhgaya Mahabodhi & Monasteries">Bodhgaya Mahabodhi &amp; Monasteries</option>
                      <option value="Rajgir Glass Bridge Package">Rajgir Glass Bridge Package</option>
                      <option value="Airport Cab Booking">Airport Cab Booking (Patna / Gaya)</option>
                      <option value="Other Inquiries">Other Inquiries</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Your Message or Requirements</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your dates, number of guests, or special requirements..."
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-orange-500 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Gaya Desk</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}