import { Apartment } from "@/types/apartment";
import apartmentBlueprint1 from "@/assets/apartment-blueprint1.png";
import apartmentInterior1 from "@/assets/apartment-interior1.jpg";

export const apartments: Apartment[] = [
  {
    id: "studio-deluxe",
    type: "Studio Deluxe",
    surface: 45,
    rooms: 1,
    floor: 3,
    price: 185000,
    blueprint: apartmentBlueprint1,
    images: [apartmentInterior1],
    features: [
      "Open concept living",
      "Modern kitchen",
      "Large windows",
      "Built-in storage",
    ],
    description:
      "A sophisticated studio apartment featuring an open concept design with premium finishes. The space maximizes every square meter with intelligent layout and high-end materials.",
    orientation: "South-West",
    balcony: true,
    parking: false,
  },
  {
    id: "one-bedroom-premium",
    type: "One Bedroom Premium",
    surface: 65,
    rooms: 2,
    floor: 5,
    price: 275000,
    blueprint: apartmentBlueprint1,
    images: [apartmentInterior1],
    features: [
      "Separate bedroom",
      "Spacious living area",
      "Premium appliances",
      "Walk-in closet",
    ],
    description:
      "Elegant one-bedroom apartment with separate living spaces and premium finishes throughout. Perfect for professionals seeking luxury and comfort.",
    orientation: "North-East",
    balcony: true,
    parking: true,
  },
  {
    id: "two-bedroom-family",
    type: "Two Bedroom Family",
    surface: 85,
    rooms: 3,
    floor: 7,
    price: 395000,
    blueprint: apartmentBlueprint1,
    images: [apartmentInterior1],
    features: [
      "Two bedrooms",
      "Large living room",
      "Modern kitchen",
      "Two bathrooms",
      "Storage room",
    ],
    description:
      "Spacious family apartment designed for comfort and functionality. Features two bedrooms, multiple living areas, and premium amenities for modern family living.",
    orientation: "South",
    balcony: true,
    parking: true,
  },
  {
    id: "penthouse-luxury",
    type: "Penthouse Luxury",
    surface: 120,
    rooms: 4,
    floor: 12,
    price: 650000,
    blueprint: apartmentBlueprint1,
    images: [apartmentInterior1],
    features: [
      "Panoramic views",
      "Private terrace",
      "Premium finishes",
      "Smart home system",
      "Wine cellar",
    ],
    description:
      "The ultimate luxury living experience. This penthouse offers breathtaking panoramic views, a private terrace, and the finest materials and finishes available.",
    orientation: "360° Views",
    balcony: true,
    parking: true,
  },
];
