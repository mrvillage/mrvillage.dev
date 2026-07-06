import Image from "next/image";
import Link from "next/link";
import { Projects } from "@/components/projects";
import { KANRI_LINK } from "@/lib/consts";
import avatar from "@/public/images/avatars/mrvillage.jpg";

function Divider() {
  return <hr className="my-10 border-taupe-800/40" />;
}

export default function Home() {
  return (
    <div className="container max-w-2xl pb-20 pt-16 lg:pt-20">
      <div className="flex flex-col items-center text-center">
        <Image
          src={avatar}
          alt="Josef Graf"
          width={144}
          height={144}
          className="mb-5 h-36 w-36 rounded-full border-2 border-taupe-700/60 object-cover"
          priority
        />
        <h1 className="font-mono text-5xl text-white">Josef Graf</h1>
        <p className="mt-1 font-mono text-sm text-neutral-500">
          PhD Student @ McMaster &middot; Founder @ Kanri
        </p>
      </div>

      <Divider />

      <div className="space-y-8 text-left text-neutral-200">
        <p>
          I&apos;m starting a PhD at McMaster this fall, researching compilers
          and programming languages with a focus on implicit parallelism.
          Outside of school, I&apos;ve spent the last few years as a software
          developer, freelancing, contributing to open source, and building my
          own products.
        </p>

        <p>
          My main project right now is{" "}
          <Link
            href={KANRI_LINK}
            target="_blank"
            className="text-taupe-300 hover:text-taupe-200 hover:underline"
          >
            Kanri
          </Link>
          , an all-in-one management platform for martial arts schools. It
          started as a way to fix the clunky, outdated software my own school
          was stuck with, and has grown into a full platform covering membership
          management, billing, attendance, belt tracking, scheduling, and more!
        </p>

        <p>
          I&apos;ve also been practicing karate for over a decade and hold a
          second-degree black belt. I teach as a senior instructor at the
          Canadian Black Belt Academy.
        </p>

        <p>
          Outside of that, I&apos;m an avid reader. Wheel of Time and the
          Stormlight Archive are at the top of my list, with Thrawn, Dune, and
          The Great Library close behind. I also build LEGO sets (mostly Star
          Wars) and play Minecraft, Deadlock, and D&amp;D with friends.
        </p>
      </div>

      <Divider />

      <div className="text-left">
        <Projects />
      </div>
    </div>
  );
}
