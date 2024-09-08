import { Splide, SplideSlide } from "react-splide-ts";
import "react-splide-ts/css";
import PlantCard from "./PlantCard"
import { IPlantProps } from "../../types/plant"

type Data = {
  plants: IPlantProps[]
}

const SplideSlider = ({ plants }: Data) => {
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
        gap: "2rem",
      }}
      aria-label="My favorite Images"
    >
      {plants.map((plant: IPlantProps, index) => (
        <SplideSlide key={index}>
          <PlantCard
            id={plant.id}
            title={plant.name}
            price={+plant.price}
            promo={+plant.discountPercentage}
            isInSale={plant.isInSale}
            category={plant.label}
            imageUrl={plant.imgUrl}
          />
        </SplideSlide>
      ))}
    </Splide>
  )
}

export default SplideSlider
