export interface LandPlot {
  id: string;
  title: string;
  surface: number; // in square meters
  price: number;
  location: string;
  image: string;
  brochure?: string; // PDF path
  features: string[];
  technicalCharacteristics: string[];
  functions: string[];
  advantages: string[];
  oportunities: string[];
  description: string;
  utilities: string[];
  zoning: string;
  access: string;
}
