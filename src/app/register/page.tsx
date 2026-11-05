import Navbar from "@/components/Navbar";
import RegistrationAndContactSection from "@/components/RegistrationAndContactSection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Customer Registration — Max Tour & Travel VIP Club",
  description: "Register with Max Tour & Travel and claim an instant ₹500 discount voucher on your first tour or cab booking in Bodhgaya, Gaya, Patna & Rajgir.",
};

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow">
        <RegistrationAndContactSection />
      </main>
      <Footer />
    </div>
  );
}
