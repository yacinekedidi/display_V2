import React from 'react';
import BasicInfo from './BasicInfo';
import Characteristics from './Characteristics';
import Description from './Description';

const AddProduct = ({ product, addingProduct, setIsAddingProduct }) => {
  return (
    <>
      <>
        <h1 className="self-start py-2 font-sans text-4xl text-white">
          Adding...
        </h1>
        <BasicInfo setIsAddingProduct={setIsAddingProduct} />
      </>
      {/* ProductMoreInfo */}
      <div className="mx-auto mb-10 flex flex-col justify-center gap-10 font-sans md:flex-row ">
        <Characteristics />
        <Description />
      </div>
    </>
  );
};

export default AddProduct;
