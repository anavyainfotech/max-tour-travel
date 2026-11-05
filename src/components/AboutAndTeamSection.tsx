"use client";

import Image from "next/image";
import { Phone, Award, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import { teamMembers } from "@/data/travelData";

export default function AboutAndTeamSection() {
  return (
    <div className="bg-white">
      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-orange-50/30 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-600 block mb-2">
                ABOUT MAX TOUR &amp; TRAVEL
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-6">
                Your Trusted Travel &amp; Pilgrimage Partner Across Bihar
              </h2>
              <p className="text-base text-gray-600 font-light leading-relaxed mb-6">
                Established with a vision to deliver unmatched comfort, safety, and cultural authenticity, <strong className="text-gray-900 font-semibold">Max Tour &amp; Travel</strong> is the premier travel management company headquartered in Bihar. We specialize in holy Buddhist circuit tourism, Gaya ancestral Pind Daan facilitation, Rajgir adventure tours, and executive business transport in Patna.
              </p>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-8">
                With a state-of-the-art fleet of over 50+ luxury tourist vehicles, verified hotel tie-ups, and certified tour managers, we have joyfully hosted over 25,000+ national and international pilgrims from Japan, Thailand, Sri Lanka, Myanmar, USA, and across India.
              </p>

              {/* 3 Pillars of Service */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100">
                  <ShieldCheck className="w-6 h-6 text-orange-600 mb-2" />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">100% Verified</h4>
                  <p className="text-xs text-gray-600 font-light">Govt authorized fleet &amp; certified drivers.</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100">
                  <Award className="w-6 h-6 text-orange-600 mb-2" />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">Zero Hidden Fees</h4>
                  <p className="text-xs text-gray-600 font-light">Upfront pricing including all tolls and taxes.</p>
                </div>
                <div className="p-4 rounded-2xl bg-orange-50/70 border border-orange-100">
                  <HeartHandshake className="w-6 h-6 text-orange-600 mb-2" />
                  <h4 className="font-bold text-gray-900 text-sm mb-1">24x7 Helpline</h4>
                  <p className="text-xs text-gray-600 font-light">On-ground assistance throughout your journey.</p>
                </div>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[380px] sm:h-[440px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/bodhgaya.jpg"
                  alt="About Max Tour & Travel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    Spiritual Hospitality
                  </span>
                  <h3 className="text-xl font-bold">
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
      <section id="our-team" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-orange-600 block mb-2">
              MEET OUR LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight mb-4">
              Our Expert Management Team
            </h2>
            <p className="text-base text-gray-600 font-normal">
              Dedicated hospitality and logistics professionals ensuring your pilgrimage and holiday is safe, comfortable, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all flex flex-col justify-between group text-center"
              >
                <div>
                  <div className="relative w-36 h-36 mx-auto rounded-full overflow-hidden mb-6 border-4 border-orange-200 group-hover:border-orange-500 transition-colors shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[11px] font-bold uppercase tracking-wider inline-block mb-3">
                    {member.experience}
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    {member.role}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <a
                    href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 hover:bg-orange-500 text-orange-700 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
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
