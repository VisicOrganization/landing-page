export const SITE_NAME = "Visic";

export const NAV_LINKS = [
  { label: "Solutions", href: "#solutions" },
  { label: "Team", href: "#team" },
] as const;

export const CONTACT_HREF = "mailto:rehaananjaria@gmail.com";

export const CITYWISE_APP_URL = "https://citywise.app/";

export const FOOTER_LINKS = {
  solutions: { label: "Find Solutions", href: "#solutions" },
  contact: { label: "Contact Us", href: CONTACT_HREF },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/visic",
  },
} as const;
