"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { buildTourData } from "@/lib/tour-data/build-tour";
import { getMessages } from "@/lib/i18n/messages";
import type { Locale, Messages } from "@/lib/i18n/types";
import type { TourDay } from "@/lib/tour-data";

const STORAGE_KEY = "budapest-tour-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
  tourDays: TourDay[];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "hu";
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "hu" || stored === "en" || stored === "de") return stored;
  return "hu";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("hu");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo(() => {
    const t = getMessages(locale);
    return {
      locale,
      setLocale,
      t,
      tourDays: buildTourData(t),
    };
  }, [locale, setLocale]);

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
