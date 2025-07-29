import {
  IconArrowRight,
  IconBrandInstagram,
  IconMail,
  IconPhone,
  IconPlayerPlay,
} from "@tabler/icons-react";
import Image from "next/image";
import Card from "./_components/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pt-10">
      {/* heder */}
      <div className="flex justify-center items-center pb-24">
        <div className="flex gap-3 items-center">
          <div className="flex flex-col gap-7 w-1/2">
            <p className="text-4xl font-semibold">
              Erfan Kashef is a{" "}
              <span className="text-primary">front-end developer</span> who
              loves to build
            </p>
            <p className="text-base font-normal text-gray-primary">
              He crafts responsive websites where technologies meet creativity
            </p>
            <div>
              <button
                className="border border-primary text-white px-4 py-2 rounded-md"
                type="button"
              >
                Contact me!!
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"svg/Logo.svg"}
              alt="Erfan Kashef"
              width={200}
              height={200}
              className="absolute top-1 left-6 -z-10"
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
              className="absolute bottom-24 right-11 "
            />
            <div className="border-1 border-gray-primary p-2 flex gap-2 items-center mt-2">
              <div className="bg-primary w-5 h-5"></div>
              <p>
                Currently working on{" "}
                <span className="text-primary font-bold text-base">
                  pixelgenius
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*  quotation and more */}
      <div className="flex flex-col justify-center items-center pb-29 gap-5">
        <div className="border border-gray-primary p-5 w-3/5 relative pb-5">
          <div className="absolute bottom-16 left-0 text-3xl">,,,</div>
          <p className="font-kufi-arabic text-2xl font-medium text-center">
            {" "}
            ...درد یا لذت کاری که انجام میدی نمیمونه اما افتخار یا شرمندگیش چرا
          </p>
          <div className="absolute top-11 right-0 text-3xl">,,,</div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <div className="animate-bounce text-6xl text-white">↓</div>
          <div>
            <p className="text-2xl font-bold text-primary">Scroll down</p>
          </div>
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
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        {/* skills */}
        <div className="pb-24">
          <div className="pb-3">
            <div className="flex gap-4 items-center">
              <div className="w-full flex items-center gap-10">
                <div className="flex">
                  <span className="text-primary text-4xl font-medium">#</span>
                  <p className="text-4xl font-medium">skills</p>
                </div>
                <div className="border border-primary h-[1px] w-2/6"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="parent">
              <div className="div2 border border-gray-primary">
                <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
                  🛠️ Tools
                </div>
                <div className="flex gap-2 text-gray-400 p-2">
                  •Git •VS Code •Figma
                </div>
              </div>
              <div className="div3 border border-gray-primary">
                <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
                  📚 Libraries
                </div>
                <div className="flexgap-2 text-gray-400 p-2">
                  •React •Tailwind CSS •Bootstrap •Shadcn UI •Zod •React Hook
                  Form •Framer Motion
                </div>
              </div>
              <div className="div4 border border-gray-primary">
                <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
                  🧱 Frameworks
                </div>
                <div className="flexgap-2 text-gray-400 p-2">
                  •Next.js •TurboRepo
                </div>
              </div>
              <div className="div5 border border-gray-primary">
                <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
                  🧰 Other
                </div>
                <div className="flexgap-2 text-gray-400 p-2">
                  •Responsive Design
                </div>
              </div>
              <div className="div6 border border-gray-primary">
                <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
                  💖 Taste
                </div>
                <div className="flexgap-2 text-gray-400 p-2">
                  •Responsive Design •Tailwind CSS •Shadcn UI •Framer Motion
                  •React
                </div>
              </div>
              <div className="div7 border border-gray-primary">
                <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
                  🧩 Languages
                </div>
                <div className="flexgap-2 text-gray-400 p-2">
                  •HTML •CSS •JavaScript •TypeScript •Sass/SCSS
                </div>
              </div>
              <div className="div9 relative">
                <Image
                  src={"svg/Logo.svg"}
                  alt="Erfan Kashef"
                  width={200}
                  height={200}
                  className="absolute bottom-11 left-6"
                />
                <div className="absolute border border-gray-primary w-24 h-24 top-15 right-45"></div>
                <Image
                  src={"svg/Dots.svg"}
                  alt="Erfan Kashef"
                  width={100}
                  height={100}
                  className="absolute top-11 left-16 "
                />
                <Image
                  src={"svg/Dots.svg"}
                  alt="Erfan Kashef"
                  width={100}
                  height={100}
                  className="absolute bottom-45 right-72 "
                />
                <div className="absolute border border-gray-primary w-14 h-14 bottom-25 right-25"></div>
              </div>
            </div>
          </div>
        </div>
        {/* about-me */}
        <div className="pb-24">
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
          <div className="flex">
            <div className="w-1/2 flex justify-center items-center">
              <div className="">
                <p className="font-normal text-2xl pb-7">
                  I am passionate about discovering new challenges and
                  addressing them effectively. I find working in a team both
                  inspiring and rewarding, and I have a proven track record of
                  excelling in collaborative projects and teambased environments
                </p>
                <button
                  className="border border-primary text-white px-4 py-2 rounded-md"
                  type="button"
                >
                  View all
                </button>
              </div>
            </div>
            <div className="w-1/2 flex justify-center items-center relative">
              <Image
                src={"/images/ErfanKashef1.png"}
                alt="Erfan Kashef"
                width={500}
                height={500}
                className=""
              />
              <Image
                src={"svg/Dots.svg"}
                alt="Erfan Kashef"
                width={100}
                height={100}
                className="absolute top-9 left-35 "
              />
              <Image
                src={"svg/Dots.svg"}
                alt="Erfan Kashef"
                width={100}
                height={100}
                className="absolute bottom-5 right-30 "
              />
              <Image
                src={"svg/Logo.svg"}
                alt="Erfan Kashef"
                width={200}
                height={200}
                className="absolute top-5 right-35 -z-10 "
              />
            </div>
          </div>
        </div>
        {/* contact */}
        <section id="contact">
          <div className="pb-24">
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
            <div className="flex justify-between items-center">
              <div className="w-1/2">
                <p>
                  I’m interested in freelance opportunities. However, if you
                  have other request or question, don’t hesitate to contact me
                </p>
              </div>
              <div className="">
                <div className="border border-gray-primary p-2 text-center">
                  <p>Message me here</p>
                  <div className="flex gap-2 items-center">
                    <IconMail size={32} />
                    <p>erfankashefdev@gamil.com</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IconBrandInstagram size={32} />
                    <p>erfan_kasheff</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <IconPhone size={32} />
                    <p>09355633507</p>
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
