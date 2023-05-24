import React from "react";
import Image from "next/image";
import PlayButton from "./PlayButton";
import AddButton from "./AddButton";

const PosterPage = () => {
  return (
    <div>
      <Image
        src={"/poster.png"}
        alt={""}
        style={{
          objectFit: "cover",
          zIndex: 0,
        }}
        fill
        priority
        className=" absolute top-0 z-0"
      />
      <div className=" h-[70vh] flex justify-center lg:w-1/2 w-full mt-36 z-10 relative flex-col lg:items-start items-center">
        <p className=" text-white text-7xl pb-2 bg-gradient-to-r from-white to-red-700 text-transparent bg-clip-text">SCREAM</p>
        <p className=" opacity-50 pb-6">2023 . 2h 2m. 17+ </p>
        <div className=" flex gap-4 pb-10">
          <PlayButton />
          <AddButton />
        </div>
        <p className=" font-light pb-4 max-w-[500px] text-center lg:text-left">
          In the next installment, the survivors of the Ghostface killings leave
          Woodsboro behind and start a fresh chapter in New York City.
        </p>
        <p className=" opacity-50">Horror, Mystery, Thriller</p>
      </div>
    </div>
  );
};

export default PosterPage;
