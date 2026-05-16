import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Public_Sans,
  Schibsted_Grotesk,
} from "next/font/google";

import { SiteHeader } from "@/components/layout/site-header";

import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

const schibstedGrotesk = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Visic | Visual Data Solutions for Local Governments",
  description:
    "Visic turns confusing government data into interactive, real-time maps and dashboards for local governments and residents.",
  openGraph: {
    title: "Visic",
    description:
      "Visual data solutions that make government information understandable and actionable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${publicSans.variable} ${schibstedGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
