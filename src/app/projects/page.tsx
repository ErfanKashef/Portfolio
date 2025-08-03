import Card from "../_components/card";
import Miniprojectcard from "../_components/miniprojectcard";

const Projectspage = () => {
  return (
    <div>
      <div>
        <div className="pb-16 pt-14">
          <p className="text-4xl font-semibold">
            <span className="text-primary text-4xl font-semibold">/ </span>
            projects
          </p>
        </div>

        {/* complete-apps */}
        <div className="flex flex-wrap gap-4 items-center justify-center pb-24 ">
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
          <Card
            image="/images/cigaret.png"
            tech="Next.js Tailwind CSS TypeScript"
            title="pixelgenius"
            description="Market place"
            buttonLabel="View Project"
            showButton={false}
          />
        </div>
        {/* small-projects */}
        <div>
          <div className="pb-12">
            <p className="text-4xl font-medium">
              <span className="text-primary text-4xl font-medium">#</span>{" "}
              small-projects
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center pb-44">
            <Miniprojectcard />
            <Miniprojectcard />
            <Miniprojectcard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectspage;
