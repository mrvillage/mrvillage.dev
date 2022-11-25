import { Center, createStyles, Tabs } from "@mantine/core";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { Outlet, useNavigate } from "@remix-run/react";
import { useEffect, useState } from "react";
import { adminsOnly } from "~/utils/routes";

export const loader: LoaderFunction = adminsOnly(async () => {
  return {};
});

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
  },

  tabsList: {
    borderBottom: "0 !important",
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: "transparent",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },

    "&[data-active]": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.white,
      borderColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[2],
    },
  },
}));

export default function Index() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState<string | null>("/admin");
  useEffect(() => {
    setValue(window.location.pathname);
  }, []);
  const items = [
    {
      value: "/",
      label: "Root",
    },
    {
      value: "/admin",
      label: "Home",
    },
    {
      value: "/admin/short-link",
      label: "Short Links",
    },
  ];
  return (
    <>
      <div className={classes.header}>
        <Center>
          <Tabs
            defaultValue="Home"
            variant="outline"
            value={value}
            onTabChange={(v) => {
              const val = v || "/s";
              setValue(val);
              navigate(val);
            }}
          >
            <Tabs.List className={classes.tabsList}>
              {items.map(({ value, label }) => (
                <Tabs.Tab value={value} key={value} className={classes.tab}>
                  {label}
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>
        </Center>
      </div>
      <Outlet />
    </>
  );
}
