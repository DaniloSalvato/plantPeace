import "@splidejs/splide/dist/css/splide.min.css";
import SplideSlider from "./SplideSlider";
import { useEffect, useState } from "react";
import { IPlantProps } from "../../types/plant";

const Sales = () => {
  const [plants, setPlants] = useState<IPlantProps[] | null>(null);

  useEffect(() => {
    async function getPlants() {
      const res = await fetch("http://localhost:3000/plants");
      const json = await res.json();
      setPlants(json);
    }
    getPlants();
  }, []);

  return (
    <section className="bg-customWisper">
      <h1 className="inline-block w-full text-center mt-10 mb-12 text-4xl lg:mb-20 lg:text-6xl font-garamondSerif font-bold text-customLunarGreen">
        This Weeks Most Popular
        <span className=" ml-1 text-customAvocado ">
          And Best Selling
        </span>
      </h1>

      <div className="pt-20 pl-10 pb-20">
        {plants && (
          <SplideSlider plants={plants.filter((plants) => !plants.isInSale)} />
        )}
      </div>
    </section>
  );
};

export default Sales;
