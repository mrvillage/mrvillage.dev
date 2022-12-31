import { Grid } from "@mantine/core";
import {
  IconBow,
  IconBrowser,
  IconForbid,
  IconLock,
  IconRobot,
  IconScript,
  IconSend,
  IconTerminal2,
  IconTimelineEventExclamation,
  IconToolsKitchen,
  IconToolsKitchen2,
} from "@tabler/icons";
import type { ProjectCardData } from "~/components/ProjectCard";
import ProjectCard from "~/components/ProjectCard";

export default function Projects() {
  return (
    <Grid m={0}>
      {projects.map((project) => (
        <Grid.Col md={4} xl={3} xs={12} p="md" key={project.name}>
          <ProjectCard {...project} />
        </Grid.Col>
      ))}
    </Grid>
  );
}

const projects: ProjectCardData[] = [
  {
    name: "Rift",
    Icon: IconRobot,
    description:
      "A Discord bot for Politics and War that provides a wide variety of tools for helping players manage their nations and alliances. The bot is currently being rewritten as a community project.",
    status: "in progress",
    technologies: ["rust", "python", "discord api"],
    github: "politicsandwar-community/rift",
    website: "rift.mrvillage.dev",
    docs: "rift.mrvillage.dev/docs",
  },
  {
    name: "pnwkit",
    Icon: IconToolsKitchen,
    description:
      "A set of libraries built no top of a core Rust library for interacting with the Politics and War API.",
    status: "backburner",
    technologies: ["rust", "python", "typescript"],
    github: "mrvillage/pnwkit",
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
];
