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
        <div className="w-full max-w-5xl mx-auto px-4 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
            {/* first row */}
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
              title="leven"
              description="Market place"
              buttonLabel="View Project"
              showButton={false}
            />
            <Card
              image="/images/prtfolio.png"
              tech="Next.js Tailwind CSS TypeScript"
              title="prtfolio"
              description="Market place"
              buttonLabel="View Project"
              showButton={false}
            />
            {/* Second line — fourth card under the first card */}
            <div className="lg:col-start-1">
              <Card
                image="/images/cigaret.png"
                tech="Next.js Tailwind CSS TypeScript"
                title="cigaret"
                description="Market place"
                buttonLabel="View Project"
                showButton={false}
              />
            </div>
          </div>
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
