import type {
  MantineGradient,
  MantineTheme,
  DefaultMantineColor,
} from "@mantine/core";
import { Stack } from "@mantine/core";
import { Anchor } from "@mantine/core";
import { Grid } from "@mantine/core";
import { Paper } from "@mantine/core";
import { useMantineTheme } from "@mantine/core";
import {
  Badge,
  Card,
  createStyles,
  Group,
  Text,
  ThemeIcon,
  Tooltip,
} from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";
import { IconBrandGraphql } from "@tabler/icons";
import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandStripe,
  IconBrandJavascript,
  IconBrandDiscord,
  IconBrandLaravel,
  IconBrandMysql,
  IconBrandPhp,
  IconBrandDocker,
  IconCloud,
  IconBrandTailwind,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandMantine,
  IconDatabase,
  IconBrandPython,
  IconBrandReact,
} from "@tabler/icons";

type Status =
  | "completed"
  | "in progress"
  | "dead"
  | "planned"
  | "backburner"
  | "participating";

const useStyles = createStyles(
  (theme, { gradient }: { gradient: MantineGradient | undefined }) => ({
    card: {
      position: "relative",
      cursor: "unset",
      overflow: "hidden",
      transition: "transform 150ms ease, box-shadow 100ms ease",
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.lg,
      paddingLeft: theme.spacing.xl * 2,
      paddingRight: theme.spacing.xl,
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.7)",

      "&:hover": {
        boxShadow: theme.shadows.xl,
      },

      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        width: 6,
        backgroundImage: gradient
          ? theme.fn.linearGradient(
              gradient.deg || 0,
              gradient.from,
              gradient.to
            )
          : undefined,
      },
    },

    section: {
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[3]
      }`,
      paddingTop: theme.spacing.sm,
      paddingBottom: theme.spacing.sm,
    },

    label: {
      textTransform: "uppercase",
      fontSize: theme.fontSizes.xs,
      fontWeight: 700,
    },
  })
);

export interface ProjectCardData {
  name: string;
  Icon: TablerIcon;
  status: Status | Status[];
  description: string;
  github?: string | string[];
  docs?: string | string[];
  crate?: string | string[];
  pypi?: string | string[];
  website?: string | string[];
  technologies?: Technology[];
  closed_source?: boolean;
}

export default function ProjectCard({
  name,
  Icon,
  status,
  description,
  github,
  docs,
  crate,
  pypi,
  website,
  technologies,
  closed_source,
}: ProjectCardData) {
  const theme = useMantineTheme();

  const { classes } = useStyles({ gradient: statusGradient(theme, status) });

  const LabelLink = ({
    label,
    href,
    text,
  }: {
    label: string;
    href: string[];
    text?: string[];
  }) => {
    return (
      <Grid.Col span={6} style={{ overflow: "hidden" }}>
        <Stack
          spacing={0}
          style={{
            overflow: "hidden",
          }}
        >
          <Text className={classes.label}>{label}</Text>
          {href.map((href, i) => (
            <div key={href} style={{ display: "inline-flex" }}>
              <Anchor
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                }}
              >
                {(text ? text[i] : false) || href.replace("https://", "")}
              </Anchor>
            </div>
          ))}
        </Stack>
      </Grid.Col>
    );
  };

  const mapStringOrArray = (
    value: string | string[],
    fn: (value: string) => string
  ): string[] => {
    if (typeof value === "object") {
      return value.map(fn);
    } else {
      return [fn(value)];
    }
  };

  const defined = (
    value: string | string[] | undefined
  ): value is string | string[] => {
    return typeof value === "object" ? value.length > 0 : !!value;
  };

  return (
    <Paper radius="md" className={classes.card}>
      <Card.Section className={classes.section}>
        <Group position="apart">
          <ThemeIcon
            size="xl"
            radius="md"
            variant="gradient"
            gradient={statusGradient(theme, status)}
          >
            <Icon size={28} stroke={1.5} />
          </ThemeIcon>
          <Group>
            {closed_source && (
              <TooltipBadge
                color="red"
                text="Closed Source"
                label="This project is closed source"
              />
            )}
            {typeof status == "object" ? (
              status.map((status) => (
                <StatusBadge status={status} key={status} />
              ))
            ) : (
              <StatusBadge status={status} />
            )}
          </Group>
        </Group>
        <Text size="lg" weight={500} mt="md">
          {name}
        </Text>
      </Card.Section>
      <Card.Section className={classes.section}>
        <Grid grow gutter="sm">
          {defined(github) && (
            <LabelLink
              label="GitHub"
              href={mapStringOrArray(github, (v) => `https://github.com/${v}`)}
            />
          )}
          {defined(website) && (
            <LabelLink
              label="Website"
              href={mapStringOrArray(website, (v) => `https://${v}`)}
            />
          )}
          {defined(docs) && (
            <LabelLink
              label="Docs"
              href={mapStringOrArray(docs, (v) => `https://${v}`)}
            />
          )}
          {defined(crate) && (
            <LabelLink
              label="Crate"
              href={mapStringOrArray(
                crate,
                (v) => `https://crates.io/crate/${v}`
              )}
              text={mapStringOrArray(crate, (v) => v)}
            />
          )}
          {defined(pypi) && (
            <LabelLink
              label="PyPI"
              href={mapStringOrArray(
                pypi,
                (v) => `https://pypi.org/project/${v}`
              )}
              text={mapStringOrArray(pypi, (v) => v)}
            />
          )}
        </Grid>
      </Card.Section>
      <Card.Section className={classes.section}>
        {technologies && technologies.length > 0 && (
          <Stack spacing={0}>
            <Text className={classes.label}>Technologies Used</Text>
            <Group mt="sm" spacing={7}>
              {technologies.map((technology) => (
                <TechnologyBadge technology={technology} key={technology} />
              ))}
            </Group>
          </Stack>
        )}
      </Card.Section>
      <Card.Section>
        <Text size="sm" mt="sm" color="dimmed">
          {description}
        </Text>
      </Card.Section>
    </Paper>
  );
}

function TooltipBadge({
  color,
  text,
  label,
}: {
  color: DefaultMantineColor;
  text: React.ReactNode;
  label: string;
}) {
  return (
    <Tooltip
      label={label}
      multiline
      width={250}
      events={{ hover: true, touch: true, focus: true }}
    >
      <Badge color={color} size="sm">
        {text}
      </Badge>
    </Tooltip>
  );
}
function statusGradient(
  theme: MantineTheme,
  status: Status | Status[]
): MantineGradient | undefined {
  if (typeof status === "object") {
    status = status[0];
  }
  if (status === "completed") {
    return { from: theme.colors.green[3], to: theme.colors.green[9] };
  } else if (status === "in progress") {
    return {
      from: theme.colors.orange[3],
      to: theme.colors.orange[9],
    };
  } else if (status === "dead") {
    return {
      from: theme.colors.red[3],
      to: theme.colors.red[9],
    };
  } else if (status === "planned") {
    return {
      from: theme.colors.grape[3],
      to: theme.colors.grape[9],
    };
  } else if (status === "backburner") {
    return {
      from: theme.colors.yellow[3],
      to: theme.colors.yellow[9],
    };
  } else if (status === "participating") {
    return {
      from: theme.colors.blue[3],
      to: theme.colors.blue[9],
    };
  }
}

function StatusBadge({ status }: { status: Status }) {
  if (status === "completed") {
    return (
      <TooltipBadge
        color="green"
        text="Completed"
        label="This project currently finished"
      />
    );
  } else if (status === "in progress") {
    return (
      <TooltipBadge
        color="orange"
        text="In Progress"
        label="This project is currently under development"
      />
    );
  } else if (status === "dead") {
    return (
      <TooltipBadge
        color="red"
        text="Dead"
        label="This project is unfinished but not currently under active development"
      />
    );
  } else if (status === "planned") {
    return (
      <TooltipBadge
        color="grape"
        text="Planned"
        label="This project is not being actively worked on but is planned for the future"
      />
    );
  } else if (status === "backburner") {
    return (
      <TooltipBadge
        color="yellow"
        text="Backburner"
        label="This project is partially completed and active development will resume in the future"
      />
    );
  } else if (status === "participating") {
    return (
      <TooltipBadge
        color="blue"
        text="Participating"
        label="This project was not created by me but I am actively contributing to it"
      />
    );
  } else {
    return <></>;
  }
}

interface TechnologyInterface {
  color: DefaultMantineColor;
  text: string;
  Icon?: TablerIcon;
  label: string;
}

function typedBadges<T extends Record<string, TechnologyInterface>>(
  o: T
): Record<keyof T, TechnologyInterface> {
  return o;
}

const TECHNOLOGY_BADGES = typedBadges({
  rust: {
    color: "orange",
    text: "Rust",
    label: "Uses the Rust programming language",
  },
  react: {
    color: "blue",
    text: "React",
    Icon: IconBrandReact,
    label: "Uses the React JavaScript framework",
  },
  python: {
    color: "blue",
    text: "Python",
    Icon: IconBrandPython,
    label: "Uses the Python programming language",
  },
  postgres: {
    color: "blue",
    text: "Postgres",
    Icon: IconDatabase,
    label: "Uses the Postgres database",
  },
  mysql: {
    color: "blue",
    text: "MySQL",
    Icon: IconBrandMysql,
    label: "Uses the MySQL database",
  },
  pocketbase: {
    color: "blue",
    text: "Pocketbase",
    label: "Uses the Pocketbase backend",
  },
  mantine: {
    color: "blue",
    text: "Mantine",
    Icon: IconBrandMantine,
    label: "Uses the Mantine UI library",
  },
  typescript: {
    color: "blue",
    text: "TypeScript",
    Icon: IconBrandTypescript,
    label: "Uses the TypeScript programming language",
  },
  javascript: {
    color: "yellow",
    text: "JavaScript",
    Icon: IconBrandJavascript,
    label: "Uses the JavaScript programming language",
  },
  html: {
    color: "orange",
    text: "HTML",
    Icon: IconBrandHtml5,
    label: "Uses the HTML markup language",
  },
  css: {
    color: "blue",
    text: "CSS",
    Icon: IconBrandCss3,
    label: "Uses the CSS styling language",
  },
  nextjs: {
    color: "white",
    text: "Next.js",
    Icon: IconBrandNextjs,
    label: "Uses the Next.js framework",
  },
  remix: {
    color: "yellow",
    text: "Remix",
    label: "Uses the Remix framework",
  },
  tailwind: {
    color: "blue",
    text: "Tailwind",
    Icon: IconBrandTailwind,
    label: "Uses the Tailwind CSS framework",
  },
  docker: {
    color: "blue",
    text: "Docker",
    Icon: IconBrandDocker,
    label: "Uses the Docker containerization platform",
  },
  cloudflare: {
    color: "orange",
    text: "Cloudflare",
    Icon: IconCloud,
    label: "Uses the Cloudflare platform",
  },
  "cloudflare workers": {
    color: "orange",
    text: "Cloudflare Workers",
    Icon: IconCloud,
    label: "Uses the Cloudflare Workers platform",
  },
  "cloudflare pages": {
    color: "orange",
    text: "Cloudflare Pages",
    Icon: IconCloud,
    label: "Uses the Cloudflare Pages platform",
  },
  php: {
    color: "indigo",
    text: "PHP",
    Icon: IconBrandPhp,
    label: "Uses the PHP programming language",
  },
  laravel: {
    color: "red",
    text: "Laravel",
    Icon: IconBrandLaravel,
    label: "Uses the Laravel framework",
  },
  "discord api": {
    color: "blue",
    text: "Discord API",
    Icon: IconBrandDiscord,
    label: "Uses the Discord API",
  },
  stripe: {
    color: "indigo",
    text: "Stripe",
    Icon: IconBrandStripe,
    label: "Uses the Stripe platform",
  },
  graphql: {
    color: "indigo",
    text: "GraphQL",
    Icon: IconBrandGraphql,
    label: "Uses GraphQL",
  },
});

export type Technology = keyof typeof TECHNOLOGY_BADGES;

function TechnologyBadge({ technology }: { technology: Technology }) {
  const IconWithText = ({ Icon, text }: { Icon: TablerIcon; text: string }) => (
    <Group spacing={3}>
      <Icon size={16} stroke={1.5} />
      {text}
    </Group>
  );
  const badge = TECHNOLOGY_BADGES[technology];
  if (badge) {
    return (
      <TooltipBadge
        color={badge.color}
        text={
          badge.Icon ? (
            <IconWithText Icon={badge.Icon} text={badge.text} />
          ) : (
            badge.text
          )
        }
        label={badge.label}
      />
    );
  }
  return <></>;
}
