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
      <h1 className="flex justify-center font-garamondSerif font-bold text-4xl xl:text-6xl">
        <span className="text-customLunarGreen">This Weeks Most Popular</span>
        &nbsp;<span className="text-customAvocado">And Best Selling</span>
      </h1>

      <div className="pt-20 pl-10 pb-20">
        {plants && <SplideSlider plants={plants.filter((plants) => !plants.isInSale)} />}
      </div>
    </section>
  );
};

export default Sales;
