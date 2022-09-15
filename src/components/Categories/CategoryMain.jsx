import React from 'react';
import useGetProductsBySellerNames from '../../hooks/useGetProductsBySellerNames';
import useGetUser from '../../hooks/useGetUser';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import ProductCard from '../Products/ProductCard';

const CategoryMain = ({ selectedSellers, categoryName }) => {
  const { loading, products } = useGetProductsBySellerNames(
    selectedSellers,
    categoryName
  );

  const { user } = useGetUser();

  if (loading || !Object.keys(user).length)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );

  return (
    <div className="flex w-full flex-col lg:w-[75%]">
      {/* <div className="">2</div> */}
      <div
        className="  p-4 shadow-sm shadow-gray-500"
        style={{ backgroundColor: '#231f20' }}
      >
        <div className="grid w-full grid-cols-1 justify-items-center gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {products?.map((product, index) => (
            <ProductCard
              product={product}
              user={user}
              key={product._id}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMain;
