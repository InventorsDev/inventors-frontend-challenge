import React from "react";

const PlayButton = () => {
  return (
    <button className=" bg-white rounded-3xl text-black font-bold h-12 px-5 flex gap-4 items-center justify-center hover:scale-105 transition-all duration-300">
      <img src="/play.svg" className=" w-3.5" alt="" />
      Play
    </button>
  );
};

export default PlayButton;
