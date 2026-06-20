"use client";

import { StopActions } from "@/components/guide/stop-actions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { RestaurantOption } from "@/lib/tour-data";
import { useLocale } from "@/lib/i18n/locale-provider";
import Image from "next/image";

type RestaurantPickerProps = {
  restaurants: RestaurantOption[];
  showCarousel?: boolean;
};

export function RestaurantPicker({
  restaurants,
  showCarousel = true,
}: RestaurantPickerProps) {
  const { t } = useLocale();

  if (restaurants.length === 0) return null;

  const defaultTab = restaurants[0]?.id;

  return (
    <div
      className="space-y-3"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <Tabs defaultValue={defaultTab}>
        <div className="-mx-1 overflow-x-auto px-1 pb-1">
          <TabsList className="inline-flex h-auto w-max max-w-none flex-nowrap">
            {restaurants.map((restaurant) => (
              <TabsTrigger
                key={restaurant.id}
                value={restaurant.id}
                className="shrink-0 flex-none px-3 text-xs"
              >
                {restaurant.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {restaurants.map((restaurant) => (
          <TabsContent key={restaurant.id} value={restaurant.id} className="mt-3 space-y-3">
            {restaurant.description && (
              <p className="text-muted-foreground text-sm leading-relaxed">
                {restaurant.description}
              </p>
            )}

            {showCarousel && restaurant.images.length > 0 && (
              <Carousel className="mx-auto w-full max-w-full">
                <CarouselContent>
                  {restaurant.images.map((src, index) => (
                    <CarouselItem key={src}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-lg border bg-muted">
                        <Image
                          src={src}
                          alt={`${restaurant.name} — ${index + 1}. ${t.ui.restaurantImageAlt}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 512px) 100vw, 512px"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {restaurant.images.length > 1 && (
                  <>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </>
                )}
              </Carousel>
            )}

            {restaurant.mapsUrl && (
              <StopActions
                links={[
                  {
                    label: t.ui.links.directions,
                    href: restaurant.mapsUrl,
                    variant: "directions",
                  },
                ]}
              />
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
