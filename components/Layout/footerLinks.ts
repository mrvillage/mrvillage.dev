export const footerLinks: {
  title: string;
  links: { link: string; label: string }[];
}[] = [
  {
    title: "Apps",
    links: [
      {
        link: "/coords",
        label: "Coords",
      },
      {
        link: "/timer",
        label: "Timer",
      },
      {
        link: "/todo",
        label: "To Do",
      },
      {
        link: "/dnd",
        label: "D&D",
      },
    ],
  },
  {
    title: "Legal",
    links: [
      {
        link: "/terms",
        label: "Terms of Service",
      },
      {
        link: "/privacy",
        label: "Privacy Policy",
      },
    ],
  },
  {
    title: "Me",
    links: [
      {
        link: "/about",
        label: "About",
      },
      {
        link: "/blog",
        label: "Blog",
      },
      {
        link: "/contact",
        label: "Contact",
      },
    ],
  },
];
