import Image from "next/image";

import { SectionContainer } from "@/components/layout/section-container";
import { HERO_CONTENT } from "@/content/sections/hero";
import { IMAGE_PATHS } from "@/lib/constants/images";
import {
  HERO_FIGMA_GAP,
  HERO_GRID_DESKTOP,
  HERO_INNER_MAX_WIDTH,
  HERO_SECTION_VIEWPORT,
} from "@/lib/constants/layout";

export function HeroSection() {
  return (
    <SectionContainer
      className={HERO_SECTION_VIEWPORT}
      contentClassName={`min-h-0 w-full ${HERO_INNER_MAX_WIDTH}`}
    >
      <div
        className={`grid w-full items-stretch gap-6 md:gap-8 max-lg:flex max-lg:min-h-[calc(100svh-5rem)] max-lg:flex-col max-lg:items-center max-lg:justify-center max-lg:text-center lg:h-[calc(100svh-7.5rem)] lg:min-h-0 lg:grid-rows-[minmax(0,1fr)] ${HERO_GRID_DESKTOP} ${HERO_FIGMA_GAP}`}
      >
        <HeroCopy />
        <HeroVisual />
      </div>
    </SectionContainer>
  );
}

function HeroCopy() {
  const { headline, subheadline } = HERO_CONTENT;

  return (
    <div className="mx-auto max-w-[515px] shrink-0 max-lg:max-w-none lg:mx-0 lg:flex lg:min-h-0 lg:flex-col lg:justify-center lg:justify-self-stretch lg:justify-self-start">
      <h1
        id="hero-heading"
        className="font-sans text-4xl font-bold leading-tight text-foreground md:text-[56px] md:leading-[1.1]"
      >
        {headline.prefix}
        <span className="text-brand">{headline.highlight}</span>
        {headline.suffix}
      </h1>
      <p className="mt-3 text-[20px] text-muted">{subheadline}</p>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hidden min-h-0 w-full min-w-0 self-stretch lg:flex lg:h-full lg:justify-end">
      <div
        className="relative h-[min(58svh,520px)] w-full max-w-[min(100%,1005px)] min-h-0 lg:ml-auto lg:h-full lg:max-h-none lg:w-full lg:max-w-[min(100%,1280px)]"
      >
        <Image
          src={IMAGE_PATHS.heroSideVisual}
          alt="Collage of government documents connected by red strings illustrating fragmented civic data"
          fill
          className="object-contain object-center lg:origin-right lg:scale-[1]"
          sizes="(max-width: 1024px) 100vw, 1280px"
          priority
        />
      </div>
    </div>
  );
}
