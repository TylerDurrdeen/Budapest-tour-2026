type LatLng = { lat: number; lng: number };

export function googleDirectionsUrl(
  destination: string | LatLng,
  origin?: string | LatLng,
): string {
  const dest =
    typeof destination === "string"
      ? destination
      : `${destination.lat},${destination.lng}`;

  const params = new URLSearchParams({ api: "1", destination: dest });

  if (origin) {
    const orig =
      typeof origin === "string"
        ? origin
        : `${origin.lat},${origin.lng}`;
    params.set("origin", orig);
  }

  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

export function googlePlaceUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
