import { Building } from "@/types/building";
import building1Image1 from "@/assets/bloc-boutique/randare-fatada.jpg";
import building1Image2 from "@/assets/bloc-boutique/foto-fatada.jpg";
import building1Image3 from "@/assets/bloc-boutique/2-camere-plan.jpg";
import building1Image4 from "@/assets/bloc-boutique/3-camere-plan.jpg";
import building1Image5 from "@/assets/bloc-boutique/4-camere-plan.jpg";

export const buildings: Building[] = [
  {
    id: "bloc-boutique-central",
    name: "Bloc Boutique Central",
    location: "Ultracentral, lângă Piața Centrală",
    description:
      "Apartamente premium într-un bloc boutique, ultracentral. Proiect exclusivist, cu doar 6 apartamente, conceput ca un rezidențial exclusiv, cu arhitectură modernă și elegantă. Poziționat lângă Piața Centrală și bulevardul Calea București, la câteva minute de centrul orașului, reprezintă alegerea ideală pentru cei care apreciază confortul unei locații centrale. Construcția este realizată cu materiale și soluții de top, ce asigură calitate și performanță superioară, fără compromisuri în privința detaliilor și a execuției.",
    features: [
      "Înălțime utilă 3 metri – apartamente spațioase, luminoase și elegante",
      "Zidărie perimetrală BCA Ytong 30 cm, termoizolată cu sistem complet Caparol",
      "Compartimentări interioare FIBRAN (Italia) – gips natural, planeitate perfectă",
      "Pereți armați cu plasă din fibră de sticlă, finisați cu tencuială fină pe bază de gips",
      "Tavane Knauf din gips-carton verde, cu strat de vată minerală antifonică",
      "Încălzire prin pardoseală Uponor și centrală termică proprie Viessmann",
      "Trasee pentru aer condiționat integrate în toate camerele",
      "Precadre termoizolante Thermo Green pentru tâmplăria exterioară",
      "Tâmplărie premium din aluminiu - Alumil",
      "Ferestre generoase, care oferă un aport excelent de lumină naturală",
      "Finisaje interioare premium: parchet de calitate, plăci ceramice",
      "Lift de ultimă generație, acces securizat și locuri de parcare generoase",
    ],
    apartmentTypes: [
      {
        id: "2-camere",
        type: "2 Camere",
        surface: 62,
        rooms: 2,
        price: 124000,
        vat: true,
      },
      {
        id: "3-camere",
        type: "3 Camere",
        surface: 83.4,
        rooms: 3,
        price: 167000,
        vat: true,
      },
      {
        id: "4-camere",
        type: "4 Camere",
        surface: 132.5,
        rooms: 4,
        price: 240000,
        vat: true,
      },
    ],
    mainImage: building1Image2,
    images: [building1Image2, building1Image1],
    apartmentPlans: [building1Image3, building1Image4, building1Image5],
    planTitles: [
      "Apartament 2 Camere",
      "Apartament 3 Camere",
      "Apartament 4 Camere",
    ],
    totalApartments: 6,
  },
];
