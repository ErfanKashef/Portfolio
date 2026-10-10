import {
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

const MediaHeader = () => {
  return (
    <aside
      aria-label="Social media links"
      className="fixed left-5 top-0 z-20 hidden flex-col items-center lg:flex"
    >
      <div aria-hidden="true" className="h-24 w-px bg-current opacity-60" />
      <div className="flex flex-col items-center gap-4 pt-4 text-gray-primary">
        <a
          href="https://github.com/erfankashef"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="rounded-sm transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <IconBrandGithub size={28} />
        </a>
        <a
          href="https://www.instagram.com/erfan_kasheff/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          className="rounded-sm transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <IconBrandInstagram size={28} />
        </a>
        <a
          href="mailto:erfankashefdev@gmail.com"
          aria-label="Send an email"
          className="rounded-sm transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <IconMail size={28} />
        </a>
      </div>
    </aside>
  );
};

export default MediaHeader;
