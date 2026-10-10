import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import Card from "../card";
import { projects } from "../../_data/projects";

export default function ProjectsSection() {
  return (
    <section className="pb-24">
      <div className="pb-16">
        <div className="flex gap-4 items-center">
          <div className="w-full flex items-center gap-10">
            <div className="flex">
              <span className="text-primary text-4xl font-medium">#</span>
              <p className="text-4xl font-medium">projects</p>
            </div>
            <div className="border border-primary h-[1px] w-3/4"></div>
          </div>
          <Link href="/projects" className="flex flex-row items-center">
            <p className="text-base font-medium w-full">View all</p>
            <IconArrowRight size={42} />
          </Link>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {projects.map((project) => (
            <Card key={project.title} {...project} showButton={false} />
          ))}
        </div>
      </div>
    </section>
  );
}
