import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import ProductCard from '../Products/ProductCard';
import './HomeExplore.css';

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
  const elContainer = useRef();

  const titles = {
    'Latest Products': 'Latest products',
    'Most Popular Products': 'Trending products',
    'Recently Viewed Products': 'Recently visited products',
    'Related Products': 'Related products',
    'Products From Same Brand': 'Products from the same brand',
  };

  const HandleScrollLeft = () => {
    if (elContainer.current.scrollLeft) elContainer.current.scrollLeft -= 290;
  };

  const HandleScrollRight = () => {
    elContainer.current.scrollLeft += 290;
  };

  return (
    <>
      <div className="md:py-4">
        <div className="peer flex w-full  flex-col items-center justify-between whitespace-normal p-8 sm:flex-row">
          <div className="flex items-center justify-between">
            {/* <Link to={{ pathname: '/products', title: title }}>
              <button className="cursor-pointer  border-none bg-transparent px-4 py-2 text-base font-bold">
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  className="text-md text-orange-200  shadow-orange-400 drop-shadow-md"
                />
              </button>
            </Link> */}
            <div className="w-full">
              <h2
                className="bg-gradient-to-br from-orange-700 to-white bg-clip-text text-center font-cairo text-2xl font-black uppercase 
                      text-orange-200 transition-all duration-75 hover:text-transparent"
              >
                <Link to={{ pathname: '/products', title: title }}>
                  {titles[title]}
                </Link>
              </h2>
            </div>
          </div>
          <div className="">
            <Link to={{ pathname: '/products', title: title }}>
              <button
                className="rounded-sm bg-transparent px-4 py-1 font-cairo text-orange-200 shadow-sm 
                    shadow-orange-200 hover:opacity-80"
              >
                see more
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container w-screen rounded-b-lg bg-orange-400 p-2 px-0  sm:mb-8 md:max-w-7xl"
        style={{ backgroundColor: 'rgb(26,21,21)' }}
      >
        {/* after:mx-auto after:block after:w-11/12 after:border-b-2 after:border-b-orange-300 after:pt-1 */}
        <div className="flex flex-col font-serif tracking-widest shadow-sm ">
          {/* <div className="relative flex justify-between">
            <div className="absolute -top-1/2 right-0">
            <Link to={{ pathname: '/products', title: title }}>
              <button className="m-2 rounded-sm bg-orange-300 px-4 py-1 font-cairo text-lg font-extrabold shadow-sm shadow-orange-300 hover:opacity-80">
                See all
              </button>
            </Link>
          </div>
          </div> */}
          {/* <FontAwesomeIcon
          className="text-rose-400"
          icon={faFireFlameCurved}
          beat
        /> */}
        </div>
        <div className="relative flex items-center justify-center">
          {/* <div className="home__products--latest "> */}
          <MdChevronLeft
            onClick={HandleScrollLeft}
            className="cursor-pointer text-orange-200 opacity-50 transition-all duration-300 ease-in-out hover:opacity-100 "
            size={40}
          />
          {/* <div
          className="grid gap-4 overflow-x-scroll whitespace-nowrap p-12 font-sans sm:grid-cols-2 lg:grid-cols-4"
          id="slider"
          // onMouseEnter={disableScroll}
          // onMouseLeave={enableScroll}
        > */}
          <div
            className="flex w-full max-w-7xl  overflow-x-scroll scroll-smooth  py-0 font-sans transition-all scrollbar-hide"
            ref={elContainer}

            // onMouseEnter={disableScroll}
            // onMouseLeave={enableScroll}
          >
            <div className="mx-auto flex flex-nowrap items-center gap-x-1 md:gap-x-4">
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
          <MdChevronRight
            onClick={HandleScrollRight}
            className="cursor-pointer text-orange-200 opacity-50 transition-all duration-300 ease-in-out hover:opacity-100  "
            size={40}
          />
        </div>
      </div>
      <div className="p-4"></div>
    </>
  );
};

export default HomeProductSection;
