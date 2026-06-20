"use client";

import { StopActions } from "@/components/guide/stop-actions";
import { StopBranches } from "@/components/guide/stop-branches";
import { RestaurantPicker } from "@/components/guide/restaurant-picker";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type TourStop } from "@/lib/tour-data";
import { useLocale } from "@/lib/i18n/locale-provider";
import { cn } from "@/lib/utils";
import { Clock, Lightbulb } from "lucide-react";
import Image from "next/image";

type StopCardProps = {
  stop: TourStop;
  index: number;
  routeColor: string;
  selected: boolean;
  isLast: boolean;
  onSelect: () => void;
};

export function StopCard({
  stop,
  index,
  routeColor,
  selected,
  isLast,
  onSelect,
}: StopCardProps) {
  const { t } = useLocale();

  const hasExtraContent =
    Boolean(stop.links?.length) ||
    Boolean(stop.ticketPdf) ||
    Boolean(stop.restaurants?.length) ||
    Boolean(stop.branches?.length) ||
    Boolean(stop.images?.length);

  return (
    <div className="relative flex items-start gap-3">
      <div className="flex flex-col items-center self-stretch pt-3">
        <button
          type="button"
          onClick={onSelect}
          aria-label={stop.title}
          aria-current={selected ? "true" : undefined}
          className={cn(
            "relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white shadow transition-all",
            selected ? "scale-110 shadow-md" : "hover:scale-105 opacity-60",
          )}
          style={{ backgroundColor: routeColor }}
        >
          {index + 1}
        </button>
        {!isLast && (
          <div className="mt-2 w-px flex-1 bg-border" aria-hidden />
        )}
      </div>

      <div className={cn("min-w-0 flex-1", !isLast && "mb-3")}>
        <button type="button" onClick={onSelect} className="w-full text-left">
          <Card
            size="sm"
            className={cn(
              "transition-all hover:bg-muted/30",
              selected && "ring-2",
            )}
            style={
              selected
                ? ({ ["--tw-ring-color" as string]: routeColor } as React.CSSProperties)
                : undefined
            }
          >
            <CardHeader className="gap-2 pb-0">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="outline" className="font-mono text-[10px]">
                  {stop.time}
                </Badge>
                {stop.duration && (
                  <Badge variant="secondary" className="gap-1 text-[10px]">
                    <Clock className="size-3" />
                    {stop.duration}
                  </Badge>
                )}
              </div>
              <CardTitle className="font-heading font-bold">{stop.title}</CardTitle>
              {stop.description && (
                <CardDescription className="leading-relaxed">
                  {stop.description}
                </CardDescription>
              )}
            </CardHeader>

            {stop.tip && (
              <CardContent className="pt-3 pb-0">
                <Alert className="border-amber-200/60 bg-amber-50/80 dark:border-amber-900/40 dark:bg-amber-950/30">
                  <Lightbulb className="text-amber-600 dark:text-amber-400" />
                  <AlertDescription className="text-amber-900 dark:text-amber-100">
                    {stop.tip}
                  </AlertDescription>
                </Alert>
              </CardContent>
            )}
          </Card>
        </button>

        {hasExtraContent && (
          <div className="mt-2 space-y-3 rounded-lg border bg-background/60 p-3">
            {stop.images && stop.images.length > 0 && (
              <Carousel className="mx-auto w-full max-w-full">
                <CarouselContent>
                  {stop.images.map((src, imageIndex) => (
                    <CarouselItem key={src}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border bg-muted">
                        <Image
                          src={src}
                          alt={`${stop.title} — ${imageIndex + 1}. ${t.ui.imageAlt}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 512px) 100vw, 512px"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {stop.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </>
                )}
              </Carousel>
            )}

            {stop.restaurants && stop.restaurants.length > 0 && (
              <RestaurantPicker
                restaurants={stop.restaurants}
                showCarousel={stop.showRestaurantCarousel ?? true}
              />
            )}

            {stop.branches && stop.branches.length > 0 && (
              <StopBranches branches={stop.branches} />
            )}

            {(stop.links?.length || stop.ticketPdf) && (
              <StopActions links={stop.links} ticketPdf={stop.ticketPdf} />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
