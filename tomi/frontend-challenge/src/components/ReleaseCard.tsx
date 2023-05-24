import Image from "next/image";
import React from "react";
import PlayButton from "./PlayButton";
import AddButton from "./AddButton";

interface ICard {
  src: string;
  title: string;
  releaseDate: string;
  overview: string;
  function: any;
}

const ReleaseCard = (card: ICard) => {
  return (
    <div
      className=" flex gap-5 p-5 w-full items-center bg-[#ffffff28] min-w-[450px] max-w-[450px] rounded-[28px] cursor-pointer"
      onClick={card.function}
    >
      <div className=" min-w-[180px] h-[250px] relative overflow-hidden rounded-[32px] border border-[#ffffff24]">
        <Image
          src={`https://image.tmdb.org/t/p/original/${card.src}`}
          alt={card.title}
          style={{
            objectFit: "cover",
            zIndex: 0,
          }}
          fill
          priority
        />
      </div>
      <div className="">
        <p className=" mb-2">{card.title}</p>
        <p className=" mb-7 opacity-50 text-sm">{card.releaseDate}</p>
        <p className=" mb-7 max-h-16 text-sm overflow-hidden">
          {card.overview}
        </p>
        <div className=" flex gap-4 pb-10">
          <PlayButton />
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default ReleaseCard;
