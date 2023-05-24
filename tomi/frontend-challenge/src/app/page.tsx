"use client";

import { FormEvent, SetStateAction, useEffect, useState } from "react";
import { getMovieList } from "@/api/getMovies";
import { Movie } from "@/types";
import PosterPage from "@/components/PosterPage";
import TrendCard from "@/components/TrendCard";
import ReleaseCard from "@/components/ReleaseCard";
import MovieModal from "@/components/MovieModal";
import MainNav from "@/components/MainNav";
import MoviePopularity from "@/components/MoviePopularity";
import MovieRelease from "@/components/MovieRelease";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trendGrid, setTrendGrid] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showMovie, setShowMovie] = useState<Movie>();
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState<Movie[]>();

  async function fetchMovies() {
    const movieList = await getMovieList(currentPage);
    setMovies(movieList);
  }

  const handleCancelSearch = () => {
    setSearch("");
    setSearchResult([]);
    // setBlogList(blogData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allMovie = movies;
    const filteredMovies = allMovie.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase().trim())
    );
    setSearchResult(filteredMovies);
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage, fetchMovies]);

  // Sort movies by popularity
  const sortMoviesByPopularity = [...movies].sort(
    (a, b) => b.popularity - a.popularity
  );

  // Sort movies by release date
  const sortMoviesByDate = [...movies].sort((a, b) => {
    return (
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
    );
  });

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  if (showModal) {
    return (
      <MovieModal
        showModal={showModal}
        setShowModal={setShowModal}
        movieDet={showMovie!}
      />
    );
  }

  return (
    <div>
      <MainNav
        handleSubmit={handleSubmit}
        setSearch={setSearch}
        search={search}
        handleCancelSearch={handleCancelSearch}
      />
      {!searchResult?.length ? (
        <div className=" lg:pl-32 px-4">
          <PosterPage />
          {/* sort by popularity */}
          <MoviePopularity
            trendGrid={trendGrid}
            setTrendGrid={setTrendGrid}
            sortMoviesByPopularity={sortMoviesByPopularity}
            setShowMovie={setShowMovie}
            setShowModal={setShowModal}
          />

          {/* sort by release date */}
          <MovieRelease
            sortMoviesByDate={sortMoviesByDate}
            setShowMovie={setShowMovie}
            setShowModal={setShowModal}
          />
        </div>
      ) : (
        <div className=" mt-40 px-6">
          <p className=" pb-4 text-lg">Search Result</p>
          {searchResult?.map((movie) => (
            <ReleaseCard
              key={movie.id}
              src={movie.backdrop_path}
              title={movie.title}
              releaseDate={movie.release_date}
              overview={movie.overview}
              function={() => {
                setShowMovie(movie);
                setShowModal(true);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
