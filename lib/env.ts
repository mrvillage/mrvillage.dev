import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    github_client_id: z.string().min(1),
    github_client_secret: z.string().min(1),
  },
  client: {},
  runtimeEnv: {
    github_client_id: process.env.GITHUB_CLIENT_ID,
    github_client_secret: process.env.GITHUB_CLIENT_SECRET,
  },
});
