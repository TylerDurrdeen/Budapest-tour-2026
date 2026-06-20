import { googleDirectionsUrl } from "@/lib/maps";
import type {
  LinkLabelKey,
  Messages,
  StopText,
} from "@/lib/i18n/types";
import type {
  RestaurantOption,
  StopBranch,
  StopCategory,
  StopLink,
  TourDay,
  TourStop,
} from "@/lib/tour-data";

export const accommodation = {
  address: "Asbóth utca 14, Budapest 1075",
  lng: 19.057694,
  lat: 47.49725,
  airbnbUrl:
    "https://www.airbnb.hu/rooms/767256276511340819?source_impression_id=p3_1781888631_P34SMF021-Tgbm-r",
};

export const BUDAPEST_CENTER: [number, number] = [
  accommodation.lng,
  accommodation.lat,
];

const kopasziImages: Record<string, string[]> = {
  vakvarju: [
    "/vakvarju/5.jpg",
    "/vakvarju/IMG-0025.jpg",
    "/vakvarju/foto_vassadrienn-2158.jpg",
  ],
  veranda: ["/veranda/1426169249-3805.jpg", "/veranda/images.jpeg"],
  lebistro: ["/le%20bistro/1564069806-3360.jpg", "/le%20bistro/4-1.jpg"],
  kopaszikert: [
    "/kopaszikert/kopaszikert-budapest.webp",
    "/kopaszikert/356594_orig.jpg",
  ],
};

const castleImages: Record<string, string[]> = {
  jamies: [],
  "21": [],
  riso: [],
};

function link(
  labelKey: LinkLabelKey,
  destination: string | { lat: number; lng: number },
  variant: StopLink["variant"] = "directions",
  labels: Record<LinkLabelKey, string>,
): StopLink {
  return {
    label: labels[labelKey],
    href: googleDirectionsUrl(destination),
    variant,
  };
}

function extLink(
  labelKey: LinkLabelKey,
  href: string,
  labels: Record<LinkLabelKey, string>,
): StopLink {
  return { label: labels[labelKey], href, variant: "external" };
}

function ticketLink(
  href: string,
  labels: Record<LinkLabelKey, string>,
): StopLink {
  return { label: labels.openTicket, href, variant: "ticket" };
}

function buildRestaurants(
  ids: { id: string; name: string; mapsUrl: string; images: string[] }[],
  descriptions: Record<string, { description: string }>,
): RestaurantOption[] {
  return ids.map((item) => ({
    id: item.id,
    name: item.name,
    description: descriptions[item.id]?.description,
    mapsUrl: item.mapsUrl,
    images: item.images,
  }));
}

function applyStopText(stop: TourStop, text?: StopText): TourStop {
  if (!text) return stop;

  const branches: StopBranch[] | undefined = stop.branches?.map((branch) => {
    const branchText = text.branches?.[branch.id];
    if (!branchText) return branch;
    return {
      ...branch,
      title: branchText.title,
      description: branchText.description,
    };
  });

  const restaurants: RestaurantOption[] | undefined = stop.restaurants?.map(
    (restaurant) => {
      const restaurantText = text.restaurants?.[restaurant.id];
      if (!restaurantText) return restaurant;
      return { ...restaurant, description: restaurantText.description };
    },
  );

  return {
    ...stop,
    title: text.title,
    description: text.description ?? stop.description,
    tip: text.tip ?? stop.tip,
    duration: text.duration ?? stop.duration,
    branches,
    restaurants,
  };
}

export function buildTourData(messages: Messages): TourDay[] {
  const { ui, days, restaurants: restaurantTexts } = messages;
  const labels = ui.links;

  const kopasziRestaurants = buildRestaurants(
    [
      {
        id: "vakvarju",
        name: "VakVarjú Beach Bistro",
        mapsUrl: googleDirectionsUrl("VakVarjú Beach Bistro Budapest Kopaszi gát"),
        images: kopasziImages.vakvarju,
      },
      {
        id: "veranda",
        name: "Veranda Restaurant",
        mapsUrl: googleDirectionsUrl(
          "Veranda Restaurant Pasta Pizza Budapest Kopaszi gát",
        ),
        images: kopasziImages.veranda,
      },
      {
        id: "lebistro",
        name: "Le Bistro",
        mapsUrl: googleDirectionsUrl("Le Bistro Kitchen More Budapest Kopaszi gát"),
        images: kopasziImages.lebistro,
      },
      {
        id: "kopaszikert",
        name: "Kopaszikert",
        mapsUrl: googleDirectionsUrl("Kopaszikert Budapest"),
        images: kopasziImages.kopaszikert,
      },
    ],
    restaurantTexts.kopaszi,
  );

  const castleLunchRestaurants = buildRestaurants(
    [
      {
        id: "jamies",
        name: "Jamie's Oliver",
        mapsUrl: "https://maps.app.goo.gl/EwF4uN47NMUHau7Z9",
        images: castleImages.jamies,
      },
      {
        id: "21",
        name: "21 Hungarian Kitchen",
        mapsUrl: "https://maps.app.goo.gl/wrQEBF1L2BHq2fnF6",
        images: castleImages["21"],
      },
      {
        id: "riso",
        name: "Riso Restaurant",
        mapsUrl: "https://maps.app.goo.gl/9f2shEjwLT3Yqn42A",
        images: castleImages.riso,
      },
    ],
    restaurantTexts.castle,
  );

  const dayDefs: (Omit<TourDay, "stops"> & {
    stops: Omit<TourStop, "title">[];
  })[] = [
    {
      id: "friday",
      label: days.friday.label,
      shortLabel: days.friday.shortLabel,
      date: days.friday.date,
      subtitle: days.friday.subtitle,
      routeColor: "#93c5fd",
      stops: [
        {
          id: "f-delipu",
          time: "18:00",
          lng: 19.0254,
          lat: 47.4996,
          category: "transport" as StopCategory,
          images: ["/pentek-1.jpg"],
          links: [link("toAccommodation", accommodation.address, "directions", labels)],
        },
        {
          id: "f-metro",
          time: "18:30",
          lng: 19.055,
          lat: 47.4979,
          category: "transport" as StopCategory,
          images: ["/pentek-2.jpeg"],
        },
        {
          id: "f-szallas",
          time: "19:00",
          lng: accommodation.lng,
          lat: accommodation.lat,
          category: "accommodation" as StopCategory,
          tip: messages.accommodation.tip,
          images: ["/pentek-3.avif", "/pentek-3.1", "/pentek-3.2"],
          links: [
            link("directions", accommodation.address, "directions", labels),
            {
              label: labels.airbnb,
              href: accommodation.airbnbUrl,
              variant: "airbnb",
            },
          ],
        },
        {
          id: "f-kopaszi",
          time: "20:00",
          lng: 19.0586,
          lat: 47.4596,
          category: "food" as StopCategory,
          restaurants: kopasziRestaurants,
          showRestaurantCarousel: true,
          links: [
            link("directions", { lat: 47.4596, lng: 19.0586 }, "directions", labels),
          ],
        },
        {
          id: "f-virtu",
          time: "21:30",
          lng: 19.05903,
          lat: 47.467994,
          category: "nightlife" as StopCategory,
          images: [
            "/virtu/virtu_budapest-1.png",
            "/virtu/table-with-a-view.jpg",
            "/virtu/virtu_mol_campus_4-1024x1024.jpg",
            "/virtu/394924261_122119032290041958_2480305130728996339_n-resized-970.jpg",
            "/virtu/51938403_14ea6354d693a28de3abb3f377c62929_wm.jpg",
          ],
          links: [
            link("directions", { lat: 47.467994, lng: 19.05903 }, "directions", labels),
          ],
        },
        {
          id: "f-este",
          time: "22:30",
          lng: accommodation.lng,
          lat: accommodation.lat,
          category: "nightlife" as StopCategory,
          branches: [
            {
              id: "f-hozzank",
              title: "",
              description: "",
              links: [link("directions", accommodation.address, "directions", labels)],
            },
            {
              id: "f-hadik",
              title: "",
              description: "",
              lat: 47.479097,
              lng: 19.05064,
              images: ["/hadik-0.jpg", "/hadik-1.jpg", "/hadik-2.jpg"],
              links: [
                link("directions", { lat: 47.479097, lng: 19.05064 }, "directions", labels),
              ],
            },
          ],
        },
      ],
    },
    {
      id: "saturday",
      label: days.saturday.label,
      shortLabel: days.saturday.shortLabel,
      date: days.saturday.date,
      subtitle: days.saturday.subtitle,
      routeColor: "#3b82f6",
      stops: [
        {
          id: "s-brunch",
          time: "09:00",
          lng: 19.055467,
          lat: 47.498186,
          category: "food" as StopCategory,
          links: [
            link("directions", "Cafe Brunch Budapest Anker köz 2-4", "directions", labels),
          ],
        },
        {
          id: "s-vr-walk",
          time: "10:15",
          lng: 19.041723,
          lat: 47.496408,
          category: "transport" as StopCategory,
          links: [
            link("directions", "Lánchíd utca 23, Budapest 1013", "directions", labels),
          ],
        },
        {
          id: "s-vr",
          time: "11:00",
          lng: 19.0393,
          lat: 47.4976,
          category: "activity" as StopCategory,
          ticketPdf: "/26596-2026.pdf",
          links: [
            link("directions", "Lánchíd utca 23, Budapest 1013", "directions", labels),
            ticketLink("/26596-2026.pdf", labels),
          ],
        },
        {
          id: "s-halaszbastya",
          time: "12:30",
          lng: 19.0348,
          lat: 47.5028,
          category: "culture" as StopCategory,
          links: [link("directions", "Halászbástya, Budapest", "directions", labels)],
        },
        {
          id: "s-ebed",
          time: "13:30",
          lng: 19.031235,
          lat: 47.504039,
          category: "food" as StopCategory,
          restaurants: castleLunchRestaurants,
          showRestaurantCarousel: false,
        },
        {
          id: "s-nosztalgia",
          time: "15:30",
          lng: 19.046,
          lat: 47.513,
          category: "transport" as StopCategory,
          links: [
            link("toBoarding", "Jászai Mari tér, Budapest", "directions", labels),
            extLink(
              "bkkSchedule",
              "https://bkk.hu/utazasi-informaciok/kozossegi-kozlekedes/kulonleges-jaratok-nosztalgiakozlekedes/nosztalgiajaratok/nosztalgiajaratok-budapesten/#rendszeres",
              labels,
            ),
          ],
        },
        {
          id: "s-parlament",
          time: "16:15",
          lng: 19.0456,
          lat: 47.507,
          category: "culture" as StopCategory,
          links: [link("directions", "Országház, Budapest", "directions", labels)],
        },
        {
          id: "s-langos",
          time: "16:45",
          lng: 19.055099,
          lat: 47.503232,
          category: "food" as StopCategory,
          links: [
            link("directions", "Retro Lángos Büfé Budapest", "directions", labels),
          ],
        },
        {
          id: "s-bazilika",
          time: "17:15",
          lng: 19.053123,
          lat: 47.500741,
          category: "culture" as StopCategory,
          links: [
            link("directions", "Szent István Bazilika, Budapest", "directions", labels),
          ],
        },
        {
          id: "s-szallas",
          time: "18:00",
          lng: accommodation.lng,
          lat: accommodation.lat,
          category: "accommodation" as StopCategory,
          links: [link("directions", accommodation.address, "directions", labels)],
        },
        {
          id: "s-hajo",
          time: "19:00",
          lng: 19.0492,
          lat: 47.4965,
          category: "activity" as StopCategory,
          ticketPdf: "/HKE5SKZMIBXPYH2U6A06357R63FZJLZR.pdf",
          links: [
            link("toPier", "Vigadó tér, Budapest", "directions", labels),
            ticketLink("/HKE5SKZMIBXPYH2U6A06357R63FZJLZR.pdf", labels),
          ],
        },
        {
          id: "s-vendeglo",
          time: "20:30",
          lng: 19.045398,
          lat: 47.501788,
          category: "food" as StopCategory,
          links: [
            link("directions", { lat: 47.501788, lng: 19.045398 }, "directions", labels),
          ],
        },
        {
          id: "s-este",
          time: "21:00",
          lng: accommodation.lng,
          lat: accommodation.lat,
          category: "nightlife" as StopCategory,
          branches: [
            {
              id: "s-pihenes",
              title: "",
              description: "",
              links: [link("directions", accommodation.address, "directions", labels)],
            },
            {
              id: "s-gozsdu",
              title: "",
              description: "",
              links: [link("directions", "Gozsdu Udvar, Budapest", "directions", labels)],
            },
          ],
        },
      ],
    },
    {
      id: "sunday",
      label: days.sunday.label,
      shortLabel: days.sunday.shortLabel,
      date: days.sunday.date,
      subtitle: days.sunday.subtitle,
      routeColor: "#1d4ed8",
      stops: [
        {
          id: "u-ebreszto",
          time: "07:00",
          lng: accommodation.lng,
          lat: accommodation.lat,
          category: "accommodation" as StopCategory,
        },
        {
          id: "u-madal",
          time: "07:30",
          lng: 19.057373,
          lat: 47.498631,
          category: "food" as StopCategory,
          links: [
            link("directions", "Madal Cafe Király utca 7 Budapest", "directions", labels),
          ],
        },
        {
          id: "u-kijelentkezes",
          time: "08:15",
          lng: accommodation.lng,
          lat: accommodation.lat,
          category: "accommodation" as StopCategory,
        },
        {
          id: "u-100e",
          time: "08:30",
          lng: 19.054332,
          lat: 47.497894,
          category: "transport" as StopCategory,
          links: [
            link("toStop", { lat: 47.497894, lng: 19.054332 }, "directions", labels),
          ],
        },
        {
          id: "u-airport",
          time: "09:30",
          lng: 19.2613,
          lat: 47.4326,
          category: "transport" as StopCategory,
          links: [
            link(
              "directions",
              "Budapest Liszt Ferenc repülőtér Terminál 2",
              "directions",
              labels,
            ),
          ],
        },
        {
          id: "u-felszallas",
          time: "11:35",
          lng: 19.2613,
          lat: 47.4326,
          category: "transport" as StopCategory,
        },
      ],
    },
  ];

  const dayTexts = [days.friday, days.saturday, days.sunday];

  return dayDefs.map((day, dayIndex) => ({
    ...day,
    stops: day.stops.map((stop) => {
      const text = dayTexts[dayIndex]?.stops[stop.id];
      const withRestaurants =
        text?.restaurants && stop.restaurants
          ? {
              ...stop,
              restaurants: stop.restaurants.map((restaurant) => ({
                ...restaurant,
                description:
                  text.restaurants?.[restaurant.id]?.description ??
                  restaurant.description,
              })),
            }
          : stop;

      return applyStopText(
        { ...withRestaurants, title: text?.title ?? stop.id },
        text,
      );
    }),
  }));
}

export function getCategoryLabels(messages: Messages) {
  return messages.ui.categories;
}

export function getFixedBookings(messages: Messages) {
  return messages.fixedBookings;
}

export function getPracticalTips(messages: Messages) {
  return messages.practicalTips;
}
