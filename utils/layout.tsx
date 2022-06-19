import React from "react";

export function layoutGetLayout(
  Layout: ({ children }: { children: React.ReactNode }) => JSX.Element
) {
  // eslint-disable-next-line react/display-name
  return (page: React.ReactElement) => {
    return <Layout>{page}</Layout>;
  };
}
