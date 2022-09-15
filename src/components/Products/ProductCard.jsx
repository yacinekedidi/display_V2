import { faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../Home/HomeExplore.css';

const Product = styled.div`
  &:nth-child(${(props) => props.index}):before {
    background-image: url(${(props) => props.image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const ProductCard = ({ product, index, user }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // ${user.me.user_id}
  // 61e8098b63becc1f2d5bc7e9 yass
  // 61e809b542bcd1cf883f0ba9 med
  const handleClick = () => {
    if (!isFavorite)
      axios
        .patch(
          `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}/favorites/${
            product._id
          }`
        )
        .then((res) => {
          setIsFavorite(true);
        })
        .catch((err) => console.error(err));
    else {
      axios
        .delete(
          `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}/favorites/${
            product._id
          }`
        )
        .then((res) => {
          setIsFavorite(false);
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    setIsFavorite(user.favorites.some((favorite) => favorite === product._id));
  }, [user, product._id]);

  // if (isLoading) return <LoadingSpinner />;
  return (
    <Product
      className="product__card relative flex h-72 w-[200px] select-none justify-end overflow-hidden bg-gray-100 
       text-center text-gray-100"
      index={index + 1}
      image={product.pics_url ? product.pics_url[0] : ''}
      tabIndex={0}
    >
      <div className="product__card--content">
        <h2 className="product__card--seller capitalize">
          {product.seller_name}
        </h2>
        <div className="flex gap-2  text-gray-900">
          <div className="rounded-full  p-1 ">
            <Link to={`/products/${product._id}`} key={product._id}>
              <FontAwesomeIcon
                className="cursor-pointer hover:opacity-60"
                icon={faSearch}
                size="lg"
                color="white"
              />
            </Link>
          </div>

          <div className="rounded-full p-1">
            <FontAwesomeIcon
              className={`cursor-pointer ${
                isFavorite
                  ? 'text-red-500 hover:text-white'
                  : 'text-white hover:text-red-500'
              }`}
              icon={faHeart}
              size="lg"
              onClick={handleClick}
            />
          </div>
        </div>
        <p className="product__card--name hidden capitalize sm:block">
          {product.title}
        </p>
      </div>
    </Product>
  );
};

export default ProductCard;