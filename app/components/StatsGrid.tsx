import type { MantineColor } from "@mantine/core";
import { Box, Paper } from "@mantine/core";
import { SimpleGrid } from "@mantine/core";
import { Group } from "@mantine/core";
import { Text } from "@mantine/core";
import { createStyles } from "@mantine/core";
import type { TablerIcon } from "@tabler/icons";

interface StatData {
  title: string;
  Icon: TablerIcon;
  value: string;
  color: MantineColor;
}

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  value: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export function StatsCard({ title, Icon, value, color }: StatData) {
  const { classes, theme } = useStyles();
  return (
    <Paper withBorder p="md" radius="md" className={classes.card}>
      <Group position="apart">
        <Text color="dimmed" className={classes.title}>
          {title}
        </Text>
        <Icon
          className={classes.icon}
          color={theme.colors[color][6]}
          size={22}
          stroke={1.5}
        />
      </Group>
      <Box mt={25}>
        <Text className={classes.value}>{value}</Text>
      </Box>
    </Paper>
  );
}

export default function StatsGrid({ stats }: { stats: StatData[] }) {
  const items = stats.map((stat) => <StatsCard key={stat.title} {...stat} />);
  return <SimpleGrid cols={2}>{items}</SimpleGrid>;
}
