import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MockImages, MockProduct } from '../../mockdata/productImages';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HomeProductSection from '../Home/HomeProductSection';
import ScrollToTop from '../Utils/ScrollToTop';
import EditProduct from './Edit/EditProduct';
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
    <>
      <div
        className="w-full shadow-sm shadow-gray-800"
        style={{ backgroundColor: '#231f20' }}
      >
        <Header className="max-w-7xl" sticky={true} />
      </div>
      <div className="py-4"></div>
      <div className="relative">
        <div className="m-auto flex w-full flex-col items-center justify-center lg:max-w-7xl">
          {/* <Header /> */}

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

          <div className="p-2 shadow-sm shadow-orange-100">
            <ProductInfo
              product={MockProduct}
              isEditing={isEditing}
              setIsEditing={setIsEditing}
            />
            <ProductMoreInfo />
          </div>
          {/*
        <RelatedBrandProducts />
        <RecentlyViewedProducts /> => <HomeProductSection title="Recently Viewed Products" />
         */}
          <div className="py-4"></div>
          <div className="p-2 shadow-sm shadow-orange-100">
            <HomeProductSection
              title="Products From Same Brand"
              products={MockImages['Recently Viewed Products']}
            />
            {/* <RelatedSearches />  */}
            <HomeProductSection
              title="Related Products"
              products={MockImages['Recently Viewed Products']}
            />
          </div>
          <ScrollToTop />
        </div>
        {/* <Footer /> */}
      </div>
      <div className="py-4"></div>
      <div
        className="w-full shadow-sm shadow-gray-800"
        style={{ backgroundColor: '#231f20' }}
      >
        <Footer className="max-w-7xl" />
      </div>
    </>
  );
};

export default ProductProfile;
