import type { TourStop } from "@/lib/tour-data";

export type PlannedRoute = {
  coordinates: [number, number][];
  totalDuration: number;
  totalDistance: number;
};

function haversineMeters(
  a: { lng: number; lat: number },
  b: { lng: number; lat: number },
): number {
  const R = 6371e3;
  const φ1 = (a.lat * Math.PI) / 180;
  const φ2 = (b.lat * Math.PI) / 180;
  const Δφ = ((b.lat - a.lat) * Math.PI) / 180;
  const Δλ = ((b.lng - a.lng) * Math.PI) / 180;
  const x =
    Math.sin(Δφ / 2) ** 2 +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  return 2 * R * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
}

/** Straight-line route through stops (bird's-eye, walking estimate). */
export function planTourRoute(stops: TourStop[]): PlannedRoute {
  if (stops.length === 0) {
    return { coordinates: [], totalDuration: 0, totalDistance: 0 };
  }

  const coordinates = stops.map(
    (stop) => [stop.lng, stop.lat] as [number, number],
  );

  let totalDistance = 0;
  for (let i = 0; i < stops.length - 1; i += 1) {
    totalDistance += haversineMeters(stops[i], stops[i + 1]);
  }

  return {
    coordinates,
    totalDuration: Math.round(totalDistance / 1.4),
    totalDistance,
  };
}

export function formatDuration(
  seconds: number,
  time?: {
    minutes: (n: number) => string;
    hoursMinutes: (hours: number, minutes: number) => string;
  },
): string {
  const mins = Math.round(seconds / 60);
  if (time) {
    if (mins < 60) return time.minutes(mins);
    return time.hoursMinutes(Math.floor(mins / 60), mins % 60);
  }
  if (mins < 60) return `${mins} perc`;
  const hours = Math.floor(mins / 60);
  const remainingMins = mins % 60;
  return `${hours} ó ${remainingMins} perc`;
}

export function formatDistance(meters: number): string {
  if (meters < 1000) return `${Math.round(meters)} m`;
  return `${(meters / 1000).toFixed(1)} km`;
}
