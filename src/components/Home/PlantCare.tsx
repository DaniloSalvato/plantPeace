import imgFirst from "../../assets/img0-container-2.png";
import imgSecond from "../../assets/img1-container-2.png";
import imgThird from "../../assets/img2-container2.png";

import { FiDroplet } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";

const PlantCare = () => {
  return (
    <main className=" w-full mt-24  bg-customWhite">

      <section className="mb-20 flex flex-col justify-center items-center text-center gap-4">
        <h1 className="font-garamondSerif font-bold text-4xl text-customLunarGreen">Steps To Take Care Of Your <span className=" text-customAvocado">Plants</span></h1>
        <p className="text-customGray text-base w-2/3 leading-7">By following these three steps - proper watering, appropriate sunlight, and providing essential nutrients - you'll be well on your way to maintaining healthy and thriving plants.</p>
      </section>

      <section className="flex flex-col justify-evenly gap-7 items-center lg:flex-row text-center">

        <div className="flex flex-col gap-12 w-96 h-80 px-2 items-center">
          <div className="flex justify-center items-center bg-customLunarGreen w-16 h-16 rounded-full"><FiDroplet className=" text-white w-5 h-5" /></div>
          <h2 className="font-lato font-bold text-2xl text-customIBBNB">Watering</h2>
          <p className="font-raleway text-sm text-customSecondary leading-6">water your plants when the top inch of soil feels dry to the touch. Avoid overwatering, as it can lead to root  dehydration.</p>
        </div>

        <div className="flex flex-col gap-12 w-96 h-80 px-2 items-center ">
          <div className="flex justify-center items-center bg-customLunarGreen w-16 h-16 rounded-full"><FiSun className=" text-white w-5 h-5" /></div>
          <h2 className="font-lato font-bold text-2xl text-customIBBNB">Sunlight</h2>
          <p className="font-raleway text-sm text-customSecondary leading-6">Most plants need adequate sunlight to thrive. Place your plants in areas that receive the appropriate amount of light for their specific needs</p>
        </div>

        <div className="flex flex-col gap-12 w-96 h-80 px-2 items-center ">
          <div className="flex justify-center items-center bg-customLunarGreen w-16 h-16 rounded-full"><FiShoppingBag className=" text-white w-5 h-5" /></div>
          <h2 className="font-lato font-bold text-2xl text-customIBBNB ">Nutrients and Fertilizing</h2>
          <p className="font-raleway text-sm text-customSecondary leading-6">Choose a suitable fertilizer based on the specific needs of your plants, whether it's a balanced or specialized formula.</p>
        </div>

      </section>

      <section className="flex justify-evenly flex-col gap-5 items-center mb-24 mt-20 xl:flex-row xl:items-start">
        <img src={imgFirst} className="w-1/4 hidden xl:block" />
        <img src={imgSecond} className="w-1/4 hidden xl:block" />

        <div className="flex flex-col gap-6 w-2/4 xl:w-1/4">
          <img src={imgThird} className="w-full" />
          <p className="text-sm font-raleway text-customSecondary leading-6">Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage, allowing you to create your very own green oasis. In addition to our extensive plant selection, 
            we also provide gardening kits and fertilizers to equip you with everything you need to nurture your plants and achieve gardening success. But we don't stop there! We believe that knowledge is the key to a 
            thriving garden, so we offer a wealth of information and resources on gardening techniques, plant care tips, and landscaping ideas. Whether you're a seasoned gardener or just starting your green journey, our 
            goal is to inspire and support you every step of the way. Get ready to explore our virtual garden and discover the joys of gardening with us!
          </p>
          <button className="w-48 p-4 bg-customLunarGreen text-sm font-raleway text-customWhite text-center">See more photos</button>
        </div>
      </section>

    </main>
  )
}

export default PlantCare;

// Teste Commit