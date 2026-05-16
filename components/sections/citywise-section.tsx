import Image from "next/image";
import Link from "next/link";

import { SectionContainer } from "@/components/layout/section-container";
import { SectionLabel } from "@/components/layout/section-heading";
import { CITYWISE_CONTENT } from "@/content/sections/citywise";
import { CITYWISE_APP_URL } from "@/content/site";
import { IMAGE_PATHS } from "@/lib/constants/images";
import { CITYWISE_SECTION_LAYOUT } from "@/lib/constants/layout";

/** 1005px visual + horizontal padding (px-6 × 2 = 3rem) so the card hugs copy + image */
const CITYWISE_CARD_MAX_WIDTH = "max-w-[calc(1005px+3rem)]";

/** Caps preview height so the section fits typical viewports; width follows aspect ratio. */
const CITYWISE_PREVIEW_MAX_HEIGHT =
  "max-h-[min(44svh,480px)] sm:max-h-[min(50svh,540px)] md:max-h-[min(56svh,600px)] lg:max-h-[min(62svh,680px)]";

export function CityWiseSection() {
  return (
    <SectionContainer id="solutions" className={CITYWISE_SECTION_LAYOUT}>
      <SectionLabel label={CITYWISE_CONTENT.label} className="mb-4 md:mb-6" />

      <div
        className={`mx-auto flex w-full ${CITYWISE_CARD_MAX_WIDTH} flex-col overflow-x-hidden rounded-[20px] bg-brand px-6 py-6 md:py-7`}
      >
        <CityWiseHeader />
        <CityWisePreview />
      </div>
    </SectionContainer>
  );
}

function CityWiseHeader() {
  const { location, title, description } = CITYWISE_CONTENT;

  return (
    <header className="w-full shrink-0">
      <p className="text-xs text-white/60">{location}</p>
      <h2 className="mt-1 font-sans text-[28px] text-white">{title}</h2>
      <p className="mt-3 text-base text-white/80">{description}</p>
    </header>
  );
}

function CityWisePreview() {
  return (
    <figure className="mt-4 flex w-full min-w-0 flex-col md:mt-5">
      <Link
        href={CITYWISE_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block min-w-0 rounded-[12px] outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-brand"
        aria-label={`${CITYWISE_CONTENT.ctaHint} — opens CityWise in a new tab`}
      >
        <div
          className={`relative aspect-[1005/647] w-full overflow-hidden rounded-[12px] ${CITYWISE_PREVIEW_MAX_HEIGHT}`}
        >
          <Image
            src={IMAGE_PATHS.citywiseVisual}
            alt="CityWise dashboard showing a Los Angeles council district map and project details"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1005px"
          />
        </div>
        <p className="mt-1 text-[8px] text-white/60 md:text-xs">{CITYWISE_CONTENT.ctaHint}</p>
      </Link>
    </figure>
  );
}
