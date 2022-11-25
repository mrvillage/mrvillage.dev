import { adminsOnly } from "~/utils/routes";
import { Grid } from "@mantine/core";
import { useLoaderData } from "@remix-run/react";
import ActionsCard from "~/components/ActionsCard";
import { IconLink } from "@tabler/icons";
import StatsGrid from "~/components/StatsGrid";

export const loader = adminsOnly(async ({ context: { client } }) => {
  const shortLinks = await client.collection("short_links").getList(1, 1);
  return {
    numShortLinks: shortLinks.totalItems,
  };
});

interface LoaderData {
  numShortLinks: number;
}

export default function Index() {
  const { numShortLinks } = useLoaderData<LoaderData>();
  return (
    <Grid py="md" px="lg" sx={{ width: "100%" }}>
      <Grid.Col md={12} lg={4}>
        <StatsGrid
          stats={[
            {
              title: "Short Links",
              Icon: IconLink,
              value: numShortLinks.toLocaleString(),
              color: "violet",
            },
          ]}
        />
      </Grid.Col>
      <Grid.Col md={12} lg={4}>
        <ActionsCard
          actions={[
            {
              title: "Short Links",
              Icon: IconLink,
              color: "violet",
              to: "/admin/short-link",
            },
          ]}
        />
      </Grid.Col>
    </Grid>
  );
}
