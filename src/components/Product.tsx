import { Link } from "react-router-dom"
import { IPlantProps } from "../types/plant"
import Labels from "./Labels"
import { FiArrowRight } from "react-icons/fi"

export default function Product({
  id,
  imgUrl,
  name,
  subtitle,
  label,
  price,
}: IPlantProps) {
  return (
    <div className="flex flex-col gap-2 p-4">
      <img src={imgUrl} alt={name} />
      <h2 className="text-customLunarGreen font-bold text-2xl font-garamondSerif">
        {name}
      </h2>
      <p className="text-customGray font-lato font-semibold">{subtitle}</p>
      <p className="font-lato font-bold text-lg">{price}</p>

      <div className="mt-4 flex items-center justify-between">
        <Labels labels={label} />

        <Link
          className="flex items-center gap-2 font-raleway font-medium text-customIBBNB hover:underline"
          to={`/product/${id}`}
        >
          <span>See details</span>
          <FiArrowRight />
        </Link>
      </div>
    </div>
  )
}
