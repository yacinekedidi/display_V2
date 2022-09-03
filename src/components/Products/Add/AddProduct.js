import React from 'react';
import BasicInfo from './BasicInfo';
import Characteristics from './Characteristics';
import Description from './Description';

const AddProduct = ({ product, addingProduct, setIsAddingProduct }) => {
  return (
    <div className="w-full max-w-7xl">
      <div>
        <h1
          className="bg-gradient-to-br from-orange-700 to-white bg-clip-text py-2 font-cairo text-2xl font-black uppercase 
                       text-transparent transition-all duration-75"
        >
          creating new Product...
        </h1>
        <BasicInfo setIsAddingProduct={setIsAddingProduct} />
      </div>
      {/* ProductMoreInfo */}
      <div className="mx-auto mb-10 flex flex-col justify-center gap-10 font-sans md:flex-row ">
        <Characteristics />
        <Description />
      </div>
    </div>
  );
};

export default AddProduct;
