"use client";

import { useLocale } from "@/lib/i18n/locale-provider";
import type { Locale } from "@/lib/i18n/types";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { Languages } from "lucide-react";

const localeCodes: Record<Locale, string> = {
  hu: "HU",
  en: "EN",
  de: "DE",
};

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t.ui.language.label}
        className={cn(
          buttonVariants({ variant: "outline", size: "icon-sm" }),
          "relative font-semibold text-[10px]",
        )}
      >
        <Languages className="size-3.5" />
        <span className="sr-only">{t.ui.language.label}</span>
        <span aria-hidden className="absolute -right-0.5 -bottom-0.5 rounded bg-background px-0.5 text-[8px] leading-none">
          {localeCodes[locale]}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[10000]">
        {(["hu", "en", "de"] as const).map((code) => (
          <DropdownMenuItem key={code} onClick={() => setLocale(code)}>
            {t.ui.language[code]}
            {locale === code && <span className="ml-auto text-xs">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
