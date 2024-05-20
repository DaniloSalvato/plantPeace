import { useEffect, useState } from "react"
import { IPlantProps } from "../../types/plant"
import { useParams } from "react-router-dom"
import { formatPrice } from "../../ts/formatPrice"

export default function ProductDetails() {
  const [plant, setPlant] = useState<IPlantProps | null>()
  const param = useParams()

  useEffect(() => {
    async function getPlant() {
      const res = await fetch("http://localhost:3000/plants/")
      const json = await res.json()
      const jsonFiltered = json.filter(
        ({ id }: IPlantProps) => id == Number(param.id)
      )
      setPlant(jsonFiltered[0])
    }

    getPlant()
  }, [])

  if (!plant) {
    return (
      <p className="text-center font-lato text-4xl font-bold h-screen mt-48">
        Loading...
      </p>
    )
  }

  return (
    <div className="flex flex-wrap flex-col lg:my-20 lg:mx-28 lg:flex-row justify-center items-center gap-8">    
      <img
        className="flex h-screen w-full object-cover flex-1 p-4 lg:p-0"
        src={plant.imgUrl}
        alt={plant.name}
      />

      <section className="w-full 2xl:h-screen flex flex-col items-start mb-4 px-4 lg:mt-0 lg:px-0 lg:mb-0 flex-1">
        <div className="font-bold">
          <h1 className="font-garamondSerif text-4xl sm:text-5xl text-customLunarGreen mb-2">
            {plant.name}
          </h1>
          <p className="text-customGray text-xl font-lato mb-4">{plant.subtitle}</p>
        </div>

        <div className="font-raleway text-customDarkGreen *:bg-customLightGreen *:py-2 *:px-3 *:rounded-full *:border-2 *:border-customGreen flex gap-2 mb-4">
          {plant.label.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        {plant.discountPercentage ? (
          <div className="flex gap-2">
            <p className="font-lato text-xl font-bold line-through text-customGray">
              {formatPrice(plant.price)}
            </p>
            <p className="font-lato text-xl font-bold">
              {formatPrice(
                plant.price -
                  (plant.price * Number(plant.discountPercentage)) / 100
              )}
            </p>
          </div>
        ) : (
          <p className="font-lato text-xl font-bold">
            {formatPrice(plant.price)}
          </p>
        )}

        <button className="text-customAthenaGrey font-raleway py-4 px-14 mb-3 shadow-2xl bg-customLunarGreen transition-all hover:text-customLunarGreen hover:bg-customWhite hover:ring-1 hover:ring-customLunarGreen hover:scale-105">
          Check out
        </button>

        <section className="*:p-2">
          <h2 className="font-lato text-xl font-bold">Features</h2>

          <ul className="font-raleway list-disc list-inside">
            {plant.features.map((feature) => (
              <li key={crypto.randomUUID()}>{feature}</li>
            ))}
          </ul>
        </section>

        <section className="*:p-2">
          <h2 className="font-lato text-xl font-bold">Description</h2>

          <p className="font-raleway 2xl:w-9/12">{plant.description}</p>
        </section>
      </section>
    </div>
  )
}
