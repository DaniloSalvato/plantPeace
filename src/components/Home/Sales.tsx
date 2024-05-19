import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

// importação de imagens
import image01 from "../../assets/img0-container-3.png";
import image02 from "../../assets/img1-container-3.png";
import image03 from "../../assets/img2-container3.png";
import image04 from "../../assets/img-promo.jpg";
import SplideSlider from './SplideSlider';

// componente que cria um array
const Sales = () => {
    const images=[image01, image02, image03, image04]
    return( // retorno de um elemento JSX < />
        <section className='bg-customWisper'>
            
            <h1 className='flex justify-center font-garamondSerif font-bold text-4xl xl:text-6xl'>
                <span className='text-customLunarGreen'>This Weeks Most Popular</span>&nbsp;<span className='text-customAvocado'>And Best Selling</span>
            </h1>

            <div className="pt-20 pl-10 pb-20">
                <SplideSlider images={images} />
            </div>
        </section>
    )
};

export default Sales;
