import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import deleteUserFavorite from '../../apis/deleteUserFavorite';
import useGetUserFavoriteProducts from '../../hooks/useGetUserFavoriteProducts';
import useGetUserFavorites from '../../hooks/useGetUserFavorites';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';

const Favorites = () => {
  const { pathname } = useLocation();
  const { username } = useParams();
  const { favorites } = useGetUserFavorites(pathname, username);
  const { products, setProducts, isLoading } =
    useGetUserFavoriteProducts(favorites);

  const handleClick = (productId) => {
    deleteUserFavorite(productId)
      .then((res) =>
        setProducts((prev) =>
          prev.filter((product) => productId !== product._id)
        )
      )
      .catch((err) => console.error(err));
  };

  if (isLoading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <div
      className="container m-0 w-screen rounded-b-lg p-2 shadow-sm shadow-orange-200 sm:mb-4 md:w-full"
      style={{ backgroundColor: '#231f20' }}
    >
      <div className="grid w-full gap-6 md:grid-cols-2  lg:grid-cols-4">
        {/* card */}

        {products.map((product) => (
          <div
            className=" relative flex flex-col items-center p-6"
            key={product._id}
          >
            <div className="absolute left-0 top-10 cursor-pointer ">
              <FontAwesomeIcon
                className={`text-red-600 hover:text-white`}
                onClick={() => handleClick(product._id)}
                icon={faHeart}
                size="lg"
              />
            </div>
            <div className="p-2"></div>
            <Link to={`/products/${product._id}`} key={product._id}>
              <div className="p-2">
                {/* backgroundimage = loader */}
                <div className="">
                  <img
                    className="transition hover:scale-110 "
                    src={product.pics_url[0]}
                    alt=""
                  />
                </div>
              </div>
            </Link>
            <div className="p-4"></div>
            <div
              className="text-md absolute bottom-0  flex w-[95%] justify-center rounded-md
                        bg-orange-400 py-1 font-cairo hover:opacity-80"
            >
              <button className="text-white">Request price options</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
