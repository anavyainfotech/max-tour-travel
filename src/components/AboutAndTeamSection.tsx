"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Award, ShieldCheck, HeartHandshake, User, CheckCircle2, Sparkles } from "lucide-react";
import { teamMembers } from "@/data/travelData";

export default function AboutAndTeamSection() {
  return (
    <div className="bg-[#f5f7fa]">
      {/* About Us Section */}
      <section id="about" className="py-16 px-4 border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ABOUT MAX TOUR &amp; TRAVEL</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-4">
                Your Trusted Gaya &amp; Buddhist Circuit Travel Network
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-4">
                Established with a vision to deliver unmatched comfort, safety, and cultural authenticity, <strong className="text-slate-900 font-semibold">Max Tour &amp; Travel</strong> is the premier travel management company headquartered in Bihar. We specialize in holy Buddhist circuit tourism, Gaya ancestral Pind Daan facilitation, Rajgir adventure tours, and executive business transport in Patna.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6">
                With a state-of-the-art fleet of over 50+ luxury tourist vehicles, verified hotel tie-ups, and certified tour managers, we have joyfully hosted over 25,000+ national and international pilgrims.
              </p>

              {/* 3 Pillars of Service */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100">
                  <ShieldCheck className="w-5 h-5 text-orange-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-xs mb-1">100% Verified Fleet</h4>
                  <p className="text-[11px] text-slate-600 font-normal">Govt authorized commercial cabs &amp; certified drivers.</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100">
                  <Award className="w-5 h-5 text-orange-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-xs mb-1">Zero Hidden Fees</h4>
                  <p className="text-[11px] text-slate-600 font-normal">Transparent pricing including tolls, fuel, and driver charges.</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100">
                  <HeartHandshake className="w-5 h-5 text-orange-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-xs mb-1">24x7 Support</h4>
                  <p className="text-[11px] text-slate-600 font-normal">Dedicated on-ground helpline throughout your trip.</p>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/images/gaya.jpg"
                  alt="Gaya Vishnupad Temple & Falgu River Hospitality"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    Spiritual Hospitality
                  </span>
                  <h3 className="text-xl font-black">
                    &quot;Atithi Devo Bhava&quot; in Gaya Ji
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 font-normal">
                    Experience deep spiritual peace and attentive local care on every road of Bihar.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Team Section (Rohit, Mohit, Sohan) */}
      <section id="our-team" className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LEADERSHIP EXCELLENCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                Our Expert Management Team
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1">
                Dedicated hospitality and logistics professionals ensuring your pilgrimage is safe, comfortable, and memorable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between group text-center"
              >
                <div>
                  {/* Avatar Circle */}
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-400 to-sky-500 p-0.5 mb-4 shadow-sm group-hover:scale-105 transition-transform">
                    <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center text-slate-800">
                      <User className="w-10 h-10 text-orange-600" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-lg text-slate-900 group-hover:text-orange-600 transition-colors">
                    {member.name}
                  </h3>
                  
                  <span className="text-xs font-bold text-orange-600 block mb-3">
                    {member.role}
                  </span>

                  <p className="text-xs text-slate-500 font-normal leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-center">
                  <a
                    href="tel:+919876543210"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 hover:bg-orange-50 hover:text-orange-600 text-slate-700 text-xs font-bold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-orange-500" />
                    <span>Contact Operations</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}