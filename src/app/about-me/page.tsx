import Image from "next/image";

const Aboutpage = () => {
  return (
    <div>
      {/* heder */}
      <div>
        <div>
          <div className="flex flex-row gap-0.5 items-center pt-10">
            <span className="text-primary text-4xl font-medium">/ </span>
            <p className="text-4xl font-medium">about-me</p>
          </div>
        </div>
        <div>
          <p className="text-base font-normal ">Who am i?</p>
        </div>
        <div className="flex ">
          <div className="w-1/2"></div>
          <div className="flex justify-center items-center w-1/2">
            <Image
              src="/images/erfankashef3.png"
              alt="Erfan Kashef"
              width={700}
              height={700}
              className="-mt-56"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
