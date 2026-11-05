"use client";

import Navbar from "@/components/Navbar";
import MmtHeroSearch from "@/components/MmtHeroSearch";
import TicketBookingSection from "@/components/TicketBookingSection";
import AllToursSection from "@/components/AllToursSection";
import LocationsSection from "@/components/LocationsSection";
import AboutAndTeamSection from "@/components/AboutAndTeamSection";
import RegistrationAndContactSection from "@/components/RegistrationAndContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f4f7fb]">
      {/* 1. Header & Navigation Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. MakeMyTrip Style Hero with Floating Flight/Cab/Hotel Booking Card */}
        <MmtHeroSearch />

        {/* 3. Ticket Booking Component (Outstation Cab, Deluxe Bus, Flight, Verified Hotels) */}
        <TicketBookingSection />

        {/* 4. Curated Holiday Packages with Filters */}
        <AllToursSection />

        {/* 5. Destination Spotlight (Bodhgaya, Gaya, Patna, Rajgir) */}
        <LocationsSection />

        {/* 6. Company Background & Leadership Team (Rohit, Mohit, Sohan) */}
        <AboutAndTeamSection />

        {/* 7. Registration Voucher & Contact Channels */}
        <RegistrationAndContactSection />
      </main>

      {/* 8. Modern Footer */}
      <Footer />
    </div>
  );
}
