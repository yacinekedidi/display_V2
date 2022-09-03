import React from 'react';
import BasicInfo from './BasicInfo';
import Characteristics from './Characteristics';
import Description from './Description';

const AddProduct = ({ product, addingProduct, setIsAddingProduct }) => {
  return (
    <div>
      <div>
        <h1 className="py-2 font-sans text-4xl text-white">Adding...</h1>
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
