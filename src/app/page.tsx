import {
  IconArrowRight,
  IconBrandInstagram,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import Card from "./_components/card";
import Skills from "./_components/skills";

export default function Home() {
  return (
    <div className="pt-10 mx-3">
      {/* heder */}
      <div className="flex justify-center items-center pb-24 px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          {/* text */}
          <div className="flex flex-col gap-7 w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-snug">
              Erfan Kashef is a{" "}
              <span className="text-primary">front-end developer</span> who
              loves to build
            </p>
            <p className="text-sm sm:text-base text-gray-primary">
              He crafts responsive websites where technologies meet creativity
            </p>
            <div>
              <Link href="#contact" scroll={true}>
                <button
                  className="border border-primary text-white px-4 py-2 rounded-md"
                  type="button"
                >
                  Contact me!!
                </button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative flex flex-col items-center">
            <Image
              src={"svg/Logo.svg"}
              alt="Erfan Kashef"
              width={200}
              height={200}
              className="absolute top-1 left-6 -z-10 hidden lg:block"
            />
            <Image
              src="/images/ErfanKashef.png"
              alt="Erfan Kashef"
              width={700}
              height={700}
              className="rounded-2xl"
            />
            <Image
              src={"svg/Dots.svg"}
              alt="Erfan Kashef"
              width={100}
              height={100}
              className="absolute bottom-24 right-11 hidden lg:block"
            />
            <div className="border border-gray-primary px-4 py-2 flex gap-2 items-center mt-4 text-sm">
              <div className="bg-primary w-4 h-4"></div>
              <p>
                Currently working on{" "}
                <span className="text-primary font-bold">pixelgenius</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  quotation and more */}
      <div className="flex flex-col justify-center items-center pb-28 gap-8 px-4 sm:px-6 md:px-8">
        <div className="border border-gray-primary p-6 w-full max-w-2xl relative">
          <p className="font-kufi-arabic text-lg sm:text-xl md:text-2xl font-medium text-center leading-relaxed">
            ...درد یا لذت کاری که انجام میدی نمیمونه اما افتخار یا شرمندگیش چرا
          </p>
        </div>
        {/* Down arrow and text */}
        <div className="flex flex-col items-center gap-2">
          <div className="animate-bounce text-4xl sm:text-5xl md:text-6xl text-white">
            ↓
          </div>
          <p className="text-lg sm:text-xl font-bold text-primary">
            Scroll down
          </p>
        </div>
      </div>
      <div>
        {/* projects */}
        <div className="pb-24">
          <div className="pb-16">
            <div className="flex gap-4 items-center">
              <div className="w-full flex items-center gap-10">
                <div className="flex">
                  <span className="text-primary text-4xl font-medium">#</span>
                  <p className="text-4xl font-medium">projects</p>
                </div>
                <div className="border border-primary h-[1px] w-3/4"></div>
              </div>
              <Link href={"/projects"} className="flex flex-row items-center">
                <p className="text-base font-medium w-full">View all</p>
                <IconArrowRight size={42} />
              </Link>
            </div>
          </div>

          <div className="w-full max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
              {/* first row */}
              <Card
                image="/images/pixel.png"
                tech="Next.js Tailwind CSS TypeScript"
                title="pixelgenius"
                description="Market place"
                buttonLabel="View Project"
                showButton={false}
              />
              <Card
                image="/images/leven.png"
                tech="Next.js Tailwind CSS TypeScript"
                title="leven"
                description="Market place"
                buttonLabel="View Project"
                showButton={false}
              />
              <Card
                image="/images/prtfolio.png"
                tech="Next.js Tailwind CSS TypeScript"
                title="prtfolio"
                description="Market place"
                buttonLabel="View Project"
                showButton={false}
              />
              {/* Second line — fourth card under the first card */}
              <div className="lg:col-start-1">
                <Card
                  image="/images/cigaret.png"
                  tech="Next.js Tailwind CSS TypeScript"
                  title="cigaret"
                  description="Market place"
                  buttonLabel="View Project"
                  showButton={false}
                />
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <Skills />
        {/* about-me */}
        <div className="pb-24">
          {/* Title Row */}
          <div className="pb-5">
            <div className="flex gap-4 items-center">
              <div className="w-full flex items-center gap-10">
                <div className="flex">
                  <span className="text-primary text-4xl font-medium">#</span>
                  <p className="text-4xl font-medium">about-me</p>
                </div>
                <div className="border border-primary h-[1px] w-2/6"></div>
              </div>
            </div>
          </div>
          {/* Content (Text + Image) */}
          <div className="flex flex-col lg:flex-row">
            {/* Text Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <div className="p-4 text-center lg:text-left">
                <p className="font-normal text-2xl pb-7">
                  I am passionate about discovering new challenges and
                  addressing them effectively. I find working in a team both
                  inspiring and rewarding, and I have a proven track record of
                  excelling in collaborative projects and team-based
                  environments.
                </p>
                <Link href="/about-me" className="cursor-pointer">
                  <button
                    className="border border-primary text-white px-4 py-2 rounded-md cursor-pointer"
                    type="button"
                  >
                    View all
                  </button>
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center items-center relative mt-12 lg:mt-0">
              <Image
                src="/images/ErfanKashef1.png"
                alt="Erfan Kashef"
                width={500}
                height={500}
                className=""
              />
              <Image
                src="/svg/Dots.svg"
                alt="dots"
                width={100}
                height={100}
                className="absolute top-9 left-20"
              />
              <Image
                src="/svg/Dots.svg"
                alt="dots"
                width={100}
                height={100}
                className="absolute bottom-5 right-10"
              />
              <Image
                src="/svg/Logo.svg"
                alt="logo"
                width={200}
                height={200}
                className="absolute top-5 right-20 -z-10"
              />
            </div>
          </div>
        </div>
        {/* contact */}
        <section id="contact">
          <div className="pb-24">
            {/* Title */}
            <div className="pb-5">
              <div className="flex gap-4 items-center">
                <div className="w-full flex items-center gap-10">
                  <div className="flex">
                    <span className="text-primary text-4xl font-medium">#</span>
                    <p className="text-4xl font-medium">contacts</p>
                  </div>
                  <div className="border border-primary h-[1px] w-2/6"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
              {/* Text */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <p>
                  I’m interested in freelance opportunities. However, if you
                  have other requests or questions, don’t hesitate to contact
                  me.
                </p>
              </div>

              {/* Contact Info */}
              <div className="w-full lg:w-auto">
                <div className="border border-gray-primary p-4 text-center space-y-2">
                  <p className="font-semibold text-lg">Message me here</p>
                  <a
                    href="mailto:erfankashefdev@gmail.com"
                    className="flex gap-2 items-center justify-center cursor-pointer text-gray-primary hover:text-primary"
                  >
                    <IconMail size={24} />
                    <p>erfankashefdev@gmail.com</p>
                  </a>
                  <div className="flex gap-2 items-center justify-center">
                    <a
                      href="https://instagram.com/erfan_kasheff"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2 items-center justify-center cursor-pointer text-gray-primary hover:text-primary"
                    >
                      <IconBrandInstagram size={24} />
                      <p>erfan_kasheff</p>
                    </a>
                  </div>
                  <div className="flex gap-2 items-center justify-center">
                    <a
                      href="tel:09355633507"
                      className="flex gap-2 items-center justify-center cursor-pointer text-gray-primary hover:text-primary"
                    >
                      <IconPhone size={24} />
                      <p>09355633507</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
