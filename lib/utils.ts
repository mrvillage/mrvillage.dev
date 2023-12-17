import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import rawTailwindConfig from "../tailwind.config";
import resolveConfig from "tailwindcss/resolveConfig";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tailwindConfig = resolveConfig(rawTailwindConfig);
