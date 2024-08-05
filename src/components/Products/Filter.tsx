import { useState } from "react";
import { FaFilter } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState(() => searchParams.get("sort") ?? "asc");
  const [place, setPlace] = useState(() => searchParams.get("place") ?? "all");
  const [price, setPrice] = useState(
    () => Number(searchParams.get("price")) ?? 1000
  );
  const [discount, setDiscount] = useState(() =>
    Number(searchParams.get("discount") ?? 100)
  );

  const handleResetFilter = () => {
    setSearchParams((state) => {
      setSort("asc");
      setPlace("all");
      state.delete("sort");
      state.delete("place");
      state.delete("category");
      state.delete("price");
      setPrice(0);
      state.delete("discount");
      setDiscount(0);
      return state;
    });
    setIsOpen(false);
  };

  return (
    <div>
      {isOpen ? (
        <button
          className="fixed top-[235px] left-0 px-3 py-3 bg-customLunarGreen rounded-r-xl"
          onClick={() => setIsOpen(false)}
        >
          <FaArrowLeft className="text-2xl text-white" />
        </button>
      ) : (
        <button
          className="fixed top-[235px] left-0 px-3 py-3 bg-customLunarGreen rounded-r-xl"
          onClick={() => setIsOpen(true)}
        >
          <FaFilter className="text-2xl text-white" />
        </button>
      )}
      <div
        className={`fixed top-[289px] left-10 bg-customWisper z-50 transition-transform duration-300 ease-in-out border-2 border-customLunarGreen rounded-lg ${
          isOpen
            ? "opacity-100 transform translate-x-0 w-3/4 h-[200px] p-5 md:w-1/3 md:h-[400px] lg:w-[25%] overflow-y-auto"
            : "opacity-0 transform -translate-x-full w-3/4 h-[200px] p-5 md:w-1/3 md:h-[400px] lg:w-[25%]  overflow-y-auto"
        }`}
      >
        <div className="flex flex-col rounded-xl font-raleway">
          <h2 className="text-2xl text-center font-lato text-customLunarGreen">
            Filter
          </h2>
          <fieldset className="accent-customLunarGreen mb-2">
            <div className="flex flex-col">
              <legend className=" mb-2 text-xl ">
                Sort
              </legend>
              <div className="flex">
                <input
                  defaultChecked={sort === "asc"}
                  checked={sort === "asc"}
                  type="radio"
                  id="asc"
                  value="asc"
                  name="sort"
                  onChange={() => {
                    setSearchParams((state) => {
                      state.set("sort", "asc");
                      return state;
                    });
                    setSort("asc");
                  }}
                />
                <label htmlFor="asc" className="px-1">
                  A-Z
                </label>
              </div>
              <div>
                <input
                  defaultChecked={sort === "desc"}
                  checked={sort === "desc"}
                  type="radio"
                  id="desc"
                  value="desc"
                  name="sort"
                  onChange={() => {
                    setSearchParams((state) => {
                      state.set("sort", "desc");
                      return state;
                    });

                    setSort("desc");
                  }}
                />
                <label htmlFor="desc" className="px-1">
                  Z-A
                </label>
              </div>
            </div>
          </fieldset>
          <div className="flex">
            <fieldset className="accent-customLunarGreen mb-2">
              <legend className="mb-2 text-xl">
                Place
              </legend>
              <div className="flex flex-col">
                <div>
                  <input
                    defaultChecked={place === "all"}
                    checked={place === "all"}
                    type="radio"
                    id="all"
                    value="all"
                    name="place"
                    onChange={() => {
                      setSearchParams((state) => {
                        state.set("place", "all");
                        return state;
                      });
                      setPlace("all");
                    }}
                  />
                  <label htmlFor="all">
                    All
                  </label>
                </div>
                <div>
                  <input
                    defaultChecked={place === "Indoor"}
                    checked={place === "Indoor"}
                    type="radio"
                    id="Indoor"
                    value="Indoor"
                    name="place"
                    onChange={() => {
                      setSearchParams((state) => {
                        state.set("place", "Indoor");
                        return state;
                      });
                      setPlace("Indoor");
                    }}
                  />
                  <label htmlFor="Indoor">
                    Indoor
                  </label>
                </div>
                <div>
                  <input
                    defaultChecked={place === "Outdoor"}
                    checked={place === "Outdoor"}
                    type="radio"
                    id="Outdoor"
                    value="Outdoor"
                    name="place"
                    onChange={() => {
                      setSearchParams((state) => {
                        state.set("place", "Outdoor");
                        return state;
                      });
                      setPlace("Outdoor");
                    }}
                  />
                  <label htmlFor="Outdoor">
                    Outdoor
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="flex">
            <fieldset className="accent-customLunarGreen mb-2">
              <div className="flex flex-col">
                <legend className="mb-2 text-xl">
                  Category
                </legend>
                <div>
                  <input
                    checked={searchParams.getAll("category").includes("cactus")}
                    type="checkbox"
                    id="Cactus"
                    value="Cactus"
                    name="category"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("category", "cactus");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("category", "cactus");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="Cactus">
                    Cactus
                  </label>
                </div>
                <div>
                  <input
                    checked={searchParams.getAll("category").includes("flower")}
                    type="checkbox"
                    id="Flower"
                    value="flower"
                    name="category"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("category", "flower");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("category", "flower");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="Flower">
                    Flower
                  </label>
                </div>
                <div>
                  <input
                    checked={searchParams.getAll("category").includes("plant")}
                    type="checkbox"
                    id="Plant"
                    value="plant"
                    name="category"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("category", "plant");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("category", "plant");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="Plant">
                    Plant
                  </label>
                </div>
                <div>
                  <input
                    checked={searchParams
                      .getAll("category")
                      .includes("succulent")}
                    type="checkbox"
                    id="Succulent"
                    value="succulent"
                    name="category"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSearchParams((state) => {
                          state.append("category", "succulent");
                          return state;
                        });
                        return;
                      }
                      setSearchParams((state) => {
                        state.delete("category", "succulent");
                        return state;
                      });
                    }}
                  />
                  <label htmlFor="Succulent">
                    Succulent
                  </label>
                </div>
              </div>
            </fieldset>
          </div>
          <div className="flex flex-col mb-2">
            <p className="mb-2 text-xl">Price</p>
            <div>
              <input
                className="accent-customLunarGreen"
                type="range"
                id="price"
                name="price"
                min="1"
                max="1000"
                value={price}
                onChange={(e) => {
                  setPrice(Number(e.target.value));
                  setSearchParams((state) => {
                    state.set("price", e.target.value);
                    return state;
                  });
                }}
              />
              <p>1$ - {price}$</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="mb-2 text-xl">
              Discount Percentage
            </p>
            <div>
              <input
                className="accent-customLunarGreen"
                type="range"
                id="discount"
                name="discount"
                min="0"
                max="100"
                step="10"
                value={discount}
                onChange={(e) => {
                  setDiscount(Number(e.target.value));
                  setSearchParams((state) => {
                    state.set("discount", e.target.value);
                    return state;
                  });
                }}
              />
              <p>0% - {discount}%</p>
            </div>
          </div>

          <button
            onClick={handleResetFilter}
            className="mt-3 font-raleway text-customAthenaGrey bg-customLunarGreen shadow-2xl transition-all hover:text-customLunarGreen hover:bg-customWisper hover:ring-1 hover:ring-customLunarGreen "
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
