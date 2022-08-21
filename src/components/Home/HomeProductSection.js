import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./HomeExplore.css";
import ProductCard from "../Products/ProductCard";
import { Link } from "react-router-dom";
// import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
// import { LeftArrow, RightArrow } from "../Utils/Arrows";
// import usePreventBodyScroll from "../Utils/usePreventBodyScroll";
// import "../Utils/hideScrollBar.css";
// use title to sort the products

// function onWheel(apiObj, ev) {
//   const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

//   if (isThouchpad) {
//     ev.stopPropagation();
//     return;
//   }

//   if (ev.deltaY < 0) {
//     apiObj.scrollNext();
//   } else if (ev.deltaY > 0) {
//     apiObj.scrollPrev();
//   }
// }

const HomeProductSection = ({ title, products }) => {
  const [items] = React.useState(products);
  // const { disableScroll, enableScroll } = usePreventBodyScroll();

  const titles = {
    "Latest Products": "New",
    "Most Popular Products": "Popular",
    "Recently Viewed Products": "Visited",
  };

  return (
    <div
      className="container mb-10 rounded-b-lg  bg-orange-400 p-2  px-0 shadow-sm shadow-orange-200"
      style={{ backgroundColor: "rgb(26,21,21)" }}
    >
      <div
        className="mt-4 flex items-center  border-b-2 border-solid  border-b-orange-200 
      font-serif tracking-widest shadow-sm"
        style={{ backgroundColor: "rgb(26,21,21)" }}
      >
        <div className="peer flex items-center whitespace-nowrap">
          <Link to={{ pathname: "/products", title: title }}>
            <button
              className="cursor-pointer  border-none bg-transparent px-4 py-2 text-base
             font-bold"
            >
              <FontAwesomeIcon
                icon={faAnglesRight}
                className="text-md text-orange-200  shadow-orange-400 drop-shadow-md"
              />
            </button>
          </Link>
        </div>
        <div className="">
          <h2
            className="bg-gradient-to-br from-orange-700 to-white bg-clip-text font-cairo text-xl font-black text-orange-200 transition-all 
             duration-75 hover:text-transparent"
          >
            <Link to={{ pathname: "/products", title: title }}>
              {titles[title]}
            </Link>
          </h2>
        </div>
        {/* <FontAwesomeIcon
          className="text-rose-600"
          icon={faFireFlameCurved}
          beat
        /> */}
      </div>

      <div className="home__products flex flex-col-reverse lg:flex-row">
        {/* <div className="home__products--latest "> */}
        <div
          className="grid gap-4 p-12 font-sans sm:grid-cols-2 lg:grid-cols-4"
          // onMouseEnter={disableScroll}
          // onMouseLeave={enableScroll}
        >
          {items?.map((product, index) => (
            <ProductCard
              image={product.image}
              key={product.id}
              itemId={product.id}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeProductSection;
