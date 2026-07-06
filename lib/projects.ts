// Static project data. This intentionally avoids contentlayer/MDX — projects
// are simple enough to describe as plain data, so no build-time content
// pipeline is needed.
export interface Project {
  name: string;
  description: string;
  github?: string;
  website?: string;
  docs?: string;
  crate?: string;
  npm?: string;
  pypi?: string;
  /** Higher shows first. */
  precedence: number;
  /** Shown on the homepage; the rest are linked to via GitHub. */
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "Kanri",
    description:
      "An all-in-one management platform for martial arts schools. Designed to help with membership management, billing, attendance tracking, belt tracking, scheduling, and more.",
    website: "kanrimemberships.com",
    precedence: 1050,
    featured: true,
  },
  {
    name: "lmutils",
    description:
      "Utilities for linear regression-based statistical computation, particularly in the same vein as methods like MonsterLM and RARity (Rust core).",
    github: "GMELab/lmutils",
    docs: "docs.rs/lmutils",
    crate: "lmutils",
    precedence: 1000,
    featured: true,
  },
  {
    name: "lmutils.r",
    description:
      "Utilities for linear regression-based statistical computation, particularly in the same vein as methods like MonsterLM and RARity (R wrapper).",
    github: "GMELab/lmutils.r",
    precedence: 1000,
  },
  {
    name: "bay-lang",
    description:
      "A programming language focused on ergonomic memory and logical safety, heavily inspired by languages like Rust, Go, Haskell, OCaml, and Swift.",
    github: "bay-lang/bay",
    precedence: 1000,
    featured: true,
  },
  {
    name: "mrvillage.dev",
    description: "My personal website.",
    github: "mrvillage/mrvillage.dev",
    website: "mrvillage.dev",
    precedence: 1000,
  },
  {
    name: "Politics & War",
    description:
      "A browser-based online game where players create and run their nations and group together to form alliances. I previously worked as a developer and the development manager for the game.",
    website: "politicsandwar.com",
    precedence: 1000,
  },
  {
    name: "v19",
    description:
      "My company, providing authentication, password management, and many more products.",
    website: "v19.io",
    precedence: 900,
  },
  {
    name: "Rift",
    description:
      "A Discord bot for Politics & War that provides a wide variety of tools that help players manage their nations and alliances. The first major project I ever started, and what taught me to code.",
    github: "mrvillage/rift",
    docs: "rift.mrvillage.dev/docs",
    precedence: 900,
    featured: true,
  },
  {
    name: "mrvillage-cli",
    description: "A Python library for interacting with the Politics & War API.",
    github: "mrvillage/mrvillage-cli",
    precedence: 800,
  },
  {
    name: "dfa-regex",
    description:
      "Create DFAs corresponding to regular expressions for matching strings.",
    github: "mrvillage/dfa-regex",
    docs: "docs.rs/dfa-regex",
    crate: "dfa-regex",
    precedence: 800,
  },
  {
    name: "rift-lang",
    description: "A basic expression language intended for use in Rift.",
    github: "mrvillage/rift-lang",
    precedence: 800,
  },
  {
    name: "plots.r",
    description: "Generate beautiful forest plots with ease.",
    github: "GMELab/plots.r",
    precedence: 800,
  },
  {
    name: "civilian6",
    description: "Created the homepage for Civilian6.",
    website: "civilian6.com",
    precedence: 600,
  },
  {
    name: "pnwkit-py",
    description: "A Python library for interacting with the Politics & War API.",
    docs: "docs.pnwkit-py.mrvillage.dev",
    github: "mrvillage/pnwkit-py",
    pypi: "pnwkit-py",
    precedence: 600,
  },
  {
    name: "base32",
    description: "A library for efficient base32 encoding and decoding.",
    github: "v19-io/base32",
    npm: "@v19/base32",
    precedence: 700,
  },
  {
    name: "bitstring",
    description: "A library for performing basic operations on bitstrings.",
    github: "v19-io/bitstring",
    npm: "@v19/bitstring",
    precedence: 700,
  },
  {
    name: "casus",
    description: "A library containing some useful async primitives.",
    github: "mrvillage/casus",
    docs: "docs.rs/casus",
    crate: "casus",
    precedence: 700,
  },
  {
    name: "ceiling",
    description: "A library for creating and managing rate limiting rules.",
    github: "mrvillage/ceiling",
    docs: "docs.rs/ceiling",
    crate: "ceiling",
    precedence: 700,
  },
  {
    name: "extractors",
    description:
      "A lightweight library for extracting an arbitrary number of function parameters from a provider.",
    github: "mrvillage/extractors",
    docs: "docs.rs/extractors",
    crate: "extractors",
    precedence: 700,
  },
  {
    name: "macros",
    description: "A lightweight library for parsing and writing Rust macros.",
    github: "mrvillage/macros",
    docs: "docs.rs/macros-core",
    crate: "macros-core",
    precedence: 700,
  },
  {
    name: "sanctum",
    description: "A simple and extendable authentication library for Rust.",
    github: "mrvillage/sanctum",
    docs: "docs.rs/sanctum",
    crate: "sanctum",
    precedence: 700,
  },
  {
    name: "sero",
    description: "A library for managing a shared and reusable set of locks.",
    github: "mrvillage/sero",
    docs: "docs.rs/sero",
    crate: "sero",
    precedence: 700,
  },
  {
    name: "type-store",
    description: "A lightweight type map implementation.",
    github: "mrvillage/type-store",
    docs: "docs.rs/type-store",
    crate: "type-store",
    precedence: 700,
  },
  {
    name: "aris",
    description:
      "A messaging protocol intended for WebSockets as well as a Rust reference implementation.",
    github: "mrvillage/aris",
    precedence: 300,
  },
  {
    name: "pnwkit",
    description:
      "A set of libraries built on top of a core Rust library for interacting with the Politics & War API.",
    github: "mrvillage/pnwkit",
    crate: "pnwkit-rs",
    precedence: 300,
  },
  {
    name: "quarrel",
    description: "A library for interacting with the Discord API.",
    github: "mrvillage/quarrel",
    pypi: "quarrel",
    precedence: 300,
  },
];

export function sortedProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => {
    if (a.precedence !== b.precedence) {
      return b.precedence - a.precedence;
    }
    return a.name.localeCompare(b.name);
  });
}

export function featuredProjects(): Project[] {
  return sortedProjects().filter((project) => project.featured);
}
