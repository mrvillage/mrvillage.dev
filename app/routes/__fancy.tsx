import { Outlet } from "@remix-run/react";
import useBackgroundStyles from "~/styles/background";

export default function Main() {
  const { classes } = useBackgroundStyles();
  return (
    <div className={classes.background} style={{ minHeight: "100vh" }}>
      <Outlet />
    </div>
  );
}
