import { Building } from "@/types/building";
import building1Image1 from "@/assets/bloc-boutique/randare-fatada.jpg";
import building1Image2 from "@/assets/bloc-boutique/foto-fatada.jpg";
import building1Image4 from "@/assets/bloc-boutique/3-camere-plan.jpg";
import building1Image5 from "@/assets/bloc-boutique/4-camere-plan.jpeg";
import locationGooglMaps from "@/assets/bloc-boutique/localizare-google-maps.jpeg";

export const buildings: Building[] = [
  {
    id: "bloc-boutique-central",
    name: "Apartamente Premium de Vânzare - Bloc Boutique, Central",
    location:
      "Str. Nicolae Bălcescu (intersecție cu str. Vasile Alecsandri), lângă Piața Centrală",
    description: `Proiect exclusivist, cu doar 6 apartamente, conceput ca un rezidențial exclusiv, cu arhitectură modernă și elegantă. Poziționat lângă Piața Centrală și bulevardul Calea București, la câteva minute de centrul orașului, reprezintă alegerea ideală pentru cei care apreciază confortul unei locații centrale.
      
      Construcția este realizată cu materiale și soluții de calitate superioară, care garantează performanță și finisaje impecabile, fără compromisuri în execuție.
      `,
    features: [
      "Înălțime utilă 3 metri - apartamente spațioase, luminoase și elegante",
      "Zidărie perimetrală din BCA Ytong 30 cm, termoizolată cu sistem complet Caparol (polistiren grafitat Dalmatina) cu două straturi de plasă de armare, pentru rezistență și eficiență energetică.",
      "Compartimentări interioare din blocuri de zidărie din gips natural FIBRAN (Italia), caracterizate prin planeitate perfectă, izolare fonică superioară și proprietăți care asigură un climat interior sănătos.",
      "Pereți armați cu plasă din fibră de sticlă și finisați cu tencuială fină pe bază de gips - suprafețe netede, uniforme și rezistente în timp.",
      "Tavane Knauf din gips-carton verde, cu strat de vată minerală pentru izolare fonică și confort termic.",
      "Încălzire prin pardoseală Uponor și centrală termică individuală Viessmann în fiecare apartament.",
      "Trasee pentru aer condiționat integrate în toate camerele, pregătite pentru montarea unităților interioare și exterioare.",
      "Precadre termoizolante Thermo Green montate la golurile pentru tâmplăria exterioară - izolare termică și fonică superioară.",
      "Tâmplărie premium din aluminiu, marca Alumil - montată la parter, urmează la toate nivelurile.",
      "Ferestre generoase, cu aport excelent de lumină naturală și deschidere amplă spre exterior.",
      "Finisaje interioare atent selecționate - parchet, plăci ceramice de calitate, uși cu design modern și obiecte sanitare elegante.",
      "Lift de ultimă generație și acces securizat.",
      "Locuri de parcare generoase, disponibile spre achiziție în curtea interioară.",
    ],
    apartmentTypes: [
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
    images: [building1Image2, building1Image1, locationGooglMaps],
    apartmentPlans: [building1Image4, building1Image5],
    planTitles: ["Apartament 3 Camere", "Apartament 4 Camere"],
    totalApartments: 6,
  },
];
