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
    <article className="flex h-full w-full flex-col overflow-hidden border border-gray-primary">
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {tech && (
        <div className="border border-gray-primary p-2">
          <p className="text-base font-normal">{tech}</p>
        </div>
      )}

      <div className="flex flex-1 flex-col items-start gap-4 p-4">
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
    </article>
  );
};

export default Card;
