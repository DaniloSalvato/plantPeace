import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import PlantCard from "./PlantCard";

type Images = {
  images: string[];
};

const SplideSlider = ({ images }: Images) => {
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
        autoWidth : true,
        autoHeight : true,
        gap: '4rem'
      }}
      aria-label="My favorite Images"
    >
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <PlantCard
            title={"teste"}
            price={15.0}
            promo={15.0}
            category={"teste2"}
            imageUrl={image}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideSlider;
