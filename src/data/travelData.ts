export interface TourPackage {
  id: string;
  title: string;
  location: "Bodhgaya" | "Gaya" | "Patna" | "Rajgir";
  season: "All Season" | "Winter Special" | "Pilgrimage Season" | "Monsoon Green";
  duration: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  vehicles: ("Car" | "Bus" | "Flight/Train")[];
  description: string;
  highlights: string[];
  itinerary: string[];
}

export const tourPackages: TourPackage[] = [
  {
    id: "bodhgaya-enlightenment-tour",
    title: "Sacred Bodhgaya & Mahabodhi Pilgrimage",
    location: "Bodhgaya",
    season: "Winter Special",
    duration: "2 Days / 1 Night",
    price: 3499,
    rating: 4.9,
    reviewsCount: 142,
    image: "/images/bodhgaya.jpg",
    vehicles: ["Car", "Bus"],
    description: "Explore the UNESCO World Heritage Mahabodhi Temple, the sacred Bodhi Tree where Lord Buddha attained enlightenment, the 80ft Great Buddha Statue, and international Buddhist monasteries.",
    highlights: [
      "VIP Darshan at Mahabodhi Temple",
      "Meditation under the sacred Bodhi Tree",
      "Visit 80ft Great Buddha Statue & Thai Monastery",
      "Comfortable AC Sedan / Innova with local expert guide"
    ],
    itinerary: [
      "Day 1: Arrival & check-in, visit Mahabodhi Temple & international monasteries, evening meditation.",
      "Day 2: Morning visit to Dungeshwari Cave temples, Sujata Kuti, local souvenir shopping & departure."
    ]
  },
  {
    id: "gaya-pind-daan-heritage",
    title: "Gaya Holy Vishnupad & Pind Daan Tour",
    location: "Gaya",
    season: "Pilgrimage Season",
    duration: "1 Day Complete",
    price: 2199,
    rating: 4.8,
    reviewsCount: 210,
    image: "/images/gaya.jpg",
    vehicles: ["Car", "Bus"],
    description: "Perform sacred Pind Daan ceremonies and take holy blessings at Vishnupad Mandir on the holy banks of Falgu river. Seamless assistance with trusted priests and sanitized transport.",
    highlights: [
      "Special arrangement for ritual Pind Daan at Phalgu River & Akshayavat",
      "Vishnupad Temple VIP entry facilitation",
      "Mangla Gauri Shaktipeeth Darshan",
      "AC Vehicle pickup and drop from Gaya Railway Station / Airport"
    ],
    itinerary: [
      "Morning: Pickup from hotel/station, transfer to Falgu River ghat for rituals.",
      "Afternoon: Vishnupad Temple darshan and Akshayavat vriksha parikrama.",
      "Evening: Visit Mangla Gauri temple and drop-off."
    ]
  },
  {
    id: "rajgir-nalanda-peace-stupa",
    title: "Rajgir Glass Bridge, Ropeway & Nalanda Heritage",
    location: "Rajgir",
    season: "All Season",
    duration: "2 Days / 1 Night",
    price: 4299,
    rating: 4.9,
    reviewsCount: 188,
    image: "/images/rajgir.jpg",
    vehicles: ["Car", "Bus"],
    description: "Experience the thrilling Glass Skywalk bridge in Rajgir Nature Safari, the scenic aerial ropeway to Vishwa Shanti Stupa, hot water sulfur springs, and the ancient ruins of Nalanda University.",
    highlights: [
      "Pre-booked entry assistance for Rajgir Glass Bridge & Nature Safari",
      "Scenic aerial chairlift ropeway to World Peace Pagoda",
      "Brahmakund natural hot sulfur spring bath",
      "Guided historical tour of ancient Nalanda University ruins"
    ],
    itinerary: [
      "Day 1: Reach Rajgir, ride the Ropeway to Vishwa Shanti Stupa & Gridhakuta Peak, relax at Hot Springs.",
      "Day 2: Morning Nature Safari & Glass Bridge walk, afternoon tour of Nalanda University ruins & museum."
    ]
  },
  {
    id: "patna-city-heritage-ganga-aarti",
    title: "Patna Historic Landmarks & Ganga Aarti Cruise",
    location: "Patna",
    season: "All Season",
    duration: "1 Day / City Tour",
    price: 1999,
    rating: 4.7,
    reviewsCount: 95,
    image: "/images/patna.jpg",
    vehicles: ["Car", "Bus"],
    description: "Discover the vibrant capital of Bihar: visit historical Golghar, Bihar Museum's world-class artifacts, Takht Sri Patna Sahib gurudwara, and majestic evening Ganga Aarti at Gandhi Ghat.",
    highlights: [
      "Guided tour of world-class Bihar Museum & Patna Museum",
      "Darshan at revered Takht Sri Patna Sahib (Birthplace of Guru Gobind Singh Ji)",
      "Iconic Golghar architectural marvel view",
      "Evening boat ride and spiritual Ganga Aarti ceremony"
    ],
    itinerary: [
      "Morning: Golghar view & Bihar Museum exploration.",
      "Afternoon: Patna Sahib Gurudwara darshan with langar experience.",
      "Evening: Sunset boat ride and Ganga Aarti at NIT Ghat."
    ]
  },
  {
    id: "bihar-buddhist-circuit-grand",
    title: "Grand Bihar Buddhist Circuit (Bodhgaya - Rajgir - Nalanda - Patna)",
    location: "Bodhgaya",
    season: "Winter Special",
    duration: "4 Days / 3 Nights",
    price: 9999,
    rating: 5.0,
    reviewsCount: 320,
    image: "/images/luxury-travel.jpg",
    vehicles: ["Car", "Bus", "Flight/Train"],
    description: "The complete luxury holiday experience covering Patna, Nalanda, Rajgir, and Bodhgaya. Full itinerary including 3-star/4-star hotel stay, dedicated vehicle, and all sightseeing tickets.",
    highlights: [
      "All-inclusive: Hotels, breakfast, transport, sightseeing, entry tickets",
      "Experienced Hindi/English tour manager throughout the trip",
      "Private AC luxury Innova / Tempo Traveller",
      "Airport & Railway station pickup & drops included"
    ],
    itinerary: [
      "Day 1: Pickup from Patna Airport/Station, city tour, proceed to Rajgir.",
      "Day 2: Rajgir sightseeing, Glass bridge, Vishwa Shanti Stupa, Nalanda ruins, proceed to Bodhgaya.",
      "Day 3: Bodhgaya full day Mahabodhi Temple, 80ft Buddha & Dungeshwari.",
      "Day 4: Gaya Vishnupad Temple darshan & transfer for departure."
    ]
  }
];

export interface TeamMember {
  name: string;
  role: string;
  experience: string;
  phone: string;
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Rohit Kumar",
    role: "Founder & Head of Operations",
    experience: "12+ Years Experience",
    phone: "+91 98765 43210",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    bio: "Passionate travel curator with over a decade of expertise managing Buddhist circuit tourism, luxury fleet logistics, and VIP client hospitality across Bihar and Pan-India."
  },
  {
    name: "Mohit Sharma",
    role: "Tour Coordinator & Pilgrimage Specialist",
    experience: "8+ Years Experience",
    phone: "+91 98765 43211",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    bio: "Expert in Gaya ritual arrangements, Bodhgaya meditation retreats, and family vacation packages. Known for seamless on-ground coordination and client satisfaction."
  },
  {
    name: "Sohan Verma",
    role: "Fleet & Transport Manager",
    experience: "9+ Years Experience",
    phone: "+91 98765 43212",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    bio: "Manages our fleet of luxury AC cars, tourist buses, and airport transfers ensuring 100% safety, punctuality, certified drivers, and spotless vehicle maintenance."
  }
];
