import {
  Button,
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Title,
} from "@mantine/core";
import { useNavigate } from "@remix-run/react";
import { useClient } from "~/hooks/client";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { showNotification } from "@mantine/notifications";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";

export const loader: LoaderFunction = async ({ context: { client } }) => {
  if (client.authStore.token) {
    return redirect("/admin");
  }
  return {};
};

export default function Index() {
  const client = useClient();
  const navigate = useNavigate();
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
  });
  const [disabled, setDisabled] = useState(false);
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Admin Dashboard
      </Title>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form
          onSubmit={form.onSubmit(async ({ email, password }) => {
            setDisabled(true);
            client.admins
              .authWithPassword(email, password)
              .then((authData) => {
                client.authStore.save(authData.token, authData.record);
                navigate("/admin");
                setDisabled(false);
                form.reset();
              })
              .catch((err) => {
                console.error(err);
                setDisabled(false);
                showNotification({
                  title: "Error",
                  message:
                    "Something went wrong logging you in. Do you have the correct password?",
                });
              });
          })}
        >
          <TextInput
            id="email"
            autoComplete="email"
            label="Email"
            placeholder="the@banana.man"
            required
            disabled={disabled}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            id="password"
            autoComplete="current-password"
            label="Password"
            placeholder="Definitely not 1234"
            required
            mt="md"
            disabled={disabled}
            {...form.getInputProps("password")}
          />
          <Button fullWidth mt="xl" type="submit" disabled={disabled}>
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
