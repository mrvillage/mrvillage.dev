import type { Keyframes } from "@emotion/react";
import type { CSSObject } from "@mantine/core";
import { keyframes } from "@mantine/core";

interface Animation {
  keyframes: Keyframes;
  styles?: CSSObject;
}

function animation({
  start,
  end,
  styles,
}: {
  start: CSSObject;
  end: CSSObject;
  styles?: CSSObject;
}): Animation {
  return {
    // @ts-ignore
    keyframes: keyframes({
      "0%": start,
      "100%": end,
    }),
    styles,
  };
}

export const scaleX = animation({
  start: { opacity: 0, transform: "scaleX(0)" },
  end: { opacity: 1, transform: "scaleX(1)" },
  styles: { transformOrigin: "left" },
});

export const pop = animation({
  start: { opacity: 0, transform: "scale(0.9 translateY(10px)" },
  end: { opacity: 1, transform: "scale(1)" },
  styles: { transformOrigin: "center center" },
});
