import Image from "next/image";
import rocketImg from "../../../public/rocket.png";
import searchImg from "../../../public/search-engine.png";
import blueThunder from "../../../public/blue-thunder.png";

const HowItWorks = () => {
  return (
    <div className="bg-white text-black py-10">
      <p className="text-xl tracking-tighter font-semibold text-black text-center">How it works</p>
      <h3 className="text-blue-500 text-center mt-2 font-bold text-2xl md:text-4xl">
        Create a resume in minutes
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-10 mt-15 md:mt-10'>
          <div className="flex flex-col items-center border-b md:border-none border-blue-300 pb-5 md:pb-0">
            <Image src={rocketImg} width={50} height={50} alt="Effortless" />
            <h4 className="mt-3 font-extrabold text-xl md:text-3xl tracking-tight text-black">Effortless</h4>
            <p className="font-bold text-center px-25 md:px-10 pt-3">
              Easy to use with a step-by-step wizard that guides you through choosing the right words to use in each section.
            </p>
          </div>
          <div className="flex flex-col items-center border-b md:border-none border-blue-300 pb-5 md:pb-0">
            <Image src={searchImg} width={50} height={50} alt="Cutting-edge" />
            <h4 className="mt-3 font-extrabold text-xl md:text-3xl tracking-tight text-black">Cutting-edge</h4>
            <p className="font-bold text-center px-25 md:px-10 pt-3">
              Our state-of-the-art technology helps you complete a stand-out resume easily and quickly.
            </p>
          </div>
          <div className="flex flex-col items-center border-b md:border-none border-blue-300 pb-5 md:pb-0">
            <Image src={blueThunder} width={50} height={50} alt="Powerful" />
            <h4 className="mt-3 font-extrabold text-xl md:text-3xl tracking-tight text-black">Powerful</h4>
            <p className="font-bold text-center px-25 md:px-10 pt-3">
              Your resume will showcase your greatest strengths, talents, and accomplishments.
            </p>
          </div>
      </div>
    </div>
  );
};

export default HowItWorks;