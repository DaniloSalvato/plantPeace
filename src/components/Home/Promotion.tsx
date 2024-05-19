import { useEffect, useState } from "react";
import SplideSlider from "./SplideSlider";
import { IPlantProps } from "../../types/plant";

const Promotion = () => {
  const [plants, setPlants] = useState<IPlantProps[] | null>(null);
  useEffect(() => {
    async function getPlants() {
      const res = await fetch("http://localhost:3000/plants");
      const json = await res.json();
      console.log(json);
      setPlants(json);
    }
    getPlants();
  }, []);

  return (
    <section className="bg-customWisper">
      <h1 className="flex justify-center font-garamondSerif font-bold text-4xl xl:text-6xl text-customLunarGreen">
        Plants In{" "}
        <span className="font-garamondSerif font-bold text-customAvocado pl-3">
          Sale
        </span>
      </h1>

      <div className="pt-20 pl-10 pb-20">
        {plants && (
          <SplideSlider plants={plants!.filter((plants) => plants.isInSale)} />
        )}
      </div>
    </section>
  );
};

export default Promotion;
