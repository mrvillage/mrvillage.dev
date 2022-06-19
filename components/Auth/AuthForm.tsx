import React, { useEffect, useRef } from "react";
import { useToggle, upperFirst } from "@mantine/hooks";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Checkbox,
  Anchor,
  createStyles,
  Center,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAppContext } from "../../context/AppContext";
import Link from "next/link";
import { showErrorNotification } from "../../utils/notifications";
import { useRouter } from "next/router";

const useStyles = createStyles({
  paper: {
    maxWidth: "500px",
  },
});

interface AuthFormProps {
  initialType?: "login" | "register";
}

export function AuthForm({ initialType = "login" }: AuthFormProps) {
  const { classes } = useStyles();
  const { supabase } = useAppContext();
  const router = useRouter();
  const [type, toggle] = useToggle<"login" | "register">([
    initialType,
    initialType === "register" ? "login" : "register",
  ]);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      terms: false,
    },

    validate: {
      email: (val) => (/^\S+@\S+\.\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length >= 6 ? null : "Password must be at least 6 characters long",
      terms: (val: boolean) =>
        type === "register" && !val
          ? "You must accept the terms of service and privacy policy"
          : null,
    },
  });

  const firstValidation = useRef(true);
  useEffect(() => {
    if (!firstValidation.current) {
      form.validate();
    } else {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      firstValidation.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values]);

  return (
    <Center>
      <Paper radius="md" p="xl" withBorder className={classes.paper}>
        <Text size="lg" weight={500}>
          Welcome to mrvillage.dev
          {/* , {type} with */}
        </Text>

        {/* <Group grow mb="md" mt="md">
          <Button variant="default" radius="xl" leftIcon={<GoogleIcon />}>
            Google
          </Button>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        /> */}

        <form
          onSubmit={form.onSubmit(async () => {
            const data = {
              email: form.values.email,
              password: form.values.password,
            };
            const { error } = await (type === "login"
              ? supabase.auth.signIn(data)
              : supabase.auth.signUp(data));
            if (error) {
              console.error(error);
              showErrorNotification({ message: error.message });
            } else {
              router.push(type === "login" ? "/home" : "/welcome");
            }
          })}
        >
          <Stack>
            <TextInput
              required
              label="Email"
              placeholder="me@example.com"
              {...form.getInputProps("email")}
            />

            <PasswordInput
              required
              label="Password"
              placeholder="Your password"
              {...form.getInputProps("password")}
            />

            {type === "register" && (
              <>
                <Checkbox
                  required
                  label="I accept the terms of service and privacy policy"
                  {...form.getInputProps("terms", { type: "checkbox" })}
                  mb={0}
                />
                <Group mb="md">
                  <Link href="/terms">
                    <Anchor
                      component="button"
                      type="button"
                      color="gray"
                      size="xs"
                    >
                      Terms of Service
                    </Anchor>
                  </Link>
                  <Link href="/terms">
                    <Anchor
                      component="button"
                      type="button"
                      color="gray"
                      size="xs"
                    >
                      Privacy Policy
                    </Anchor>
                  </Link>
                </Group>
              </>
            )}
          </Stack>

          <Group position="apart" mt={type === "login" ? "xl" : undefined}>
            <Anchor
              component="button"
              type="button"
              color="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit">{upperFirst(type)}</Button>
          </Group>
        </form>
      </Paper>
    </Center>
  );
}
