import Image from "next/image";
import Link from "next/link";

import { CONTACT_HREF, NAV_LINKS, SITE_NAME } from "@/content/site";
import { IMAGE_PATHS } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-background/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex h-20 max-w-[1512px] items-center justify-between px-6 md:px-[75px]"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center gap-2" aria-label={SITE_NAME}>
          <Image
            src={IMAGE_PATHS.logo}
            alt=""
            width={35}
            height={44}
            className="h-11 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "hidden text-base text-muted transition-colors hover:text-foreground sm:inline",
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={CONTACT_HREF}
            className="inline-flex items-center justify-center rounded-[var(--radius-pill)] bg-brand px-4 py-3 text-base text-brand-foreground transition-colors hover:bg-brand/90"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
