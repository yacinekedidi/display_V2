import React from 'react';
import { MockBrands } from '../../mockdata/productImages';
const HomBrandSection = () => {
  return (
    // w-[90vw] lg:max-w-7xl
    <div className="hidden w-full max-w-7xl flex-wrap rounded-lg  bg-transparent md:flex-row lg:block ">
      {/* <div className="p-8">
        <h2
          className="bg-gradient-to-br from-orange-700 to-white bg-clip-text font-cairo text-sm font-black uppercase text-orange-200 
                      transition-all duration-75 hover:text-transparent sm:text-2xl"
        >
          Popular brands
        </h2>
      </div> */}
      <div className="flex justify-center gap-x-10 px-16">
        {MockBrands.map((brand) => (
          <div className="flex flex-col items-center rounded-full pb-4 shadow-md shadow-orange-200">
            <img
              className="peer cursor-pointer rounded-full outline outline-orange-100 transition hover:outline-orange-300"
              src={brand.image_url}
              alt=""
            />
            <a
              href="/"
              className="p-2 font-sans text-xl text-orange-100 transition hover:text-orange-300 peer-hover:text-orange-300"
            >
              {brand.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomBrandSection;
