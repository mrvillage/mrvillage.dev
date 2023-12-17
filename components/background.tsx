"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { ISourceOptions } from "@tsparticles/engine";
import { tailwindConfig } from "@/lib/utils";

export default function Background() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  });

  const particlesLoaded = async (container: any) => {
    console.log(container);
  };

  const options = useMemo(
    () =>
      ({
        background: {
          color: {
            value: tailwindConfig.theme.colors.neutral[900],
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            // resize: true,
          },
        },
        particles: {
          color: {
            value: tailwindConfig.theme.colors.neutral[100],
          },
          links: {
            color: tailwindConfig.theme.colors.neutral[100],
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 0.5,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.2,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              // area: 800,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 2, max: 2 },
          },
        },
        detectRetina: true,
      }) satisfies ISourceOptions,
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  } else {
    return <></>;
  }
}
