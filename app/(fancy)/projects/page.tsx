import { Project, allProjects } from "contentlayer/generated";
import * as Icons from "@/components/icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { ProjectStatusBadge } from "@/components/project-status-badge";
import { TechnologyBadge } from "@/components/technology-badge";

export const runtime = "edge";
export default function ProjectsPage() {
  const InfoGridItem = ({
    title,
    link,
    text,
  }: {
    title: string;
    link: string;
    text: string;
  }) => (
    <div className="flex flex-col gap-y-0">
      <h3 className="font-bold">{title}</h3>
      <Link
        href={link}
        className="text-muted-foreground hover:underline break-all"
      >
        {text}
      </Link>
    </div>
  );

  return (
    <div className="container relative max-w-4xl py-6 lg:py-10">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-150px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.Back className="mr-2 h-4 w-4" /> Home
      </Link>
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 pt-8">
        {allProjects.map((project, index) => {
          return (
            <article
              key={index}
              className="relative flex flex-col gap-y-2 bg-white bg-opacity-5 backdrop-blur-sm rounded p-3"
            >
              <div className="flex justify-between w-full gap-x-2 relative">
                <h2 className="text-2xl font-bold">{project.name}</h2>
                <div className="flex items-center">
                  <ProjectStatusBadge status={project.status} />
                </div>
                {project.content && (
                  <Link href={project.slug} className="absolute inset-0">
                    <span className="sr-only">View Project</span>
                  </Link>
                )}
              </div>
              <p className="text-muted-foreground">{project.description}</p>
              {(project.github ||
                project.docs ||
                project.crate ||
                project.npm ||
                project.pypi ||
                project.website) && (
                <div className="grid grid-cols-2 py-1">
                  {project.github && (
                    <InfoGridItem
                      title="GitHub"
                      link={`https://github.com/${project.github}`}
                      text={project.github}
                    />
                  )}
                  {project.docs && (
                    <InfoGridItem
                      title="Docs"
                      link={project.docs}
                      text={project.docs}
                    />
                  )}
                  {project.crate && (
                    <InfoGridItem
                      title="Crates"
                      link={`https://crates.io/crate/${project.crate}`}
                      text={project.crate}
                    />
                  )}
                  {project.npm && (
                    <InfoGridItem
                      title="npm"
                      link={`https://www.npmjs.com/package/${project.npm}`}
                      text={project.npm}
                    />
                  )}
                  {project.pypi && (
                    <InfoGridItem
                      title="PyPI"
                      link={`https://pypi.org/project/${project.pypi}`}
                      text={project.pypi}
                    />
                  )}
                  {project.website && (
                    <InfoGridItem
                      title="Website"
                      link={project.website}
                      text={project.website}
                    />
                  )}
                </div>
              )}
              {project.technologies?.length && (
                <div className="flex flex-wrap gap-2 items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <TechnologyBadge
                        key={technology}
                        // @ts-ignore
                        technology={technology}
                      />
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
