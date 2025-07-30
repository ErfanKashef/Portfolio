import { IconPlayerPlay } from "@tabler/icons-react";
import Image from "next/image";

type CardProps = {
  image: string;
  tech?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  showButton?: boolean;
};

const Card = ({
  image,
  tech,
  title,
  description,
  buttonLabel = "Demo",
  showButton = true,
}: CardProps) => {
  return (
    <div className="border border-gray-primary">
      <Image
        src={image}
        alt={title}
        width={350}
        height={540}
        className=""
      />

      {tech && (
        <div className="border border-gray-primary p-2">
          <p className="text-base font-normal">{tech}</p>
        </div>
      )}

      <div className="p-4 flex flex-col gap-4 items-start">
        <p className="text-2xl font-medium">{title}</p>
        <p className="text-base font-normal text-gray-primary">{description}</p>

        {showButton && (
          <button
            className="flex gap-1 items-center border border-primary text-white px-4 py-2 rounded-md"
            type="button"
          >
            {buttonLabel}
            <IconPlayerPlay scale={10} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;