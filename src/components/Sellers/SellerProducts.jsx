import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Tooltip } from '@mui/material';
import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { deleteProduct } from '../../apis/deleteProduct';
import { useAuth } from '../../contexts/user-context';
import { useGetSellerProducts } from '../../hooks/useGetSellerProducts';
import AddProduct from '../Products/Add/AddProduct';

const SellerProducts = () => {
  const [addingProduct, setIsAddingProduct] = useState(false);
  const [seller] = useOutletContext();
  const { products, setProducts } = useGetSellerProducts(seller);
  const { user: u } = useAuth();

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
      {addingProduct ? (
        <AddProduct
          addingProduct={addingProduct}
          setIsAddingProduct={setIsAddingProduct}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center p-8">
          <div className="grid w-full gap-6 backdrop-blur-sm md:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <div
                className="group relative flex flex-col items-center p-6"
                key={product._id}
              >
                {['seller', 'admin'].includes(u?.me?.role) &&
                seller.name === u?.me?.name ? (
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
                ) : null}
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
      )}

      {['seller', 'admin'].includes(u?.me?.role) &&
      seller.name === u?.me?.name ? (
        <div>
          {!addingProduct ? (
            <Tooltip title="Add product">
              <button
                className="rounded-md p-0.5 font-cairo font-extrabold  hover:opacity-80"
                style={{ color: 'rgb(26,21,21)' }}
                onClick={() => {
                  setIsAddingProduct(true);
                }}
              >
                <AddCircleOutlineIcon
                  className="text-white hover:text-orange-600"
                  fontSize="large"
                />
              </button>
            </Tooltip>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default SellerProducts;
