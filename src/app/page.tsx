"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AllToursSection from "@/components/AllToursSection";
import LocationsSection from "@/components/LocationsSection";
import TicketBookingSection from "@/components/TicketBookingSection";
import AboutAndTeamSection from "@/components/AboutAndTeamSection";
import RegistrationAndContactSection from "@/components/RegistrationAndContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [filterLocation, setFilterLocation] = useState("");
  const [filterVehicle, setFilterVehicle] = useState("");

  const handleHeroSearch = (location: string, vehicle: string) => {
    setFilterLocation(location);
    setFilterVehicle(vehicle);
  };

  const handleSelectLocation = (location: string) => {
    setFilterLocation(location);
    const element = document.getElementById("all-tours");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* 1. Header & Navigation (Logo, Home, All Tours, Seasonal Tours, About Us, Our Team, Ticket Booking, Contact Us, Registration) */}
      <Navbar />

      <main className="flex-grow">
        {/* 2. Animated Hero Section with Interactive Searching Page (Location & Vehicle Selection) */}
        <HeroSection onSearch={handleHeroSearch} />

        {/* 3. Ticket Booking Section (Car Ticket, Bus Ticket, Flight/Flet Ticket, Hotel Booking) */}
        <TicketBookingSection />

        {/* 4. All Tours Section (Destination, Location, Vehicles: Car, Bus, Flight) + Seasonal Tours filter */}
        <AllToursSection
          filterLocation={filterLocation}
          filterVehicle={filterVehicle}
        />

        {/* 5. Locations Section (Bodhgaya, Gaya, Patna, Rajgir spotlight) */}
        <LocationsSection onSelectLocation={handleSelectLocation} />

        {/* 6. About Us & Our Team Section (Rohit, Mohit, Sohan) */}
        <AboutAndTeamSection />

        {/* 7. Registration & Contact Us Section (Mobile, Instagram, Facebook, Youtube, Email, Map) */}
        <RegistrationAndContactSection />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
