import type { LoaderFunction } from "@remix-run/cloudflare";
import { adminsOnly } from "~/utils/routes";

export const loader: LoaderFunction = adminsOnly(() => ({}));

export default function Index() {
  return <></>;
}
