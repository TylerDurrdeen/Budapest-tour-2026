import type { StopCategory } from "@/lib/tour-data";

export type Locale = "hu" | "en" | "de";

export const locales: Locale[] = ["hu", "en", "de"];

export type LinkLabelKey =
  | "toAccommodation"
  | "directions"
  | "openTicket"
  | "airbnb"
  | "bkkSchedule"
  | "toBoarding"
  | "toPier"
  | "toStop";

export type StopText = {
  title: string;
  description?: string;
  tip?: string;
  duration?: string;
  branches?: Record<string, { title: string; description: string }>;
  restaurants?: Record<string, { description: string }>;
};

export type DayText = {
  label: string;
  shortLabel: string;
  date: string;
  subtitle: string;
  stops: Record<string, StopText>;
};

export type Messages = {
  ui: {
    mapOpen: string;
    mapClose: string;
    routeSr: string;
    routeOrder: string;
    fixedBookings: string;
    practicalTips: string;
    accommodationBase: string;
    accommodationTitle: string;
    openTicket: string;
    optionalBranches: string;
    imageAlt: string;
    branchImageAlt: string;
    restaurantImageAlt: string;
    theme: {
      label: string;
      light: string;
      dark: string;
      system: string;
    };
    language: {
      label: string;
      hu: string;
      en: string;
      de: string;
    };
    links: Record<LinkLabelKey, string>;
    categories: Record<StopCategory, string>;
    time: {
      minutes: (n: number) => string;
      hoursMinutes: (hours: number, minutes: number) => string;
    };
  };
  accommodation: { tip: string };
  fixedBookings: {
    title: string;
    datetime: string;
    details: string;
    ticketPdf?: string;
  }[];
  practicalTips: string[];
  days: {
    friday: DayText;
    saturday: DayText;
    sunday: DayText;
  };
  restaurants: {
    kopaszi: Record<string, { description: string }>;
    castle: Record<string, { description: string }>;
  };
};
