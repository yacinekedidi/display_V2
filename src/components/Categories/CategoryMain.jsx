import React from 'react';
import UseGetProductsBySellerNames from '../../hooks/useGetProductsBySellerNames';
import UseGetUser from '../../hooks/useGetUser';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import ProductCard from '../Products/ProductCard';

const CategoryMain = ({ selectedSellers, categoryName }) => {
  const { loading, products } = UseGetProductsBySellerNames(
    selectedSellers,
    categoryName
  );
  const { user } = UseGetUser();

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
        {products.length ? (
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
        ) : (
          <div className="text-center font-cairo">
            there are currently no products in here! {':('}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryMain;
