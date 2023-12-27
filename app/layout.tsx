import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "mrvillage",
  description: "Software engineer, avid reader, black belt",
  applicationName: "mrvillage.dev",
  keywords: [
    "mrvillage",
    "mr_village",
    "village",
    "josef",
    "graf",
    "josefgraf",
    "josef graf",
    "software",
    "developer",
    "web",
    "development",
    "design",
    "ui",
    "ux",
    "frontend",
    "backend",
    "fullstack",
    "full-stack",
    "full stack",
    "typescript",
    "javascript",
    "react",
    "next",
    "nextjs",
    "next.js",
    "node",
    "nodejs",
    "node.js",
    "rust",
    "rustlang",
    "rust-lang",
    "karate",
  ],
  creator: "Josef Graf",
  authors: [{ name: "Josef Graf", url: "https://mrvillage.dev" }],
  publisher: "Josef Graf",
  referrer: "origin-when-cross-origin",
  robots: "index, follow",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark selection:bg-neutral-600",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
