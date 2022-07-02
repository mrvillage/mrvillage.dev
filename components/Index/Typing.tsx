import { useMantineTheme } from "@mantine/core";
import React from "react";

export function Typing({ text }: { text: string }) {
  const theme = useMantineTheme();
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `@keyframes typing { from { width: 0; } } @keyframes caret {50% { border-color: transparent; } }`,
        }}
      ></style>
      <div
        style={{
          animation: `typing 3s steps(${text.length}, end), caret .5s step-end infinite alternate`,
          borderRight: ".1em solid black",
          width: `calc(${text.length}ch + 0.1em)`,
          whiteSpace: "nowrap",
          overflow: "hidden",
          fontFamily: theme.fontFamilyMonospace,
          fontSize: "50px",
        }}
      >
        {text}
      </div>
    </>
  );
}
