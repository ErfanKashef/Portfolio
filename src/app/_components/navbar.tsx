import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex justify-between pt-8 ">
      <div>
        <p className="text-base font-bold">Erfan Kashef</p>
      </div>
      <div className="flex flex-row gap-8">
        <div>
          <Link href={"/"} className="cursor-pointer">
            <p className="text-base font-medium">
              <span className="text-primary">#</span> Home
            </p>
          </Link>
        </div>
        <div>
          <Link href="/projects" className="cursor-pointer">
            <p className="text-base font-medium">
              <span className="text-primary">#</span> Projects
            </p>
          </Link>
        </div>
        <div>
          <Link href="/about-me" className="cursor-pointer">
            <p className="text-base font-medium">
              <span className="text-primary">#</span> About
            </p>
          </Link>
        </div>
        <div>
          <p className="text-base font-medium">
            <span className="text-primary">#</span> Contact
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
