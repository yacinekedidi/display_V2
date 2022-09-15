import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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
  const [product, setProduct] = useState({});
  const [seller, setSeller] = useState({});

  const [user, setUser] = useState({});

  const [productsRelatedCategory, setRelatedCategory] = useState({});
  const [productsRelatedSeller, setRelatedSeller] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    (document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0) &&
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    (async () => {
      try {
        const gendpoints = [
          `https://pure-plains-38823.herokuapp.com/products/${productId}`,
          // ${user.me.user_id}
          // 61e8098b63becc1f2d5bc7e9 yass
          // 61e809b542bcd1cf883f0ba9 med
          `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}`,
        ];
        const res = await axios.all(
          gendpoints.map((endpoint) => axios.get(endpoint))
        );
        setProduct(res[0].data);
        setUser(res[1].data);

        const endpoints = [
          `https://pure-plains-38823.herokuapp.com/products/category/${res[0].data.category}`,
          `https://pure-plains-38823.herokuapp.com/products/seller/${res[0].data.seller_name}`,
          // user.me.user_id
          // 631b0a0f5ef3261916329056 humble
          // 62f796467b251588f339a60c firstone
          `https://pure-plains-38823.herokuapp.com/sellers/name/${res[0].data.seller_name}`,
        ];

        const response = await axios.all(
          endpoints.map((endpoint) => axios.get(endpoint))
        );

        setRelatedCategory({
          'Related Products': response[0].data.filter(
            (product) => product._id !== productId
          ),
        });
        setRelatedSeller({
          'Products From Same Seller': response[1].data.filter(
            (product) => product._id !== productId
          ),
        });

        setSeller(response[2].data);
        setIsLoading(false);
      } catch (err) {}
    })();
  }, [productId]);

  if (isLoading) return '...Loading';
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
