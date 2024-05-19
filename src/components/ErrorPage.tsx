import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-customWisper">
      <div className="flex flex-1 items-center justify-center flex-col">
      <h1 className="text-customLunarGreen text-6xl font-bold mb-4">404 - Page not Found!</h1>  
      <p className="text-customLunarGreen text-xl">Sorry, but the page you are looking for could not be found.</p>
      
      <Link to={"/home"}>
      <button className="mt-20 bg-customLunarGreen transition-all hover:text-customLunarGreen hover:bg-customWhite hover:ring-1 hover:ring-customLunarGreen text-customAthenaGrey font-raleway py-2 px-7 flex shadow-2xl items-center">
        Voltar
      </button>
      </Link>
      </div>
      <div className="flex flex-1 items-center justify-center">
      <img
        className="size-96"
        src="/src/assets/planta-removebg.png"
        alt="Erro"/>
      </div>
    </div>
  );
};

export default ErrorPage;
