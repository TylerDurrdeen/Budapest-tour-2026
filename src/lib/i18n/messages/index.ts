import type { Locale } from "../types";
import { messages as hu } from "./hu";
import { messages as en } from "./en";
import { messages as de } from "./de";

const all = { hu, en, de } as const;

export function getMessages(locale: Locale) {
  return all[locale];
}
