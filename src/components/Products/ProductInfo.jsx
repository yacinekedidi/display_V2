import {
  faCalculator,
  faClock,
  faClose,
  faDollarSign,
  faHeart,
  faLocationDot,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { IconButton, Rating, Tooltip } from '@mui/material';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { countries } from '../../mockdata/productImages';
import ModalOverlay from '../../Utils/ModalOverlay';
import ZoomImage from '../../Utils/ZoomImage';
import FormRequest from './FormRequest';
import { ProductContext } from './ProductProfile';

const REVIEW_RATING = 5;
const REVIEW_PARTICIPANTS = 100;
const RESPONSE_TIME = 48;

const ProductInfo = ({
  seller,
  user,
  setUser,
  isEditing,
  setIsEditing,
  productId,
}) => {
  const [product] = useContext(ProductContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    user.favorites.includes(product._id)
  );

  // console.log(user.favorites.includes(product._id));
  const handleImageSelect = (idx) => {
    setSelectedImage(idx);
  };

  const handleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  const handleFormModal = () => setIsFormOpen((prev) => !prev);

  const handleClickFavorite = (isFavorite) => {
    // ${user.me.user_id}
    // 61e8098b63becc1f2d5bc7e9 yass
    // 61e809b542bcd1cf883f0ba9 med
    if (!isFavorite) {
      axios.patch(
        `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}/favorites/${productId}`
      );
      setUser((prev) => ({
        ...prev,
        favorites: [...prev.favorites, productId],
      }));
      setIsFavorite(true);
    } else {
      axios.delete(
        `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}/favorites/${productId}`
      );
      setUser((prev) => ({
        ...prev,
        favorites: prev.favorites.filter((id) => id !== productId),
      }));
      setIsFavorite(false);
    }
  };

  const handleClick = (e) => {
    (async () => {
      try {
        const res = await axios.delete(
          `https://pure-plains-38823.herokuapp.com/products/${productId}`
        );
        setIsDeleted(true);
      } catch (err) {}
    })();
  };

  useEffect(() => {
    // console.log(user.favorites, productId);
    setIsFavorite(user.favorites.includes(productId));
  }, [user.favorites, productId]);

  if (isDeleted) return <Navigate to={`/`} replace={true} />;

  return (
    <div
      className={`relative mx-auto mb-10 flex flex-col-reverse gap-10 bg-orange-300 py-16 px-24 
      font-sans shadow-sm shadow-gray-400 md:flex-row`}
    >
      <div className="flex flex-1 flex-col justify-center gap-4">
        <div>
          {modalIsOpen ? (
            <FontAwesomeIcon
              className="fixed top-0 right-0 z-30 cursor-pointer px-4  text-4xl text-white"
              icon={faClose}
              onClick={handleModal}
            />
          ) : (
            ''
          )}
          <img
            className="cursor-zoom-in"
            src={
              product?.pics_url.length ? product?.pics_url[selectedImage] : ''
            }
            alt=""
            onClick={handleModal}
          />
        </div>
        <div className="flex flex-wrap gap-1">
          {product?.pics_url.map((url, idx) => (
            <img
              className={`mx-auto h-16 w-24 cursor-pointer border-2 shadow-sm hover:border-gray-900 ${
                selectedImage === idx ? 'border-4 border-gray-900' : ''
              } hover:shadow-lg`}
              src={url}
              alt=""
              key={uuidv4()}
              onClick={() => {
                handleImageSelect(idx);
              }}
            />
          ))}
        </div>
        <div className="self-center">
          {/* the user might already have it as favorite so no need to show this */}
          {/* this will not appear for sellers */}
          <div className="flex cursor-pointer items-center gap-2 hover:underline hover:opacity-60">
            <FontAwesomeIcon className="text-red-600" icon={faHeart} />
            <p
              className="text-sm font-thin"
              onClick={() => handleClickFavorite(isFavorite)}
            >
              {' '}
              {!isFavorite
                ? 'add to your favorites'
                : 'remove from  your favorites'}{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <div className="text-3xl md:w-full">
          <h2 className="font-bold">{product.title}</h2>
          {/* <p className="font-thin uppercase">{product.name_note}</p> */}
        </div>
        <div className="flex gap-2">
          {product.tags.map((tag) => (
            <div
              className="flex items-center gap-1 rounded-full border-x-4 px-2 py-1"
              key={uuidv4()}
            >
              <FontAwesomeIcon className="text-white" icon={faTag} />
              <p className=" whitespace-nowrap font-cairo text-sm font-extralight italic opacity-80">
                {tag}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p>Sold by:</p>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-wider">
              {product?.seller_name}
            </h2>
            <span className="relative flex items-center gap-2">
              <FontAwesomeIcon
                className="text-white"
                icon={faLocationDot}
                size="lg"
              />{' '}
              <span
                className={`fi fi-${
                  seller.seller_country?.toLowerCase() in countries
                    ? countries[seller.seller_country?.toLowerCase()]
                    : countries['unknown']
                } peer cursor-help`}
              ></span>{' '}
              <span
                className="text-md absolute top-1/2 left-12 hidden rounded-full rounded-tl-none bg-gray-900 px-2  
              text-white opacity-80 peer-hover:inline-block"
              >
                {' '}
                {seller.seller_country}
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Category:</p>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-wider">
              {product?.category}
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            {/* incomplete for other ratings half stars etc... */}
            {/* {new Array(REVIEW_RATING).fill(0).map((x) => (
              <FontAwesomeIcon
                className="text-lg text-orange-700"
                icon={faStar}
                key={uuidv4()}
              />
            ))} */}
            <Rating
              sx={{ color: 'orangered' }}
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
              size="large"
            />
          </div>
          <p className="font-sm font-thin">
            Feedback on the quality of responses from{' '}
            <span className="font-semibold">{REVIEW_PARTICIPANTS}</span> buyers
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-sm" icon={faClock} />
            <p>
              This seller generally responds in under{' '}
              <span className="font-semibold"> {RESPONSE_TIME} </span> hours
            </p>
          </div>
        </div>{' '}
        <div className="self-center">
          <div className="flex flex-col gap-2 text-lg">
            <button
              className="space-x-1 border-2 bg-transparent p-2 font-sans font-bold tracking-wide text-gray-900 hover:bg-gray-900 hover:text-white"
              onClick={handleFormModal}
            >
              <FontAwesomeIcon icon={faDollarSign} />{' '}
              <span>Request price options</span>
            </button>
            <button
              className="space-x-1 whitespace-nowrap border-2 p-2 font-sans font-bold tracking-wide  text-gray-900 hover:bg-gray-900 hover:text-white"
              onClick={handleFormModal}
            >
              <FontAwesomeIcon icon={faCalculator} />{' '}
              <span>Request a personalized quote</span>
            </button>
          </div>
        </div>
      </div>

      {modalIsOpen ? (
        <ModalOverlay IsOpen={modalIsOpen} setIsOpen={handleModal}>
          {/* <img
            className="block h-auto max-h-full w-auto max-w-full opacity-100"
            src={product["images_url"][selectedImage]}
            alt=""
          /> */}
          <ZoomImage
            image={product?.pics_url[selectedImage]}
            className="block h-auto max-h-full w-auto max-w-full opacity-100"
          />
        </ModalOverlay>
      ) : (
        ''
      )}
      <div>
        <button
          className="absolute top-0 right-0  rounded-md 
          p-0.5 font-cairo font-extrabold "
          style={{ color: 'rgb(26,21,21)' }}
        >
          <Tooltip title="Delete">
            <IconButton>
              <DeleteOutlineIcon
                className="hover:text-orange-600"
                fontSize="large"
                onClick={handleClick}
              />
            </IconButton>
          </Tooltip>

          <Tooltip title="Edit">
            <IconButton>
              <EditOutlinedIcon
                className="hover:text-orange-600"
                fontSize="large"
                onClick={() => {
                  setIsEditing((prev) => !prev);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              />
            </IconButton>
          </Tooltip>
        </button>
      </div>
      {isFormOpen ? (
        <ModalOverlay IsOpen={isFormOpen} setIsOpen={handleFormModal}>
          <FormRequest
            product={product}
            handleFormModal={handleFormModal}
            user={user}
            seller={seller}
          />
        </ModalOverlay>
      ) : (
        ''
      )}
    </div>
  );
};

export default ProductInfo;
