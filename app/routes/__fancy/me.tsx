import { Card, Center, createStyles, Stack, Text } from "@mantine/core";
import { pop, scaleX } from "~/styles/animations";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: "rgba(0,0,0,0.5)",

    height: "30%",
    width: "30%",
    [theme.fn.smallerThan("xs")]: {
      height: "40%",
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
      <Card className={classes.card}>
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
            <DelayedText delay={2500}>
              {
                "I'm Josef, or as I'm known online Village or mrvillage or mr_village (it's evolved a bit over time)"
              }
            </DelayedText>
          </Stack>
        </Center>
      </Card>
    </Stack>
  );
}
