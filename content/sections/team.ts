import { IMAGE_PATHS } from "@/lib/constants/images";

/** Update `linkedinHref` if a profile URL differs from the default slug pattern. */
export const TEAM_CONTENT = {
  title: "Our Team",
  description:
    "Based in SoCal, we're a group of USC students who believe transparency drives higher civic participation and voter turnout, fostering trust between residents and local government.",
  members: [
    {
      name: "Rehaan Anjaria",
      role: "Founder",
      image: "/images/rehaan.svg",
      linkedinHref: "https://www.linkedin.com/in/rehaananjaria/",
    },
    {
      name: "Halas Graden",
      role: "Founder",
      image: "/images/halas.svg",
      linkedinHref: "https://www.linkedin.com/in/halas-graden-646013303/",
    },
    {
      name: "Om Chachad",
      role: "iOS Developer",
      image: "/images/om.svg",
      linkedinHref: "https://www.linkedin.com/in/omchachad/",
    },
    {
      name: "Sajid Shaikh",
      role: "Back-End Developer",
      image: "/images/sajid.svg",
      linkedinHref: "https://www.linkedin.com/in/connectwithsajid/",
    },
    {
      name: "Rohan George",
      role: "Finance",
      image: "/images/rohan.svg",
      linkedinHref: "https://www.linkedin.com/in/rohangeo21/",
    },
    {
      name: "Anika Nedunuri",
      role: "Research",
      image: "/images/anika.svg",
      linkedinHref: "https://www.linkedin.com/in/anika-nedunuri-964a77262/",
    },
    {
      name: "Meghna Chellapilla",
      role: "Research",
      image: "/images/meghna.svg",
      linkedinHref: "https://www.linkedin.com/in/meghna-chellapilla/",
    },
  ],
  linkedinIcon: IMAGE_PATHS.linkedinLogo,
} as const;
