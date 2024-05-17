import { Link } from "react-router-dom"
import { IPlantProps } from "../../types/plant"
import { FiArrowRight } from "react-icons/fi"
import { formatPrice } from "../../ts/formatPrice"

export default function Product({
  id,
  imgUrl,
  name,
  subtitle,
  label,
  price,
}: IPlantProps) {
  return (
    <div className="flex flex-col gap-2 p-4 m-1 bg-customAthenaGrey rounded">
      <img className="rounded" src={imgUrl} alt={name} />

      <h2 className="text-customLunarGreen font-bold text-2xl font-garamondSerif">
        {name}
      </h2>

      <p className="text-customGray font-lato font-semibold">{subtitle}</p>

      <p className="font-lato font-bold text-lg">{formatPrice(price)}</p>

      <div className="mt-4 flex items-center justify-between cursor-default">
        <div className="font-raleway text-customAvocado *:bg-customWisper *:py-2 *:px-4 *:rounded-full *:ring-2 *:ring-customAvocado flex gap-2">
          {label.map((item: string) => (
            <span key={item}>{item}</span>
          ))}
        </div>

        <Link
          className="flex items-center gap-2 font-raleway font-medium text-customIBBNB hover:underline hover:text-customSecondary transition-all"
          to={`/product/${id}`}
        >
          <span>See details</span>
          <FiArrowRight />
        </Link>
      </div>
    </div>
  )
}
