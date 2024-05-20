import { Link } from "react-router-dom"

type PlantProps = {
  id: number
  title: string
  price: number
  promo: number
  isInSale: boolean
  category: string[]
  imageUrl: string
}

const PlantCard = ({
  id,
  title,
  price,
  promo,
  isInSale,
  category,
  imageUrl,
}: PlantProps) => {
  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="h-96 w-48 md:h-plantCard md:w-96 md:mb-3">
          <img src={imageUrl} />

          <div className="flex flex-col px-6 py-6 w-48 bg-customWhite shadow-lg shadow-b md:w-96">
            <h1 className="text-customLunarGreen font-lato font-bold text-2xl  overflow-hidden text-ellipsis whitespace-nowrap">
              {title}
            </h1>

            <div className="flex gap-4">
              {isInSale ? (
                <>
                  <p className="font-raleway text-customLunarGreen">
                    ${(price * (1 - promo / 100)).toFixed(2)}
                  </p>
                  <p className="font-raleway text-customGray line-through ">
                    ${price.toFixed(2)}
                  </p>
                </>
              ) : (
                <p className="font-raleway text-customLunarGreen">
                  ${price.toFixed(2)}
                </p>
              )}
            </div>

            <div className='mt-8'>
              <span className="py-2 px-3 text-customAvocado border border-customAvocado rounded-full">
                {category[0]}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default PlantCard
