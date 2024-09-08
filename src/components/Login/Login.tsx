import { SignInButton } from "@clerk/clerk-react";
import { PiPlantDuotone } from "react-icons/pi";

import plant1 from "../../assets/login-imgs/Login-1.jpg";
import plant2 from "../../assets/login-imgs/Login-2.jpg";
import plant3 from "../../assets/login-imgs/Login-3.jpg";
import plant4 from "../../assets/login-imgs/Login-4.jpg";

import { useEffect, useState } from "react";

const Login = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const plants = [plant1, plant2, plant3, plant4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % plants.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [plants.length]);

  return (
    <div className="flex h-screen w-full justify-end">
      {plants.map((plant, index) => (
        <img
          key={index}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
          src={plant}
          alt={`Imagem ${index + 1}`}
        />
      ))}

      <div className="flex flex-col h-full w-full z-50 sm:w-[40%] md:w[30%] items-center justify-center bg-white">
        <div className="flex flex-col items-center justify-center text-customLunarGreen font-lato text-4xl mt-4">
          <span><PiPlantDuotone  className="size-20 text-customAvocado" /></span>
          <p className="font-bold font-raleway">Welcome back!</p>
          <p className="text-customAvocado text-center font-lato text-xl mt-2">
            Looking for some plants?
          </p>
        </div>
        <div className="flex justify-center py-5">
          <button className="w-48 p-4 md:mt-10 lg:mt-20 bg-customLunarGreen text-sm font-raleway text-customWhite text-center transition-all hover:text-customLunarGreen hover:bg-customAvocado hover:scale-105 shadow-2xl rounded-xl">
            <SignInButton mode="redirect" forceRedirectUrl="/home" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
