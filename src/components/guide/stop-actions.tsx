"use client";

import type { StopLink, StopLinkVariant } from "@/lib/tour-data";
import { useLocale } from "@/lib/i18n/locale-provider";
import { cn } from "@/lib/utils";
import {
  ExternalLink,
  FileText,
  Home,
  MapPin,
  Navigation,
} from "lucide-react";

const variantStyles: Record<
  StopLinkVariant,
  { className: string; icon: typeof MapPin }
> = {
  directions: {
    className: "bg-blue-600 text-white hover:bg-blue-700",
    icon: Navigation,
  },
  place: {
    className: "bg-blue-600 text-white hover:bg-blue-700",
    icon: MapPin,
  },
  ticket: {
    className: "bg-emerald-600 text-white hover:bg-emerald-700",
    icon: FileText,
  },
  airbnb: {
    className: "bg-rose-600 text-white hover:bg-rose-700",
    icon: Home,
  },
  external: {
    className: "bg-zinc-600 text-white hover:bg-zinc-700",
    icon: ExternalLink,
  },
};

type StopActionsProps = {
  links?: StopLink[];
  ticketPdf?: string;
};

export function StopActions({ links = [], ticketPdf }: StopActionsProps) {
  const { t } = useLocale();
  const allLinks = [...links];

  if (
    ticketPdf &&
    !allLinks.some((link) => link.variant === "ticket")
  ) {
    allLinks.push({
      label: t.ui.openTicket,
      href: ticketPdf,
      variant: "ticket",
    });
  }

  if (allLinks.length === 0) return null;

  return (
    <div
      className="flex flex-wrap gap-2"
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => e.stopPropagation()}
    >
      {allLinks.map((link) => {
        const style = variantStyles[link.variant];
        const Icon = style.icon;

        return (
          <a
            key={`${link.variant}-${link.label}-${link.href}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex h-8 items-center gap-1.5 rounded-lg px-3 text-xs font-medium transition-colors",
              style.className,
            )}
          >
            <Icon className="size-3.5 shrink-0" />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}
