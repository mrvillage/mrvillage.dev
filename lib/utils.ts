import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import rawTailwindConfig from "../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";
import { env } from "@/lib/env";
import { format } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tailwindConfig = resolveConfig(rawTailwindConfig);

export function formatDate(input: string | number): string {
  return format(input, "MMMM eo, yyyy");
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function getPrettyLink(url: string) {
  return url
    .replace(/(^\w+:|^)\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

export function ensureLinkProtocol(url: string) {
  if (!url.startsWith("http")) {
    return `https://${url}`;
  }
  return url;
}
