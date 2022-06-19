import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import Link from "next/link";

interface ErrorProps {
  image: any;
  notfound?: boolean;
}

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    fontWeight: 900,
    fontSize: 34,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export default function ErrorPage({ image, notfound = false }: ErrorProps) {
  const { classes } = useStyles();
  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <Image
          src={image.src}
          className={classes.mobileImage}
          alt="Error image"
        />
        <div>
          <Title className={classes.title}>Something&apos;s not right...</Title>
          <Text color="dimmed" size="lg">
            {notfound
              ? "The page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL. If you think this is an error contact support."
              : "Something went wrong! If this problem persists, please contact support."}
          </Text>
          <Link href="/">
            <Button
              component="a"
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
            >
              Go back home
            </Button>
          </Link>
        </div>
        <Image
          src={image.src}
          className={classes.desktopImage}
          alt="Error image"
        />
      </SimpleGrid>
    </Container>
  );
}
