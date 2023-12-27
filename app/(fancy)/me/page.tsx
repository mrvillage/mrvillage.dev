import * as Icons from "@/components/icons";
import { Typing } from "@/components/typing";
import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { GITHUB_LINK } from "@/lib/consts";

import firstDegreeImg from "@/public/images/me/first_degree.jpg";
import secondDegreeImg from "@/public/images/me/second_degree.jpg";
import onBikeImg from "@/public/images/me/on_bike.jpg";
import climbingImg from "@/public/images/me/climbing.jpg";
import books1Img from "@/public/images/me/books_1.jpg";
import books2Img from "@/public/images/me/books_2.jpg";
import lakeImg from "@/public/images/me/lake.jpg";
import punchbowlImg from "@/public/images/me/punchbowl.jpg";
import treesImg from "@/public/images/me/trees.jpg";
import palmTreesImg from "@/public/images/me/palm_trees.jpg";

export default function Me() {
  return (
    <div className="container relative max-w-4xl pt-6 lg:pt-10 pb-12">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-150px] top-14 hidden xl:inline-flex"
        )}
      >
        <Icons.Back className="mr-2 h-4 w-4" /> Home
      </Link>
      <div className="pt-8 text-center flex justify-center">
        <Typing
          role="heading"
          aria-level={1}
          text="Josef Graf"
          caretIterations="15"
        />
      </div>
      <section className="text-center">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col gap-3 bg-white bg-opacity-5 backdrop-blur-sm p-2 rounded-lg">
            <p className="text-center text-white items-center justify-center h-min">
              Hi! I&apos;m Josef, but you might know me by my online alias,
              Village. I&apos;m a karate enthusiast, computer science student,
              software developer, and avid reader!
              {/* My journey has been an */}
              {/* interesting one, and it&apos;s far from over! */}
            </p>
            <p className="text-center text-white items-center justify-center h-min">
              Karate is a big part of who I am. I&apos;ve been practicing it for
              over a decade and have earned my second-degree black belt. I find
              great joy in teaching others as a senior instructor at the
              Canadian Black Belt Academy, it&apos;s a challenging and
              exhilarating experience that I wouldn&apos;t trade for anything
              else!
            </p>
          </div>
          <div className="px-12">
            <Carousel
              className="max-h-[400px] w-[250px] sm:w-[300px]"
              opts={{ loop: true }}
              autoPlay={4000}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={firstDegreeImg}
                      alt="Me with my first-degree black belt"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={secondDegreeImg}
                      alt="Me with my second-degree black belt"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={onBikeImg}
                      alt="Me on my bike"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={climbingImg}
                      alt="Me climbing"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </div>
      </section>
      <section className="text-center pt-6">
        <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
          <div className="flex flex-col gap-3 bg-white bg-opacity-5 backdrop-blur-sm p-2 rounded-lg">
            <p className="text-center text-white items-center justify-center h-min">
              When I&apos;m not practicing or teaching karate, you&apos;ll
              likely find me in front of a computer. I&apos;m currently in my
              second year of Computer Science at McMaster University. I&apos;m
              having a blast solving complex problems and building new things. I
              also work as a software developer on Politics and War, where I get
              to blend my love for coding and games!
            </p>
            <p className="text-center text-white items-center justify-center h-min">
              I have a soft spot for open-source software and love contributing
              to the community. There&apos;s something incredibly rewarding
              about building something that others can use and improve upon. In
              my free time, I often work on my own open-source projects,
              it&apos;s a great way to learn, grow, and give back to the
              community that taught me to code in the first place!
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href="/projects"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "px-4 bg-orange-600/80 hover:bg-neutral-900/80"
              )}
            >
              <Icons.Projects className="mr-2 h-4 w-4" />
              Check out my projects!
            </Link>
            <Link
              href="/blog/engineering"
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "px-4 bg-blue-600/80 hover:bg-neutral-900/80"
              )}
            >
              <Icons.Blog className="mr-2 h-4 w-4" />
              Read my engineering blog!
            </Link>
            <Link
              href={GITHUB_LINK}
              className={cn(
                buttonVariants({ variant: "secondary", size: "lg" }),
                "px-4 bg-neutral-800/80 hover:bg-neutral-900/80"
              )}
            >
              <Icons.GitHub className="mr-2 h-4 w-4" />
              Check out my GitHub!
            </Link>
          </div>
        </div>
      </section>
      <section className="text-center pt-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex flex-col gap-3 bg-white bg-opacity-5 backdrop-blur-sm p-2 rounded-lg">
            <p className="text-center text-white items-center justify-center h-min">
              But life isn&apos;t just about karate and coding. I am an
              insatiable reader and am always on the hunt for my next great
              read. My favorite series is Wheel of Time, but I also love the
              Thrawn, Dune, Great Library, and Shadow and Bone series. Books
              have a way of transporting you to another world, and I absolutely
              love that feeling!
            </p>
            <p className="text-center text-white items-center justify-center h-min">
              I also enjoy building LEGO sets, especially Star Wars ones.
              There&apos;s something therapeutic about turning a pile of bricks
              into a detailed set. Plus, who doesn&apos;t love Star Wars?
            </p>
          </div>
          <div className="px-12">
            <Carousel
              className="max-h-[400px] w-[250px] sm:w-[300px]"
              opts={{ loop: true }}
              autoPlay={4000}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={books1Img}
                      alt="A picture of my bookshelf"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={books2Img}
                      alt="A picture of my bookshelf"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </div>
      </section>
      <section className="text-center pt-6">
        <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
          <div className="flex flex-col gap-3 bg-white bg-opacity-5 backdrop-blur-sm p-2 rounded-lg">
            <p className="text-center text-white items-center justify-center h-min">
              In my downtime, you&apos;ll find me playing video games like
              Minecraft, Hearts of Iron IV, and Total War: Shogun 2, or
              participating in a game of Dungeons and Dragons with friends.
            </p>
            <p className="text-center text-white items-center justify-center h-min">
              I believe life is a journey filled with endless learning
              opportunities. It&apos;s about pushing your boundaries, facing
              challenges head-on, and continually growing. I&apos;m excited to
              see where my journey takes me next!
            </p>
          </div>
          <div className="px-12">
            <Carousel
              className="max-h-[400px] w-[250px] sm:w-[300px]"
              opts={{ loop: true }}
              autoPlay={4000}
            >
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={lakeImg}
                      alt="A picture of a lake"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={punchbowlImg}
                      alt="A picture of the Devil's Punchbowl"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={treesImg}
                      alt="A picture of the trees on a hike"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center h-full">
                    <Image
                      src={palmTreesImg}
                      alt="A picture of palm trees"
                      // width={300}
                      height={400}
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
              <CarouselPrevious />
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
