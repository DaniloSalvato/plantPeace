import data from "../../data/devs.json";

import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

interface Person {
  image: string;
  name: string;
  description: string;
  linkedin: string;
  github: string;
}

const people: Person[] = data;

const AboutUs = () => {
  return (
    <main className="w-full bg-customWisper">
      <section className="mb-20 flex flex-col justify-center items-center text-center gap-4">
        <h1 className="font-garamondSerif font-bold text-4xl text-customLunarGreen mt-9">
          About <span className=" text-customAvocado">Us</span>
        </h1>
      </section>

      <section className="flex flex-col justify-center gap-x-9 items-center text-center xl:flex-row xl:flex-wrap">
        {people.map((person, index) => (
          <div key={index} className=" flex flex-col sm:flex sm:flex-row w-48 mb-16 m-5 sm:w-2/5 md:w-1/3 sm:justify-center">
            <img src={person.image} className=" rounded-t-3xl sm:h-64 sm:rounded-none sm:rounded-tl-3xl sm:rounded-bl-3xl" />
            <div className=" flex flex-col justify-around bg-customAthenaGrey border-x border-b border-customAvocado rounded-b-3xl h-60 sm:h-64 sm:px-2 sm:rounded-none sm:rounded-tr-3xl sm:rounded-br-3xl sm:border-x-0 sm:border-t sm:border-r">
              <h4 className="font-lato font-semibold text-lg text-nowrap">{person.name}</h4>
              <p className="font-raleway text-sm tracking-wide text-customSecondary my-3 mx-3 sm:mx-1  lg:text-sm">
                {person.description}
              </p>

              <div className="flex flex-row-reverse gap-1 mr-6 mb-3">
                <a href={person.github} target="_blank">
                  <IoLogoGithub className="w-5 h-5 text-customLunarGreen transition-all hover:scale-150" />
                </a>
                <a href={person.linkedin} target="_blank">
                  <FaLinkedin className="w-5 h-5 text-customLunarGreen transition-all hover:scale-150" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default AboutUs;
