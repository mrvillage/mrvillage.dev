import type { MantineColor } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";
import { Group } from "@mantine/core";
import { Card } from "@mantine/core";
import { Text } from "@mantine/core";
import { UnstyledButton } from "@mantine/core";
import { createStyles } from "@mantine/core";
import { Link } from "@remix-run/react";
import type { TablerIcon } from "@tabler/icons";
import { IconAerialLift } from "@tabler/icons";

interface ActionData {
  title: string;
  Icon: TablerIcon;
  color: MantineColor;
  to: string;
  onClick?: () => void;
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },

  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    transition: "box-shadow 150ms ease, transform 100ms ease",

    "&:hover": {
      boxShadow: theme.shadows.md,
      transform: "translateY(-2px)",
    },
  },
}));

export function ActionItem({ title, Icon, color, to, onClick }: ActionData) {
  const { classes, theme } = useStyles();
  return (
    <UnstyledButton
      className={classes.item}
      component={Link}
      to={to}
      onClick={onClick}
    >
      <Icon color={theme.colors[color][6]} size={32} />
      <Text
        size="sm"
        mt={7}
        color="dimmed"
        sx={{ fontFamily: `Greycliff CF, ${theme.fontFamily}` }}
      >
        {title}
      </Text>
    </UnstyledButton>
  );
}

export default function ActionsCard({ actions }: { actions: ActionData[] }) {
  const { classes, theme } = useStyles();
  const items = actions.map((action) => (
    <ActionItem key={action.title} {...action} />
  ));
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Group position="apart">
        <Text color="dimmed" className={classes.title}>
          Actions
        </Text>
        <IconAerialLift color={theme.colors.indigo[6]} size={24} />
      </Group>
      <SimpleGrid cols={3} mt="md">
        {items}
      </SimpleGrid>
    </Card>
  );
}
