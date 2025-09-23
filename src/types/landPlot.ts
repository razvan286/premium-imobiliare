export interface LandPlot {
  id: string;
  title: string;
  subtitle: string;
  surface: number; // in square meters
  price: number;
  location: string;
  mainImage: string;
  images: string[];
  brochure?: string; // PDF path
  features: string[];
  urbanStatuses: string[];
  technicalCharacteristics: string[];
  functions: string[];
  advantages: string[];
  oportunities: string[];
  description: string;
  zoning: string;
  access: string;
}
