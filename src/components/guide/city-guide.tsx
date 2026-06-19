"use client";

import { useMemo, useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { StopCard } from "@/components/guide/stop-card";
import { RouteMapDrawer } from "@/components/guide/route-map-drawer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { practicalTips, tourDays } from "@/lib/tour-data";
import { cn } from "@/lib/utils";
import { Info, MapPinned, Sparkles } from "lucide-react";

export function CityGuide() {
  const [activeDayId, setActiveDayId] = useState(tourDays[1]?.id ?? tourDays[0].id);
  const [selectedStopId, setSelectedStopId] = useState<string | null>(null);
  const [mapOpen, setMapOpen] = useState(true);

  const activeDay = useMemo(
    () => tourDays.find((day) => day.id === activeDayId) ?? tourDays[0],
    [activeDayId],
  );

  const handleDayChange = (dayId: string) => {
    setActiveDayId(dayId);
    const day = tourDays.find((item) => item.id === dayId);
    setSelectedStopId(day?.stops[0]?.id ?? null);
  };

  const handleSelectStop = (stopId: string) => {
    setSelectedStopId(stopId);
    document.getElementById(`stop-${stopId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div
      className={cn(
        "bg-muted/30 min-h-dvh transition-[padding] duration-300",
        mapOpen
          ? "pb-[38dvh]"
          : "pb-[calc(5rem+env(safe-area-inset-bottom))]",
      )}
    >
      <header className="bg-background/80 sticky top-0 z-40 border-b backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-lg px-4 pt-4 pb-3">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h1 className="font-heading text-2xl font-semibold italic tracking-tight">
              Budapest túra
            </h1>
            <ModeToggle />
          </div>

          <Tabs value={activeDayId} onValueChange={handleDayChange}>
            <TabsList className="grid h-auto w-full grid-cols-3 gap-1 p-1">
              {tourDays.map((day) => (
                <TabsTrigger
                  key={day.id}
                  value={day.id}
                  className="flex h-auto flex-col gap-0.5 py-2.5"
                >
                  <span className="text-sm font-semibold leading-none">{day.label}</span>
                  <span className="text-[10px] leading-none opacity-60">{day.date}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </header>

      <main className="mx-auto max-w-lg px-4 pt-3 pb-5">
        <Tabs value={activeDayId} onValueChange={handleDayChange}>
          {tourDays.map((day) => (
            <TabsContent key={day.id} value={day.id} className="mt-0 space-y-2">
              <Card size="sm" className="overflow-hidden">
                <CardHeader className="gap-1 py-3">
                  <div className="flex items-center gap-2">
                    <span
                      className="size-2 rounded-full"
                      style={{ backgroundColor: day.routeColor }}
                    />
                    <CardTitle className="font-heading text-base italic">{day.subtitle}</CardTitle>
                  </div>
                  <CardDescription>
                    {day.stops.length} megálló — koppints egy programra, a térkép odafókuszál
                  </CardDescription>
                </CardHeader>
              </Card>

              <div className="space-y-0">
                {day.stops.map((stop, index) => (
                  <div key={stop.id} id={`stop-${stop.id}`}>
                    <StopCard
                      stop={stop}
                      index={index}
                      routeColor={day.routeColor}
                      selected={selectedStopId === stop.id}
                      isLast={index === day.stops.length - 1}
                      onSelect={() => handleSelectStop(stop.id)}
                    />
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Separator className="my-6" />

        <section className="space-y-3 pb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="text-muted-foreground size-4" />
            <h2 className="font-heading text-sm font-medium italic">Hasznos infók</h2>
          </div>
          <ScrollArea className="max-h-52">
            <div className="space-y-2 pr-3">
              {practicalTips.map((tip) => (
                <Alert key={tip}>
                  <Info />
                  <AlertDescription>{tip}</AlertDescription>
                </Alert>
              ))}
            </div>
          </ScrollArea>
        </section>

        <Alert>
          <MapPinned />
          <AlertTitle>Szállás bázis</AlertTitle>
          <AlertDescription>
            Deák Ferenc tér / Király utca — szinte minden 5–15 perc gyalog.
          </AlertDescription>
        </Alert>
      </main>

      <RouteMapDrawer
        day={activeDay}
        selectedStopId={selectedStopId ?? activeDay.stops[0]?.id ?? null}
        onSelectStop={handleSelectStop}
        open={mapOpen}
        onOpenChange={setMapOpen}
      />
    </div>
  );
}
