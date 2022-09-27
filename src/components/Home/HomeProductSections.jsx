import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAuth } from '../../contexts/user-context';
import useGetMultiProductsEndpointsByQueryWithUser from '../../hooks/useGetMultiProductsEndpointsByQueryWithUser';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import HomeProductSection from './HomeProductSection';

const HomeProductSections = () => {
  const { user: u } = useAuth();
  const { isLoading, latestProducts, trendingProducts, user } =
    useGetMultiProductsEndpointsByQueryWithUser(u?.me?.id);

  if (isLoading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );

  return (
    <>
      <div className="m-auto flex flex-col p-0">
        {Object.keys({ ...latestProducts, ...trendingProducts }).map((key) => (
          <HomeProductSection
            title={key}
            products={{ ...latestProducts, ...trendingProducts }[key]}
            user={user}
            key={uuidv4()}
          />
        ))}
      </div>
    </>
  );
};

export default HomeProductSections;
