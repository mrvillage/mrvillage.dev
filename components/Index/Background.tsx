import { createStyles, keyframes } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  background: {
    background: theme.fn.linearGradient(
      -45,
      theme.colors.violet[6],
      theme.colors.indigo[6],
      theme.colors.violet[6],
      theme.colors.indigo[6],
      theme.colors.violet[6]
    ),
    backgroundSize: "400% 400%",
    width: "100%",
    height: `100%`,
    animation: `${keyframes({
      "0%": { backgroundPosition: "0% 50%" },
      "100%": { backgroundPosition: "100% 50%" },
    })} 5s linear infinite`,
  },
}));

export function Background({ children }: { children: React.ReactNode }) {
  const { classes } = useStyles();
  return <div className={classes.background}>{children}</div>;
}
