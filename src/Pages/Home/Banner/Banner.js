import React from "react";
import img1 from "../../../assets/images/banner/Engagment.jpg";
import img2 from "../../../assets/images/banner/HaldiCeremony.webp";
import img3 from "../../../assets/images/banner/MehendiCeremony.webp";
import img4 from "../../../assets/images/banner/RokaCeremony.jpg";
import img5 from "../../../assets/images/banner/SangeetCeremony.jpg";
import img6 from "../../../assets/images/banner/wadding.webp";
import BannarItem from "./BannarItem";
import "./Banner.css";

const bannaerData = [
  {
    image: img1,
    prev: 6,
    id: 1,
    next: 2,
  },
  {
    image: img2,
    prev: 1,
    id: 2,
    next: 3,
  },
  {
    image: img3,
    prev: 2,
    id: 3,
    next: 4,
  },
  {
    image: img4,
    prev: 3,
    id: 4,
    next: 5,
  },
  {
    image: img5,
    prev: 4,
    id: 5,
    next: 6,
  },
  {
    image: img6,
    prev: 5,
    id: 6,
    next: 1,
  },
];

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full">
        {bannaerData.map((slide) => (
          <BannarItem key={slide.id} slide={slide}></BannarItem>
        ))}
      </div>
    </div>
  );
};

export default Banner;
