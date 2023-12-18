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

  const options = useMemo(
    () =>
      ({
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: false,
            },
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
              enable: true,
            },
            value: 250,
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
      <>
        <style>
          {`
          #tsparticles {
            animation: tsp-fade-in 1s ease-in-out;
          }

          @keyframes tsp-fade-in {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
        </style>
        <Particles
          id="tsparticles"
          options={options}
          className="transition-all animate-in fade-in opacity-100"
        />
      </>
    );
  } else {
    return <></>;
  }
}
