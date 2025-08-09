import Card from "./card";

const ProjectWarp = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 items-start">
      <Card
        image="/images/pixel.png"
        tech="Next.js Tailwind CSS TypeScript"
        title="pixelgenius"
        description="Market place"
        buttonLabel="View Project"
        showButton={false}
      />
      <Card
        image="/images/leven.png"
        tech="Next.js Tailwind CSS TypeScript"
        title="pixelgenius"
        description="Market place"
        buttonLabel="View Project"
        showButton={false}
      />
      <Card
        image="/images/prtfolio.png"
        tech="Next.js Tailwind CSS TypeScript"
        title="pixelgenius"
        description="Market place"
        buttonLabel="View Project"
        showButton={false}
      />
      {/* This will always break to new line and stick to the left */}
      <div className="border border-amber-600  flex justify-start">
        <Card
          image="/images/cigaret.png"
          tech="Next.js Tailwind CSS TypeScript"
          title="pixelgenius"
          description="Market place"
          buttonLabel="View Project"
          showButton={false}
        />
      </div>
    </div>
  );
};

export default ProjectWarp;