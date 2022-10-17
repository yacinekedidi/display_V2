import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import deleteUserFavorite from '../../apis/deleteUserFavorite';
import { useAuth } from '../../contexts/user-context';
import useGetUserFavoriteProducts from '../../hooks/useGetUserFavoriteProducts';
import useGetUserFavorites from '../../hooks/useGetUserFavorites';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';

const Favorites = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { username } = useParams();
  const { favorites } = useGetUserFavorites(pathname, username);
  const { products, setProducts, isLoading } =
    useGetUserFavoriteProducts(favorites);

  const handleClick = (productId) => {
    deleteUserFavorite(productId, username)
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
      className="container m-0 w-screen rounded-b-lg p-2 shadow-md shadow-gray-900 sm:mb-4 md:w-full"
      style={{ backgroundColor: '#231f20' }}
    >
      <div className="grid w-full gap-6 md:grid-cols-2  lg:grid-cols-4">
        {products.map((product) => (
          <div
            className=" relative flex flex-col items-center p-6"
            key={product._id}
          >
            {user?.me?.role === 'user' ? (
              <div className="absolute left-0 top-10 cursor-pointer ">
                <FontAwesomeIcon
                  className={`text-red-600 hover:text-white`}
                  onClick={() => handleClick(product._id)}
                  icon={faHeart}
                  size="lg"
                />
              </div>
            ) : null}
            <div className="p-2"></div>
            <Link to={`/products/${product._id}`} key={product._id}>
              <div className="p-2">
                <div className="">
                  <img
                    className="transition hover:scale-110 "
                    src={product?.pics_url[0]}
                    alt=""
                  />
                </div>
              </div>
            </Link>
            <div className="p-4"></div>
            {user?.me?.role === 'user' ? (
              <div
                className="text-md absolute bottom-0  flex w-[95%] justify-center rounded-md
                        bg-orange-400 py-1 font-cairo hover:opacity-80"
              >
                <button className="text-white">Request price options</button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
