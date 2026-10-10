import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="pb-24">
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
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="p-4 text-center lg:text-left">
            <p className="font-normal text-2xl pb-7">
              I am passionate about discovering new challenges and addressing
              them effectively. I find working in a team both inspiring and
              rewarding, and I have a proven track record of excelling in
              collaborative projects and team-based environments.
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
    </section>
  );
}
