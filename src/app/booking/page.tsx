import Navbar from "@/components/Navbar";
import TicketBookingSection from "@/components/TicketBookingSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ticket Booking — Car, Bus, Flight & Hotel | Max Tour & Travel",
  description: "Instant online ticket booking for Car rentals, Deluxe Bus tickets, Flight/Train ticketing assistance, and verified Hotel rooms in Bodhgaya & Bihar.",
};

export default function BookingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-orange-600 via-amber-600 to-sky-700 text-white py-16 px-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-300 block mb-2">
            INSTANT TICKET PORTAL
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">
            Book Car, Bus, Flight &amp; Hotel
          </h1>
          <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Fill out the form below or call our 24x7 helpline for immediate ticket reservations with zero hidden fees.
          </p>
        </div>
        <TicketBookingSection />
      </main>
      <Footer />
    </div>
  );
}
