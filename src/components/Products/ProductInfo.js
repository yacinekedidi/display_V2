import {
  faLocationDot,
  faStar,
  faTag,
  faClock,
  faDollarSign,
  faCalculator,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ModalOverlay from "../Utils/ModalOverlay";

const ProductInfo = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleImageSelect = (idx) => {
    setSelectedImage(idx);
  };

  const handleModal = () => {
    setModalIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-10 flex flex-col gap-10 bg-orange-400 py-16 px-24 font-sans shadow-sm shadow-gray-400 md:flex-row ">
      <div className="flex flex-1 flex-col justify-center gap-4 ">
        <div>
          <img
            className="cursor-pointer"
            src={product?.images_url[selectedImage]}
            alt=""
            onClick={handleModal}
          />
        </div>
        <div className="flex flex-wrap gap-1">
          {product.images_url.map((url, idx) => (
            <img
              className={`mx-auto h-16 w-24 cursor-pointer border-2 shadow-sm hover:border-neutral-900 ${
                selectedImage === idx ? "border-4 border-neutral-900" : ""
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
            <FontAwesomeIcon className="text-rose-600" icon={faHeart} />
            <p className="text-sm font-thin">add to your favorites</p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="text-3xl md:w-full">
          <h2 className="font-bold">{product.name}</h2>
          <p className="font-thin">DANZA</p>
        </div>
        <div className="flex gap-2">
          {[...product.motif, ...product.appearance].map((tag) => (
            <div className="flex items-center gap-1" key={uuidv4()}>
              <FontAwesomeIcon className="text-orange-200" icon={faTag} />
              <p>{tag}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <p>Sold by:</p>
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold tracking-wider">
              {product.seller}
            </h2>
            <span>
              <FontAwesomeIcon
                className="text-orange-200"
                icon={faLocationDot}
              />{" "}
              {product.seller_country}
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="">
            {/* incomplete for other ratings half stars etc... */}
            {new Array(product.review_rating).fill(0).map((x) => (
              <FontAwesomeIcon
                className="text-lg text-yellow-400"
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
            <button className="space-x-1 border-2 bg-transparent p-2 font-sans font-bold tracking-wide text-orange-200 hover:bg-neutral-900">
              <FontAwesomeIcon icon={faDollarSign} />{" "}
              <span>Request price options</span>
            </button>
            <button className="space-x-1 border-2 bg-transparent p-2 font-sans font-bold tracking-wide text-orange-200 hover:bg-neutral-900">
              <FontAwesomeIcon icon={faCalculator} />{" "}
              <span>Request a personalized quote</span>
            </button>
          </div>
        </div>
      </div>

      {modalIsOpen ? (
        <ModalOverlay
          IsOpen={modalIsOpen}
          setIsOpen={handleModal}
          opacity="100"
        >
          <img
            className="block h-auto max-h-full w-auto max-w-full opacity-100"
            src={product["images_url"][selectedImage]}
            alt=""
          />
        </ModalOverlay>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductInfo;
