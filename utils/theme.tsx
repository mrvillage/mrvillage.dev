import { MantineTheme } from "@mantine/core";

export function themePrimaryColor(theme: MantineTheme) {
  return theme.colors[theme.primaryColor][theme.fn.primaryShade()];
}
