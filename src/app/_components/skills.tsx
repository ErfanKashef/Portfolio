import Image from "next/image";

const Skills = () => {
  return (
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
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-6 grid-rows-none lg:grid-rows-6 gap-4">
          {/* Tools */}
          <div className="lg:col-start-6 lg:row-start-1 lg:row-span-2 border border-gray-primary">
            <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
              🛠️ Tools
            </div>
            <div className="flex gap-2 text-gray-400 p-2">
              •Git •VS Code •Figma
            </div>
          </div>

          {/* Libraries */}
          <div className="lg:col-start-6 lg:row-start-3 lg:row-span-2 border border-gray-primary">
            <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
              📚 Libraries
            </div>
            <div className="flex gap-2 text-gray-400 p-2">
              •React •Tailwind CSS •Bootstrap •Shadcn UI •Zod •React Hook Form
              •Framer Motion •TanStackQuery
            </div>
          </div>

          {/* Frameworks */}
          <div className="lg:col-start-6 lg:row-start-5 lg:row-span-2 border border-gray-primary">
            <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
              🧱 Frameworks
            </div>
            <div className="flex gap-2 text-gray-400 p-2">
              •Next.js •TurboRepo
            </div>
          </div>

          {/* Other */}
          <div className="lg:col-start-5 lg:row-start-1 lg:row-span-2 border border-gray-primary">
            <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
              🧰 Other
            </div>
            <div className="flex gap-2 text-gray-400 p-2">
              •Responsive Design
            </div>
          </div>

          {/* Taste */}
          <div className="lg:col-start-5 lg:row-start-3 lg:row-span-2 border border-gray-primary">
            <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
              💖 Taste
            </div>
            <div className="flex gap-2 text-gray-400 p-2">
              •Responsive Design •Tailwind CSS •Shadcn UI •Framer Motion •React
            </div>
          </div>

          {/* Languages */}
          <div className="lg:col-start-4 lg:row-start-1 lg:row-span-2 border border-gray-primary">
            <div className="border-b border-gray-primary p-2 text-lg font-semibold flex gap-2">
              🧩 Languages
            </div>
            <div className="flex gap-2 text-gray-400 p-2">
              •HTML •CSS •JavaScript •TypeScript •Sass/SCSS
            </div>
          </div>

          {/* Logo + Decorations */}
          <div className="hidden lg:block lg:col-start-1 lg:row-start-1 lg:col-span-3 lg:row-span-6 relative">
            <Image
              src="svg/Logo.svg"
              alt="Erfan Kashef"
              width={200}
              height={200}
              className="absolute bottom-11 left-6"
            />
            <div className="absolute border border-gray-primary w-24 h-24 top-15 right-45"></div>
            <Image
              src="svg/Dots.svg"
              alt="Erfan Kashef"
              width={100}
              height={100}
              className="absolute top-11 left-16"
            />
            <Image
              src="svg/Dots.svg"
              alt="Erfan Kashef"
              width={100}
              height={100}
              className="absolute bottom-45 right-72"
            />
            <div className="absolute border border-gray-primary w-14 h-14 bottom-25 right-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
