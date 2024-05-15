type PlantProps = {
  title: string;
  price:number;
  promo:number;
  category: string;
  imageUrl: string;
};

const PlantCard = ({ title, price, promo, category, imageUrl }: PlantProps) => {
  return (
    <div className="gap-2">
      <img src={imageUrl}/>
      <div className="px-6 py-4">
        <h1 className="text-customLunarGreen font-lato font-bold text-2xl mb-2">{title}</h1>
        <p className="">{price}</p>
        <p className="">{promo}</p>
        <p className="text-customAvocado border border-customAvocado rounded-full pt-2 px-3 w-auto h-auto">{category}</p>
      </div>
    </div>
  );
};

export default PlantCard;
