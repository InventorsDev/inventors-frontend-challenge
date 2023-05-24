import React from "react";

interface ITagProp {
  name: string;
}

const GenreTag = (prop: ITagProp) => {
  return <div className=" py-1 px-2 bg-slate-700 rounded-xl text-sm">{prop.name}</div>;
};

export default GenreTag;
