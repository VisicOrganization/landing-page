import { SectionContainer } from "@/components/layout/section-container";
import { SectionLabel } from "@/components/layout/section-heading";
import { METHODOLOGY_CONTENT } from "@/content/sections/methodology";
import { METHODOLOGY_SECTION_LAYOUT } from "@/lib/constants/layout";

import { MethodologyScrollStage } from "./methodology-scroll-stage";

export function MethodologySection() {
  return (
    <SectionContainer id="methodology" className={METHODOLOGY_SECTION_LAYOUT}>
      <SectionLabel label={METHODOLOGY_CONTENT.label} className="mb-8" />
      <MethodologyScrollStage />
    </SectionContainer>
  );
}
