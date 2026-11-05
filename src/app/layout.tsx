import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Max Tour & Travel — Bodhgaya, Gaya, Patna & Rajgir Tour Packages",
  description: "Official portal of Max Tour & Travel: Car ticket, bus ticket, flight ticket, hotel booking, and pilgrimage packages across Bodhgaya, Gaya, Patna, and Rajgir.",
  keywords: [
    "Max Tour and Travel",
    "Bodhgaya tour package",
    "Gaya Pind Daan tour",
    "Rajgir Glass Bridge ropeway",
    "Patna city tour",
    "Bihar tourism car rental",
    "Bodhgaya bus booking",
    "Gaya airport taxi"
  ],
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#fdfbf7] text-gray-900 selection:bg-orange-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
