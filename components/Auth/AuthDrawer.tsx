import { Drawer } from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { useEffect } from "react";
import { AuthForm } from "./AuthForm";

interface AuthDrawerProps {
  opened: boolean;
  setOpened: (value: boolean) => void;
  initialType?: "login" | "register";
}

export function AuthDrawer({
  opened,
  setOpened,
  initialType = "login",
}: AuthDrawerProps) {
  const [type, toggle] = useToggle<"login" | "register">([
    initialType,
    initialType === "register" ? "login" : "register",
  ]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => toggle(initialType), [initialType]);
  return (
    <Drawer
      opened={opened}
      onClose={() => setOpened(false)}
      title="Welcome to mrvillage.dev"
      padding="xl"
      size="xl"
    >
      <AuthForm type={type} toggle={toggle} setOpened={setOpened} />
    </Drawer>
  );
}
