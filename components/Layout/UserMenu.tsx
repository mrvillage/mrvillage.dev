import React, { useState } from "react";
import {
  createStyles,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
} from "@mantine/core";
import { IconChevronDown, IconDoorExit } from "@tabler/icons";
import { useAppContext } from "../../context/AppContext";

const useStyles = createStyles((theme) => ({
  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },
  },

  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
}));

export function UserMenu() {
  const { classes, cx } = useStyles();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const { supabase } = useAppContext();
  const user = { image: undefined, name: "John Doe" };
  return (
    <Menu
      transition="pop-top-right"
      onClose={() => setUserMenuOpened(false)}
      onOpen={() => setUserMenuOpened(true)}
      width={260}
    >
      <Menu.Target>
        <UnstyledButton
          className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
        >
          <Group spacing={7}>
            <Avatar src={user.image} alt={user?.name} radius="xl" size={20} />
            <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
              {user.name}
            </Text>
            <IconChevronDown size={12} />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          color="red"
          icon={<IconDoorExit size={14} />}
          onClick={async () => await supabase.auth.signOut()}
        >
          Sign out
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
