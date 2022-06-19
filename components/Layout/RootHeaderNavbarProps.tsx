import React, { useEffect } from "react";
import {
  Navbar as MantineNavbar,
  ScrollArea,
  createStyles,
  SegmentedControl,
  useMantineColorScheme,
  Center,
  Box,
} from "@mantine/core";
import { LinksGroup } from "./LinksGroup";
import { Link } from "./mainLinks";
import { useScrollLock } from "@mantine/hooks";
import { IconMoon, IconSun } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    // marginLeft: -theme.spacing.md,
    // marginRight: -theme.spacing.md,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    flexGrow: 1,
  },

  footer: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  themeToggle: {
    paddingTop: theme.spacing.sm,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}));

interface RootHeaderNavbarProps {
  links: Link[];
  opened: boolean;
  toggleOpened: () => void;
}

export function RootHeaderNavbar({
  links,
  opened,
  toggleOpened,
}: RootHeaderNavbarProps) {
  const { classes } = useStyles();
  const items = links.map((item) => (
    <LinksGroup {...item} toggleOpened={toggleOpened} key={item.label} />
  ));
  const [, setScrollLocked] = useScrollLock();
  useEffect(() => {
    setScrollLocked(opened);
  }, [opened, setScrollLocked]);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <MantineNavbar
      hidden={!opened}
      hiddenBreakpoint="md"
      p="xs"
      className={classes.navbar}
    >
      <MantineNavbar.Section
        grow
        className={classes.links}
        component={ScrollArea}
      >
        <div className={classes.linksInner}>{items}</div>
      </MantineNavbar.Section>
      <MantineNavbar.Section>
        <div className={classes.themeToggle}>
          <SegmentedControl
            fullWidth
            data={[
              {
                value: "dark",
                label: (
                  <Center>
                    <IconMoon size={16} />
                    <Box ml={10}>Dark</Box>
                  </Center>
                ),
              },
              {
                value: "light",
                label: (
                  <Center>
                    <IconSun size={16} />
                    <Box ml={10}>Light</Box>
                  </Center>
                ),
              },
            ]}
            value={colorScheme}
            // @ts-ignore
            onChange={toggleColorScheme}
          />
        </div>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}
