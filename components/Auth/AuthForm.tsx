import React, { useEffect, useRef, useState } from "react";
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Button,
  Checkbox,
  Anchor,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useAppContext } from "../../context/AppContext";
import { showErrorNotification } from "../../utils/notifications";
import { useRouter } from "next/router";
import { IconLock, IconMail } from "@tabler/icons";
import { useDebouncedValue } from "@mantine/hooks";
import { isNameTaken } from "../../query/user";

interface AuthFormProps {
  type: "login" | "register";
  toggle: () => void;
  setOpened: (value: boolean) => void;
}

export function AuthForm({ type, toggle, setOpened }: AuthFormProps) {
  const { supabase } = useAppContext();
  const router = useRouter();
  const theme = useMantineTheme();
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },

    validate: {
      name: (val) =>
        type === "register" && val.length < 3
          ? "Name must be at least 3 characters long"
          : null,
      email: (val) => (/^\S+@\S+\.\S+$/.test(val) ? null : "Invalid email"),
      password: (val) =>
        val.length >= 6 ? null : "Password must be at least 6 characters long",
      confirmPassword: (val, { password }) =>
        type === "register" && val !== password
          ? "Passwords do not match"
          : null,
      terms: (val: boolean) =>
        type === "register" && !val
          ? "You must accept the terms of service and privacy policy"
          : null,
    },
  });
  useDebouncedValue(form.values.name, 500);
  const nameTaken = (taken: boolean) => {
    if (taken) {
      form.setFieldError("name", "Name is taken");
    } else {
      form.clearFieldError("name");
    }
    return taken;
  };
  useEffect(() => {
    if (form.values.name) {
      isNameTaken(form.values.name).then((taken) => {
        nameTaken(taken);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.values.name]);

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

  const handleSubmit = async () => {
    console.log("click");
    setLoading(true);
    if (type === "register" && nameTaken(await isNameTaken(form.values.name))) {
      return;
    }
    const data = {
      email: form.values.email,
      password: form.values.password,
    };
    const { error } = await (type === "login"
      ? supabase.auth.signIn(data)
      : supabase.auth.signUp(data, { data: { name: form.values.name } }));
    if (error) {
      console.error(error);
      showErrorNotification({ message: error.message });
      setLoading(false);
    } else {
      setOpened(false);
      // set timeout so that the button doesn't flash as not loading when closing drawer
      setTimeout(() => setLoading(false), 1000);
      router.push(type === "login" ? "/home" : "/welcome");
    }
  };

  // <Group grow mb="md" mt="md">
  //   <Button variant="default" radius="xl" leftIcon={<GoogleIcon />}>
  //     {upperFirst(type)} with Google
  //   </Button>
  // </Group>

  // <Divider
  //   label="Or continue with email"
  //   labelPosition="center"
  //   my="lg"
  // />
  return (
    <Paper
      p={0}
      style={{
        position: "relative",
        backgroundColor:
          theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      }}
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        {type === "register" && (
          <TextInput
            data-autofocus
            required
            placeholder="Username"
            label="Username"
            {...form.getInputProps("name")}
          />
        )}

        <TextInput
          mt="md"
          required
          placeholder="Your email"
          label="Email"
          icon={<IconMail />}
          {...form.getInputProps("email")}
        />

        <PasswordInput
          mt="md"
          required
          placeholder="Password"
          label="Password"
          icon={<IconLock />}
          {...form.getInputProps("password")}
        />

        {type === "register" && (
          <PasswordInput
            mt="md"
            required
            label="Confirm Password"
            placeholder="Confirm password"
            icon={<IconLock />}
            {...form.getInputProps("confirmPassword")}
          />
        )}

        {type === "register" && (
          <Checkbox
            mt="xl"
            label="I agree to the terms of service and privacy policy"
            {...form.getInputProps("terms", { type: "checkbox" })}
          />
        )}

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="gray"
            onClick={() => toggle()}
            size="sm"
          >
            {type === "register"
              ? "Have an account? Login"
              : "Don't have an account? Register"}
          </Anchor>

          <Button color="blue" type="submit" loading={loading}>
            {type === "register" ? "Register" : "Login"}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
