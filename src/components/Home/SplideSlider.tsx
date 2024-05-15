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
        type: 'slide',
        heightRatio: 0.5,
        arrows: false,
        pagination: false, 
        autoplay: false,
        rewind: true,
      }}
      aria-label="My favorite Images"
      className="splide-with-gap"
    >
      {images.map((image, index) => (
        <SplideSlide key={index}>
          <PlantCard title={"teste"} price={0} promo={0} category={"teste2"} imageUrl={image}/>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SplideSlider;
