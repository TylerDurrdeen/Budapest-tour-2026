"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  categoryLabels,
  type StopCategory,
  type TourStop,
} from "@/lib/tour-data";
import { cn } from "@/lib/utils";
import {
  Bus,
  Coffee,
  Landmark,
  Lightbulb,
  MapPin,
  Moon,
  Plane,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const categoryIcons: Record<StopCategory, typeof MapPin> = {
  accommodation: MapPin,
  food: Coffee,
  culture: Landmark,
  nightlife: Moon,
  transport: Bus,
  activity: Sparkles,
  shopping: ShoppingBag,
};

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
  const Icon =
    stop.category === "transport" && stop.title.includes("reptér")
      ? Plane
      : categoryIcons[stop.category];

  return (
    <div className="relative flex gap-3">
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={onSelect}
          aria-label={stop.title}
          aria-current={selected ? "true" : undefined}
          className={cn(
            "relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white shadow-sm transition-transform",
            selected ? "scale-110 ring-2 ring-offset-2 ring-offset-background" : "hover:scale-105",
          )}
          style={{
            backgroundColor: routeColor,
            ...(selected ? { ["--tw-ring-color" as string]: routeColor } : {}),
          }}
        >
          {index + 1}
        </button>
        {!isLast && (
          <div
            className="bg-border mt-1 w-px flex-1 min-h-4"
            aria-hidden
          />
        )}
      </div>

      <button
        type="button"
        onClick={onSelect}
        className="mb-4 min-w-0 flex-1 pb-0 text-left last:mb-0"
      >
        <Card
          size="sm"
          className={cn(
            "transition-all hover:bg-muted/30",
            selected && "bg-muted/40 ring-2 ring-offset-2 ring-offset-background",
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
              <Badge variant="secondary" className="gap-1">
                <Icon />
                {categoryLabels[stop.category]}
              </Badge>
            </div>
            <CardTitle className="font-heading italic">{stop.title}</CardTitle>
            {stop.description && (
              <CardDescription className="leading-relaxed">
                {stop.description}
              </CardDescription>
            )}
          </CardHeader>

          {stop.tip && (
            <CardContent className="pt-3">
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
    </div>
  );
}
