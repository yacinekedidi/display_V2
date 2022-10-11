import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { MockBrands } from '../../mockdata/productImages';

const HomBrandSection = () => {
  return (
    <motion.div
      className="hidden w-full max-w-7xl flex-wrap rounded-lg  bg-transparent md:flex-row lg:block "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex justify-center gap-x-10 px-16">
        {MockBrands.map((brand) => (
          <Link to={`/seller/${brand.name}`} key={brand.id}>
            <div className="flex flex-col items-center rounded-full pb-4 shadow-md shadow-orange-200">
              <img
                className="peer cursor-pointer rounded-full outline outline-orange-100 duration-150 
                 hover:scale-110 hover:outline-orange-300 "
                src={brand.image_url}
                alt=""
              />
              <span
                href="/"
                className="p-2 font-sans text-xl text-orange-100 transition hover:text-orange-300 peer-hover:text-orange-300"
              >
                {brand.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default HomBrandSection;
