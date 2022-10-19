import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import deleteUserFavorite from '../../apis/deleteUserFavorite';
import { useAuth } from '../../contexts/user-context';
import useGetUserFavoriteProducts from '../../hooks/useGetUserFavoriteProducts';
import useGetUserFavorites from '../../hooks/useGetUserFavorites';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import Favorite from './Favorite';

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
      className="container m-0 w-screen rounded-b-lg p-2 shadow-md shadow-black sm:mb-4 md:w-full"
      style={{ backgroundColor: '#231f20' }}
    >
      <div className="grid w-full gap-6 md:grid-cols-2  lg:grid-cols-4">
        {products.map((product) => (
          <Favorite product={product} handleClick={handleClick} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
