import React from "react";
import Image from "next/image";

interface ICard{
  src: string;
  title: string;
  id: number;
  function: any;
}

const TrendCard = (card: ICard) => {
  return (
    <div className=" min-w-[256px]  mb-8 h-72  relative overflow-hidden rounded-[32px] cursor-pointer" onClick={card.function}>
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
  );
};

export default TrendCard;
