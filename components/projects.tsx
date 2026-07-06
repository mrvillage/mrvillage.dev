"use client";

import { useState } from "react";
import Link from "next/link";
import * as Icons from "@/components/icons";
import { GITHUB_LINK } from "@/lib/consts";
import { sortedProjects, type Project } from "@/lib/projects";

type IconComponent = (props: { className?: string }) => JSX.Element;

function ProjectLink({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: IconComponent;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      aria-label={label}
      className="group/tooltip relative inline-flex items-center gap-1 rounded-md p-1.5 text-neutral-500 transition-colors hover:bg-taupe-800/50 hover:text-taupe-200"
    >
      <Icon className="h-4 w-4" />
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-taupe-800/60 bg-neutral-900 px-2 py-1 text-xs text-neutral-200 opacity-0 shadow-md transition-opacity duration-150 group-hover/tooltip:opacity-100"
      >
        {label}
      </span>
    </Link>
  );
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-1 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
      <div>
        <h3 className="font-bold text-neutral-100">{project.name}</h3>
        <p className="text-sm text-neutral-400">{project.description}</p>
      </div>
      <div className="flex shrink-0 items-center gap-0.5 sm:pt-0.5">
        {project.github && (
          <ProjectLink
            href={`https://github.com/${project.github}`}
            Icon={Icons.GitHub}
            label={`${project.name} on GitHub`}
          />
        )}
        {project.website && (
          <ProjectLink
            href={`https://${project.website}`}
            Icon={Icons.Website}
            label={`${project.name} website`}
          />
        )}
        {project.docs && (
          <ProjectLink
            href={`https://${project.docs}`}
            Icon={Icons.Docs}
            label={`${project.name} docs`}
          />
        )}
        {project.crate && (
          <ProjectLink
            href={`https://crates.io/crates/${project.crate}`}
            Icon={Icons.Crate}
            label={`${project.name} on crates.io`}
          />
        )}
        {project.npm && (
          <ProjectLink
            href={`https://www.npmjs.com/package/${project.npm}`}
            Icon={Icons.Npm}
            label={`${project.name} on npm`}
          />
        )}
        {project.pypi && (
          <ProjectLink
            href={`https://pypi.org/project/${project.pypi}`}
            Icon={Icons.Pypi}
            label={`${project.name} on PyPI`}
          />
        )}
      </div>
    </li>
  );
}

export function Projects() {
  const [expanded, setExpanded] = useState(false);
  const all = sortedProjects();
  const featured = all.filter((project) => project.featured);
  const rest = all.filter((project) => !project.featured);

  return (
    <div>
      <ul className="divide-y divide-taupe-800/30">
        {featured.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
        {expanded &&
          rest.map((project) => (
            <ProjectRow key={project.name} project={project} />
          ))}
      </ul>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="text-sm text-neutral-500 transition-colors hover:text-taupe-200 hover:underline"
        >
          {expanded
            ? "Show fewer projects"
            : `Show all ${all.length} projects \u2193`}
        </button>
        <Link
          href={GITHUB_LINK}
          target="_blank"
          className="text-sm text-neutral-500 transition-colors hover:text-taupe-200 hover:underline"
        >
          More on GitHub &rarr;
        </Link>
      </div>
    </div>
  );
}
