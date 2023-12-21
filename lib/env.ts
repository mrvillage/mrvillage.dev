import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    github_client_id: z.string().min(1),
    github_client_secret: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_IS_DEV: z.string().optional(),
  },
  runtimeEnv: {
    github_client_id: process.env.GITHUB_CLIENT_ID,
    github_client_secret: process.env.GITHUB_CLIENT_SECRET,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_IS_DEV: process.env.NEXT_PUBLIC_IS_DEV,
  },
});
