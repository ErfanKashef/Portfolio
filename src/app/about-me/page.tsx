import Image from "next/image";
import Aboutskills from "./_components/aboutskills";
import { IconBrandInstagram, IconMail, IconPhone } from "@tabler/icons-react";

const skills = [
  { title: "🛠️ Tools", content: "• Git • VS Code • Figma" },
  { title: "🧰 Other", content: "• Responsive Design" },
  {
    title: "🧩 Languages",
    content: "• HTML • CSS • JavaScript • TypeScript • Sass/SCSS",
  },
  {
    title: "📚 Libraries",
    content:
      "• React • Tailwind CSS • Bootstrap • Shadcn UI • Zod • React Hook Form • Framer Motion",
  },
  {
    title: "💖 Taste",
    content:
      "• Responsive Design • Tailwind CSS • Shadcn UI • Framer Motion • React",
  },
  {
    title: "🧱 Frameworks",
    content: "• Next.js • TurboRepo",
  },
];

const Aboutpage = () => {
  return (
    <div>
      {/* heder */}
      <div className="pb-32 px-4 ">
        <div>
          <div className="flex flex-row gap-0.5 items-center pt-10">
            <span className="text-primary text-3xl md:text-4xl font-medium">
              /{" "}
            </span>
            <p className="text-3xl md:text-4xl font-medium">about-me</p>
          </div>
        </div>

        <div className="pb-10 md:pb-28">
          <p className="text-base font-normal">Who am i?</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
            <p>
              Hi, I’m Erfan – a front-end developer passionate about building
              beautiful and high-performance web interfaces using Next.js,
              TypeScript, and Tailwind CSS. I love working with a
              component-based structure and crafting clean, scalable code.
            </p>
            <p>
              I’m proficient in JavaScript and currently expanding my skills in
              React, using tools like Redux, TipTap, React Hook Form, and Zod. I
              enjoy bringing designs to life with smooth animations using Framer
              Motion and modern UI libraries like shadcn/ui.
            </p>
            <p>
              With a strong interest in UI/UX design, I pay great attention to
              detail and responsiveness. I’m comfortable working with Figma and
              always aim to create user-friendly and visually appealing
              experiences across all devices.
            </p>
            <p>
              Lately, I’ve been working on interactive projects such as
              restaurant menus, product pages, and shopping carts – always with
              a focus on clean structure, user experience, and performance.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center relative mt-10 md:mt-0">
            <Image
              src="/images/erfankashef4.png"
              alt="Erfan Kashef"
              width={400}
              height={400}
              className="w-[70%] md:w-[400px] h-auto"
            />
            <Image
              src="/svg/Dots.svg"
              alt="Dots"
              width={100}
              height={100}
              className="absolute bottom-10 right-10 hidden md:block"
            />
            <Image
              src="/svg/Logo.svg"
              alt="Logo"
              width={300}
              height={300}
              className="absolute top-0 -z-10 hidden md:block"
            />
            <div className="hidden md:block absolute border border-gray-primary w-24 h-24 bottom-16 left-36"></div>
          </div>
        </div>
      </div>
      {/* skills */}
      <div>
        <div className="pb-12">
          <p className=" text-4xl font-medium">
            <span className="text-primary">#</span>skills
          </p>
        </div>
        <div className="flex flex-wrap gap-2 items-start pb-24">
          <div className="flex flex-wrap gap-1 justify-between pb-24">
            {skills.map((item, index) => (
              <Aboutskills
                key={index}
                title={item.title}
                content={item.content}
              />
            ))}
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
                I’m interested in freelance opportunities. However, if you have
                other requests or questions, don’t hesitate to contact me.
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
  );
};

export default Aboutpage;
