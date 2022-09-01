import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import '../Home/HomeExplore.css';
// import { VisibilityContext } from "react-horizontal-scrolling-menu";

const Product = styled.div`
  &:nth-child(${(props) => props.index}):before {
    background-image: url(${(props) => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const ProductCard = ({ image, index, itemId }) => {
  // const visibility = React.useContext(VisibilityContext);

  // const visible = visibility.isItemVisible(itemId);
  // console.log(image);
  // console.log(index);

  return (
    // <div className={`product__card `}>
    <Product
      className="product__card relative flex h-72 w-[200px] select-none justify-end overflow-hidden bg-gray-100 
       text-center text-gray-100"
      index={index + 1}
      image={image}
      tabIndex={0}
    >
      <div className="product__card--content">
        <h2 className="product__card--seller">Enea</h2>
        <p className="product__card--name hidden sm:block">
          Contemporary side table PUCK
        </p>
        {/* <button className="product__card--view">View</button> */}
        <div className="flex gap-2  text-gray-900">
          <div className="rounded-full  p-1 ">
            <Link to={`/products/${uuidv4()}`} key={uuidv4()}>
              <FontAwesomeIcon
                className="cursor-pointer hover:opacity-60"
                icon={faSearch}
                size="lg"
                color="white"
              />
            </Link>
          </div>
          {/* need the know the answer to "does this product belong in the user's favorites?" */}
          {/* it is ? => red else white */}
          <div className="rounded-full p-1">
            <FontAwesomeIcon
              className=" cursor-pointer hover:text-red-500"
              icon={faHeart}
              size="lg"
              color="white"
            />
          </div>
        </div>
      </div>
    </Product>
    // </div>
  );
};

export default ProductCard;
