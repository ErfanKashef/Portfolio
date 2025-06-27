import {
  IconArrowRight,
  IconArrowWaveRightUp,
  IconPlayerPlay,
} from "@tabler/icons-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-10">
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
      <div className="flex justify-center items-center pb-24">
        <div className="border border-gray-primary p-5 w-3/5 relative ">
          <div className="absolute bottom-16 left-0 text-3xl">,,,</div>
          <p className="font-kufi-arabic text-2xl font-medium text-center">
            {" "}
            ...درد یا لذت کاری که انجام میدی نمیمونه اما افتخار یا شرمندگیش چرا
          </p>
          <div className="absolute top-11 right-0 text-3xl">,,,</div>
        </div>
      </div>
      <div>
        {/* projects */}
        <div className="pb-16">
          <div className="flex gap-4 items-center">
            <div className="w-full flex items-center gap-10">
              <div className="flex">
                <span className="text-primary text-4xl font-medium">#</span>
                <p className="text-4xl font-medium">projects</p>
              </div>
              <div className="border border-primary h-[1px] w-3/4"></div>
            </div>
            <div className="flex flex-row items-center">
              <p className="text-base font-medium w-full">View all</p>
              <IconArrowRight size={42} />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center pb-28">
          <div className="border border-gray-primary">
            <Image
              src={"/images/pixel.png"}
              alt="pixel"
              width={350}
              height={540}
              className=""
            />
            <div className="border border-gray-primary p-2">
              <p className="text-base font-normal">
                Next.js Tailwind CSS TypeScript
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4 items-start">
              <p className="text-2xl font-medium">pixelgenius</p>
              <p className="text-base font-normal text-gray-primary">
                Market place
              </p>
              <div className="flex gap-1 items-center px-4  py-2 border border-primary">
                <p>Demo</p>
                <IconPlayerPlay scale={10} />
              </div>
            </div>
          </div>
          <div className="border border-gray-primary">
            <Image
              src={"/images/pixel.png"}
              alt="pixel"
              width={350}
              height={540}
              className=""
            />
            <div className="border border-gray-primary p-2">
              <p className="text-base font-normal">
                Next.js Tailwind CSS TypeScript
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4 items-start">
              <p className="text-2xl font-medium">pixelgenius</p>
              <p className="text-base font-normal text-gray-primary">
                Market place
              </p>
              <div className="flex gap-1 items-center px-4  py-2 border border-primary">
                <p>Demo</p>
                <IconPlayerPlay scale={10} />
              </div>
            </div>
          </div>
          <div className="border border-gray-primary">
            <Image
              src={"/images/pixel.png"}
              alt="pixel"
              width={350}
              height={540}
              className=""
            />
            <div className="border border-gray-primary p-2">
              <p className="text-base font-normal">
                Next.js Tailwind CSS TypeScript
              </p>
            </div>
            <div className="p-4 flex flex-col gap-4 items-start">
              <p className="text-2xl font-medium">pixelgenius</p>
              <p className="text-base font-normal text-gray-primary">
                Market place
              </p>
              <div className="flex gap-1 items-center px-4  py-2 border border-primary">
                <p>Demo</p>
                <IconPlayerPlay scale={10} />
              </div>
            </div>
          </div>
        </div>
        {/* skills */}
        <div className="">
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
          <div className="flex gap-2 ">
            <div className="w-1/2 ">asdasdasd</div>
            <div className="w-1/2">asdasd</div>
          </div>
        </div>
      </div>
    </div>
  );
}
