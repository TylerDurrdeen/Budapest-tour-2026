import type { Messages } from "../types";

export const messages: Messages = {
  ui: {
    mapOpen: "Open map",
    mapClose: "Close map",
    routeSr: "Route",
    routeOrder: "Stop order (as the crow flies)",
    fixedBookings: "Confirmed bookings",
    practicalTips: "Practical tips",
    accommodationBase: "Home base",
    accommodationTitle: "Home base",
    openTicket: "Open ticket",
    optionalBranches: "Optional choices",
    imageAlt: "photo",
    branchImageAlt: "photo",
    restaurantImageAlt: "photo",
    theme: {
      label: "Theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    language: {
      label: "Language",
      hu: "Magyar",
      en: "English",
      de: "Deutsch",
    },
    links: {
      toAccommodation: "Directions to accommodation",
      directions: "Get directions",
      openTicket: "Open ticket",
      airbnb: "Airbnb",
      bkkSchedule: "BKK heritage tram schedule",
      toBoarding: "Directions to boarding point",
      toPier: "Directions to pier",
      toStop: "Directions to stop",
    },
    categories: {
      accommodation: "Accommodation",
      food: "Food",
      culture: "Culture",
      nightlife: "Nightlife",
      transport: "Transport",
      activity: "Activity",
      shopping: "Shopping",
    },
    time: {
      minutes: (n) => `~${n} min`,
      hoursMinutes: (h, m) =>
        m === 0 ? `~${h} hr` : `~${h} hr ${m} min`,
    },
  },
  accommodation: {
    tip: "Almost everything is a 10–20 minute walk — the VR office and boat pier are both within reach.",
  },
  fixedBookings: [
    {
      title: "VR tour",
      datetime: "27 Jun 2026, 11:00",
      details:
        "The VR experience starts at our office at Lánchíd utca 23, 1013 Budapest — ~90 min, ~1.8 km.",
      ticketPdf: "/26596-2026.pdf",
    },
    {
      title: "Count Széchenyi event boat",
      datetime: "27 Jun 2026, 19:00",
      details: "Booking name: Nagy Dániel — ~90 min.",
      ticketPdf: "/HKE5SKZMIBXPYH2U6A06357R63FZJLZR.pdf",
    },
  ],
  practicalTips: [
    "72-hour BKK pass for everyone — metro, tram, bus, and suburban rail.",
    "100E airport bus requires a separate ticket — not covered by the pass.",
    "VR tour and Count Széchenyi boat are booked — ticket PDFs are at the stops.",
    "N2 heritage tram needs a separate ticket (600 Ft) — Bengáli tram on 27 Jun.",
    "In June the sun sets around 20:50 — the 19:00 boat departs in sunset light.",
    "Comfortable shoes + power bank — lots of walking and photos ahead!",
    "Sunday: flight at 11:35 — be at the airport by 09:35!",
  ],
  days: {
    friday: {
      label: "Friday",
      shortLabel: "Fri",
      date: "26 Jun",
      subtitle: "Arrival, Kopaszi Dam, Virtu, evening plans",
      stops: {
        "f-delipu": {
          title: "Déli Station — arrival",
          description:
            "Arrival in Budapest. Take the M2 (red) metro towards the accommodation.",
          tip: "M2: Déli Station → Deák Ferenc tér or Blaha Lujza tér (~10 min), then walk to Asbóth utca.",
        },
        "f-metro": {
          title: "M2 metro → accommodation",
          description:
            "Déli Station → Deák/Blaha → walk to Asbóth utca 14 (~5–10 min).",
        },
        "f-szallas": {
          title: "Asbóth utca 14 — check-in",
          description: "Check-in, quick unpacking, touch up makeup.",
        },
        "f-kopaszi": {
          title: "Kopaszi Dam — dinner",
          description:
            "Plenty of restaurants along the dam — pick from the list, each has a terrace.",
          duration: "~90 min",
          tip: "Several restaurants sit side by side on the dam — stroll along and choose from what's open.",
        },
        "f-virtu": {
          title: "Virtu — a drink",
          description:
            "A drink at Virtu — relaxed evening vibes near Kopaszi.",
          duration: "~45 min",
        },
        "f-este": {
          title: "Evening plans — optional",
          description:
            "Come back to ours for a drink, or one more round in Bartók — at Hadik.",
          tip: "Friday evening is just a warm-up — Saturday has lots of fixed-time plans.",
          branches: {
            "f-hozzank": {
              title: "Our place — drinks at the accommodation",
              description:
                "Asbóth utca 14 — chat, relax, early night.",
            },
            "f-hadik": {
              title: "Hadik — on Bartók",
              description: "If you're still up for a walk — drinks at Hadik.",
            },
          },
        },
      },
    },
    saturday: {
      label: "Saturday",
      shortLabel: "Sat",
      date: "27 Jun",
      subtitle: "VR tour, Castle District, heritage tram, boat",
      stops: {
        "s-brunch": {
          title: "Cafe Brunch Budapest — Anker",
          description: "Breakfast/brunch at Anker köz 2-4.",
          duration: "~60 min",
        },
        "s-vr-walk": {
          title: "Walk to VR office",
          description:
            "1013 Budapest, Lánchíd utca 23 — leave on time for the office!",
        },
        "s-vr": {
          title: "VR tour",
          description:
            "Your VR journey starts at our office at 1013 Budapest, Lánchíd utca 23 — gear pickup, tour guide. ~90 min, ~1.8 km.",
          duration: "~90 min",
        },
        "s-halaszbastya": {
          title: "Fisherman's Bastion",
          description: "Photos, stroll on the terraces — a quick look around.",
          duration: "~60 min",
        },
        "s-ebed": {
          title: "Lunch in the Castle District",
          description: "Choose from the recommended restaurants.",
          duration: "~60 min",
        },
        "s-nosztalgia": {
          title: "N2 heritage tram",
          description:
            "Board near Margaret Bridge (Jászai Mari tér) → towards Parliament along the Pest Danube bank.",
          duration: "~30 min",
          tip: "On 27 Jun, N2 service with heritage tram no. 1233 „Bengáli”. Separate heritage line ticket required (600 Ft) — BKK pass is not enough!",
        },
        "s-parlament": {
          title: "Parliament",
          description: "Get off near Kossuth tér — photos from the riverbank.",
          duration: "~30 min",
        },
        "s-langos": {
          title: "Retro Lángos Büfé",
          description: "Quick retro lángos in the city centre — on the way to the Basilica.",
          duration: "~20 min",
        },
        "s-bazilika": {
          title: "St. Stephen's Basilica",
          description: "Quick look around — dome only if you have time and feel like it.",
          duration: "~30 min",
        },
        "s-szallas": {
          title: "Accommodation — change clothes",
          description: "Back to Asbóth utca 14 — boat outfit, makeup, rest.",
        },
        "s-hajo": {
          title: "Count Széchenyi event boat",
          description:
            "Cruise without drinks — sunset + lit-up Parliament + Chain Bridge. Booking: Nagy Dániel.",
          duration: "~90 min",
          tip: "Be at the pier by 18:45 — Vigadó tér / Petőfi tér area.",
        },
        "s-vendeglo": {
          title: "Iconic Hungarian restaurant",
          description: "Quick iconic Hungarian food after the boat.",
          duration: "~30 min",
        },
        "s-este": {
          title: "Evening option — optional",
          description: "Decide how tired you are.",
          branches: {
            "s-pihenes": {
              title: "Back to the accommodation to rest",
              description: "Asbóth utca 14 — early night, flight tomorrow.",
            },
            "s-gozsdu": {
              title: "Gozsdu Courtyard — cocktails",
              description:
                "If you still have energy — ruin pubs and bars in Gozsdu Courtyard.",
            },
          },
        },
      },
    },
    sunday: {
      label: "Sunday",
      shortLabel: "Sun",
      date: "28 Jun",
      subtitle: "Heading home — tight schedule!",
      stops: {
        "u-ebreszto": {
          title: "Wake up, pack",
          description: "Close suitcases, final check.",
        },
        "u-madal": {
          title: "Madal Café — breakfast",
          description:
            "Király utca 7 — quick breakfast before departure (opens at 8:30 on Sunday).",
        },
        "u-kijelentkezes": {
          title: "Check-out",
          description: "Leave the accommodation — don't forget anything.",
        },
        "u-100e": {
          title: "100E airport bus",
          description:
            "Deák Ferenc tér or Blaha Lujza tér (~5–10 min walk). Journey time ~35–45 min.",
          tip: "100E is NOT covered by the BKK pass — separate ticket required! Backup: taxi ~7000–9000 Ft, ~30 min.",
        },
        "u-airport": {
          title: "Budapest Liszt Ferenc Airport T2",
          description: "Check-in, baggage drop — flight at 11:35.",
          tip: "Be at the airport by 09:35 (2 hours before departure).",
        },
        "u-felszallas": {
          title: "Departure",
          description: "Goodbye Budapest! ✈️",
        },
      },
    },
  },
  restaurants: {
    kopaszi: {
      vakvarju: {
        description: "Relaxed beach-bistro vibe, terrace on the Danube bank.",
      },
      veranda: {
        description: "Pasta & pizza — Italian-inspired kitchen on the dam.",
      },
      lebistro: {
        description:
          "Kitchen & More — varied international cuisine, a good group choice.",
      },
      kopaszikert: {
        description:
          "One of the dam's classic restaurants — large terrace, Danube views.",
      },
    },
    castle: {
      jamies: {
        description: "Well-known international cuisine in the Castle District.",
      },
      "21": {
        description: "Modern Hungarian cuisine, elegant atmosphere.",
      },
      riso: {
        description: "Italian-inspired, atmospheric Castle District restaurant.",
      },
    },
  },
};
