import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Phone, Mail, Award, CheckCircle2 } from "lucide-react";
import { teamMembers } from "@/data/travelData";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Team — Meet Rohit, Mohit & Sohan | Max Tour & Travel",
  description: "Meet the experienced leadership team behind Max Tour & Travel: Rohit Kumar (Operations), Mohit Sharma (Pilgrimage Coordinator), and Sohan Verma (Fleet Manager).",
};

export default function TeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-sky-700 text-white py-16 px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
            MEET THE EXPERTS
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Our Core Leadership Team
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            The passionate minds and hands who coordinate your seamless journey across Bodhgaya, Gaya, Patna, and Rajgir.
          </p>
        </div>

        {/* Team Grid with detailed profile cards */}
        <section className="py-20 px-4 bg-orange-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {teamMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-orange-100 shadow-md hover:shadow-2xl hover:border-orange-300 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden mb-6 border-4 border-orange-100 group-hover:border-orange-500 transition-colors shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="text-center mb-6">
                      <span className="px-3.5 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                        {member.experience}
                      </span>
                      <h2 className="text-2xl font-black text-gray-900 group-hover:text-orange-600 transition-colors">
                        {member.name}
                      </h2>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                        {member.role}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 font-light leading-relaxed mb-6 text-center">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-gray-100 flex items-center justify-center gap-3">
                    <a
                      href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
                      className="px-6 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 shadow-sm"
                    >
                      <Phone className="w-3.5 h-3.5" /> Call {member.name.split(" ")[0]}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Values */}
            <div className="mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-orange-100 shadow-lg text-center max-w-4xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-600 block mb-2">
                OUR COMMITMENT
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
                Personalized Care in Every Mile
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mx-auto font-light">
                Rohit, Mohit, Sohan and our 40+ on-ground drivers and tour escorts are in continuous communication throughout your stay in Bihar. We treat every guest as a family member visiting sacred ground.
              </p>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
