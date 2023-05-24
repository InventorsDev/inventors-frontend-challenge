import { Movie } from "@/types";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

interface IModalProp {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  movieDet: Movie;
}

const MovieModal = (modal: IModalProp) => {
  if (!modal.showModal) {
    return null;
  }

  return (
    <div
      className=" fixed inset-0 bg-[rgba(0,0,0,0.5)] grid place-items-center overscroll-none z-50"
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
            <p className=" text-[#fff] opacity-50 text-sm">
              Release date - {modal.movieDet && modal.movieDet.release_date}
            </p>
            <p className=" text-[#fff] opacity-50 text-sm">
              Rating - {modal.movieDet && modal.movieDet.vote_average} out of 10
            </p>
          </div>
          <p className=" font-light opacity-90">{modal.movieDet && modal.movieDet.overview}</p>
        </div>
        <button className=" fixed bottom-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 bg-white py-3 rounded-2xl text-black hover:bg-slate-300 " onClick={() => modal.setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default MovieModal;
