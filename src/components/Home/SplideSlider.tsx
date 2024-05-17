import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import PlantCard from "./PlantCard";
import { IPlantProps } from "../../types/plant";



const SplideSlider = ( {plants} : IPlantProps[]) => {
  return (
    <Splide
      options={{
        type: "slide",
        height: "auto",
        width: "auto",
        arrows: false,
        pagination: false,
        autoplay: false,
        rewind: false,
        autoWidth: true,
        autoHeight: true,
        gap: "4rem"
      }}
      aria-label="My favorite Images"
    >
      {plants.map((plant: IPlantProps) => (
        <SplideSlide key={plant.name}>
          <PlantCard
            title={plant.name}
            price={+plant.price}
            promo={+plant.discountPercentage}
            category={plant.label}
            imageUrl={plant.imgUrl}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideSlider;
