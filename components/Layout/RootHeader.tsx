import React from "react";
import {
  createStyles,
  Menu,
  Center,
  Header as MantineHeader,
  Group,
  Burger,
  Button,
} from "@mantine/core";
import { IconAbacus, IconChevronDown } from "@tabler/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { UserMenu } from "./UserMenu";
import { useAppContext } from "../../context/AppContext";

export const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  inner: {
    height: HEADER_HEIGHT,
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  iconAnchor: {
    textDecoration: "none",
    color: "inherit",
  },
}));

interface RootHeaderProps {
  links: {
    link: string;
    label: string;
    links?: { link: string; label: string }[];
  }[];
  opened: boolean;
  toggleOpened: (value?: boolean) => void;
}

export function RootHeader({ links, opened, toggleOpened }: RootHeaderProps) {
  const { classes } = useStyles();
  const { isSignedIn } = useAppContext();
  const router = useRouter();
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item onClick={() => router.push(item.link)} key={item.link}>
        {item.label}
      </Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          closeDelay={0}
          offset={0}
          transitionDuration={0}
        >
          <Menu.Target>
            <div>
              <a
                href={link.link}
                className={classes.link}
                onClick={(event) => event.preventDefault()}
              >
                <Center>
                  <span className={classes.linkLabel}>{link.label}</span>
                  <IconChevronDown size={12} />
                </Center>
              </a>
            </div>
          </Menu.Target>
          <Menu.Dropdown>{menuItems}</Menu.Dropdown>
        </Menu>
      );
    }

    return (
      <Link key={link.label} href={link.link}>
        <a className={classes.link}>{link.label}</a>
      </Link>
    );
  });

  return (
    <MantineHeader height={HEADER_HEIGHT} sx={{ borderBottom: 0 }}>
      <Group className={classes.inner} position="apart" px="md">
        <Group>
          <Burger
            opened={opened}
            onClick={() => toggleOpened()}
            className={classes.burger}
            size="sm"
          />
          <Link href="/">
            <a className={classes.iconAnchor}>
              <IconAbacus />
            </a>
          </Link>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <Group>
          {isSignedIn ? (
            <UserMenu />
          ) : (
            <Group>
              <Link href="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link href="/register">
                <Button
                  variant="gradient"
                  gradient={{ from: "indigo", to: "grape" }}
                  component="a"
                >
                  Register
                </Button>
              </Link>
            </Group>
          )}
        </Group>
      </Group>
    </MantineHeader>
  );
}
