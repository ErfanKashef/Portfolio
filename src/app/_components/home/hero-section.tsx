import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex justify-center items-center pb-24 px-4">
      <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
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

        <div className="relative flex flex-col items-center">
          <Image
            src="svg/Logo.svg"
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
            src="svg/Dots.svg"
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
    </section>
  );
}
