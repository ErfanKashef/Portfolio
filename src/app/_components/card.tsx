import { IconPlayerPlay } from "@tabler/icons-react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="border border-gray-primary">
      <Image
        src={"/images/pixel.png"}
        alt="pixel"
        width={350}
        height={540}
        className=""
      />
      <div className="border border-gray-primary p-2">
        <p className="text-base font-normal">Next.js Tailwind CSS TypeScript</p>
      </div>
      <div className="p-4 flex flex-col gap-4 items-start">
        <p className="text-2xl font-medium">pixelgenius</p>
        <p className="text-base font-normal text-gray-primary">Market place</p>
        <button
          className="flex gap-1 items-center border border-primary text-white px-4 py-2 rounded-md"
          type="button"
        >
          Deemo 
          <IconPlayerPlay scale={10} />
        </button>
      </div>
    </div>
  );
};

export default Card;
