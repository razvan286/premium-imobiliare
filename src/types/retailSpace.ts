export interface RetailSpace {
  id: string;
  title: string;
  subtitle: string;
  surface: number; // in square meters
  price: number;
  vat: boolean;
  location: string;
  mainImage: string;
  images?: string[];
  floorPlans?: string[];
  planTitles?: string[];
  brochure?: string; // PDF path
  description: string;
}
