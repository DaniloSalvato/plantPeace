import { FiArrowRight } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

import secondPlant from "../../assets/secondary-plant.png"

const Discover = () => {
  return (
    <div className="flex h-1/2 w-full bg-customWisper">
      <div className="flex-1 mx-6 mt-6 lg:mx-20 lg:mt-20 lg:relative xl:mt-40 2xl:mt-60">
        <p className="flex items-center text-1xl font-cursive">
          <FaMinus className="mr-2" />
          Love for Nature
        </p>

        <p className="text-customLunarGreen mt-6 font-garamondSerif font-bold text-5xl leading-tight">
          Discover Your <span className="text-customAvocado">Green</span> <br />
          Side
        </p>

        <p className="font-raleway text-customSecondary mt-3 text-sm py-3">
          We are your one-stop destination for all things green and growing. Our
          website offers a wide array of stunning plants, ranging from vibrant
          flowers to lush indoor foliage, allowing you to create your very own
          green oasis.
        </p>

        <Link to={"*"}>
          <button className="flex justify-start py-2 px-7 mt-3 font-raleway text-customAthenaGrey bg-customLunarGreen shadow-2xl transition-all hover:text-customLunarGreen hover:bg-customWisper hover:ring-1 hover:ring-customLunarGreen ">
            Shop now
          </button>
        </Link>

        <div className="hidden lg:block lg:absolute lg:-bottom-6 lg:-left-20 grayscale">
             <img
               className="lg:w-1/2 xl:w-2/3"
               src={secondPlant}
               alt=""
             />
           </div>

        <Link to={"*"}>
          <div className="flex my-4 md:pt-40 lg:absolute lg:bottom-0 lg:left-0 hover:text-customLunarGreen font-raleway text-customSecondary text-sm items-center">
            Learn Gardening
            <FiArrowRight className="mr-3 cursor-pointer space-x-2" />
          </div>
        </Link>
      </div>


      <div className="hidden sm:object-cover sm:flex-1 sm:block w-1/2 justify-center items-end">
        <img
          className="h-full w-full object-cover grayscale"
          src="/src/assets/main-plant.png"
          alt="plant"
        />
      </div>
    </div>
  );
};

export default Discover;
