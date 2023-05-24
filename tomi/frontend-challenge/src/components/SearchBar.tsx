import React, { FormEvent, SetStateAction } from "react";

interface ISearchProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setSearch: (value: SetStateAction<string>) => void;
  search: string;
  handleCancelSearch: () => void;
}

const SearchBar = (search: ISearchProps) => {
  return (
    <form onSubmit={(e) => search.handleSubmit(e)} className=" flex gap-2">
      <div className=" flex px-4 gap-3 h-10 rounded-3xl bg-[#353535] items-center">
        <img src="/Search.svg" alt="" />
        <input
          type="text"
          onChange={(e) => search.setSearch(e.target.value)}
          value={search.search}
          className="outline-none font-extralight text-white bg-transparent w-28"
          placeholder="Search"
        />
        {search.search && (
          <div>
            <p
              className=" cursor-pointer"
              onClick={() => search.handleCancelSearch()}
            >
              x
            </p>
          </div>
        )}
      </div>
      {search.search && (
        <button className=" cursor-pointer">
          <img src="/arrow.svg" alt="" />
        </button>
      )}
    </form>
  );
};

export default SearchBar;
