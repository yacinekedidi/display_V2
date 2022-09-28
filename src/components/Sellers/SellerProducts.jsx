import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tooltip } from '@mui/material';
import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { deleteProduct } from '../../apis/deleteProduct';
import { useGetSellerProducts } from '../../hooks/useGetSellerProducts';

const SellerProducts = () => {
  const [seller] = useOutletContext();
  const { products, setProducts } = useGetSellerProducts(seller);

  const handleClick = (productId) => {
    deleteProduct(productId)
      .then(() =>
        setProducts((prev) =>
          prev.filter((product) => product._id !== productId)
        )
      )
      .catch((err) => console.error(err));
  };

  return (
    <div className="static top-0 flex h-full w-full max-w-7xl  justify-center bg-transparent p-4 shadow-sm shadow-gray-100 lg:absolute ">
      <div className="flex h-full w-full flex-col items-center p-8">
        <div className="grid w-full gap-6 backdrop-blur-sm md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              className="group relative flex flex-col items-center p-6"
              key={product._id}
            >
              <div className="absolute -right-4 top-4 cursor-pointer hover:opacity-80">
                <Tooltip title="Delete">
                  <button onClick={() => handleClick(product._id)}>
                    <DeleteOutlineIcon
                      className="text-orange-200 hover:text-orange-600"
                      fontSize="large"
                    />
                  </button>
                </Tooltip>
              </div>
              <div className="p-2"></div>
              <Link to={`/products/${product._id}`} key={product._id}>
                <div className=" p-2">
                  <div className="">
                    <img
                      className="transition hover:scale-110 "
                      src={product.pics_url[0]}
                      alt=""
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
