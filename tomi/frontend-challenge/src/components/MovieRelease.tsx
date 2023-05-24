import React, { Dispatch, SetStateAction } from "react";
import ReleaseCard from "./ReleaseCard";
import { Movie } from "@/types";

interface IReleaseProp {
  sortMoviesByDate: Movie[];
  setShowMovie: Dispatch<SetStateAction<Movie | undefined>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

const MovieRelease = (prop: IReleaseProp) => {
  return (
    <div className=" mt-20">
      <div className=" relative flex w-full justify-between ">
        <p>Recently added</p>
      </div>
      <div className=" mt-20 relative">
        <div className={"overflow-scroll flex gap-8  z-30 relative"}>
          {prop.sortMoviesByDate.map((movie) => (
            <ReleaseCard
              key={movie.id}
              src={movie.backdrop_path}
              title={movie.title}
              releaseDate={movie.release_date}
              overview={movie.overview}
              function={() => {
                prop.setShowMovie(movie);
                prop.setShowModal(true);
              }}
            />
          ))}
        </div>
        <div className=" w-full flex justify-end mb-8">
          <div className=" bg-gradient-to-l from-[#0C1516] z-30 h-[324px] mt-[-324px] w-[256px] ml-0 hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default MovieRelease;
