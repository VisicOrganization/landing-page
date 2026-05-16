"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";

import { METHODOLOGY_STEPS, type MethodologyStep } from "@/content/sections/methodology";
import { IMAGE_PATHS } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

/** Matches site header (`h-20`) + sticky offset */
const HEADER_OFFSET_REM = 5;

const STEP_COUNT = METHODOLOGY_STEPS.length;

/**
 * Scroll track height = (steps − 1) × one sticky panel — no extra tail after step 03.
 */
const TRACK_TAIL_PANELS = 0;

/**
 * Share of scrub progress [0,1] while step 03 is active — keep small so motion does not "run"
 * through a long band after the third card appears.
 */
const FINAL_STEP_PROGRESS_SHARE = 0.055;

/** Lower = keep framing higher on Data-Steam.svg so the pipeline tail is not revealed past card 3 */
const STREAM_VIEWPORT_Y_MAX_PERCENT = 40;
const STREAM_VIEWPORT_Y_MAX_PERCENT_LAST_STEP = 34;
const STREAM_VIEWPORT_Y_MOTION_SCALE = 50;

function methodologyScrollProgress(trackEl: HTMLElement) {
  const scrollRange = trackEl.offsetHeight - window.innerHeight;
  if (scrollRange <= 0) {
    return 0;
  }
  const rect = trackEl.getBoundingClientRect();
  return Math.min(1, Math.max(0, -rect.top / scrollRange));
}

function methodologyActiveIndex(progress: number) {
  const p = Math.min(1, Math.max(0, progress));
  const earlyTotal = 1 - FINAL_STEP_PROGRESS_SHARE;
  const earlyBand = earlyTotal / (STEP_COUNT - 1);
  for (let i = 0; i < STEP_COUNT - 1; i++) {
    if (p < earlyBand * (i + 1)) {
      return i;
    }
  }
  return STEP_COUNT - 1;
}

export function MethodologyScrollStage() {
  const regionId = useId();
  const trackRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const updateScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const p = methodologyScrollProgress(track);
    setProgress(p);
    setActiveIndex(methodologyActiveIndex(p));
  }, []);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return;
    }
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useLayoutEffect(() => {
    updateScroll();
  }, [updateScroll]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) {
        cancelAnimationFrame(raf);
      }
      raf = requestAnimationFrame(() => {
        raf = 0;
        updateScroll();
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) {
        cancelAnimationFrame(raf);
      }
    };
  }, [updateScroll]);

  const trackPanels = STEP_COUNT - 1 + TRACK_TAIL_PANELS;
  const trackHeight = `calc(${trackPanels} * (100svh - ${HEADER_OFFSET_REM}rem))`;

  return (
    <div
      ref={trackRef}
      className="mx-auto w-full max-w-[min(1240px,100%)]"
      style={{ height: trackHeight }}
    >
      <div
        className={cn(
          "sticky top-20 z-0 flex min-h-0 max-h-[calc(100svh-5rem)] flex-col overflow-hidden",
        )}
      >
        <div className="mx-auto grid min-h-0 w-full flex-1 grid-cols-1 items-center gap-12 px-1 py-4 sm:gap-14 sm:py-6 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-0 lg:px-4 lg:py-10 xl:gap-x-24">
          <div className="relative flex min-h-[min(300px,44svh)] w-full min-w-0 shrink-0 items-center justify-center lg:min-h-0 lg:justify-end lg:pr-4">
            <div className="relative aspect-square w-full max-w-sm sm:max-w-md lg:mx-0 lg:max-w-[min(100%,30rem)]">
              {METHODOLOGY_STEPS.map((step, index) => {
                const active = index === activeIndex;
                return (
                  <div
                    key={step.number}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-500 ease-out motion-reduce:duration-0 motion-reduce:transition-none",
                      active ? "z-10 opacity-100" : "z-0 opacity-0",
                    )}
                    aria-hidden={!active}
                    inert={!active ? true : undefined}
                  >
                    <StepVisual imageSrc={step.visualSrc} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative flex min-h-[min(280px,38svh)] w-full min-w-0 flex-col items-center justify-center lg:min-h-[min(520px,58vh)] lg:pl-2">
            <div
              id={regionId}
              className="relative z-30 flex w-full max-w-[min(575px,100%)] flex-col items-center overflow-visible px-2 py-2 sm:px-4 sm:py-4"
              aria-live="polite"
              aria-atomic="true"
            >
              <span className="sr-only">
                Methodology step {activeIndex + 1} of {STEP_COUNT}. Scroll the page to change
                steps.
              </span>

              <div
                className={cn(
                  "relative grid w-full max-h-full min-h-0 overflow-hidden",
                  "[grid-template-rows:minmax(0,1fr)]",
                  "min-h-[min(280px,38svh)]",
                  "lg:[grid-template-rows:104px_380px] lg:min-h-[380px]",
                )}
              >
                <MethodologySingleStream
                  progress={progress}
                  activeIndex={activeIndex}
                  reduceMotion={reduceMotion}
                />
                <div className="relative z-20 col-start-1 row-start-1 min-h-[min(280px,38svh)] w-full lg:row-start-2 lg:min-h-[380px]">
                  {METHODOLOGY_STEPS.map((step, index) => (
                    <MethodologyStepCard
                      key={step.number}
                      step={step}
                      active={index === activeIndex}
                      reduceMotion={reduceMotion}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function streamViewportObjectPositionY(args: {
  progress: number;
  reduceMotion: boolean;
  activeIndex: number;
}): string {
  const { progress, reduceMotion, activeIndex } = args;
  if (reduceMotion) {
    const yByStep = [0, 32, STREAM_VIEWPORT_Y_MAX_PERCENT_LAST_STEP] as const;
    return `${yByStep[Math.min(activeIndex, STEP_COUNT - 1)]}%`;
  }
  const p = progress;
  let effectiveP = p;
  if (activeIndex >= STEP_COUNT - 1) {
    const finalSegmentStart = 1 - FINAL_STEP_PROGRESS_SHARE;
    const streamPanBudget = 0.02;
    effectiveP = Math.min(p, finalSegmentStart + streamPanBudget);
  }
  const y = effectiveP * STREAM_VIEWPORT_Y_MOTION_SCALE;
  const cap =
    activeIndex >= STEP_COUNT - 1
      ? STREAM_VIEWPORT_Y_MAX_PERCENT_LAST_STEP
      : STREAM_VIEWPORT_Y_MAX_PERCENT;
  return `${Math.min(y, cap)}%`;
}

function MethodologySingleStream({
  progress,
  activeIndex,
  reduceMotion,
}: {
  progress: number;
  activeIndex: number;
  reduceMotion: boolean;
}) {
  const objectY = streamViewportObjectPositionY({
    progress,
    reduceMotion,
    activeIndex,
  });

  return (
    <div
      className={cn(
        "pointer-events-none col-start-1 row-span-2 row-start-1 hidden min-h-0 justify-center",
        "h-full w-full min-w-0 self-stretch overflow-hidden lg:flex",
      )}
      style={{
        maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
      }}
      aria-hidden
    >
      <div className="relative h-full min-h-0 w-[min(380px,88vw)] max-w-full overflow-hidden">
        <Image
          src={IMAGE_PATHS.methodologyDataStream}
          fill
          alt=""
          draggable={false}
          priority={false}
          className="select-none object-cover object-center"
          style={{ objectPosition: `center ${objectY}` }}
          sizes="(min-width: 1024px) 380px, 88vw"
        />
      </div>
    </div>
  );
}

function MethodologyStepCard({
  step,
  active,
  reduceMotion,
}: {
  step: MethodologyStep;
  active: boolean;
  reduceMotion: boolean;
}) {
  const subtleSlide = !reduceMotion && !active;

  return (
    <article
      aria-hidden={!active}
      inert={!active ? true : undefined}
      style={{
        transform: subtleSlide
          ? "translate(-50%, calc(-50% + 12px))"
          : "translate(-50%, -50%)",
      }}
      className={cn(
        "absolute left-1/2 top-1/2 w-full max-w-[min(575px,100%)] rounded-[19px] border-2 border-border bg-white shadow-[0_2px_3px_rgba(0,0,0,0.25)]",
        "px-8 py-10 sm:px-10 sm:py-12 md:px-12 md:py-12",
        "transition-[opacity,transform] duration-500 ease-out motion-reduce:duration-0 motion-reduce:transition-none",
        active ? "z-10 opacity-100" : "z-0 opacity-0",
        active && "pointer-events-auto",
        !active && "pointer-events-none select-none",
      )}
    >
      <p className="font-mono text-2xl text-brand md:text-[24px]">{step.number}</p>
      <h3 className="mt-1 font-sans text-2xl font-semibold text-foreground md:text-[28px] lg:text-[32px]">
        {step.title}
      </h3>
      <p className="mt-2 text-base leading-relaxed text-subtle md:text-xl">{step.description}</p>
    </article>
  );
}

function StepVisual({ imageSrc }: { imageSrc: string }) {
  return (
    <div className="relative h-full w-full">
      <Image
        src={imageSrc}
        alt=""
        fill
        className="object-contain object-center"
        sizes="(max-width: 1024px) 85vw, 480px"
      />
    </div>
  );
}
