import img3 from "../../assets/img-promo.jpg";
import img1 from "../../assets/img1-container-3.png";
import img2 from "../../assets/img2-container3.png";
import SplideSlider from "./SplideSlider";


const Promotion = () => {

    const images = [img1, img2, img3, img3, img3, img3, img3, img3, img3, img3, img3, img3, img3, img3, img3, img3, img3, img3];
  return (
    <section className="bg-customWisper">
      <h1 className="flex justify-center font-garamondSerif font-bold text-4xl xl:text-6xl text-customLunarGreen">
        Plants In <span className="font-garamondSerif font-bold text-customAvocado pl-3">Sale</span>
      </h1>

      <div className="pt-20 pl-10 pb-20">
        <SplideSlider images={images}/>
      </div>
    </section>
  );
};

export default Promotion;
