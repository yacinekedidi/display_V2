import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useGetMultiProductsEndpointsByQueryWithUser from '../../hooks/useGetMultiProductsEndpointsByQueryWithUser.';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import HomeProductSection from './HomeProductSection';

const HomeProductSections = () => {
  const { isLoading, latestProducts, trendingProducts, user } =
    useGetMultiProductsEndpointsByQueryWithUser();

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
