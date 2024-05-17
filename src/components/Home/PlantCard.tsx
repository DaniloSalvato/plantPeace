type PlantProps = {
  title: string;
  price: number;
  promo: number;
  category: string[];
  imageUrl: string;
};

const PlantCard = ({ title, price, promo, category, imageUrl }: PlantProps) => {
  return (
    <>
      <div className="h-96 w-48 md:h-plantCard md:w-96">

        <div className="shadow-lg shadow-b">

          <img src={imageUrl} />

          <div className="px-6 py-6 bg-customWhite md:w-96">

            <h1 className="text-customLunarGreen font-lato font-bold text-2xl mb-2">
              {title}
            </h1>

            <div className="flex gap-4">
              <p className="font-raleway">${price.toFixed(2)}</p>
              <p className="font-raleway text-customGray">${promo.toFixed(2)}</p>
            </div>

            <div className="mt-5">
              <span className="py-2 px-3 text-customAvocado border border-customAvocado rounded-full">
                {category[0]}
              </span>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default PlantCard;
