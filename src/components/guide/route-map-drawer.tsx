"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
import {
  Map,
  MapControls,
  MapMarker,
  MapRoute,
  MapUserLocation,
  MarkerContent,
  MarkerTooltip,
  useMap,
} from "@/components/ui/map";
import type { TourDay, TourStop } from "@/lib/tour-data";
import { cn } from "@/lib/utils";
import { MapPinned } from "lucide-react";

type RouteMapDrawerProps = {
  day: TourDay;
  selectedStopId: string | null;
  onSelectStop: (stopId: string) => void;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function MapFocus({ stop }: { stop: TourStop | null }) {
  const { map, isLoaded } = useMap();

  useEffect(() => {
    if (!isLoaded || !map || !stop) return;

    map.flyTo({
      center: [stop.lng, stop.lat],
      zoom: 15,
      duration: 900,
      essential: true,
    });
  }, [isLoaded, map, stop?.id, stop?.lng, stop?.lat]);

  return null;
}

function RouteMapContent({
  day,
  selectedStopId,
  onSelectStop,
}: Pick<RouteMapDrawerProps, "day" | "selectedStopId" | "onSelectStop">) {
  const [userLocation, setUserLocation] = useState<{
    longitude: number;
    latitude: number;
  } | null>(null);

  const routeCoordinates = useMemo(
    () => day.stops.map((stop) => [stop.lng, stop.lat] as [number, number]),
    [day.stops],
  );

  const selectedStop =
    day.stops.find((stop) => stop.id === selectedStopId) ?? day.stops[0] ?? null;

  const mapCenter = useMemo<[number, number]>(() => {
    if (selectedStop) return [selectedStop.lng, selectedStop.lat];
    const first = day.stops[0];
    return first ? [first.lng, first.lat] : [19.055, 47.498];
  }, [day.stops, selectedStop]);

  return (
    <Map center={mapCenter} zoom={13.5} className="h-full w-full">
      <MapFocus stop={selectedStop} />
      <MapRoute
        coordinates={routeCoordinates}
        color={day.routeColor}
        width={4}
        opacity={0.85}
      />
      {day.stops.map((stop, index) => {
        const isSelected = stop.id === selectedStopId;

        return (
          <MapMarker
            key={stop.id}
            longitude={stop.lng}
            latitude={stop.lat}
            onClick={() => onSelectStop(stop.id)}
          >
            <MarkerContent>
              <button
                type="button"
                aria-label={stop.title}
                className={cn(
                  "flex size-6 items-center justify-center rounded-full border-2 border-background text-[10px] font-semibold text-white shadow-md transition-transform",
                  isSelected
                    ? "scale-125 ring-2 ring-offset-1 ring-offset-background"
                    : "hover:scale-110",
                )}
                style={{
                  backgroundColor: isSelected ? day.routeColor : "var(--muted-foreground)",
                  ...(isSelected
                    ? { ["--tw-ring-color" as string]: day.routeColor }
                    : {}),
                }}
              >
                {index + 1}
              </button>
            </MarkerContent>
            <MarkerTooltip>{stop.title}</MarkerTooltip>
          </MapMarker>
        );
      })}
      {userLocation && (
        <MapUserLocation
          longitude={userLocation.longitude}
          latitude={userLocation.latitude}
        />
      )}
      <MapControls
        showZoom
        showLocate
        liveTracking
        onLocate={setUserLocation}
      />
    </Map>
  );
}

export function RouteMapDrawer({
  day,
  selectedStopId,
  onSelectStop,
  open,
  onOpenChange,
}: RouteMapDrawerProps) {
  return (
    <>
      <Drawer
        open={open}
        onOpenChange={onOpenChange}
        direction="bottom"
        modal={false}
        dismissible
        shouldScaleBackground={false}
      >
        <DrawerContent className="h-[38dvh] max-h-[38dvh] gap-0 p-0 ring-1 ring-foreground/10">
          <DrawerTitle className="sr-only">{day.label} · {day.date}</DrawerTitle>
          <DrawerDescription className="sr-only">Útvonal</DrawerDescription>
          <div className="min-h-0 flex-1">
            <RouteMapContent
              day={day}
              selectedStopId={selectedStopId}
              onSelectStop={onSelectStop}
            />
          </div>
        </DrawerContent>
      </Drawer>

      {!open && (
        <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-background/95 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
          <div className="mx-auto max-w-lg">
            <Button
              className="w-full gap-2 shadow-md"
              onClick={() => onOpenChange(true)}
            >
              <MapPinned className="size-4" />
              Térkép megnyitása
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
