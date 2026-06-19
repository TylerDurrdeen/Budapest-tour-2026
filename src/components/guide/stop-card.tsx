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
    <div className="relative flex items-start gap-3">
      {/* Timeline column */}
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

      {/* Card */}
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
                <Badge variant="secondary" className="gap-1">
                  <Icon />
                  {categoryLabels[stop.category]}
                </Badge>
              </div>
              <CardTitle className="font-heading">{stop.title}</CardTitle>
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
    </div>
  );
}
