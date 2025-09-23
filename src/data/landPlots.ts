import landPlot1 from "@/assets/teren-ai-cuza-1/poza1.jpeg";
import landPlot2Image1 from "@/assets/teren-ai-cuza-2/foto1.jpg";
import landPlot2Image2 from "@/assets/teren-ai-cuza-2/foto2.jpg";
import landPlot2Image3 from "@/assets/teren-ai-cuza-2/foto3.jpg";
import landPlot3Image1 from "@/assets/teren-calea-bucuresti/foto1.jpg";
import landPlot3Image2 from "@/assets/teren-calea-bucuresti/plan-color-teren.jpg";
import { LandPlot } from "@/types/landPlot";

export const landPlots: LandPlot[] = [
  {
    id: "teren-ai-cuza-1",
    title: "Teren A.I. Cuza (1)",
    subtitle: "Vis-a-vis de McDonald's",
    surface: 470,
    price: 470000,
    location: "Str. Alexandru Ioan Cuza, Craiova",
    mainImage: landPlot1,
    images: [landPlot1],
    brochure: "/brochures/teren-ai-cuza-1/conform-extrase-CU.pdf",
    description:
      "Oferim spre vânzare un teren amplasat într-o zonă centrală de excepție, chiar vis-a-vis de McDonald’s, pe strada Alexandru Ioan Cuza, una dintre cele mai circulate și căutate artere din oraș.",
    features: [
      "Deschidere la stradă: 16,5 ml",
      "Localizare centrală",
      "Vizibilitate maximă și trafic intens",
      "Zonă consacrată pentru dezvoltări cu funcțiuni mixte",
    ],
    technicalCharacteristics: [
      "Suprafață teren: 470 mp",
      "Deschidere la stradă: 16,5 ml",
    ],
    urbanStatuses: [
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
      "Posibilitate de extindere: teren vecin disponibil spre vânzare (470 mp), ceea ce permite o dezvoltare mai amplă, pe aproape 950 mp",
    ],
    oportunities: [
      "Spațiu comercial modern la parter + apartamente premium la etaje",
      "Un teren de excepție, cu amplasament strategic, ideal pentru dezvoltatori și investitori ce vizează proiecte de referință în centrul orașului.",
    ],
    zoning: "Central",
    access: "Drum asfaltat - 8m lățime",
  },
  // Teren AI Cuza (2)
  {
    id: "teren-ai-cuza-2",
    title: "Teren A.I. Cuza (2)",
    subtitle: "Vis-a-vis de McDonald's",
    surface: 470,
    price: 470000,
    location: "Str. Alexandru Ioan Cuza, Craiova",
    mainImage: landPlot2Image2,
    images: [landPlot2Image2, landPlot2Image1, landPlot2Image3],
    brochure: "/brochures/teren-ai-cuza-2/pozitionare-teren-google-maps.pdf",
    description:
      "Oferim spre vânzare un teren stradal de excepție, amplasat chiar vis-à-vis de McDonald’s, pe strada Alexandru Ioan Cuza – una dintre cele mai importante și circulate artere ale orașului. Un teren rarisim, cu suprafață compactă, ideal pentru dezvoltatori sau investitori interesați de un proiect de referință.",
    features: [
      "Deschidere la stradă: 17 ml",
      "Flexibilitate urbanistică",
      "Localizare centrală",
    ],
    technicalCharacteristics: [
      "Suprafață teren: 470 mp",
      "Deschidere la stradă: 17 ml",
    ],
    urbanStatuses: [
      "Certificat de urbanism emis în mai 2025: construire S + P + 5 etaje",
      "Regim de înălțime maxim admis prin PUG: P + 3 + 10 etaje",
    ],
    functions: [
      "Parcaje subterane la nivelul subsolului",
      "Spații comerciale la parter",
      "Locuințe colective la etajele 1–5",
    ],
    advantages: [
      "Poziționare excelentă, spațiul comercial de la parter beneficiind de un vad de excepție și valoare comercială remarcabilă",
      "Zonă consacrată pentru dezvoltări mixte (comercial + rezidențial)",
      "Posibilitate de extindere: teren vecin disponibil spre vânzare (470 mp), ceea ce permite o dezvoltare mai amplă, pe aproape 950 mp",
      "Bloc de referință, cu spații comerciale și apartamente premium",
    ],
    oportunities: [
      "Spațiu comercial modern la parter + apartamente premium la etaje",
      "Un teren de excepție, cu amplasament strategic, ideal pentru dezvoltatori și investitori ce vizează proiecte de referință în centrul orașului.",
    ],
    zoning: "Central",
    access: "Drum asfaltat - 8m lățime",
  },
  // Teren Calea Bucuresti
  {
    id: "teren-calea-bucuresti-1",
    title: "Teren Excepțional",
    subtitle: "Calea București Stradal",
    surface: 1920,
    price: 1600000,
    location: "Bvd. Calea București, Craiova",
    mainImage: landPlot3Image1,
    images: [landPlot3Image1, landPlot3Image2],
    brochure:
      "/brochures/teren-calea-bucuresti/pozitionare-teren-cb-google-maps.pdf",
    description:
      "Oferim spre vânzare un teren generos, situat pe artera principală a orașului - Calea București, chiar vis-a-vis de Facultatea de Mecanică, cu amplasament stradal, într-o zonă cu vizibilitate maximă și acces facil. Locația este ideală pentru o dezvoltare urbană modernă, cu spații comerciale la parter și locuințe la etajele superioare.",
    features: [
      "Deschidere la stradă: 29 ml",
      "Flexibilitate urbanistică",
      "Trafic intens și vizibilitate",
    ],
    technicalCharacteristics: [
      "Suprafață teren: 1920 mp",
      "Deschidere la stradă: 29 ml",
    ],
    urbanStatuses: [
      "Certificat de urbanism pentru construire, emis în mai 2025: S + P + 6 etaje",
      "Regim de înălțime teren conform PUG: P + 3 + 10 etaje",
    ],
    functions: [
      "Parcaje subterane la nivelul subsolului",
      "Spații comerciale la parter",
      "Locuințe colective la etajele 1–6",
    ],
    advantages: [
      "Spațiile comerciale de la parter beneficiază de un vad de excepție și o valoare ridicată",
      "Valorificarea parcajelor supraterane permite recuperarea a circa o treime din valoarea investiției în teren",
      "Locație ideală pentru dezvoltări rezidențiale",
      "Teren rarisim, cu suprafață generoasă și regim urbanistic favorabil, ideal pentru dezvoltatori sau investitori interesați de un proiect de referință",
    ],
    oportunities: [
      "Posibilitatea realizării unui bloc reprezentativ pe Calea București, cu spații comerciale și apartamente premium",
    ],
    zoning: "Central",
    access: "Intrare bulevard - 29m lățime",
  },
];
