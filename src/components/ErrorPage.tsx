import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="flex items-center justify-center bg-customWisper">
      <div className="flex flex-col-reverse h-screen w-3/5 items-center justify-center md:flex-row ">
        <article className="flex flex-1 items-center justify-center flex-col">
          <h1 className="inline-block text-center px-3 text-customLunarGreen text-4xl lg:text-6xl font-bold mb-4">
            404 - Page not Found!
          </h1>
          <p className="inline-block text-center px-3 text-customLunarGreen text-xl">
            Sorry, but the page you are looking for could not be found.
          </p>

          <Link to={"/home"}>
            <button className="mt-12 lg:mt-20 bg-customLunarGreen transition-all hover:text-customLunarGreen hover:bg-customWhite hover:ring-1 hover:ring-customLunarGreen text-customAthenaGrey font-raleway py-2 px-7 flex shadow-2xl items-center">
              Voltar
            </button>
          </Link>
        </article>
        <article className="flex flex-1 items-center justify-center">
          <img
            className="size-52 lg:size-96"
            src="/src/assets/planta-removebg.png"
            alt="Erro"
          />
        </article>
      </div>
    </section>
  );
};

export default ErrorPage;
