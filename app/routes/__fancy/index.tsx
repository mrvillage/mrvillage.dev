import { ActionIcon, Box, Center, createStyles, Group } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Link, useSearchParams } from "@remix-run/react";
import type { TablerIcon } from "@tabler/icons";
import { IconInfoCircle } from "@tabler/icons";
import {
  IconAlertCircle,
  IconBackhoe,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHome,
  IconLogin,
  IconLogout,
  IconTie,
} from "@tabler/icons";
import { useEffect, useMemo, useState } from "react";
import Typing from "~/components/Typing";
import { useClient, useIsAdmin, useLoggedIn } from "~/hooks/client";

const useStyles = createStyles((theme) => ({
  wrapper: {
    overflow: "hidden",
  },

  group: {
    marginTop: 50,
    [theme.fn.smallerThan("sm")]: {
      marginTop: 40,
    },
  },

  box: {
    width: "100%",
    overflow: "hidden",
  },

  center: {
    marginTop: 50,
    [theme.fn.smallerThan("sm")]: {
      marginTop: 40,
    },
  },
}));

interface MainLink {
  Icon: TablerIcon;
  to: string;
  onClick?: () => void;
}

export default function Index() {
  const { classes, theme } = useStyles();
  const [shown, setShown] = useState(false);
  const [pointerEvents, setPointerEvents] = useState<"none" | undefined>(
    "none"
  );
  const loggedIn = useLoggedIn();
  const isAdmin = useIsAdmin();
  const client = useClient();
  useEffect(() => setShown(true), []);
  useEffect(() => {
    setTimeout(() => setPointerEvents(undefined), 3500);
  }, []);

  const links = useMemo(() => {
    const links: MainLink[] = [
      {
        Icon: IconBrandGithub,
        to: "/s/github",
      },
      {
        Icon: IconBrandLinkedin,
        to: "/s/linkedin",
      },
      {
        Icon: IconTie,
        to: "/resume",
      },
      {
        Icon: IconBackhoe,
        to: "/projects",
      },
    ];
    if (loggedIn) {
      if (isAdmin) {
        links.push({
          Icon: IconHome,
          to: "/admin",
        });
      } else {
        links.push({
          Icon: IconHome,
          to: "/home",
        });
      }
    }
    if (loggedIn) {
      links.push({
        Icon: IconLogout,
        to: "#",
        onClick: () => {
          client.authStore.clear();
          showNotification({
            title: "Logged out",
            message: "You have been logged out",
            color: theme.colors.blue[6],
            icon: <IconInfoCircle size={18} />,
          });
        },
      });
    } else {
      links.push({
        Icon: IconLogin,
        to: "/login",
      });
    }
    return links;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn, isAdmin]);
  const icons = links.map(({ Icon, to, onClick }, index) => (
    <ActionIcon
      key={index}
      size="lg"
      variant="transparent"
      sx={{
        pointerEvents,
        transitionProperty: "opacity",
        transitionDuration: "0.5s",
        transitionTimingFunction: "ease",
        transitionDelay: `${3500 + 100 * index}ms`,
        opacity: shown ? 1 : 0,
      }}
      component={Link}
      to={to}
      onClick={onClick}
    >
      <Icon size={50} color={theme.colors.gray[0]} />
    </ActionIcon>
  ));

  const [params] = useSearchParams();
  useEffect(() => {
    const e = params.get("e");
    switch (e) {
      case "short-link-not-found":
        showNotification({
          title: "That short link doesn't exist!",
          message: (
            <>
              No short link found for <code>{params.get("slug")}</code>!
            </>
          ),
          color: "red",
          icon: <IconAlertCircle size={18} />,
        });
        break;
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.wrapper}>
      <Box className={classes.box}>
        <Center className={classes.center}>
          <Typing text="mrvillage" color={theme.colors.gray[0]} />
        </Center>
      </Box>
      <Group
        align="center"
        position="center"
        className={classes.group}
        spacing={40}
      >
        {icons}
      </Group>
    </div>
  );
}
