import { allProjects } from "@/.contentlayer/generated";
import { buttonVariants } from "@/components/ui/button";
import { env } from "@/lib/env";
import { absoluteUrl, cn } from "@/lib/utils";
import "@/styles/mdx.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import * as Icons from "@/components/icons";
import Link from "next/link";
import { Mdx } from "@/components/mdx/mdx";
import { ProjectStatusBadge } from "@/components/project-status-badge";
import { TechnologyBadge } from "@/components/technology-badge";

interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getProjectFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug.join("?");
  const project = allProjects.find((p) => p.slugAsParams === slug);
  if (!project) {
    return null;
  }
  return project;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const project = await getProjectFromParams(params);

  if (!project) {
    return {};
  }

  const url = env.NEXT_PUBLIC_APP_URL;

  const ogUrl = new URL(`${url}/api/og`);
  ogUrl.searchParams.set("heading", project.name);
  ogUrl.searchParams.set("type", "Project");

  return {
    metadataBase: new URL(url),
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
      url: absoluteUrl(project.slug),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
      images: [ogUrl.toString()],
    },
  };
}

export const runtime = "edge";
export default async function ProjectPage({ params }: PostPageProps) {
  const project = await getProjectFromParams(params);

  if (!project) {
    return notFound();
  }

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

  let truthyColumns = 0;
  if (project.github) truthyColumns++;
  if (project.docs) truthyColumns++;
  if (project.crate) truthyColumns++;
  if (project.npm) truthyColumns++;
  if (project.pypi) truthyColumns++;
  if (project.website) truthyColumns++;

  return (
    <article
      className={cn(
        "container relative max-w-3xl pt-6 lg:pt-8 pb-2",
        !project.content && "pt-32 lg:pt-36"
      )}
    >
      <Link
        href="/projects"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.Back className="mr-2 h-4 w-4" /> More projects
      </Link>
      <div className="flex justify-between w-full gap-x-4">
        <h1 className="my-2 inline-block font-semibold text-4xl leading-tight lg:text-5xl">
          {project.name}
        </h1>
        <div className="flex items-center scale-110">
          <ProjectStatusBadge status={project.status} />
        </div>
      </div>
      <p className="text-lg text-muted-foreground">{project.description}</p>
      <hr className="my-4" />
      {(project.github ||
        project.docs ||
        project.crate ||
        project.npm ||
        project.pypi ||
        project.website) && (
        <div
          className={cn("grid py-1", {
            "grid-cols-2": truthyColumns >= 2,
            "md:grid-cols-3": truthyColumns >= 3,
            "lg:grid-cols-4": truthyColumns >= 4,
          })}
        >
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
        <div className="flex flex-wrap gap-2 items-center justify-between mt-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              // @ts-ignore
              <TechnologyBadge key={technology} technology={technology} />
            ))}
          </div>
        </div>
      )}
      {project.content && (
        <>
          <hr className="my-4" />
          <Mdx code={project.body.code} path={project._raw.flattenedPath} />
        </>
      )}
    </article>
  );
}
