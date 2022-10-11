import { motion } from 'framer-motion';
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
      <motion.div
        className="m-auto flex flex-col p-0"
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {Object.keys({ ...latestProducts, ...trendingProducts }).map((key) => (
          <HomeProductSection
            title={key}
            products={{ ...latestProducts, ...trendingProducts }[key]}
            user={user}
            key={uuidv4()}
          />
        ))}
      </motion.div>
    </>
  );
};

export default HomeProductSections;
