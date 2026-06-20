"use client";

import { StopActions } from "@/components/guide/stop-actions";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { StopBranch } from "@/lib/tour-data";
import { useLocale } from "@/lib/i18n/locale-provider";
import { GitBranch } from "lucide-react";
import Image from "next/image";

type StopBranchesProps = {
  branches: StopBranch[];
};

export function StopBranches({ branches }: StopBranchesProps) {
  const { t } = useLocale();

  if (branches.length === 0) return null;

  return (
    <div
      className="space-y-2"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      <div className="flex items-center gap-1.5 text-muted-foreground text-xs font-medium">
        <GitBranch className="size-3.5" />
        {t.ui.optionalBranches}
      </div>
      <div className="grid gap-2">
        {branches.map((branch) => (
          <Card key={branch.id} size="sm" className="bg-muted/20">
            <CardHeader className="gap-1 pb-0">
              <CardTitle className="font-heading text-sm font-bold">
                {branch.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 pt-2">
              <p className="text-muted-foreground text-sm leading-relaxed">
                {branch.description}
              </p>

              {branch.images && branch.images.length > 0 && (
                <Carousel className="mx-auto w-full max-w-full">
                  <CarouselContent>
                    {branch.images.map((src, imageIndex) => (
                      <CarouselItem key={src}>
                        <div className="relative aspect-[16/10] overflow-hidden rounded-lg border bg-muted">
                          <Image
                            src={src}
                            alt={`${branch.title} — ${imageIndex + 1}. ${t.ui.branchImageAlt}`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 512px) 100vw, 512px"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {branch.images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </>
                  )}
                </Carousel>
              )}

              {branch.links && branch.links.length > 0 && (
                <StopActions links={branch.links} />
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
