import { FiArrowRight } from 'react-icons/fi';
import { FaMinus } from 'react-icons/fa';

const Discover = () => {
   
  return (
    <div className= "columns-2 flex bg-customWisper">
                 
        <div className="w-1/2 md:w-full">
            <div className="">
            <p className="font-cursive px-10 py-8 text-1xl flex items-center"><FaMinus className="mr-2"/>Love for Nature</p> 
            <p className="font-garamondSerif px-10 font-bold text-5xl text-customLunarGreen">Discover Your <span className="text-customAvocado">Green</span> <br/> Side</p>
            <p className="font-raleway text-customSecondary px-10 text-sm py-3">We are your one-stop destination for all things green and growing. Our website <br/> offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor <br/> foliage, allowing you to create your very own green oasis. </p>
            <button className="bg-customLunarGreen hover:bg-green-900 text-white font-raleway py-2 px-7 flex justify-start m-10 my-2">
            Shop now
            </button>

            <div className="relative h-40 w-40">
            <img className="grayscale" src="/src/assets/secondary-plant.png" alt=""/></div>
            <div className="flex bottom-0 right-0 font-raleway text-customSecondary px-10 text-sm items-center">Learn Gardening <FiArrowRight className="mr-3 cursor-pointer space-x-2"/></div>

            </div>

        </div>
        
        <div className="hidden sm:block w-1/2 justify-center items-end">
            <img className= "h-full w-auto grayscale" src="/src/assets/main-plant.png" alt=""/>
        </div>

    </div>
  );
};

export default Discover;
