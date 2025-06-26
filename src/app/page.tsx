import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-10">
      <div className="flex justify-center items-center">
        <div className="flex gap-3 items-center">
          <div className="flex flex-col gap-7 w-1/2">
            <p className="text-4xl font-semibold">
              Erfan Kashef is a{" "}
              <span className="text-primary">front-end developer</span> who
              loves to build
            </p>
            <p className="text-base font-normal text-gray-primary">
              He crafts responsive websites where technologies meet creativity
            </p>
            <div>
              <button
                className="border border-primary text-white px-4 py-2 rounded-md"
                type="button"
              >
                Contact me!!
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/images/ErfanKashef.png"
              alt="Erfan Kashef"
              width={700}
              height={700}
            />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
