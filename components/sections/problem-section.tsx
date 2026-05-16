import Image from "next/image";

import { PROBLEM_CONTENT } from "@/content/sections/problem";
import { IMAGE_PATHS } from "@/lib/constants/images";
import {
  PROBLEM_INNER_PADDING_X,
  PROBLEM_SECTION_VIEWPORT,
} from "@/lib/constants/layout";
import { cn } from "@/lib/utils";

/** Figma node 737:212 — right column width */
const PROBLEM_RIGHT_WIDTH = "lg:w-[390px] lg:max-w-[390px] lg:shrink-0";
const POINT_STACK_GAP = "gap-10 md:gap-12";

export function ProblemSection() {
  return (
    <section
      id="problem"
      className={cn(PROBLEM_SECTION_VIEWPORT, "w-full overflow-x-hidden")}
    >
      {/* Full-bleed width; flex-1 fills viewport height under header */}
      <div className="relative left-1/2 flex min-h-0 flex-1 w-screen max-w-[100vw] -translate-x-1/2">
        <div
          className={cn(
            "flex h-full min-h-0 w-full flex-col rounded-[var(--radius-section)] bg-brand py-8 md:py-10",
            PROBLEM_INNER_PADDING_X,
          )}
        >
          <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto sm:gap-5 lg:flex-row lg:items-stretch lg:gap-0">
            <ProblemIntro />
            <ProblemColumnDivider />
            <ProblemPoints />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemIntro() {
  const { badge, title, subtitle } = PROBLEM_CONTENT;

  return (
    <div className="flex min-h-0 min-w-0 flex-1 flex-col lg:max-w-none lg:pr-8 xl:pr-10">
      <div className="shrink-0">
        <span className="inline-flex rounded-[var(--radius-pill)] border border-white/30 px-3 py-2 text-base font-semibold text-white">
          {badge}
        </span>
        <h2 className="mt-4 max-w-[630px] font-sans text-3xl font-bold leading-tight text-white md:mt-5 md:text-[32px]">
          {title}
        </h2>
        <p className="mt-3 max-w-[698px] font-sans text-base font-light text-white md:mt-4 md:text-[28px] md:leading-snug">
          {subtitle}
        </p>
      </div>
      <div className="hidden min-h-0 flex-1 items-center justify-center py-4 lg:flex lg:py-2">
        <div className="relative aspect-[564/364] w-full max-w-[min(100%,520px)] max-h-[min(46svh,420px)] md:max-h-[min(50svh,460px)] lg:max-w-[min(100%,600px)] lg:max-h-[min(54svh,500px)]">
          <Image
            src={IMAGE_PATHS.problemVisual}
            alt="Stack of overlapping government PDFs and spreadsheets"
            fill
            className="object-contain object-center"
            sizes="(max-width: 1024px) 100vw, 600px"
          />
        </div>
      </div>
    </div>
  );
}

function ProblemColumnDivider() {
  return (
    <div
      className="hidden shrink-0 self-stretch border-0 border-l border-dashed border-white/40 lg:block"
      aria-hidden
    />
  );
}

function ProblemPoints() {
  return (
    <div
      className={cn(
        "flex min-h-0 min-w-0 flex-col justify-center",
        POINT_STACK_GAP,
        PROBLEM_RIGHT_WIDTH,
        "lg:border-0 lg:pl-8 xl:pl-10",
      )}
    >
      {PROBLEM_CONTENT.points.map((point) => (
        <article key={point.title}>
          <h3 className="font-body text-base font-bold text-white md:text-[24px]">{point.title}</h3>
          <p className="mt-2 font-body text-base leading-normal text-white/95">
            {point.description}
          </p>
        </article>
      ))}
    </div>
  );
}
