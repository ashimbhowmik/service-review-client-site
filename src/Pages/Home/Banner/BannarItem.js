import React from "react";

const BannarItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carusle-img ">
        <img src={image} className="h-[700px] rounded-xl w-full" alt="" />
      </div>

      <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-3/4 w-2/5">
        <button className="btn btn-warning mr-5">Warning</button>
        <button className="btn btn-outline btn-warning">Warning</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 bottom-1/2">
        <a
          href={`#slide${prev}`}
          className="btn btn-circle bg-gray-600 text-white mr-5"
        >
          ❮
        </a>
        <a
          href={`#slide${next}`}
          className="btn btn-circle bg-gray-600 text-white "
        >
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannarItem;
