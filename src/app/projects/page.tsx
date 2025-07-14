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
        <div className="">
          {/* complete-apps */}
          <div>
            <div className="pb-12">
              <p className="text-4xl font-medium">
                <span className="text-4xl text-primary font-medium">#</span>{" "}
                complete-apps
              </p>
            </div>
            <div className="flex flex-wrap gap-4 justify-start items-center pb-20">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
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
            <div className="flex flex-wrap gap-4 justify-start items-center pb-44">
              <Miniprojectcard />
              <Miniprojectcard />
              <Miniprojectcard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectspage;
