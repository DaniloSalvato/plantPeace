import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("search") ?? "");

  return (
    <div className="flex justify-center items-center my-6 w-full ">
      <div className="flex w-1/3 justify-center items-center bg-white rounded-lg ">
        <CiSearch className="flex text-2xl text-customLunarGreen mx-1" />
        <input
          type="text"
          className="outline-none w-full py-2 pl-2 text-start rounded-lg font-raleway"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      <button
        className="py-2 px-3 ml-3 font-raleway text-customAthenaGrey bg-customLunarGreen shadow-2xl transition-all hover:text-customLunarGreen hover:bg-customWisper border hover:border-customLunarGreen rounded-md"
        onClick={() =>
          setSearchParams((state) => {
            state.set("search", search);
            return state;
          })
        }
      >
        Search
      </button>
    </div>
  );
};

export default Search;
