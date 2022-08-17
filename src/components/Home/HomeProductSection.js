import {
  faArrowRight,
  faFireFlameCurved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./HomeExplore.css";
import ProductCard from "../Products/ProductCard";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// use title to sort the products

const HomeProductSection = ({ title, images }) => {
  return (
    <div className="container mb-10 rounded-b-lg border-b-big border-b-orange-300 bg-orange-400 p-1  px-0 shadow-sm shadow-gray-400">
      <h2 className="mt-4 bg-orange-200 p-2 text-center font-serif text-2xl font-bold uppercase tracking-widest text-red-900">
        {title}{" "}
        <FontAwesomeIcon
          className="text-rose-600"
          icon={faFireFlameCurved}
          beat
        />
      </h2>
      <div className="home__products flex flex-col-reverse lg:flex-row">
        {/* <div className="home__products--latest "> */}
        <div className="grid gap-4 p-12 font-sans sm:grid-cols-2 lg:grid-cols-4">
          {images.map((image, index) => (
            <ProductCard image={image} key={uuidv4()} index={index} />
          ))}
        </div>
        <div className="relative mr-6 self-center whitespace-nowrap">
          <Link to={{ pathname: "/products", title: title }}>
            <button
              className="absolute mt-6 cursor-pointer rounded-full border-none bg-zinc-900 py-3 px-5 text-base font-bold 
          uppercase text-orange-200 transition-all duration-500 hover:bg-orange-200 hover:text-zinc-900 hover:only:rotate-90 md:hover:only:rotate-180"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-2xl shadow-orange-400 drop-shadow-md"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeProductSection;
