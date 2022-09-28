import React from 'react';
import UseGetUser from '../../hooks/useGetUser';
import ProductCard from '../Products/ProductCard';

const CategoryMain = ({ products, uid }) => {
  const { user } = UseGetUser(uid);

  return (
    <div className="flex w-full flex-col lg:w-[75%]">
      {/* <div className="">2</div> */}
      <div
        className="  p-4 shadow-md shadow-gray-900"
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
