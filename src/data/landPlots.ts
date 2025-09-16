import landPlot1 from "@/assets/teren-mcdonalds.jpeg";
import { LandPlot } from "@/types/landPlot";

export const landPlots: LandPlot[] = [
  {
    id: "teren-central-1",
    title: "Teren central - vis-a-vis de McDonald's",
    surface: 470,
    price: 470000,
    location: "Str. Alexandru Ioan Cuza, Craiova",
    image: landPlot1,
    brochure: "src/assets/brochures/teren-conform-extrase-CU.pdf",
    features: [
      "Deschidere la stradă: 16,5 ml",
      "Localizare centrală",
      "Vizibilitate maximă și trafic intens",
      "Zonă consacrată pentru dezvoltări cu funcțiuni mixte",
    ],
    description:
      "Oferim spre vânzare un teren amplasat într-o zonă centrală de excepție, chiar vis-a-vis de McDonald’s, pe strada Alexandru Ioan Cuza, una dintre cele mai circulate și căutate artere din oraș.",
    utilities: [
      "Electricitate",
      "Gaz natural",
      "Apă",
      "Canalizare",
      "Internet fibră",
    ],
    zoning: "Central",
    access: "Drum asfaltat - 8m lățime",
  },
];
