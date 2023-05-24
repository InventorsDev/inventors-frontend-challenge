import React, { Dispatch, SetStateAction } from "react";
import TrendCard from "./TrendCard";
import { Movie } from "@/types";

interface IPopProps {
  trendGrid: boolean;
  setTrendGrid: Dispatch<SetStateAction<boolean>>;
  sortMoviesByPopularity: Movie[];
  setShowMovie: Dispatch<SetStateAction<Movie | undefined>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const MoviePopularity = (prop: IPopProps) => {
  return (
    <div>
      <div className=" relative flex w-full justify-between">
        <p>Trending</p>
        <button
          onClick={() => prop.setTrendGrid(!prop.trendGrid)}
          className=" text-[#FFA900] lg:mr-32 mr-4 transition ease-in-out delay-150 hover:underline"
        >
          {prop.trendGrid ? "Collapse" : "View all"}
        </button>
      </div>
      <div className=" mt-20 relative">
        <div
          className={`${
            prop.trendGrid
              ? " columns-[256px] lg:pr-32 pr-4  "
              : "overflow-scroll flex"
          }  gap-8  z-30 relative`}
        >
          {prop.sortMoviesByPopularity.map((movie) => (
            <TrendCard
              key={movie.id}
              src={movie.poster_path}
              title={movie.title}
              id={movie.id}
              function={() => {
                prop.setShowMovie(movie);
                prop.setShowModal(true);
              }}
            />
          ))}
        </div>
        <div className=" w-full flex justify-end mb-8">
          <div className=" bg-gradient-to-l from-[#0C1516] z-30 h-72 mt-[-320px] w-[256px] ml-0 hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default MoviePopularity;
