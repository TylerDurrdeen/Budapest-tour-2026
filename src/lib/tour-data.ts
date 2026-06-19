export type StopCategory =
  | "accommodation"
  | "food"
  | "culture"
  | "nightlife"
  | "transport"
  | "activity"
  | "shopping";

export type TourStop = {
  id: string;
  time: string;
  title: string;
  description?: string;
  lng: number;
  lat: number;
  category: StopCategory;
  tip?: string;
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

export const BUDAPEST_CENTER: [number, number] = [19.055, 47.498];

export const tourDays: TourDay[] = [
  {
    id: "friday",
    label: "Péntek",
    shortLabel: "P",
    date: "jún. 26.",
    subtitle: "Érkezés, lazítós este",
    routeColor: "#e11d48",
    stops: [
      {
        id: "f-delipu",
        time: "18:00",
        title: "Déli pályaudvar",
        description: "Indulás Balatonalmádiból — vonat vagy autó.",
        lng: 19.0254,
        lat: 47.4996,
        category: "transport",
      },
      {
        id: "f-deak",
        time: "20:15",
        title: "Deák Ferenc tér — szállás",
        description: "Check-in a Király utca / Deák tér környékén.",
        lng: 19.055,
        lat: 47.4979,
        category: "accommodation",
        tip: "Minden innen 5–15 perc gyalog.",
      },
      {
        id: "f-gozsdu",
        time: "21:00",
        title: "Gozsdu udvar — vacsora",
        description: "Spíler Bistro, Mazel Tov vagy Sushi Sei.",
        lng: 19.0628,
        lat: 47.4978,
        category: "food",
      },
      {
        id: "f-szimpla",
        time: "22:30",
        title: "Romkocsma kör — Kazinczy u.",
        description: "Szimpla Kert, Mazel Tov, Kőleves Kert.",
        lng: 19.0638,
        lat: 47.4968,
        category: "nightlife",
      },
    ],
  },
  {
    id: "saturday",
    label: "Szombat",
    shortLabel: "Szo",
    date: "jún. 27.",
    subtitle: "A nagy nap + hajó",
    routeColor: "#2563eb",
    stops: [
      {
        id: "s-espresso",
        time: "09:00",
        title: "Espresso Embassy — reggeli",
        description: "Arany János u., 5 perc séta a szállástól.",
        lng: 19.0498,
        lat: 47.5032,
        category: "food",
      },
      {
        id: "s-bazilika",
        time: "10:00",
        title: "Szent István Bazilika",
        description: "Kupola panoráma — 360° kilátás (~1500 Ft).",
        lng: 19.0538,
        lat: 47.501,
        category: "culture",
      },
      {
        id: "s-lanchid",
        time: "11:30",
        title: "Széchenyi Lánchíd",
        description: "Gyalogos átkelés a Dunán — Insta-aranybánya!",
        lng: 19.044,
        lat: 47.4983,
        category: "culture",
      },
      {
        id: "s-siklo",
        time: "12:00",
        title: "Budavári Sikló",
        description: "Fel a Várhegyre — rövid, hangulatos út.",
        lng: 19.0396,
        lat: 47.4979,
        category: "transport",
      },
      {
        id: "s-halaszbastya",
        time: "12:30",
        title: "Halászbástya + Mátyás-templom",
        description: "Fotózás, kávé a Ruszwurmban.",
        lng: 19.0348,
        lat: 47.5028,
        category: "culture",
      },
      {
        id: "s-varkert",
        time: "15:30",
        title: "Várkert Bazár",
        description: "Lefelé a Várból — gyalog, lefelé könnyű.",
        lng: 19.0406,
        lat: 47.4963,
        category: "culture",
      },
      {
        id: "s-vasarcsarnok",
        time: "16:30",
        title: "Nagyvásárcsarnok",
        description: "2-es villamos után — lángos, ajándék-shopping.",
        lng: 19.0572,
        lat: 47.487,
        category: "shopping",
        tip: "A 2-es villamos a világ egyik legszebb vonala a Duna mentén.",
      },
      {
        id: "s-vorossmarty",
        time: "17:30",
        title: "Vörösmarty tér",
        description: "Séta a Váci utcán vissza Deák tér felé.",
        lng: 19.0497,
        lat: 47.4972,
        category: "activity",
      },
      {
        id: "s-hajo",
        time: "20:30",
        title: "Hajókirándulás",
        description: "Naplemente + kivilágított Parlament + Lánchíd.",
        lng: 19.0492,
        lat: 47.4965,
        category: "activity",
        tip: "Júniusban a nap ~20:50-kor nyugszik — pont a kék órára esik.",
      },
    ],
  },
  {
    id: "sunday",
    label: "Vasárnap",
    shortLabel: "V",
    date: "jún. 28.",
    subtitle: "Indulás haza — szoros időzítés!",
    routeColor: "#d97706",
    stops: [
      {
        id: "u-madal",
        time: "07:30",
        title: "Madal Café — reggeli",
        description: "Hold u., nyit 7:30-kor.",
        lng: 19.0512,
        lat: 47.4961,
        category: "food",
      },
      {
        id: "u-deak",
        time: "08:30",
        title: "100E reptéri busz — Deák tér",
        description: "Kálvin/Erzsébet tér felőli megálló, ~35–45 perc.",
        lng: 19.055,
        lat: 47.4979,
        category: "transport",
        tip: "A 100E NEM része a BKK bérletnek — külön jegy kell!",
      },
      {
        id: "u-airport",
        time: "09:30",
        title: "Liszt Ferenc reptér T2",
        description: "Check-in, poggyászfeladás — gép 11:35-kor.",
        lng: 19.2556,
        lat: 47.433,
        category: "transport",
        tip: "Backup: taxi ~7000–9000 Ft, ~30 perc reggel.",
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
  "Hajóra online érdemes foglalni előre — naplemente járatok hamar telnek.",
  "Kényelmes cipő + powerbank — rengeteg gyaloglás és fotó lesz!",
];
