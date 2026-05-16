import { CityWiseSection } from "@/components/sections/citywise-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { MethodologySection } from "@/components/sections/methodology-section";
import { ProblemSection } from "@/components/sections/problem-section";
import { QuoteSection } from "@/components/sections/quote-section";
import { TeamSection } from "@/components/sections/team-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <QuoteSection />
      <ProblemSection />
      <MethodologySection />
      <CityWiseSection />
      <TeamSection />
      <FooterSection />
    </main>
  );
}
