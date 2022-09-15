import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DescriptionFormatted from '../../../Utils/DescriptionFormatted';

const SearchResults = ({ results, showSearchDraw }) => {
  // console.log(results);

  return (
    results.length > 0 && (
      <div className="scrollbar flex flex-col gap-4 overflow-y-auto p-2 text-orange-200">
        {results.map((product) => (
          <Link
            to={`/products/${product._id}`}
            key={product._id}
            onClick={showSearchDraw}
          >
            <div className="flex cursor-pointer  flex-col bg-gray-900  shadow-sm shadow-orange-100 hover:bg-gray-800 sm:flex-row">
              <div className="w-32">
                <img
                  className="object-cover"
                  src={product.pics_url.length > 0 ? product.pics_url[0] : ''}
                  alt=""
                />
              </div>
              <div className="flex w-full flex-col  px-4">
                <div className="font-cairo text-2xl ">{product.title}</div>

                <div className="text-md py-2 text-justify font-sans text-white">
                  {product.descriptions.length > 10 ? (
                    <DescriptionFormatted description={product.descriptions} />
                  ) : (
                    product.descriptions
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  );
};

export default SearchResults;
