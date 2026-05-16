import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { SectionContainer } from "@/components/layout/section-container";
import { FOOTER_CONTENT } from "@/content/sections/footer";
import { CITYWISE_APP_URL, CONTACT_HREF, FOOTER_LINKS } from "@/content/site";
import { IMAGE_PATHS } from "@/lib/constants/images";
import { FOOTER_SECTION_LAYOUT } from "@/lib/constants/layout";
import { cn } from "@/lib/utils";

/** Desktop: 40px above copyright (md:mt-10); 80px between column groups (md:gap-x-20). */
const FOOTER_COLUMNS_GAP = "gap-y-6 md:flex-row md:flex-nowrap md:gap-x-20 md:gap-y-0";

export function FooterSection() {
  return (
    <SectionContainer as="footer" className={`bg-[#f9f9f9] ${FOOTER_SECTION_LAYOUT}`}>
      <div className="flex w-full flex-col items-stretch text-left">
        <FooterCta />
        <div className="mt-16 md:mt-24 lg:mt-40">
          <FooterLinks />
        </div>
        <p className="mt-8 w-full text-center text-base text-subtle md:mt-10">
          {FOOTER_CONTENT.copyright}
        </p>
      </div>
    </SectionContainer>
  );
}

function FooterCta() {
  const { headline, description, cta } = FOOTER_CONTENT;

  return (
    <div className="mx-auto max-w-[1004px] text-center">
      <h2 className="font-sans text-4xl font-semibold leading-none text-foreground md:text-5xl lg:text-[48px]">
        <span className="leading-normal text-brand">{headline.highlight}</span>
        <br />
        <span className="leading-normal text-foreground">{headline.rest}</span>
      </h2>
      <div className="mx-auto mt-3 flex justify-center px-4">
        <Image
          src={IMAGE_PATHS.joinUsLine}
          alt=""
          width={857}
          height={42}
          className="h-auto w-full max-w-[min(857px,90vw)]"
          aria-hidden
        />
      </div>
      <p className="mx-auto mt-6 max-w-[670px] text-xl text-muted">{description}</p>
      <Link
        href={CONTACT_HREF}
        className="mt-8 inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-brand px-4 py-3 text-xl text-brand-foreground transition-colors hover:bg-brand/90"
      >
        {cta}
      </Link>
    </div>
  );
}

function FooterLinks() {
  return (
    <nav
      className={cn(
        "flex w-full flex-col justify-start md:items-start",
        FOOTER_COLUMNS_GAP,
      )}
      aria-label="Footer"
    >
      <FooterColumn title={FOOTER_LINKS.solutions.label}>
        <Link
          href={CITYWISE_APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex transition-opacity hover:opacity-80"
          aria-label="CityWise — opens in a new tab"
        >
          <Image
            src={IMAGE_PATHS.citywiseLogo}
            alt="CityWise"
            width={18}
            height={24}
            className="h-8 w-auto"
          />
        </Link>
      </FooterColumn>

      <FooterColumn title={FOOTER_LINKS.contact.label}>
        <Link
          href={FOOTER_LINKS.contact.href}
          className="inline-flex items-center transition-opacity hover:opacity-80"
          aria-label="Email us"
        >
          <Image
            src={IMAGE_PATHS.emailIcon}
            alt=""
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </Link>
      </FooterColumn>

      <FooterColumn title="Follow Us">
        <ul className="flex flex-row flex-wrap items-center justify-start gap-10">
          <li>
            <a
              href={FOOTER_LINKS.linkedin.href}
              className="inline-flex opacity-90 hover:opacity-100"
              aria-label={FOOTER_LINKS.linkedin.label}
            >
              <Image
                src={IMAGE_PATHS.linkedinLogo}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </a>
          </li>
          <li>
            <span
              className="inline-flex opacity-90"
              aria-hidden="true"
              title="GitHub"
            >
              <Image
                src={IMAGE_PATHS.githubLogo}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </span>
          </li>
          <li>
            <span
              className="inline-flex opacity-90"
              aria-hidden="true"
              title="Instagram"
            >
              <Image
                src={IMAGE_PATHS.instagramLogo}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </span>
          </li>
        </ul>
      </FooterColumn>
    </nav>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  /** 8px between column label and icon row */
  return (
    <div className="flex min-w-0 shrink-0 flex-col items-start gap-2 text-left">
      <p className="font-sans text-xl text-subtle">{title}</p>
      {children}
    </div>
  );
}
