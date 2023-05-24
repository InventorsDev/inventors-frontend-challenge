import React, { FormEvent, SetStateAction } from "react";
import Navbar from "./Navbar";
import SearchBar from "./SearchBar";

interface ISearchProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setSearch: (value: SetStateAction<string>) => void;
  search: string;
  handleCancelSearch: () => void;
}

const MainNav = (props: ISearchProps) => {
  return (
    <div className=" flex items-center px-4 justify-between py-12 z-40 bg-gradient-to-b from-[#0c1516] from-50% fixed top-0 w-full">
      <img src="/logo.svg" alt="logo" />
      <Navbar />
      <div className="flex gap-3 items-center justify-center">
        {/* <img src="/Search.svg" alt="" className="lg:hidden w-6 mr-6" /> */}
        <SearchBar
          handleSubmit={props.handleSubmit}
          setSearch={props.setSearch}
          search={props.search}
          handleCancelSearch={props.handleCancelSearch}
        />
        <img src="dp.svg" alt="" />
      </div>
    </div>
  );
};

export default MainNav;
