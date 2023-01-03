import { Card, Center, createStyles, Stack, Text } from "@mantine/core";
import { pop, scaleX } from "~/styles/animations";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: "rgba(0,0,0,0.5)",

    // height: "30%",
    width: "30%",
    [theme.fn.smallerThan("xs")]: {
      // height: "40%",
      width: "80%",
    },
    marginBottom: "10%",

    animation: `${scaleX.keyframes} 1s ease`,
    ...scaleX.styles,
  },

  text: {
    animation: `${pop.keyframes} 1s ease`,
    ...pop.styles,

    "&::before": {
      opacity: 0,
    },
  },
}));

export default function Me() {
  const { classes } = useStyles();
  const DelayedText = ({
    children,
    delay,
  }: {
    children: React.ReactNode;
    delay: number;
  }) => (
    <Text
      align="center"
      weight={500}
      size="lg"
      className={classes.text}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: "backwards",
      }}
    >
      {children}
    </Text>
  );
  return (
    <Stack
      align="center"
      justify="center"
      sx={{ position: "absolute", height: "100%", width: "100%" }}
    >
      <Card className={classes.card} pb="xl">
        <Center>
          <Stack>
            <Text
              align="center"
              weight={500}
              size={40}
              className={classes.text}
              style={{
                animationDelay: "1250ms",
                animationFillMode: "backwards",
              }}
            >
              Hi!
            </Text>
            {[
              "I'm Josef, or as I'm known online Village or mrvillage or mr_village (it's evolved a bit as the eons have passed).",
              "I'm a Computer Science student at McMaster University and a part-time software developer on the online game Politics and War.",
              "I love to code and am always looking for new things to learn and experiment with.",
              "When I'm not coding, I'm usually reading a book, hanging out with family and friends, or playing video games.",
            ].map((text, i) => (
              <DelayedText key={i} delay={500 + 750 * (i + 2)}>
                {text}
              </DelayedText>
            ))}
          </Stack>
        </Center>
      </Card>
    </Stack>
  );
}
