import { Grid, Transition } from "@mantine/core";
import {
  IconApiApp,
  IconBow,
  IconBrowser,
  IconCalendarStats,
  IconForbid,
  IconKarate,
  IconLock,
  IconRipple,
  IconRobot,
  IconScript,
  IconSend,
  IconTerminal2,
  IconTimelineEventExclamation,
  IconToolsKitchen,
  IconToolsKitchen2,
  IconWorld,
} from "@tabler/icons";
import { useEffect, useState } from "react";
import type { ProjectCardData } from "~/components/ProjectCard";
import ProjectCard from "~/components/ProjectCard";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <Grid m={0}>
      {projects.map((project, i) => (
        <Transition
          key={project.name}
          transition="pop-top-left"
          duration={1000}
          timingFunction="ease"
          mounted={mounted}
        >
          {(styles) => (
            <Grid.Col
              md={4}
              xl={3}
              xs={12}
              p="md"
              style={{ ...styles, transitionDelay: `${250 * i}ms` }}
            >
              <ProjectCard {...project} />
            </Grid.Col>
          )}
        </Transition>
      ))}
    </Grid>
  );
}

const projects: ProjectCardData[] = [
  {
    name: "TeamCBBA",
    Icon: IconKarate,
    description:
      "An all-in-one membership management, billing, attendance tracking, and website for my karate school.",
    status: "in progress",
    technologies: [
      "react",
      "typescript",
      "tailwind",
      "stripe",
      "nextjs",
      "cloudflare",
      "cloudflare pages",
    ],
    website: "teamcbba.pages.dev",
    closed_source: true,
  },
  {
    name: "bay-lang",
    Icon: IconRipple,
    description: "A Rust-like programming language with a focus on memory and logical safety. I currently have some basic parsing and am planning various language features and learning associated topics.",
    status: "in progress",
    technologies: ["rust"],
    github: "bay-lang/bay",
  },
  {
    name: "Rift",
    Icon: IconRobot,
    description:
      "A Discord bot for Politics and War that provides a wide variety of tools for helping players manage their nations and alliances. The bot is currently being rewritten as a community project.",
    status: "dead",
    technologies: ["rust", "python", "discord api"],
    github: ["politicsandwar-community/rift", "mrvillage/rift"],
    website: "rift.mrvillage.dev",
    docs: "rift.mrvillage.dev/docs",
  },
  {
    name: "Politics and War",
    Icon: IconWorld,
    description:
      "A browser-based online game where players create and run their nations and group together to form alliances. I am currently employed as a developer for the game",
    status: "participating",
    technologies: ["php", "javascript", "css", "html", "mysql"],
    website: "politicsandwar.com",
    closed_source: true,
  },
  {
    name: "Politics and War API",
    Icon: IconApiApp,
    description:
      "A GraphQL API for interacting with Politics and War. The API is currently being rewritten in Rust.",
    status: "participating",
    technologies: ["php", "graphql", "mysql", "rust"],
    website: "api.politicsandwar.com/graphql-playground",
    closed_source: true,
  },
  {
    name: "pnwkit",
    Icon: IconToolsKitchen,
    description:
      "A set of libraries built no top of a core Rust library for interacting with the Politics and War API.",
    status: "backburner",
    technologies: ["rust", "python", "typescript"],
    github: "mrvillage/pnwkit",
    crate: "pnwkit-rs",
  },
  {
    name: "pnwkit-py",
    Icon: IconToolsKitchen2,
    description: "The original Python-only version of pnwkit.",
    status: "completed",
    technologies: ["python"],
    github: "mrvillage/pnwkit-py",
    pypi: "pnwkit-py",
  },
  {
    name: "mrvillage.dev",
    Icon: IconBrowser,
    description:
      "My personal website featuring a portfolio, resume, and personal short links and file storage functionality. As a matter of fact you're on it right now 😉.",
    status: "in progress",
    technologies: [
      "react",
      "mantine",
      "pocketbase",
      "remix",
      "cloudflare pages",
      "typescript",
      "css",
    ],
    github: "mrvillage/mrvillage.dev",
    website: "mrvillage.dev",
  },
  {
    name: "mrvillage-cli",
    Icon: IconTerminal2,
    description: "A small personal CLI tool to automate some repetitive tasks",
    status: "completed",
    technologies: ["rust"],
    github: "mrvillage/mrvillage-cli",
  },
  {
    name: "aris",
    Icon: IconSend,
    description:
      "A messaging protocol primarily intended for WebSockets and a reference implementation.",
    status: "in progress",
    technologies: ["rust"],
    github: "mrvillage/aris",
    // docs: "docs.rs/aris",
    // crate: "aris",
  },
  {
    name: "rift-lang",
    Icon: IconScript,
    description:
      "A basic expression language primarily for use in Rift based on Common Expression Language (CEL) and inspired by Rust.",
    status: "completed",
    technologies: ["rust"],
    github: "mrvillage/rift-lang",
  },
  {
    name: "sero",
    Icon: IconLock,
    description: "A library for managing a shared set of locks.",
    status: "completed",
    technologies: ["rust"],
    github: "mrvillage/sero",
    docs: "docs.rs/sero",
    crate: "sero",
  },
  {
    name: "ceiling",
    Icon: IconForbid,
    description: "A library for creating and managing rate limiting rules.",
    status: "completed",
    technologies: ["rust"],
    github: "mrvillage/ceiling",
    docs: "docs.rs/ceiling",
    crate: "ceiling",
  },
  {
    name: "casus",
    Icon: IconTimelineEventExclamation,
    description: "A library with a handful of async primitives.",
    status: "completed",
    technologies: ["rust"],
    github: "mrvillage/casus",
    docs: "docs.rs/casus",
    crate: "casus",
  },
  {
    name: "quarrel",
    Icon: IconBow,
    description: "A library for interacting with the Discord API.",
    status: "dead",
    technologies: ["python", "discord api"],
    github: "mrvillage/quarrel",
    pypi: "quarrel",
  },
  {
    name: "VC Coverages",
    Icon: IconCalendarStats,
    description:
      "A basic web application for managing teacher coverages for my high school.",
    status: "completed",
    technologies: ["react", "typescript", "css", "mantine", "firebase"],
    website: "vc-coverages.mrvillage.dev",
    closed_source: true,
  },
];
