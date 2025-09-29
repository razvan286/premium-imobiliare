import { RetailSpace } from "@/types/retailSpace";
import retailSpace1Image1 from "@/assets/spatiu-medical-1/foto1.jpg";
import retailSpace1Image2 from "@/assets/spatiu-medical-1/foto2.jpg";
import retailSpace2Image1 from "@/assets/spatiu-medical-2/foto1.jpg";
import fotoFatada from "@/assets/bloc-boutique/foto-fatada.jpg";

export const retailSpaces: RetailSpace[] = [
  {
    id: "spatiu-medical-1",
    title: "Spațiu medical (1)",
    subtitle: "Super central, Nou",
    surface: 145,
    price: 320000,
    vat: true,
    location: "Vecinătate a Pieței Centrale și bvd. Calea București",
    mainImage: retailSpace1Image1,
    images: [fotoFatada],
    floorPlans: [retailSpace1Image1, retailSpace1Image2],
    // matching indexes
    planTitles: ["Plan Parter", "Plan Demisol"],
    description: `Se oferă spre vânzare un spațiu medical cu destinație conformă Autorizației de Construire. Este ideal pentru cabinete medicale sau pentru o micro-clinică specializată.  

Localizarea este centrală, în imediata vecinătate a Pieței Centrale și a bulevardului Calea București, la mică distanță de centrul orașului. Poziția oferă vizibilitate excelentă și acces facil – aspecte esențiale pentru desfășurarea activităților medicale.  

Spațiul este dispus pe parter și demisol, în partea stângă a blocului nou din imagini, aflat în curs de finalizare. Fațada este contemporană, cu suprafețe vitrate ample și tâmplărie exterioară din aluminiu deja montată. Lucrările vor continua cu sistem de fațadă ventilată și placare cu fibrociment antracit.  

Zona vitrată principală este tip perete cortină, oferind un aspect modern și o lumină naturală abundentă, iar zona din față a spațiului de la parter are o înălțime utilă de 4 m. Suprafața utilă totală este de 145 mp (94 mp la parter și 51 mp la demisol).  

Este prevăzut cu centrală termică proprie și sistem de încălzire în pardoseală. Instalațiile electrice și de climatizare pot fi configurate și amplasate după preferințele viitorului proprietar.  

În incinta imobilului sunt disponibile locuri de parcare, contra cost. Spațiul se predă complet amenajat, la cheie.`,
  },
  {
    id: "spatiu-medical-2",
    title: "Spațiu medical (2)",
    subtitle: "Super central, Nou",
    surface: 97,
    price: 255000,
    vat: true,
    location: "Vecinătate a Pieței Centrale și bvd. Calea București",
    mainImage: retailSpace2Image1,
    images: [fotoFatada],
    floorPlans: [retailSpace2Image1],
    description: `Se oferă spre vânzare un spațiu medical, cu destinația certificată prin Autorizația de Construire și aviz DSP. Este ideal pentru cabinete medicale sau pentru o micro-clinică specializată.  

Localizarea este centrală, în imediata vecinătate a Pieței Centrale și a bulevardului Calea București, la mică distanță de centrul orașului. Poziția oferă vizibilitate excelentă și acces facil – aspecte esențiale pentru desfășurarea activităților medicale.  

Spațiul este dispus pe parter, în partea dreaptă a blocului din imagini, modern și reprezentativ, aflat în curs de finalizare. Fațada este contemporană, cu suprafețe vitrate ample și tâmplărie exterioară din aluminiu deja montată. Lucrările vor continua cu sistem de fațadă ventilată și placare cu fibrociment antracit.  

Este prevăzut cu centrală termică proprie și sistem de încălzire în pardoseală. Instalațiile electrice și de climatizare pot fi configurate și amplasate după preferințele viitorului proprietar.  

În incinta imobilului sunt disponibile locuri de parcare, contra cost. Spațiul se predă complet amenajat, la cheie.`,
  },
];
