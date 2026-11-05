"use client";

import Image from "next/image";
import { Phone, Award, ShieldCheck, HeartHandshake } from "lucide-react";
import { teamMembers } from "@/data/travelData";

export default function AboutAndTeamSection() {
  return (
    <div className="bg-[#f4f7fb]">
      {/* About Us Section */}
      <section id="about" className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-gray-200 shadow-sm">
              <span className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-2">
                ABOUT MAX TOUR &amp; TRAVEL
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-4">
                Your Trusted Pilgrimage &amp; Cab Network in Bihar
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-4">
                Established with a vision to deliver unmatched comfort, safety, and cultural authenticity, <strong className="text-gray-900 font-semibold">Max Tour &amp; Travel</strong> is the premier travel management company headquartered in Bihar. We specialize in holy Buddhist circuit tourism, Gaya ancestral Pind Daan facilitation, Rajgir adventure tours, and executive business transport in Patna.
              </p>
              <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-6">
                With a state-of-the-art fleet of over 50+ luxury tourist vehicles, verified hotel tie-ups, and certified tour managers, we have joyfully hosted over 25,000+ national and international pilgrims.
              </p>

              {/* 3 Pillars of Service */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-lg bg-orange-50/70 border border-orange-100">
                  <ShieldCheck className="w-5 h-5 text-orange-600 mb-1.5" />
                  <h4 className="font-bold text-gray-900 text-xs mb-0.5">100% Verified</h4>
                  <p className="text-[11px] text-gray-600 font-normal">Govt authorized fleet &amp; certified drivers.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-orange-50/70 border border-orange-100">
                  <Award className="w-5 h-5 text-orange-600 mb-1.5" />
                  <h4 className="font-bold text-gray-900 text-xs mb-0.5">Zero Hidden Fees</h4>
                  <p className="text-[11px] text-gray-600 font-normal">Upfront pricing including all tolls and taxes.</p>
                </div>
                <div className="p-3.5 rounded-lg bg-orange-50/70 border border-orange-100">
                  <HeartHandshake className="w-5 h-5 text-orange-600 mb-1.5" />
                  <h4 className="font-bold text-gray-900 text-xs mb-0.5">24x7 Helpline</h4>
                  <p className="text-[11px] text-gray-600 font-normal">On-ground assistance throughout your journey.</p>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[360px] rounded-lg overflow-hidden shadow-md border border-gray-200">
                <Image
                  src="/images/bodhgaya.jpg"
                  alt="About Max Tour & Travel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    Spiritual Hospitality
                  </span>
                  <h3 className="text-lg font-bold">
                    &quot;Atithi Devo Bhava&quot; in Sacred Bihar
                  </h3>
                  <p className="text-xs text-gray-200 mt-1">
                    Experience deep enlightenment and heartfelt care in every mile.
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
              <span className="text-xs font-bold tracking-widest uppercase text-orange-600 block mb-1">
                MEET OUR LEADERSHIP
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
                Our Expert Management Team
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 font-normal mt-1">
                Dedicated hospitality and logistics professionals ensuring your pilgrimage is safe and comfortable.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-5 border border-gray-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between group text-center"
              >
                <div>
                  <div className="relative w-28 h-28 mx-auto rounded-lg overflow-hidden mb-4 border border-gray-200 group-hover:border-orange-500 transition-colors shadow-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <span className="px-2.5 py-0.5 rounded-md bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider inline-block mb-2">
                    {member.experience}
                  </span>

                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                    {member.role}
                  </p>

                  <p className="text-xs text-gray-600 font-normal leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <a
                    href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-orange-50 hover:bg-orange-500 text-orange-700 hover:text-white font-bold text-xs uppercase tracking-wider transition-all w-full justify-center"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call {member.name.split(" ")[0]}
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
