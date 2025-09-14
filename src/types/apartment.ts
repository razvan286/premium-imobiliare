export interface Apartment {
  id: string;
  type: string;
  surface: number;
  rooms: number;
  floor: number;
  price: number;
  blueprint: string;
  images: string[];
  features: string[];
  description: string;
  orientation: string;
  balcony: boolean;
  parking: boolean;
}
