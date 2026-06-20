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
  images?: string[];
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
  images?: string[];
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

export {
  accommodation,
  BUDAPEST_CENTER,
  buildTourData,
  getCategoryLabels,
  getFixedBookings,
  getPracticalTips,
} from "@/lib/tour-data/build-tour";
