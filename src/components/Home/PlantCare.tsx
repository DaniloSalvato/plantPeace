import imgFirst from "../../assets/img0-container-2.png"
import imgSecond from "../../assets/img1-container-2.png"
import imgThird from "../../assets/img2-container2.png"

import { Link } from "react-router-dom"

import { FiDroplet } from "react-icons/fi"
import { FiSun } from "react-icons/fi"
import { FiShoppingBag } from "react-icons/fi"

const PlantCare = () => {
  return (
    <main className=" w-full mt-24  bg-customWhite">
      <section className="mb-20 flex flex-col justify-center items-center text-center gap-4">
        <h1 className="font-garamondSerif font-bold text-4xl text-customLunarGreen">
          Steps To Take Care Of Your{" "}
          <span className=" text-customAvocado">Plants</span>
        </h1>
        <p className=" font-raleway text-customGray text-base w-2/3 leading-7">
          By following these three steps - proper watering, appropriate
          sunlight, and providing essential nutrients - you'll be well on your
          way to maintaining healthy and thriving plants.
        </p>
      </section>

      <section className="flex flex-col justify-evenly items-center lg:flex-row text-center">
        <div className="flex flex-col gap-12 h-96 px-2 items-center xl:w-96">
          <Link to={"*"}>
            <div className="flex justify-center items-center bg-customLunarGreen w-16 h-16 rounded-full transition-all text-white hover:scale-125">
              <FiDroplet className="w-5 h-5" />
            </div>
          </Link>

          <h2 className="font-lato font-bold text-2xl text-customIBBNB">
            Watering
          </h2>
          <p className="font-raleway text-sm text-customSecondary leading-6 text-center">
            water your plants when the top inch of soil feels dry to the touch.
            Avoid overwatering, as it can lead to root dehydration.
          </p>
        </div>

        <div className="flex flex-col gap-12 h-96 px-2 items-center xl:w-96">
          <Link to={"*"}>
            <div className="flex justify-center items-center bg-customLunarGreen w-16 h-16 rounded-full transition-all text-white hover:scale-125">
              <FiSun className="w-5 h-5" />
            </div>
          </Link>

          <h2 className="font-lato font-bold text-2xl text-customIBBNB">
            Sunlight
          </h2>
          <p className="font-raleway text-sm text-customSecondary leading-6 text-center">
            Most plants need adequate sunlight to thrive. Place your plants in
            areas that receive the appropriate amount of light for their
            specific needs
          </p>
        </div>

        <div className="flex flex-col gap-12 h-96 px-2 items-center xl:w-96">
          <Link to={"*"}>
            <div className="flex justify-center items-center bg-customLunarGreen w-16 h-16 rounded-full transition-all text-white hover:scale-125">
              <FiShoppingBag className="w-5 h-5" />
            </div>
          </Link>

          <h2 className="font-lato font-bold text-2xl text-customIBBNB">
            Nutrients and Fertilizing
          </h2>
          <p className="font-raleway text-sm text-customSecondary leading-6 text-center">
            Choose a suitable fertilizer based on the specific needs of your
            plants, whether it's a balanced or specialized formula.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-20 justify-center items-center mb-24 xl:flex-row xl:items-start">
        <div className="flex flex-row gap-5 justify-center items-center xl:flex-row xl:gap-20">
          <img
            src={imgFirst}
            className="w-2/5 transition-all hover:shadow-2xl hover:scale-110 md:w-80 xl:w-96"
          />
          <img
            src={imgSecond}
            className="w-2/5 transition-all hover:shadow-2xl hover:scale-110 md:w-80 xl:w-96"
          />
        </div>

        <div className="flex flex-col items-center gap-6 mx-3 xl:m-0 xl:max-w-sm lg:max-w-2xl md:max-w-2xl sm:max-w-2xl xl:items-start">
          <img
            src={imgThird}
            className="w-full transition-all hover:shadow-2xl hover:scale-110"
          />
          <p className="text-sm text-center font-raleway text-customSecondary leading-6 xl:text-start">
            Our website offers a wide array of stunning plants, ranging from
            vibrant flowers to lush indoor foliage, allowing you to create your
            very own green oasis. In addition to our extensive plant selection,
            we also provide gardening kits and fertilizers to equip you with
            everything you need to nurture your plants and achieve gardening
            success. But we don't stop there! We believe that knowledge is the
            key to a thriving garden, so we offer a wealth of information and
            resources on gardening techniques, plant care tips, and landscaping
            ideas. Whether you're a seasoned gardener or just starting your
            green journey, our goal is to inspire and support you every step of
            the way. Get ready to explore our virtual garden and discover the
            joys of gardening with us!
          </p>
          <Link to={"*"}>
            <button className="w-48 p-4 bg-customLunarGreen text-sm font-raleway text-customWhite text-center transition-all hover:text-customLunarGreen hover:bg-customWhite hover:ring-1 hover:ring-customLunarGreen hover:scale-105 shadow-2xl">
              See more photos
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}

export default PlantCare
