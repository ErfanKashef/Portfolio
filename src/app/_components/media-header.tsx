import {
  IconBrandDribbble,
  IconBrandFigma,
  IconBrandGithub,
} from "@tabler/icons-react";

const MediaHeader = () => {
  return (
    <div className=" inline-flex flex-col gap-26 items-center justify-center absolute">
      <div className="w-[191px] h-[1px] bg-gray-primary rotate-90"></div>
      <div className="flex flex-col items-center gap-2 text-gray-primary ">
        <IconBrandGithub size={32} />
        <IconBrandDribbble size={32} />
        <IconBrandFigma size={32} />
      </div>
    </div>
  );
};

export default MediaHeader;
