export interface LandPlot {
  id: string;
  title: string;
  surface: number; // in square meters
  price: number;
  location: string;
  image: string;
  brochure?: string; // PDF path
  features: string[];
  description: string;
  utilities: string[];
  zoning: string;
  access: string;
}
