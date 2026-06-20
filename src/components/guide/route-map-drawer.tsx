"use client";

import { useEffect, useMemo, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
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
import {
  formatDistance,
  formatDuration,
  planTourRoute,
} from "@/lib/osrm-route";
import { cn } from "@/lib/utils";
import { Clock, MapPinned, Route } from "lucide-react";

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

  const selectedStop =
    day.stops.find((stop) => stop.id === selectedStopId) ?? day.stops[0] ?? null;

  const plannedRoute = useMemo(() => planTourRoute(day.stops), [day.stops]);

  const mapCenter = useMemo<[number, number]>(() => {
    if (selectedStop) return [selectedStop.lng, selectedStop.lat];
    const first = day.stops[0];
    return first ? [first.lng, first.lat] : [19.055, 47.498];
  }, [day.stops, selectedStop]);

  return (
    <div className="relative h-full w-full">
      <Map center={mapCenter} zoom={13.5} className="h-full w-full">
        <MapFocus stop={selectedStop} />

        {plannedRoute.coordinates.length > 1 && (
          <MapRoute
            coordinates={plannedRoute.coordinates}
            color={day.routeColor}
            width={3}
            opacity={0.7}
            interactive={false}
          />
        )}

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
                    backgroundColor: isSelected
                      ? day.routeColor
                      : "var(--muted-foreground)",
                    ...(isSelected
                      ? ({ ["--tw-ring-color" as string]: day.routeColor } as React.CSSProperties)
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

        {day.stops.flatMap((stop) =>
          (stop.branches ?? [])
            .filter(
              (branch): branch is typeof branch & { lat: number; lng: number } =>
                branch.lat != null && branch.lng != null,
            )
            .map((branch) => (
              <MapMarker
                key={`${stop.id}-${branch.id}`}
                longitude={branch.lng}
                latitude={branch.lat}
              >
                <MarkerContent>
                  <div
                    className="size-4 rounded-full border-2 border-dashed border-background bg-background/80 shadow-sm"
                    style={{ backgroundColor: `${day.routeColor}99` }}
                    title={branch.title}
                  />
                </MarkerContent>
                <MarkerTooltip>{branch.title}</MarkerTooltip>
              </MapMarker>
            )),
        )}

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

      {plannedRoute.coordinates.length > 1 && (
        <div className="absolute top-2 left-2 rounded-lg border bg-background/95 px-2.5 py-1.5 shadow-sm">
          <p className="text-[10px] font-medium text-muted-foreground">
            Megállók sorrendje (légvonal)
          </p>
          <div className="mt-0.5 flex items-center gap-3 text-xs font-medium">
            <span className="flex items-center gap-1">
              <Clock className="size-3.5" />
              ~{formatDuration(plannedRoute.totalDuration)}
            </span>
            <span className="flex items-center gap-1">
              <Route className="size-3.5" />
              {formatDistance(plannedRoute.totalDistance)}
            </span>
          </div>
        </div>
      )}
    </div>
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
        <DrawerContent className="bottom-[calc(2.75rem+env(safe-area-inset-bottom))] h-[38dvh] max-h-[38dvh] gap-0 p-0 ring-1 ring-foreground/10">
          <DrawerTitle className="sr-only">
            {day.label} · {day.date}
          </DrawerTitle>
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

      <div className="fixed inset-x-0 bottom-0 z-[60] border-t bg-background/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex max-w-lg items-center gap-2">
          <Button
            size="sm"
            className="min-w-0 flex-1 gap-1.5"
            onClick={() => onOpenChange(!open)}
          >
            <MapPinned className="size-4" />
            {open ? "Térkép bezárása" : "Térkép megnyitása"}
          </Button>
          <ModeToggle />
        </div>
      </div>
    </>
  );
}
