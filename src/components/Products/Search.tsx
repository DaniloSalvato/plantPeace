import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("search") ?? "");

  return (
    <div className="flex justify-center px-6 items-center my-6 w-full ">
      <div className="flex max-w-[600px] w-full justify-center items-center bg-white rounded-lg ">
        <CiSearch className="flex text-2xl text-customLunarGreen mx-1" />
        <input
          type="text"
          className="outline-none w-full py-2 pl-2 text-start rounded-lg font-raleway"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchParams((state) => {
              state.set("search", e.target.value);
              return state;
            });
          }}
          value={search}
        />
      </div>
    </div>
  );
};

export default Search;
