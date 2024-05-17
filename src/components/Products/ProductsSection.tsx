import { useEffect, useState } from "react"
import { IPlantProps } from "../../types/plant"
import Product from "./Product"

export default function ProductsSection() {
  const [plants, setPlants] = useState<IPlantProps[] | null>(null)
  useEffect(() => {
    const getPlants = async () => {
      const res = await fetch("http://localhost:3000/plants")
      const json = await res.json()
      setPlants(json)
    }
    getPlants()
  })
  return (
    <section className="flex flex-wrap justify-center gap-10">
      {plants && plants.map((plant) => <Product key={plant.id} {...plant} />)}
    </section>
  )
}
