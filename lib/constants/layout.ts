export const MAX_CONTENT_WIDTH = "max-w-[1512px]";
export const SECTION_HORIZONTAL_PADDING = "px-6 md:px-[75px]";

/** Figma desktop horizontal inset inside the green Problem frame */
export const PROBLEM_INNER_PADDING_X = "px-5 sm:px-8 md:px-[151px]";

/** Problem: exactly one viewport below sticky header (5rem); clip overflow */
export const PROBLEM_SECTION_VIEWPORT =
  "h-[calc(100svh-5rem)] min-h-[calc(100svh-5rem)] max-h-[calc(100svh-5rem)] box-border flex flex-col scroll-mt-20 overflow-hidden";

/** One viewport per section: min height + vertical centering when content allows */
export const SECTION_VIEWPORT =
  "min-h-dvh box-border flex flex-col justify-center py-8 md:py-12 scroll-mt-20";

/** Hero: viewport below header; section centers content block vertically */
export const HERO_SECTION_VIEWPORT =
  "flex h-[calc(100svh-5rem)] max-h-[calc(100svh-5rem)] min-h-0 flex-col justify-center overflow-hidden box-border py-4 md:py-5 scroll-mt-20";

/** Hero: Figma 737:126 + 737:132 — text 515px; visual scales in second column (frame ref ~657×673) */
export const HERO_GRID_DESKTOP = "lg:grid-cols-[minmax(0,515px)_minmax(0,1fr)]";
/** Wider gutter so copy + visual read as one ~80vw band on large screens */
export const HERO_FIGMA_GAP = "lg:gap-x-[clamp(3.5rem,7vw,9rem)]";
/** Hero inner max width as share of viewport (pairs with HERO_FIGMA_GAP) */
export const HERO_INNER_MAX_WIDTH = "max-w-[85vw]";
/** Hero visual aspect: Figma frame 737:132 (656.766×673) */
export const HERO_VISUAL_ASPECT = "aspect-[657/673]";

/** Cap very tall illustration SVGs on mid-size viewports */
export const SECTION_MEDIA_MAX_HEIGHT = "max-h-[min(45vh,420px)]";

/** CityWise / Solutions: avoid min-h-dvh so the block matches content height */
export const CITYWISE_SECTION_LAYOUT =
  "scroll-mt-20 box-border py-6 md:py-8 lg:py-10";

/** Methodology (Figma 737:156): scroll track + sticky stage; inner height uses 100svh − header */
export const METHODOLOGY_SECTION_LAYOUT =
  "scroll-mt-20 box-border py-8 md:py-12 lg:py-10";

/** Join Us + footer: natural height; 24px from copyright to viewport bottom */
export const FOOTER_SECTION_LAYOUT = "scroll-mt-20 box-border pt-12 md:pt-16 lg:pt-20 pb-[24px]";
