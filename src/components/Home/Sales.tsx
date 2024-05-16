
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import image01 from "../../assets/img0-container-3.png";
import image02 from "../../assets/img1-container-3.png";
import image03 from "../../assets/img2-container3.png";
import image04 from "../../assets/img3-container3.png";

const Sales = () => {
    const images=[image01, image02, image03, image04]
    return(
        <section className='flex flex-col justify-center items-center p-8'>
            
            <h2 className='text-xl font-garamondSerif font-bold mb-12 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                <span className='text-customLunarGreen'>This Weeks Most Popular</span>
                <span className='text-customAvocado'> And Best Selling</span>
            </h2>

            <div>
                <Splide options={{ type: 'loop', perPage: 4, perMove: 1, autoplay: true, interval: 5000, gap: '1rem'}} aria-labelledby="this weeks">
                    {images.map((image) => (
                        <SplideSlide>  
                        <img src={image} alt=""/>
                        </SplideSlide>
                        
                    ))}
                    
                </Splide>
            </div>
        </section>
    )
};

export default Sales;