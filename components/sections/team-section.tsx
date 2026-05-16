import Image from "next/image";

import { SectionContainer } from "@/components/layout/section-container";
import { TEAM_CONTENT } from "@/content/sections/team";
import { SECTION_VIEWPORT } from "@/lib/constants/layout";

/** Figma Team Card inner photo area */
const TEAM_PHOTO_ASPECT = "aspect-[164.76/205.95]";

export function TeamSection() {
  return (
    <SectionContainer id="team" className={`${SECTION_VIEWPORT} bg-[#f9f9f9]`}>
      <div className="mx-auto flex w-full max-w-[1078px] flex-col">
        <header className="shrink-0 text-center">
          <h2 className="font-sans text-3xl font-semibold text-foreground md:text-[32px]">
            {TEAM_CONTENT.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[929px] text-lg text-muted md:text-xl">
            {TEAM_CONTENT.description}
          </p>
        </header>

        <ul className="mt-10 flex flex-wrap justify-center gap-8 md:mt-12 md:gap-10">
          {TEAM_CONTENT.members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </ul>
      </div>
    </SectionContainer>
  );
}

type TeamMember = (typeof TEAM_CONTENT.members)[number];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <li className="w-[197px] rounded-[13.73px] border border-border bg-white p-4 shadow-[0px_2px_6px_rgba(0,0,0,0.25)]">
      <div
        className={`relative mb-1.5 w-full overflow-hidden rounded-[10.98px] ${TEAM_PHOTO_ASPECT}`}
      >
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center"
          sizes="197px"
        />
      </div>
      <p className="font-sans text-[13.73px] font-semibold text-foreground">{member.name}</p>
      <p className="text-[8.24px] text-muted">{member.role}</p>
      <a
        href={member.linkedinHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1.5 inline-flex size-[16.48px] items-center justify-center"
        aria-label={`${member.name} on LinkedIn`}
      >
        <Image
          src={TEAM_CONTENT.linkedinIcon}
          alt=""
          width={17}
          height={17}
          className="h-4 w-4"
        />
      </a>
    </li>
  );
}
