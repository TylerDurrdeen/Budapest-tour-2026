import { googleDirectionsUrl } from "@/lib/maps";

export type StopCategory =
  | "accommodation"
  | "food"
  | "culture"
  | "nightlife"
  | "transport"
  | "activity"
  | "shopping";

export type StopLinkVariant =
  | "directions"
  | "place"
  | "ticket"
  | "airbnb"
  | "external";

export type StopLink = {
  label: string;
  href: string;
  variant: StopLinkVariant;
};

export type RestaurantOption = {
  id: string;
  name: string;
  description?: string;
  mapsUrl?: string;
  images: string[];
};

export type StopBranch = {
  id: string;
  title: string;
  description: string;
  lat?: number;
  lng?: number;
  links?: StopLink[];
};

export type TourStop = {
  id: string;
  time: string;
  title: string;
  description?: string;
  lng: number;
  lat: number;
  category: StopCategory;
  tip?: string;
  duration?: string;
  links?: StopLink[];
  restaurants?: RestaurantOption[];
  branches?: StopBranch[];
  ticketPdf?: string;
  showRestaurantCarousel?: boolean;
};

export type TourDay = {
  id: string;
  label: string;
  shortLabel: string;
  date: string;
  subtitle: string;
  routeColor: string;
  stops: TourStop[];
};

export const accommodation = {
  address: "Asbóth utca 14, Budapest 1075",
  lng: 19.057694,
  lat: 47.49725,
  airbnbUrl:
    "https://www.airbnb.hu/rooms/767256276511340819?source_impression_id=p3_1781888631_P34SMF021-Tgbm-r",
  tip: "Szinte minden 10–20 perc gyalog — VR iroda és hajókikötő is elérhető.",
};

export const fixedBookings: {
  title: string;
  datetime: string;
  details: string;
  ticketPdf?: string;
}[] = [
  {
    title: "VR túra",
    datetime: "2026. jún. 27., 11:00",
    details:
      "A VR-utazás a 1013 Budapest, Lánchíd utca 23. alatti irodánál kezdődik — ~90 perc, ~1,8 km.",
    ticketPdf: "/26596-2026.pdf",
  },
  {
    title: "Gróf Széchenyi rendezvényhajó",
    datetime: "2026. jún. 27., 19:00",
    details: "Foglalási név: Nagy Dániel — ~90 perc.",
    ticketPdf: "/HKE5SKZMIBXPYH2U6A06357R63FZJLZR.pdf",
  },
];

export const BUDAPEST_CENTER: [number, number] = [
  accommodation.lng,
  accommodation.lat,
];

const kopasziRestaurants: RestaurantOption[] = [
  {
    id: "vakvarju",
    name: "VakVarjú Beach Bistro",
    description: "Laza beach-bisztro hangulat, terasz a Duna-parton.",
    mapsUrl: googleDirectionsUrl("VakVarjú Beach Bistro Budapest Kopaszi gát"),
    images: [
      "/vakvarju/5.jpg",
      "/vakvarju/IMG-0025.jpg",
      "/vakvarju/foto_vassadrienn-2158.jpg",
    ],
  },
  {
    id: "veranda",
    name: "Veranda Restaurant",
    description: "Pasta & pizza — olasz ihletésű konyha a gáton.",
    mapsUrl: googleDirectionsUrl("Veranda Restaurant Pasta Pizza Budapest Kopaszi gát"),
    images: ["/veranda/1426169249-3805.jpg", "/veranda/images.jpeg"],
  },
  {
    id: "lebistro",
    name: "Le Bistro",
    description: "Kitchen & More — változatos nemzetközi konyha, jó választás csoportban.",
    mapsUrl: googleDirectionsUrl("Le Bistro Kitchen More Budapest Kopaszi gát"),
    images: ["/le%20bistro/1564069806-3360.jpg", "/le%20bistro/4-1.jpg"],
  },
  {
    id: "kopaszikert",
    name: "Kopaszikert",
    description: "A gát egyik klasszikus étterme — nagy terasz, Duna-parti kilátás.",
    mapsUrl: googleDirectionsUrl("Kopaszikert Budapest"),
    images: [
      "/kopaszikert/kopaszikert-budapest.webp",
      "/kopaszikert/356594_orig.jpg",
    ],
  },
];

const castleLunchRestaurants: RestaurantOption[] = [
  {
    id: "jamies",
    name: "Jamie's Oliver",
    description: "Ismert nemzetközi konyha a Várban.",
    mapsUrl: "https://maps.app.goo.gl/EwF4uN47NMUHau7Z9",
    images: [],
  },
  {
    id: "21",
    name: "21 Hungarian Kitchen",
    description: "Modern magyar konyha, elegáns hangulat.",
    mapsUrl: "https://maps.app.goo.gl/wrQEBF1L2BHq2fnF6",
    images: [],
  },
  {
    id: "riso",
    name: "Riso Restaurant",
    description: "Olasz ihletésű, hangulatos várnegyedi étterem.",
    mapsUrl: "https://maps.app.goo.gl/9f2shEjwLT3Yqn42A",
    images: [],
  },
];

function directionsLink(
  label: string,
  destination: string | { lat: number; lng: number },
): StopLink {
  return {
    label,
    href: googleDirectionsUrl(destination),
    variant: "directions",
  };
}

export const tourDays: TourDay[] = [
  {
    id: "friday",
    label: "Péntek",
    shortLabel: "P",
    date: "jún. 26.",
    subtitle: "Érkezés, Kopaszi gát, Virtu, esti program",
    routeColor: "#93c5fd",
    stops: [
      {
        id: "f-delipu",
        time: "18:00",
        title: "Déli pályaudvar — érkezés",
        description:
          "Megérkezés Budapestre. Onnan M2 (piros) metróval a szállás felé.",
        lng: 19.0254,
        lat: 47.4996,
        category: "transport",
        links: [
          directionsLink("Útvonal a szállásra", accommodation.address),
        ],
        tip: "M2: Déli pu. → Deák Ferenc tér vagy Blaha Lujza tér (~10 perc), onnan gyalog Asbóth u.",
      },
      {
        id: "f-metro",
        time: "18:30",
        title: "M2 metró → szállás",
        description:
          "Déli pu. → Deák/Blaha → gyalog Asbóth utca 14 (~5–10 perc).",
        lng: 19.055,
        lat: 47.4979,
        category: "transport",
      },
      {
        id: "f-szallas",
        time: "19:00",
        title: "Asbóth utca 14 — check-in",
        description: "Check-in, gyors becuccolás, sminkjavítás.",
        lng: accommodation.lng,
        lat: accommodation.lat,
        category: "accommodation",
        tip: accommodation.tip,
        links: [
          directionsLink("Útvonaltervezés", accommodation.address),
          {
            label: "Airbnb",
            href: accommodation.airbnbUrl,
            variant: "airbnb",
          },
        ],
      },
      {
        id: "f-kopaszi",
        time: "20:00",
        title: "Kopaszi gát — vacsora",
        description:
          "A gáton számos étterem — válasszatok a listából, mindegyiknek van terasza.",
        lng: 19.0586,
        lat: 47.4596,
        category: "food",
        duration: "~90 perc",
        restaurants: kopasziRestaurants,
        showRestaurantCarousel: true,
        links: [
          directionsLink("Útvonaltervezés", {
            lat: 47.4596,
            lng: 19.0586,
          }),
        ],
        tip: "A gáton több étterem is van egymás mellett — sétáljatok végig, és válasszatok a nyitva lévő helyek közül.",
      },
      {
        id: "f-virtu",
        time: "21:30",
        title: "Virtu — egy ital",
        description: "Egy ital a Virtuban — laza esti hangulat a Kopaszi környékén.",
        lng: 19.05903,
        lat: 47.467994,
        category: "nightlife",
        duration: "~45 perc",
        links: [
          directionsLink("Útvonaltervezés", {
            lat: 47.467994,
            lng: 19.05903,
          }),
        ],
      },
      {
        id: "f-este",
        time: "22:30",
        title: "Esti program — választható",
        description: "Vissza hozzánk egy italra, vagy még egy kör a Bartókon — Hadikban.",
        lng: accommodation.lng,
        lat: accommodation.lat,
        category: "nightlife",
        branches: [
          {
            id: "f-hozzank",
            title: "Hozzánk — ital a szálláson",
            description: "Asbóth u. 14 — beszélgetés, pihenés, korai lefekvés.",
            links: [directionsLink("Útvonaltervezés", accommodation.address)],
          },
          {
            id: "f-hadik",
            title: "Hadik — Bartókon",
            description: "Ha még van kedvetek sétálni — ital a Hadikban.",
            lat: 47.479097,
            lng: 19.05064,
            links: [
              directionsLink("Útvonaltervezés", {
                lat: 47.479097,
                lng: 19.05064,
              }),
            ],
          },
        ],
        tip: "Péntek este csak ráhangoló — szombaton sok program lesz fix időpontban.",
      },
    ],
  },
  {
    id: "saturday",
    label: "Szombat",
    shortLabel: "Szo",
    date: "jún. 27.",
    subtitle: "VR túra, Vár, nosztalgia villamos, hajó",
    routeColor: "#3b82f6",
    stops: [
      {
        id: "s-brunch",
        time: "09:00",
        title: "Cafe Brunch Budapest — Anker",
        description: "Reggeli/brunch az Anker köz 2-4. szám alatt.",
        lng: 19.055467,
        lat: 47.498186,
        category: "food",
        duration: "~60 perc",
        links: [
          directionsLink(
            "Útvonaltervezés",
            "Cafe Brunch Budapest Anker köz 2-4",
          ),
        ],
      },
      {
        id: "s-vr-walk",
        time: "10:15",
        title: "Séta VR irodához",
        description:
          "1013 Budapest, Lánchíd utca 23. — induljatok időben az irodához!",
        lng: 19.041723,
        lat: 47.496408,
        category: "transport",
        links: [
          directionsLink("Útvonaltervezés", "Lánchíd utca 23, Budapest 1013"),
        ],
      },
      {
        id: "s-vr",
        time: "11:00",
        title: "VR túra",
        description:
          "A VR-utazásod a 1013 Budapest, Lánchíd utca 23. alatti irodánknál kezdődik — felszerelés átvétele, túravezető. ~90 perc, ~1,8 km.",
        lng: 19.0393,
        lat: 47.4976,
        category: "activity",
        duration: "~90 perc",
        ticketPdf: "/26596-2026.pdf",
        links: [
          directionsLink("Útvonaltervezés", "Lánchíd utca 23, Budapest 1013"),
          {
            label: "Jegy megnyitása",
            href: "/26596-2026.pdf",
            variant: "ticket",
          },
        ],
      },
      {
        id: "s-halaszbastya",
        time: "12:30",
        title: "Halászbástya",
        description: "Fotózás, séta a teraszokon — gyors körbenézés.",
        lng: 19.0348,
        lat: 47.5028,
        category: "culture",
        duration: "~60 perc",
        links: [
          directionsLink("Útvonaltervezés", "Halászbástya, Budapest"),
        ],
      },
      {
        id: "s-ebed",
        time: "13:30",
        title: "Ebéd a Várban",
        description: "Válasszatok az ajánlott éttermek közül.",
        lng: 19.031235,
        lat: 47.504039,
        category: "food",
        duration: "~60 perc",
        restaurants: castleLunchRestaurants,
        showRestaurantCarousel: false,
      },
      {
        id: "s-nosztalgia",
        time: "15:30",
        title: "N2 nosztalgia villamos",
        description:
          "Margit híd környékén (Jászai Mari tér) felszállás → Országház felé a pesti Duna-parton.",
        lng: 19.046,
        lat: 47.513,
        category: "transport",
        duration: "~30 perc",
        links: [
          directionsLink("Útvonal felszálláshoz", "Jászai Mari tér, Budapest"),
          {
            label: "BKK nosztalgia menetrend",
            href: "https://bkk.hu/utazasi-informaciok/kozossegi-kozlekedes/kulonleges-jaratok-nosztalgiakozlekedes/nosztalgiajaratok/nosztalgiajaratok-budapesten/#rendszeres",
            variant: "external",
          },
        ],
        tip: "Jún. 27-én N2-es járat, 1233-as „Bengáli” nosztalgiavillamos. Külön nosztalgia-vonaljegy kell (600 Ft) — a BKK bérlet nem elég!",
      },
      {
        id: "s-parlament",
        time: "16:15",
        title: "Országház",
        description: "Leszállás Kossuth tér környékén — fotózás a partról.",
        lng: 19.0456,
        lat: 47.507,
        category: "culture",
        duration: "~30 perc",
        links: [directionsLink("Útvonaltervezés", "Országház, Budapest")],
      },
      {
        id: "s-langos",
        time: "16:45",
        title: "Retro Lángos Büfé",
        description: "Gyors retro lángos a belvárosban — Bazilika felé menet.",
        lng: 19.055099,
        lat: 47.503232,
        category: "food",
        duration: "~20 perc",
        links: [
          directionsLink("Útvonaltervezés", "Retro Lángos Büfé Budapest"),
        ],
      },
      {
        id: "s-bazilika",
        time: "17:15",
        title: "Szent István Bazilika",
        description: "Gyors körbenézés — kupola csak ha van idő és kedv.",
        lng: 19.053123,
        lat: 47.500741,
        category: "culture",
        duration: "~30 perc",
        links: [
          directionsLink("Útvonaltervezés", "Szent István Bazilika, Budapest"),
        ],
      },
      {
        id: "s-szallas",
        time: "18:00",
        title: "Szállás — átöltözés",
        description: "Vissza Asbóth u. 14-re — hajó-outfit, smink, pihenés.",
        lng: accommodation.lng,
        lat: accommodation.lat,
        category: "accommodation",
        links: [directionsLink("Útvonaltervezés", accommodation.address)],
      },
      {
        id: "s-hajo",
        time: "19:00",
        title: "Gróf Széchenyi rendezvényhajó",
        description:
          "Cruise without drinks — naplemente + kivilágított Parlament + Lánchíd. Foglalás: Nagy Dániel.",
        lng: 19.0492,
        lat: 47.4965,
        category: "activity",
        duration: "~90 perc",
        ticketPdf: "/HKE5SKZMIBXPYH2U6A06357R63FZJLZR.pdf",
        links: [
          directionsLink("Útvonal kikötőhöz", "Vigadó tér, Budapest"),
          {
            label: "Jegy megnyitása",
            href: "/HKE5SKZMIBXPYH2U6A06357R63FZJLZR.pdf",
            variant: "ticket",
          },
        ],
        tip: "18:45-re a kikötőnél legyetek — Vigadó tér / Petőfi tér környék.",
      },
      {
        id: "s-vendeglo",
        time: "20:30",
        title: "Ikonikus magyar vendéglő",
        description: "Gyors ikonikus magyar konyha a hajó után.",
        lng: 19.045398,
        lat: 47.501788,
        category: "food",
        duration: "~30 perc",
        links: [
          directionsLink("Útvonaltervezés", {
            lat: 47.501788,
            lng: 19.045398,
          }),
        ],
      },
      {
        id: "s-este",
        time: "21:00",
        title: "Esti opció — választható",
        description: "Döntsétek el, mennyire vagytok fáradtak.",
        lng: accommodation.lng,
        lat: accommodation.lat,
        category: "nightlife",
        branches: [
          {
            id: "s-pihenes",
            title: "Vissza a szállásra pihenni",
            description: "Asbóth u. 14 — korai lefekvés, holnap repülő.",
            links: [directionsLink("Útvonaltervezés", accommodation.address)],
          },
          {
            id: "s-gozsdu",
            title: "Gozsdu udvar — koktélozás",
            description: "Ha még van energia — romkocsmák, bárok a Gozsdu udvarban.",
            links: [
              directionsLink("Útvonaltervezés", "Gozsdu Udvar, Budapest"),
            ],
          },
        ],
      },
    ],
  },
  {
    id: "sunday",
    label: "Vasárnap",
    shortLabel: "V",
    date: "jún. 28.",
    subtitle: "Indulás haza — szoros időzítés!",
    routeColor: "#1d4ed8",
    stops: [
      {
        id: "u-ebreszto",
        time: "07:00",
        title: "Ébresztő, csomag",
        description: "Csomagok bezárása, utolsó ellenőrzés.",
        lng: accommodation.lng,
        lat: accommodation.lat,
        category: "accommodation",
      },
      {
        id: "u-madal",
        time: "07:30",
        title: "Madal Café — reggeli",
        description: "Király u. 7 — gyors reggeli indulás előtt (vasárnap nyit 8:30).",
        lng: 19.057373,
        lat: 47.498631,
        category: "food",
        links: [
          directionsLink("Útvonaltervezés", "Madal Cafe Király utca 7 Budapest"),
        ],
      },
      {
        id: "u-kijelentkezes",
        time: "08:15",
        title: "Kijelentkezés",
        description: "Szállás elhagyása — ne hagyjatok semmit.",
        lng: accommodation.lng,
        lat: accommodation.lat,
        category: "accommodation",
      },
      {
        id: "u-100e",
        time: "08:30",
        title: "100E reptéri busz",
        description:
          "Deák Ferenc tér vagy Blaha Lujza tér (~5–10 perc séta). Menetidő ~35–45 perc.",
        lng: 19.054332,
        lat: 47.497894,
        category: "transport",
        links: [
          directionsLink("Útvonal megállóhoz", {
            lat: 47.497894,
            lng: 19.054332,
          }),
        ],
        tip: "A 100E NEM része a BKK bérletnek — külön jegy kell! Backup: taxi ~7000–9000 Ft, ~30 perc.",
      },
      {
        id: "u-airport",
        time: "09:30",
        title: "Liszt Ferenc reptér T2",
        description: "Check-in, poggyászfeladás — gép 11:35-kor.",
        lng: 19.2613,
        lat: 47.4326,
        category: "transport",
        links: [
          directionsLink("Útvonaltervezés", "Budapest Liszt Ferenc repülőtér Terminál 2"),
        ],
        tip: "Reptéren legyetek 09:35-re (2 órával a felszállás előtt).",
      },
      {
        id: "u-felszallas",
        time: "11:35",
        title: "Felszállás",
        description: "Viszlát Budapest! ✈️",
        lng: 19.2613,
        lat: 47.4326,
        category: "transport",
      },
    ],
  },
];

export const categoryLabels: Record<StopCategory, string> = {
  accommodation: "Szállás",
  food: "Étel",
  culture: "Kultúra",
  nightlife: "Éjszaka",
  transport: "Közlekedés",
  activity: "Program",
  shopping: "Vásárlás",
};

export const practicalTips = [
  "BKK 72 órás bérlet mindenkinek — metró, villamos, busz, HÉV.",
  "100E reptéri busz külön jegy — nem része a bérletnek.",
  "VR túra és Gróf Széchenyi hajó le van foglalva — jegy PDF-ek a megállóknál.",
  "N2 nosztalgia villamosra külön jegy kell (600 Ft) — jún. 27-én Bengáli jármű.",
  "Júniusban a nap ~20:50-kor nyugszik — a 19:00-as hajó naplemente fényben indul.",
  "Kényelmes cipő + powerbank — rengeteg gyaloglás és fotó lesz!",
  "Vasárnap: gép 11:35 — reptéren legyetek 09:35-re!",
];
