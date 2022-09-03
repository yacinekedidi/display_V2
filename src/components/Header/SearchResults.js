import React, { useState } from 'react';
import DescriptionFormatted from '../Utils/DescriptionFormatted';

const SearchResults = ({ results }) => {
  return (
    <div className="scrollbar flex flex-col gap-4 overflow-y-auto p-2 text-orange-200">
      {results.map((product) => (
        <div
          className="flex  bg-gray-900 shadow-sm shadow-orange-100"
          key={product.id}
        >
          <div className="w-32">
            <img className="object-cover" src={product.images_url[0]} alt="" />
          </div>
          <div className="flex w-full flex-col  px-4">
            <div className="font-cairo text-2xl ">{product.name}</div>
            <div className="text-md py-2 text-justify font-sans text-white">
              {product.desciption.length > 10 ? (
                <DescriptionFormatted description={product.desciption} />
              ) : (
                product.desciption
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
