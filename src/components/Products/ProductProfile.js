import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MockImages, MockProduct } from '../../mockdata/productImages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProductSection from '../Home/HomeProductSection';
import ScrollToTop from '../Utils/ScrollToTop';
import EditProduct from './EditProduct';
import ProductInfo from './ProductInfo';
import ProductMoreInfo from './ProductMoreInfo';

const ProductProfile = () => {
  const { productId } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    (document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0) &&
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [productId]);

  return (
    <div className="relative">
      <div className="m-auto mb-40 flex w-full flex-col items-center justify-center lg:max-w-screen-lg">
        <Header />
        {/* <BrandLinks /> */}
        {isEditing ? (
          <EditProduct
            product={MockProduct}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
          />
        ) : (
          ''
        )}

        <ProductInfo
          product={MockProduct}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
        <ProductMoreInfo />
        {/*
        <RelatedBrandProducts />
        <RecentlyViewedProducts /> => <HomeProductSection title="Recently Viewed Products" />
         */}
        <HomeProductSection
          title="Products From Same Brand"
          products={MockImages['Recently Viewed Products']}
        />
        {/* <RelatedSearches />  */}
        <HomeProductSection
          title="Related Products"
          products={MockImages['Recently Viewed Products']}
        />
        <ScrollToTop />
      </div>
      <Footer />
    </div>
  );
};

export default ProductProfile;
