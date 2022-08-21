import React from "react";
import "../Home/HomeExplore.css";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
// import { VisibilityContext } from "react-horizontal-scrolling-menu";

const Product = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  padding: 1rem;
  width: 100%;
  text-align: center;
  color: whitesmoke;
  background-color: whitesmoke;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1),
    0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1),
    0 16px 16px rgba(0, 0, 0, 0.1);

  border: "1px solid";
  display: "inline-block";
  margin: "0 10px";
  width: "160px";
  userselect: "none";

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
      className="product__card h-80"
      index={index + 1}
      image={image}
      tabIndex={0}
    >
      <div className="product__card--content">
        <h2 className="product__card--seller">Enea</h2>
        <p className="product__card--name">Contemporary side table PUCK</p>
        {/* <button className="product__card--view">View</button> */}
        <div className="flex  gap-2  text-neutral-900">
          <div className="rounded-full bg-neutral-900  p-3 ">
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
          <div className="rounded-full  bg-neutral-900 p-3">
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
