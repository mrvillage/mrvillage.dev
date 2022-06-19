import {
  IconApps,
  IconBook,
  IconMessage,
  IconPhone,
  TablerIcon,
} from "@tabler/icons";

export interface Link {
  link: string;
  label: string;
  icon: TablerIcon;
  links?: { label: string; link: string }[];
}

export const mainLinks: Link[] = [
  {
    label: "About",
    link: "/about",
    icon: IconBook,
  },
  {
    label: "Blog",
    link: "/blog",
    icon: IconMessage,
  },
  {
    label: "Contact",
    link: "/contact",
    icon: IconPhone,
  },
  {
    label: "Apps",
    link: "/#1",
    icon: IconApps,
    links: [
      {
        label: "Coords",
        link: "/coords",
      },
      {
        label: "Timer",
        link: "/timer",
      },
      {
        label: "To Do",
        link: "/todo",
      },
    ],
  },
];
