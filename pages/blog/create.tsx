import {
  Title,
  Center,
  TextInput,
  Stack,
  Checkbox,
  Button,
  Group,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import RichTextEditor from "../../components/RichTextEditor";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useFormValidation } from "../../hooks/form";
import { CreateOnlyMultiSelect } from "../../components/CreateOnlyMultiSelect";
import { useDebouncedValue } from "@mantine/hooks";
import { createBlogPost, isSlugTaken } from "../../query/client/blog";
import { showErrorNotification } from "../../utils/notifications";
import { useRouter } from "next/router";

export default function Page() {
  const [loading, setLoading] = useState(false);
  const form = useForm({
    initialValues: {
      title: "",
      slug: "",
      tags: [] as string[],
      content: "",
      published: false,
    },

    validate: {
      title: (val) =>
        val.length < 3 ? "Title must be at least 3 characters long" : null,
      slug: (val) =>
        val.length < 3 ? "Slug must be at least 3 characters long" : null,
      content: (val) =>
        val.length < 150
          ? "Content must be at least 150 characters long"
          : null,
    },
  });
  useFormValidation(form);
  const [slug] = useDebouncedValue(form.values.slug, 500);
  const slugTaken = (taken: boolean) => {
    if (taken) {
      form.setFieldError("slug", "Slug is taken");
    } else {
      form.clearFieldError("slug");
    }
    return taken;
  };
  const checkSlugTaken = async (slug: string) => {
    const { data, error } = await isSlugTaken(slug);
    if (error) {
      console.error(error);
      return true;
    }
    return data.taken;
  };
  useEffect(() => {
    if (form.values.slug) {
      checkSlugTaken(form.values.slug).then((taken) => {
        slugTaken(taken);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);
  const router = useRouter();

  useEffect(() => console.log(form.values.content), [form.values.content]);

  const handleSubmit = async () => {
    setLoading(true);
    if (slugTaken(await checkSlugTaken(form.values.slug))) {
      return;
    }
    const data = {
      title: form.values.title,
      slug: form.values.slug,
      tags: form.values.tags,
      content: form.values.content,
      published: form.values.published,
    };
    const { hasErrors } = form.validate();
    if (hasErrors) {
      return;
    }
    const { data: post, error } = await createBlogPost(data);
    if (error) {
      showErrorNotification({ message: error });
      setLoading(false);
    } else {
      await router.push(`/blog/${post.slug}`);
      setLoading(false);
      form.reset();
    }
  };
  return (
    <>
      <Head>
        <title>Create Blog Post</title>
      </Head>
      <Center>
        <Stack>
          <Title>Create Blog Post</Title>
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Title"
              required
              {...form.getInputProps("title")}
            />
            <TextInput
              mt="md"
              label="Slug"
              required
              value={form.values.slug}
              onChange={(e) =>
                form.setFieldValue(
                  "slug",
                  e.currentTarget.value
                    .toLowerCase()
                    .replace(" ", "-")
                    .replace(/[^a-z0-9-]/g, "")
                )
              }
              error={form.errors.slug}
            />
            <CreateOnlyMultiSelect
              mt="md"
              label="Tags"
              value={form.values.tags}
              onChange={(value) =>
                form.setFieldValue(
                  "tags",
                  value.map((val) => val.toLowerCase())
                )
              }
            />
            <RichTextEditor
              mt="lg"
              label="Content"
              required
              {...form.getInputProps("content")}
            />
            <Group position="apart">
              <Checkbox
                mt="lg"
                label="Publish on creation"
                {...form.getInputProps("published")}
              />
              <Button mt="lg" type="submit" loading={loading}>
                Create
              </Button>
            </Group>
          </form>
        </Stack>
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
