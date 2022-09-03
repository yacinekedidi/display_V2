import {
  faCalculator,
  faClock,
  faClose,
  faDollarSign,
  faHeart,
  faLocationDot,
  faStar,
  faTag,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { countries } from '../../mockdata/productImages';
import ModalOverlay from '../Utils/ModalOverlay';
import ZoomImage from '../Utils/ZoomImage';

const ProductInfo = ({ product, title, isEditing, setIsEditing }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleImageSelect = (idx) => {
    setSelectedImage(idx);
  };

  const handleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

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
            src={product?.images_url[selectedImage]}
            alt=""
            onClick={handleModal}
          />
        </div>
        <div className="flex flex-wrap gap-1">
          {product.images_url.map((url, idx) => (
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
          <div className="flex cursor-pointer items-center gap-2 hover:underline hover:opacity-60">
            <FontAwesomeIcon className="text-red-600" icon={faHeart} />
            <p className="text-sm font-thin">add to your favorites</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-8">
        <div className="text-3xl md:w-full">
          <h2 className="font-bold">{product.name}</h2>
          <p className="font-thin uppercase">{product.name_note}</p>
        </div>
        <div className="flex gap-2">
          {[...product.motif, ...product.appearance].map((tag) => (
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
              {product.seller}
            </h2>
            <span className="relative flex items-center gap-2">
              <FontAwesomeIcon
                className="text-white"
                icon={faLocationDot}
                size="lg"
              />{' '}
              <span
                className={`fi fi-${
                  product.seller_country.toLowerCase() in countries
                    ? countries[product.seller_country.toLowerCase()]
                    : countries['unknown']
                } peer cursor-help`}
              ></span>{' '}
              <span
                className="text-md absolute top-1/2 left-12 hidden rounded-full rounded-tl-none bg-gray-900 px-2  
              text-white opacity-80 peer-hover:inline-block"
              >
                {' '}
                {product.seller_country}
              </span>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            {/* incomplete for other ratings half stars etc... */}
            {new Array(product.review_rating).fill(0).map((x) => (
              <FontAwesomeIcon
                className="text-lg text-orange-700"
                icon={faStar}
                key={uuidv4()}
              />
            ))}
          </div>
          <p className="font-sm font-thin">{`( Feedback on the quality of responses from ${product.review_participants} buyers )`}</p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon className="text-sm" icon={faClock} />
            <p>{`This seller generally responds in under ${product.seller_responseTime} hours`}</p>
          </div>
        </div>
        <div className="self-center">
          <div className="flex flex-col gap-2 text-lg">
            <button className="space-x-1 border-2 bg-transparent p-2 font-sans font-bold tracking-wide text-gray-900 hover:bg-gray-900 hover:text-white">
              <FontAwesomeIcon icon={faDollarSign} />{' '}
              <span>Request price options</span>
            </button>
            <button className="space-x-1 whitespace-nowrap border-2 p-2 font-sans font-bold tracking-wide  text-gray-900 hover:bg-gray-900 hover:text-white">
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
            image={product?.images_url[selectedImage]}
            className="block h-auto max-h-full w-auto max-w-full opacity-100"
          />
        </ModalOverlay>
      ) : (
        ''
      )}
      <div>
        {!isEditing ? (
          <button
            className="absolute top-0 right-0 m-2 rounded-md 
          p-0.5 font-cairo font-extrabold "
            style={{ color: 'rgb(26,21,21)' }}
          >
            <EditOutlinedIcon
              className="hover:text-orange-600"
              fontSize="large"
              onClick={() => {
                setIsEditing((prev) => !prev);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default ProductInfo;
