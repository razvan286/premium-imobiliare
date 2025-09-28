export interface ApartmentType {
  id: string;
  type: string;
  surface: number;
  fullSurface?: number;
  rooms: number;
  price: number;
  orientation?: string;
  balcony?: boolean;
  parking?: boolean;
  vat?: boolean;
}

export interface Building {
  id: string;
  name: string;
  location: string;
  description: string;
  features: string[];
  apartmentTypes: ApartmentType[];
  images: string[];
  apartmentPlans: string[];
  mainImage: string;
  planTitles: string[];
  totalApartments: number;
}
