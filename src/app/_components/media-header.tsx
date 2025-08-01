import {
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

const MediaHeader = () => {
  return (
    <div className="hidden md:flex flex-col items-center gap-4 absolute top-8 left-6">
      <div className="w-[191px] h-[1px] bg-gray-primary rotate-90" />
      <div className="flex flex-col items-center gap-4 text-gray-primary mt-22">
        <a
          href="https://github.com/erfankashef"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandGithub size={28} />
        </a>
        <a
          href="https://www.instagram.com/erfan_kasheff/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBrandInstagram size={28} />
        </a>
        <a
          href="mailto:erfankashefdev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconMail size={28} />
        </a>
      </div>
    </div>
  );
};

export default MediaHeader;
