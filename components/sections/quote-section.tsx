import Image from "next/image";

import { SectionContainer } from "@/components/layout/section-container";
import { QUOTE_CONTENT } from "@/content/sections/quote";
import { IMAGE_PATHS } from "@/lib/constants/images";
import { SECTION_MEDIA_MAX_HEIGHT, SECTION_VIEWPORT } from "@/lib/constants/layout";

const SDG_GOAL_11_URL = "https://sdgs.un.org/goals/goal11";

export function QuoteSection() {
  return (
    <SectionContainer className={SECTION_VIEWPORT}>
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:items-center md:gap-12 lg:gap-16">
        <SdgBadge />
        <QuoteBlock />
      </div>
    </SectionContainer>
  );
}

function SdgBadge() {
  return (
    <a
      href={SDG_GOAL_11_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full max-w-[min(100%,280px)] shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:max-w-[313px]`}
      aria-label="UN Sustainable Development Goal 11: Sustainable Cities and Communities (opens in new tab)"
    >
      <div
        className={`relative aspect-square w-full ${SECTION_MEDIA_MAX_HEIGHT}`}
      >
        <Image
          src={IMAGE_PATHS.sdgGoal11}
          alt=""
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 280px, 313px"
        />
      </div>
    </a>
  );
}

function QuoteBlock() {
  return (
    <figure className="flex max-w-3xl flex-col gap-4 max-lg:flex-col md:flex-row md:items-start md:gap-8">
      <span
        className="max-lg:hidden font-sans text-7xl font-bold leading-none text-brand md:text-8xl"
        aria-hidden
      >
        &ldquo;
      </span>
      <figcaption className="min-w-0 flex-1">
        <blockquote className="text-lg text-muted md:text-2xl md:leading-snug">
          {QUOTE_CONTENT.text}
        </blockquote>
        <p className="mt-2 font-sans text-lg italic text-brand md:text-2xl">
          {QUOTE_CONTENT.attribution}
        </p>
      </figcaption>
    </figure>
  );
}
