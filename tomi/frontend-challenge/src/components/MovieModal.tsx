"use client";

import { Movie } from "@/types";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import GenreTag from "./GenreTag";

interface IModalProp {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  movieDet: Movie;
}

type MovieGenre = {
  id: number;
  name: string;
};

const MovieModal = (modal: IModalProp) => {
  const [movieGenres, setMovieGenres] = useState<MovieGenre[]>([]);

  useEffect(() => {
    fetchMovieGenres();
  }, []);

  async function fetchMovieGenres() {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${modal.movieDet.id}?api_key=337276aee7bc33e091493ae6b6aabb77`
    );
    const data = await response.json();
    const genres = data.genres;
    setMovieGenres(genres);
  }

  if (!modal.showModal) {
    return null;
  }

  return (
    <div
      className=" fixed inset-0 bg-[rgba(0,0,0,0.5)] grid place-items-center overscroll-none z-40"
      onClick={() => modal.setShowModal(false)}
    >
      <div
        className="md:w-[60vw] h-[75vh] rounded-2xl bg-[#0c1516] overflow-hidden overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] className=bg-[url('/path/to/image.jpg')] bg-cover bg-center border border-slate-800 relative w-[95vw] "
        onClick={(e) => e.stopPropagation()}
      >
        <div className=" min-w-[180px] mb-8 h-[45%] relative overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/original/${
              modal.movieDet && modal.movieDet.backdrop_path
            }`}
            alt={modal.movieDet && modal.movieDet.title}
            style={{
              objectFit: "cover",
              zIndex: 0,
            }}
            fill
            priority
          />
        </div>
        <div className=" px-4 md:px-10 flex flex-col gap-4">
          <p className=" text-lg font-semibold">
            {modal.movieDet && modal.movieDet.title}
          </p>
          <div>
            <div className=" flex gap-2 mb-4">
              {movieGenres.map((genre) => (
                <GenreTag name={genre.name} key={genre.id}></GenreTag>
              ))}
            </div>
            <p className=" text-[#fff] opacity-50 text-sm">
              Release date - {modal.movieDet && modal.movieDet.release_date}
            </p>
            <p className=" text-[#fff] opacity-50 text-sm">
              Rating - {modal.movieDet && modal.movieDet.vote_average} out of 10
            </p>
          </div>
          <p className=" font-light opacity-90">
            {modal.movieDet && modal.movieDet.overview}
          </p>
        </div>
        <button
          className=" absolute top-0 right-0 w-8 h-8 transform grid place-items-center z-50 bg-slate-100 rounded-full text-black hover:bg-slate-100 border border-slate-800 transition-all duration-300"
          onClick={() => modal.setShowModal(false)}
        >
          <img src="/close.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default MovieModal;
