import { createStyles, keyframes } from "@mantine/core";

const movingBackground = keyframes({
  "0%": { backgroundPosition: "0 0%" },
  "50%": { backgroundPosition: "100% 100%" },
  "100%": { backgroundPosition: "0 0%" },
});

export default createStyles((theme) => ({
  background: {
    background: theme.fn.linearGradient(
      -45,
      theme.colors.indigo[6],
      "#5768f5",
      "#6261f5",
      "#6e59f4",
      theme.colors.violet[6]
    ),
    backgroundSize: "200% 200%",
    animation: `${movingBackground} 5s linear infinite`,
  },
}));
