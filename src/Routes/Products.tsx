import { useEffect, useState } from "react"
import { IPlantProps } from "../types/plant"
import Product from "../components/Product"

const Products = () => {
  const [plants, setPlants] = useState<IPlantProps[] | null>(null)
  useEffect(() => {
    async function getPlants() {
      const res = await fetch("http://localhost:3000/plants")
      const json = await res.json()
      setPlants(json)
    }
    getPlants()
  })

  return (
    <main className="flex flex-col items-center gap-6 bg-customWisper pb-6">
      <h1 className="font-garamondSerif font-bold text-customLunarGreen text-4xl">
        Products
      </h1>

      <section className="flex flex-wrap justify-center gap-10">
        {plants && plants.map((plant) => <Product key={plant.id} {...plant} />)}
      </section>
    </main>
  )
}

export default Products
