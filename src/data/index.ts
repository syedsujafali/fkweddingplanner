import type {
  Service,
  WeddingSpecialty,
  OtherEvent,
  WhyChooseItem,
  ProcessStep,
  DecorItem,
  CateringItem,
} from "../types";

// Services
export const services: Service[] = [
  {
    id: "wedding-planning",
    title: "Wedding Planning",
    description: "Complete coordination of Mehndi, Shadi, Chawti & Valima — from concept to farewell.",
    image: "https://images.pexels.com/photos/2291367/pexels-photo-2291367.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "decor-design",
    title: "Decor & Design",
    description: "Stunning stage setups, floral arrangements, themes, lighting and mandap design.",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "photography",
    title: "Photography & Videography",
    description: "Capture every precious moment with professional photo and video coverage.",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "catering",
    title: "Catering Services",
    description: "Delicious multi-cuisine menus — Veg & Non-Veg, live counters and dessert stations.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "guest-management",
    title: "Guest Management",
    description: "Seamless hospitality, seating, hotel booking and guest experience management.",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "event-execution",
    title: "Complete Event Execution",
    description: "End-to-end management so you can enjoy your special day stress-free.",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

// Wedding Specialties
export const weddingSpecialties: WeddingSpecialty[] = [
  {
    id: "catering-service",
    title: "Catering Service",
    description: "Veg & Non-Veg multi-cuisine menus, live stations",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "bride-groom-car",
    title: "Bride & Groom Car",
    description: "Luxury decorated cars for the special occasion",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "band-group",
    title: "Band Group",
    description: "Traditional and modern band performances",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "stage-decorations",
    title: "Stage Decorations",
    description: "Grand stages, floral backdrops, thematic designs",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "hyderabadi-marfa",
    title: "Hyderabadi Marfa",
    description: "Authentic Hyderabadi dhol & marfa experience",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "bouncer-service",
    title: "Bouncer Service",
    description: "Professional bodyguards for security & crowd control",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking",
    description: "Comfortable accommodation arrangements for guests",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "games-for-kids",
    title: "Games for Kids",
    description: "Fun activities and entertainment for children",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "food-stalls",
    title: "Food Stalls",
    description: "Chaat, BBQ, desserts and specialty food corners",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "special-entry",
    title: "Special Entry",
    description: "Spectacular bride & groom entry with effects",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Other Events
export const otherEvents: OtherEvent[] = [
  {
    id: "birthday",
    title: "Birthday Arrangements",
    description: "Themed parties, cakes, décor, entertainment and complete coordination for all ages.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "anniversary",
    title: "Anniversary Celebrations",
    description: "Romantic setups, elegant dinners, surprise elements and memorable experiences.",
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "family-gatherings",
    title: "Family Gatherings",
    description: "Warm, well-organized get-togethers with perfect hospitality and attention to detail.",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "farm-house-parties",
    title: "Farm House Parties",
    description: "Outdoor celebrations with full décor, catering, music and guest management.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "corporate-events",
    title: "Corporate Events",
    description: "Professional conferences, product launches, team outings and formal gatherings.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "custom-celebrations",
    title: "Custom Celebrations",
    description: "Any special occasion you envision — we plan, design and execute it perfectly.",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

// Why Choose FK
export const whyChooseItems: WhyChooseItem[] = [
  {
    id: "professional-team",
    title: "Professional Team",
    description: "Experienced coordinators, designers and staff who understand every nuance of celebrations.",
  },
  {
    id: "creative-ideas",
    title: "Creative Ideas",
    description: "Fresh themes, unique concepts and personalized touches that make your event stand out.",
  },
  {
    id: "quality-service",
    title: "Quality Service",
    description: "Only the best vendors, materials and attention to detail for a flawless experience.",
  },
  {
    id: "your-satisfaction",
    title: "Your Satisfaction",
    description: "Your happiness is our priority. We go the extra mile to exceed expectations.",
  },
  {
    id: "end-to-end",
    title: "End-to-End Solution",
    description: "From the first consultation to the final goodbye — we handle it all.",
  },
  {
    id: "local-expertise",
    title: "Local Expertise",
    description: "Deep knowledge of Hyderabad traditions, venues and the perfect Hyderabadi touch.",
  },
];

// Process Steps
export const processSteps: ProcessStep[] = [
  {
    id: "consultation",
    number: "01",
    title: "Consultation",
    description: "We listen to your vision, preferences, budget and cultural requirements.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "planning",
    number: "02",
    title: "Planning",
    description: "Detailed timeline, vendor selection, menu, décor concepts and logistics.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "designing",
    number: "03",
    title: "Designing",
    description: "Mood boards, 3D concepts, stage designs and complete visual planning.",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "coordination",
    number: "04",
    title: "Coordination",
    description: "Confirming every vendor, schedule and detail with precision.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "execution",
    number: "05",
    title: "Execution",
    description: "On-the-day management so everything runs smoothly and beautifully.",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "perfection",
    number: "06",
    title: "Perfection",
    description: "Final checks, last-minute polish and ensuring your complete satisfaction.",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// Décor Items
export const decorItems: DecorItem[] = [
  {
    id: "grand-stages",
    title: "Grand Stage Setups",
    description: "Custom stages with floral backdrops, lighting, LED walls and thematic designs for Shadi & Valima.",
    image: "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "mandap-floral",
    title: "Mandap & Floral Décor",
    description: "Traditional and contemporary mandaps, fresh flower arrangements and elegant centerpieces.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "entrance-pathway",
    title: "Entrance & Pathway",
    description: "Stunning entry gates, flower tunnels, carpet aisles and welcome décor that impresses.",
    image: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "theme-concepts",
    title: "Theme Concepts",
    description: "Classic, royal, modern, rustic, Rajasthani, Hyderabadi or fully personalized themes.",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "lighting-design",
    title: "Lighting Design",
    description: "Warm ambient lighting, fairy lights, uplighting and dramatic effects for the perfect mood.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "venue-styling",
    title: "Complete Venue Styling",
    description: "Table settings, chair covers, drapes, props and every visual detail coordinated beautifully.",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=800&q=80",
  },
];

// Catering Items
export const cateringItems: CateringItem[] = [
  {
    id: "multi-cuisine",
    title: "Multi-Cuisine Menus",
    description: "Indian, Chinese, Continental, Hyderabadi specialties",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "live-stations",
    title: "Live Food Stations",
    description: "Chaat, BBQ, Dessert, Pasta, Tandoor counters",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "custom-menus",
    title: "Custom Menus",
    description: "Tailored to your preferences and dietary needs",
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "professional-service",
    title: "Professional Service",
    description: "Trained staff, elegant presentation, timely service",
    image: "https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "quality-ingredients",
    title: "Quality Ingredients",
    description: "Fresh, premium ingredients for every dish",
    image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "all-events",
    title: "All Events Covered",
    description: "Weddings, birthdays, corporate, farm house parties",
    image: "https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

// Contact Information
export const contactInfo = {
  email: "fkplanners147@gmail.com",
  phone1: "9000808395",
  phone2: "9855110281",
  instagram: "@fkplanners",
  location: "Chanchalguda Khilla, Malkapet, Hyderabad (TG)",
};

// Navigation Items
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "specialties", label: "Specialties" },
  { id: "events", label: "Events" },
  { id: "contact", label: "Contact" },
];

export const mobileNavItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "wedding-specialties", label: "Wedding Specialties" },
  { id: "other-events", label: "Other Events" },
  { id: "why-choose", label: "Why Choose FK" },
  { id: "catering", label: "Catering" },
  { id: "decor", label: "Décor & Design" },
  { id: "process", label: "Our Process" },
  { id: "contact", label: "Contact" },
];
