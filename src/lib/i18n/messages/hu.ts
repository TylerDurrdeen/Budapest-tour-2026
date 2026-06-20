import type { Messages } from "../types";

export const messages: Messages = {
  ui: {
    mapOpen: "Térkép megnyitása",
    mapClose: "Térkép bezárása",
    routeSr: "Útvonal",
    routeOrder: "Megállók sorrendje (légvonal)",
    fixedBookings: "Fix foglalások",
    practicalTips: "Hasznos infók",
    accommodationBase: "Szállás bázis",
    accommodationTitle: "Szállás bázis",
    openTicket: "Jegy megnyitása",
    optionalBranches: "Választható opciók",
    imageAlt: "kép",
    branchImageAlt: "kép",
    restaurantImageAlt: "kép",
    theme: {
      label: "Téma",
      light: "Világos",
      dark: "Sötét",
      system: "Rendszer",
    },
    language: {
      label: "Nyelv",
      hu: "Magyar",
      en: "English",
      de: "Deutsch",
    },
    links: {
      toAccommodation: "Útvonal a szállásra",
      directions: "Útvonaltervezés",
      openTicket: "Jegy megnyitása",
      airbnb: "Airbnb",
      bkkSchedule: "BKK nosztalgia menetrend",
      toBoarding: "Útvonal felszálláshoz",
      toPier: "Útvonal kikötőhöz",
      toStop: "Útvonal megállóhoz",
    },
    categories: {
      accommodation: "Szállás",
      food: "Étel",
      culture: "Kultúra",
      nightlife: "Éjszaka",
      transport: "Közlekedés",
      activity: "Program",
      shopping: "Vásárlás",
    },
    time: {
      minutes: (n) => `~${n} perc`,
      hoursMinutes: (h, m) =>
        m === 0 ? `~${h} óra` : `~${h} óra ${m} perc`,
    },
  },
  accommodation: {
    tip: "Szinte minden 10–20 perc gyalog — VR iroda és hajókikötő is elérhető.",
  },
  fixedBookings: [
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
  ],
  practicalTips: [
    "BKK 72 órás bérlet mindenkinek — metró, villamos, busz, HÉV.",
    "100E reptéri busz külön jegy — nem része a bérletnek.",
    "VR túra és Gróf Széchenyi hajó le van foglalva — jegy PDF-ek a megállóknál.",
    "N2 nosztalgia villamosra külön jegy kell (600 Ft) — jún. 27-én Bengáli jármű.",
    "Júniusban a nap ~20:50-kor nyugszik — a 19:00-as hajó naplemente fényben indul.",
    "Kényelmes cipő + powerbank — rengeteg gyaloglás és fotó lesz!",
    "Vasárnap: gép 11:35 — reptéren legyetek 09:35-re!",
  ],
  days: {
    friday: {
      label: "Péntek",
      shortLabel: "P",
      date: "jún. 26.",
      subtitle: "Érkezés, Kopaszi gát, Virtu, esti program",
      stops: {
        "f-delipu": {
          title: "Déli pályaudvar — érkezés",
          description:
            "Megérkezés Budapestre. Onnan M2 (piros) metróval a szállás felé.",
          tip: "M2: Déli pu. → Deák Ferenc tér vagy Blaha Lujza tér (~10 perc), onnan gyalog Asbóth u.",
        },
        "f-metro": {
          title: "M2 metró → szállás",
          description:
            "Déli pu. → Deák/Blaha → gyalog Asbóth utca 14 (~5–10 perc).",
        },
        "f-szallas": {
          title: "Asbóth utca 14 — check-in",
          description: "Check-in, gyors becuccolás, sminkjavítás.",
        },
        "f-kopaszi": {
          title: "Kopaszi gát — vacsora",
          description:
            "A gáton számos étterem — válasszatok a listából, mindegyiknek van terasza.",
          duration: "~90 perc",
          tip: "A gáton több étterem is van egymás mellett — sétáljatok végig, és válasszatok a nyitva lévő helyek közül.",
        },
        "f-virtu": {
          title: "Virtu — egy ital",
          description:
            "Egy ital a Virtuban — laza esti hangulat a Kopaszi környékén.",
          duration: "~45 perc",
        },
        "f-este": {
          title: "Esti program — választható",
          description:
            "Vissza hozzánk egy italra, vagy még egy kör a Bartókon — Hadikban.",
          tip: "Péntek este csak ráhangoló — szombaton sok program lesz fix időpontban.",
          branches: {
            "f-hozzank": {
              title: "Hozzánk — ital a szálláson",
              description: "Asbóth u. 14 — beszélgetés, pihenés, korai lefekvés.",
            },
            "f-hadik": {
              title: "Hadik — Bartókon",
              description: "Ha még van kedvetek sétálni — ital a Hadikban.",
            },
          },
        },
      },
    },
    saturday: {
      label: "Szombat",
      shortLabel: "Szo",
      date: "jún. 27.",
      subtitle: "VR túra, Vár, nosztalgia villamos, hajó",
      stops: {
        "s-brunch": {
          title: "Cafe Brunch Budapest — Anker",
          description: "Reggeli/brunch az Anker köz 2-4. szám alatt.",
          duration: "~60 perc",
        },
        "s-vr-walk": {
          title: "Séta VR irodához",
          description:
            "1013 Budapest, Lánchíd utca 23. — induljatok időben az irodához!",
        },
        "s-vr": {
          title: "VR túra",
          description:
            "A VR-utazásod a 1013 Budapest, Lánchíd utca 23. alatti irodánknál kezdődik — felszerelés átvétele, túravezető. ~90 perc, ~1,8 km.",
          duration: "~90 perc",
        },
        "s-halaszbastya": {
          title: "Halászbástya",
          description: "Fotózás, séta a teraszokon — gyors körbenézés.",
          duration: "~60 perc",
        },
        "s-ebed": {
          title: "Ebéd a Várban",
          description: "Válasszatok az ajánlott éttermek közül.",
          duration: "~60 perc",
        },
        "s-nosztalgia": {
          title: "N2 nosztalgia villamos",
          description:
            "Margit híd környékén (Jászai Mari tér) felszállás → Országház felé a pesti Duna-parton.",
          duration: "~30 perc",
          tip: "Jún. 27-én N2-es járat, 1233-as „Bengáli” nosztalgiavillamos. Külön nosztalgia-vonaljegy kell (600 Ft) — a BKK bérlet nem elég!",
        },
        "s-parlament": {
          title: "Országház",
          description: "Leszállás Kossuth tér környékén — fotózás a partról.",
          duration: "~30 perc",
        },
        "s-langos": {
          title: "Retro Lángos Büfé",
          description: "Gyors retro lángos a belvárosban — Bazilika felé menet.",
          duration: "~20 perc",
        },
        "s-bazilika": {
          title: "Szent István Bazilika",
          description: "Gyors körbenézés — kupola csak ha van idő és kedv.",
          duration: "~30 perc",
        },
        "s-szallas": {
          title: "Szállás — átöltözés",
          description: "Vissza Asbóth u. 14-re — hajó-outfit, smink, pihenés.",
        },
        "s-hajo": {
          title: "Gróf Széchenyi rendezvényhajó",
          description:
            "Cruise without drinks — naplemente + kivilágított Parlament + Lánchíd. Foglalás: Nagy Dániel.",
          duration: "~90 perc",
          tip: "18:45-re a kikötőnél legyetek — Vigadó tér / Petőfi tér környék.",
        },
        "s-vendeglo": {
          title: "Ikonikus magyar vendéglő",
          description: "Gyors ikonikus magyar konyha a hajó után.",
          duration: "~30 perc",
        },
        "s-este": {
          title: "Esti opció — választható",
          description: "Döntsétek el, mennyire vagytok fáradtak.",
          branches: {
            "s-pihenes": {
              title: "Vissza a szállásra pihenni",
              description: "Asbóth u. 14 — korai lefekvés, holnap repülő.",
            },
            "s-gozsdu": {
              title: "Gozsdu udvar — koktélozás",
              description:
                "Ha még van energia — romkocsmák, bárok a Gozsdu udvarban.",
            },
          },
        },
      },
    },
    sunday: {
      label: "Vasárnap",
      shortLabel: "V",
      date: "jún. 28.",
      subtitle: "Indulás haza — szoros időzítés!",
      stops: {
        "u-ebreszto": {
          title: "Ébresztő, csomag",
          description: "Csomagok bezárása, utolsó ellenőrzés.",
        },
        "u-madal": {
          title: "Madal Café — reggeli",
          description:
            "Király u. 7 — gyors reggeli indulás előtt (vasárnap nyit 8:30).",
        },
        "u-kijelentkezes": {
          title: "Kijelentkezés",
          description: "Szállás elhagyása — ne hagyjatok semmit.",
        },
        "u-100e": {
          title: "100E reptéri busz",
          description:
            "Deák Ferenc tér vagy Blaha Lujza tér (~5–10 perc séta). Menetidő ~35–45 perc.",
          tip: "A 100E NEM része a BKK bérletnek — külön jegy kell! Backup: taxi ~7000–9000 Ft, ~30 perc.",
        },
        "u-airport": {
          title: "Liszt Ferenc reptér T2",
          description: "Check-in, poggyászfeladás — gép 11:35-kor.",
          tip: "Reptéren legyetek 09:35-re (2 órával a felszállás előtt).",
        },
        "u-felszallas": {
          title: "Felszállás",
          description: "Viszlát Budapest! ✈️",
        },
      },
    },
  },
  restaurants: {
    kopaszi: {
      vakvarju: {
        description: "Laza beach-bisztro hangulat, terasz a Duna-parton.",
      },
      veranda: {
        description: "Pasta & pizza — olasz ihletésű konyha a gáton.",
      },
      lebistro: {
        description:
          "Kitchen & More — változatos nemzetközi konyha, jó választás csoportban.",
      },
      kopaszikert: {
        description:
          "A gát egyik klasszikus étterme — nagy terasz, Duna-parti kilátás.",
      },
    },
    castle: {
      jamies: {
        description: "Ismert nemzetközi konyha a Várban.",
      },
      "21": {
        description: "Modern magyar konyha, elegáns hangulat.",
      },
      riso: {
        description: "Olasz ihletésű, hangulatos várnegyedi étterem.",
      },
    },
  },
};
