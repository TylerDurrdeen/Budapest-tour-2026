import type { Messages } from "../types";

export const messages: Messages = {
  ui: {
    mapOpen: "Karte öffnen",
    mapClose: "Karte schließen",
    routeSr: "Route",
    routeOrder: "Haltestellenreihenfolge (Luftlinie)",
    fixedBookings: "Feste Buchungen",
    practicalTips: "Praktische Tipps",
    accommodationBase: "Unterkunft als Basis",
    accommodationTitle: "Unterkunft als Basis",
    openTicket: "Ticket öffnen",
    optionalBranches: "Optionale Alternativen",
    imageAlt: "Foto",
    branchImageAlt: "Foto",
    restaurantImageAlt: "Foto",
    theme: {
      label: "Design",
      light: "Hell",
      dark: "Dunkel",
      system: "System",
    },
    language: {
      label: "Sprache",
      hu: "Magyar",
      en: "English",
      de: "Deutsch",
    },
    links: {
      toAccommodation: "Route zur Unterkunft",
      directions: "Route planen",
      openTicket: "Ticket öffnen",
      airbnb: "Airbnb",
      bkkSchedule: "BKK-Nostalgie-Straßenbahn-Fahrplan",
      toBoarding: "Route zum Einstieg",
      toPier: "Route zum Anleger",
      toStop: "Route zur Haltestelle",
    },
    categories: {
      accommodation: "Unterkunft",
      food: "Essen",
      culture: "Kultur",
      nightlife: "Nachtleben",
      transport: "Verkehr",
      activity: "Programm",
      shopping: "Einkaufen",
    },
    time: {
      minutes: (n) => `~${n} Min.`,
      hoursMinutes: (h, m) =>
        m === 0 ? `~${h} Std.` : `~${h} Std. ${m} Min.`,
    },
  },
  accommodation: {
    tip: "Fast alles ist 10–20 Minuten zu Fuß erreichbar — VR-Büro und Bootsanleger sind bequem erreichbar.",
  },
  fixedBookings: [
    {
      title: "VR-Tour",
      datetime: "27. Juni 2026, 11:00",
      details:
        "Die VR-Reise beginnt in unserem Büro in der Lánchíd utca 23, 1013 Budapest — ~90 Min., ~1,8 km.",
      ticketPdf: "/26596-2026.pdf",
    },
    {
      title: "Graf-Széchenyi-Veranstaltungsschiff",
      datetime: "27. Juni 2026, 19:00",
      details: "Buchungsname: Nagy Dániel — ~90 Min.",
      ticketPdf: "/HKE5SKZMIBXPYH2U6A06357R63FZJLZR.pdf",
    },
  ],
  practicalTips: [
    "72-Stunden-BKK-Ticket für alle — U-Bahn, Straßenbahn, Bus und Vorortbahn.",
    "100E-Flughafenbus erfordert ein separates Ticket — nicht im BKK-Ticket enthalten.",
    "VR-Tour und Graf-Széchenyi-Schiff sind gebucht — Ticket-PDFs an den Haltestellen.",
    "N2-Nostalgie-Straßenbahn erfordert ein separates Ticket (600 Ft) — Bengáli-Wagen am 27. Juni.",
    "Im Juni geht die Sonne gegen 20:50 Uhr unter — das Boot um 19:00 Uhr startet im Abendlicht.",
    "Bequeme Schuhe + Powerbank — viel Gehen und Fotografieren!",
    "Sonntag: Flug um 11:35 — am Flughafen um 09:35 Uhr sein!",
  ],
  days: {
    friday: {
      label: "Freitag",
      shortLabel: "Fr",
      date: "26. Juni",
      subtitle: "Ankunft, Kopaszi-Damm, Virtu, Abendprogramm",
      stops: {
        "f-delipu": {
          title: "Südbahnhof — Ankunft",
          description:
            "Ankunft in Budapest. Von dort mit der M2 (rote) U-Bahn zur Unterkunft.",
          tip: "M2: Südbahnhof → Deák Ferenc tér oder Blaha Lujza tér (~10 Min.), dann zu Fuß zur Asbóth utca.",
        },
        "f-metro": {
          title: "M2 U-Bahn → Unterkunft",
          description:
            "Südbahnhof → Deák/Blaha → zu Fuß zur Asbóth utca 14 (~5–10 Min.).",
        },
        "f-szallas": {
          title: "Asbóth utca 14 — Check-in",
          description: "Check-in, schnell auspacken, Make-up auffrischen.",
        },
        "f-kopaszi": {
          title: "Kopaszi-Damm — Abendessen",
          description:
            "Zahlreiche Restaurants am Damm — wählt aus der Liste, alle haben eine Terrasse.",
          duration: "~90 Min.",
          tip: "Mehrere Restaurants stehen nebeneinander am Damm — spaziert entlang und wählt aus den geöffneten Lokalen.",
        },
        "f-virtu": {
          title: "Virtu — ein Drink",
          description:
            "Ein Drink im Virtu — entspannte Abendstimmung in der Nähe des Kopaszi-Damms.",
          duration: "~45 Min.",
        },
        "f-este": {
          title: "Abendprogramm — optional",
          description:
            "Kommt zu uns auf einen Drink zurück oder noch eine Runde in der Bartók — im Hadik.",
          tip: "Freitagabend ist nur zum Einstimmen — am Samstag gibt es viele feste Termine.",
          branches: {
            "f-hozzank": {
              title: "Zu uns — Drink in der Unterkunft",
              description:
                "Asbóth utca 14 — plaudern, ausruhen, früh schlafen gehen.",
            },
            "f-hadik": {
              title: "Hadik — in der Bartók",
              description:
                "Wenn ihr noch Lust auf einen Spaziergang habt — Drinks im Hadik.",
            },
          },
        },
      },
    },
    saturday: {
      label: "Samstag",
      shortLabel: "Sa",
      date: "27. Juni",
      subtitle: "VR-Tour, Burgviertel, Nostalgie-Straßenbahn, Schiff",
      stops: {
        "s-brunch": {
          title: "Cafe Brunch Budapest — Anker",
          description: "Frühstück/Brunch in der Anker köz 2-4.",
          duration: "~60 Min.",
        },
        "s-vr-walk": {
          title: "Spaziergang zum VR-Büro",
          description:
            "1013 Budapest, Lánchíd utca 23 — rechtzeitig zum Büro aufbrechen!",
        },
        "s-vr": {
          title: "VR-Tour",
          description:
            "Eure VR-Reise beginnt in unserem Büro in der Lánchíd utca 23, 1013 Budapest — Ausrüstungsübergabe, Reiseleitung. ~90 Min., ~1,8 km.",
          duration: "~90 Min.",
        },
        "s-halaszbastya": {
          title: "Fischerbastei",
          description: "Fotos, Spaziergang auf den Terrassen — kurzer Rundblick.",
          duration: "~60 Min.",
        },
        "s-ebed": {
          title: "Mittagessen im Burgviertel",
          description: "Wählt aus den empfohlenen Restaurants.",
          duration: "~60 Min.",
        },
        "s-nosztalgia": {
          title: "N2-Nostalgie-Straßenbahn",
          description:
            "Einstieg in der Nähe der Margaretenbrücke (Jászai Mari tér) → Richtung Parlament entlang der Pest-Donauuferpromenade.",
          duration: "~30 Min.",
          tip: "Am 27. Juni N2-Linie, Nostalgie-Straßenbahn Nr. 1233 „Bengáli“. Separates Nostalgie-Linien-Ticket erforderlich (600 Ft) — BKK-Ticket reicht nicht!",
        },
        "s-parlament": {
          title: "Parlament",
          description: "Ausstieg in der Nähe des Kossuth tér — Fotos vom Ufer.",
          duration: "~30 Min.",
        },
        "s-langos": {
          title: "Retro Lángos Büfé",
          description: "Schneller Retro-Lángos in der Innenstadt — auf dem Weg zur Basilika.",
          duration: "~20 Min.",
        },
        "s-bazilika": {
          title: "Stephansdom",
          description: "Kurzer Rundblick — Kuppel nur bei Zeit und Lust.",
          duration: "~30 Min.",
        },
        "s-szallas": {
          title: "Unterkunft — Umziehen",
          description: "Zurück zur Asbóth utca 14 — Outfit fürs Schiff, Make-up, Pause.",
        },
        "s-hajo": {
          title: "Graf-Széchenyi-Veranstaltungsschiff",
          description:
            "Kreuzfahrt ohne Getränke — Sonnenuntergang + beleuchtetes Parlament + Kettenbrücke. Buchung: Nagy Dániel.",
          duration: "~90 Min.",
          tip: "Um 18:45 Uhr am Anleger sein — Vigadó tér / Petőfi tér.",
        },
        "s-vendeglo": {
          title: "Ikonisches ungarisches Restaurant",
          description: "Schnelles ikonisches ungarisches Essen nach dem Schiff.",
          duration: "~30 Min.",
        },
        "s-este": {
          title: "Abendoption — optional",
          description: "Entscheidet, wie müde ihr seid.",
          branches: {
            "s-pihenes": {
              title: "Zurück zur Unterkunft zum Ausruhen",
              description: "Asbóth utca 14 — früh schlafen gehen, morgen Flug.",
            },
            "s-gozsdu": {
              title: "Gozsdu-Hof — Cocktails",
              description:
                "Wenn ihr noch Energie habt — Kneipen und Bars im Gozsdu-Hof.",
            },
          },
        },
      },
    },
    sunday: {
      label: "Sonntag",
      shortLabel: "So",
      date: "28. Juni",
      subtitle: "Heimreise — enger Zeitplan!",
      stops: {
        "u-ebreszto": {
          title: "Aufwachen, packen",
          description: "Koffer schließen, letzte Kontrolle.",
        },
        "u-madal": {
          title: "Madal Café — Frühstück",
          description:
            "Király utca 7 — schnelles Frühstück vor der Abreise (sonntags ab 8:30 geöffnet).",
        },
        "u-kijelentkezes": {
          title: "Check-out",
          description: "Unterkunft verlassen — nichts zurücklassen.",
        },
        "u-100e": {
          title: "100E-Flughafenbus",
          description:
            "Deák Ferenc tér oder Blaha Lujza tér (~5–10 Min. zu Fuß). Fahrzeit ~35–45 Min.",
          tip: "100E ist NICHT im BKK-Ticket enthalten — separates Ticket erforderlich! Alternative: Taxi ~7000–9000 Ft, ~30 Min.",
        },
        "u-airport": {
          title: "Budapest Liszt Ferenc Flughafen T2",
          description: "Check-in, Gepäckaufgabe — Flug um 11:35 Uhr.",
          tip: "Am Flughafen um 09:35 Uhr sein (2 Stunden vor Abflug).",
        },
        "u-felszallas": {
          title: "Abflug",
          description: "Auf Wiedersehen, Budapest! ✈️",
        },
      },
    },
  },
  restaurants: {
    kopaszi: {
      vakvarju: {
        description: "Entspannte Beach-Bistro-Atmosphäre, Terrasse an der Donau.",
      },
      veranda: {
        description: "Pasta & Pizza — italienisch inspirierte Küche am Damm.",
      },
      lebistro: {
        description:
          "Kitchen & More — abwechslungsreiche internationale Küche, gute Gruppenwahl.",
      },
      kopaszikert: {
        description:
          "Eines der klassischen Restaurants am Damm — große Terrasse, Donau-Blick.",
      },
    },
    castle: {
      jamies: {
        description: "Bekannte internationale Küche im Burgviertel.",
      },
      "21": {
        description: "Moderne ungarische Küche, elegantes Ambiente.",
      },
      riso: {
        description: "Italienisch inspiriertes, stimmungsvolles Restaurant im Burgviertel.",
      },
    },
  },
};
