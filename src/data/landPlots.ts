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
    technicalCharacteristics: [
      "Suprafață teren: 470 mp",
      "Deschidere la stradă: 16,5 ml",
      "Certificat de urbanism: construire S + P + 5 etaje",
      "Regim maxim de inaltime P=10",
    ],
    functions: [
      "Spațiu comercial la parter",
      "Locuințe colective la etajele 1–5",
    ],
    advantages: [
      "Localizare centrală, în imediata apropiere a unui reper comercial major",
      "Vizibilitate maximă și trafic intens – pietonal și auto",
      "Zonă consacrată pentru dezvoltări cu funcțiuni mixte (comercial + rezidențial)",
      "Posibilitate de realizare a unui proiect reprezentativ, cu randament ridicat",
    ],
    oportunities: [
      "Spațiu comercial modern la parter + apartamente premium la etaje",
      "Un teren de excepție, cu amplasament strategic, ideal pentru dezvoltatori și investitori ce vizează proiecte de referință în centrul orașului.",
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
