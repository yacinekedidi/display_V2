import React, { createContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import useGetMultiEndpoints from '../../hooks/useGetMultiEndpoints';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import ScrollToTop from '../../Utils/ScrollToTop';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProductSection from '../Home/HomeProductSection';
import EditProduct from './Edit/EditProduct';
import ProductInfo from './ProductInfo';
import ProductMoreInfo from './ProductMoreInfo';

export const ProductContext = createContext({});

const ProductProfile = () => {
  const { productId } = useParams();

  const [isEditing, setIsEditing] = useState(false);
  const {
    isLoading,
    product,
    setProduct,
    seller,
    user,
    setUser,
    productsRelatedCategory,
    productsRelatedSeller,
  } = useGetMultiEndpoints(productId);

  if (isLoading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <>
      <Header className="max-w-7xl" sticky={true} />
      <div className="relative">
        <div className="m-auto flex w-full flex-col items-center justify-center lg:max-w-7xl">
          {/* <Header /> */}

          {/* <BrandLinks /> */}
          <ProductContext.Provider value={[product, setProduct]}>
            {isEditing ? (
              <EditProduct
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                productId={productId}
              />
            ) : (
              <div
                className="p-2 shadow-sm shadow-orange-100"
                style={{ backgroundColor: '#231f20' }}
              >
                <ProductInfo
                  seller={seller}
                  user={user}
                  setUser={setUser}
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                  productId={productId}
                />
                <ProductMoreInfo />
              </div>
            )}
          </ProductContext.Provider>

          {/*
        <RelatedBrandProducts />
        <RecentlyViewedProducts /> => <HomeProductSection title="Recently Viewed Products" />
         */}
          <div className="py-4"></div>
          <div
            className="p-2 shadow-sm shadow-orange-100"
            style={{ backgroundColor: '#231f20' }}
          >
            {Object.keys({
              ...productsRelatedCategory,
              ...productsRelatedSeller,
            }).map((key) => (
              <HomeProductSection
                title={key}
                user={user}
                products={
                  { ...productsRelatedCategory, ...productsRelatedSeller }[key]
                }
                key={uuidv4()}
                noLinks={true}
              />
            ))}
          </div>
          <ScrollToTop />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductProfile;
