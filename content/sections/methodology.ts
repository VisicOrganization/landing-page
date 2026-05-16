import { IMAGE_PATHS } from "@/lib/constants/images";

export const METHODOLOGY_STEPS = [
  {
    number: "01",
    title: "Secure Data Ingestion",
    description:
      "Takes in data from publicly available sources with enterprise-grade security.",
    visualSrc: IMAGE_PATHS.methodologyStep1,
  },
  {
    number: "02",
    title: "Normalization Schemas",
    description:
      "Cleans and standardizes data using civic data models for consistency and accuracy.",
    visualSrc: IMAGE_PATHS.methodologyStep2,
  },
  {
    number: "03",
    title: "Visual Analytics Layer",
    description:
      "Converts raw data into interactive maps, charts, dashboards, and other visuals that deliver actionable insights.",
    visualSrc: IMAGE_PATHS.methodologyStep3,
  },
] as const;

export type MethodologyStep = (typeof METHODOLOGY_STEPS)[number];

export const METHODOLOGY_CONTENT = {
  label: "Methodology" as const,
  steps: METHODOLOGY_STEPS.map(({ number, title, description }) => ({
    number,
    title,
    description,
  })),
} as const;
