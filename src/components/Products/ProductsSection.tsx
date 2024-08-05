import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IPlantProps } from "../../types/plant";
import Product from "./Product";
import Search from "./Search";
import Filter from "./Filter";

export default function ProductsSection() {
  const [plants, setPlants] = useState<IPlantProps[] | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getPlants = async () => {
      const search = searchParams.get("search") ?? "";
      const sort = searchParams.get("sort") ?? "asc";
      const place = searchParams.get("place") ?? "all";
      const category = searchParams.getAll("category");
      const price = searchParams.get("price") ?? 1000;
      const discount = searchParams.get("discount") ?? 100;
      const res = await fetch(
        `http://localhost:3000/plants?_sort=name&price_lte=${price}&discountPercentage_lte=${discount}`
      );
      const json = await res.json();
      const list: IPlantProps[] = json
        .filter((plant: IPlantProps) => {
          if (place === "all") {
            return plant;
          }
          return plant.label.includes(place);
        })
        .filter((plant: IPlantProps) => {
          if (category.length === 0) {
            return plant;
          }
          return category.find((category) => plant.label.includes(category));
        })
        .filter((plant: IPlantProps) => {
          if (search === "") {
            return plant;
          }
          return plant.name.toLowerCase().includes(search.toLowerCase());
        });

      if (sort === "asc") {
        list.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sort === "desc") {
        list.sort((a, b) => b.name.localeCompare(a.name));
      }

      setPlants(list);
    };
    getPlants();
  }, [searchParams]);

   const isEmptyList = plants?.length === 0

  return (
    <main className="flex w-full justify-center ">
      <section>
        <article className="flex flex-wrap justify-center gap-10">
          <Search />
        </article>

        <Filter />
    
        <article className="flex flex-wrap justify-center gap-10 w-full">
          {plants &&
            plants.map((plant) => <Product key={plant.id} {...plant} />)}
            
            {isEmptyList && <p>Empty List</p>}
        </article>
      </section>
    </main>
  );
}
