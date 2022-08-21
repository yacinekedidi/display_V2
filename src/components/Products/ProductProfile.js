import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { MockImages, MockProduct } from "../../mockdata/productImages";
import ProductInfo from "./ProductInfo";
import ScrollToTop from "../Utils/ScrollToTop";
import ProductMoreInfo from "./ProductMoreInfo";
import HomeProductSection from "../Home/HomeProductSection";

const ProductProfile = () => {
  const { productId } = useParams();

  useEffect(() => {
    (document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0) &&
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [productId]);

  return (
    <>
      <div className="m-auto flex w-full flex-col items-center justify-center lg:max-w-screen-lg">
        <Header />
        {/* <BrandLinks /> */}
        <ProductInfo product={MockProduct} />
        <ProductMoreInfo />
        {/*
        <RelatedBrandProducts />
        <RecentlyViewedProducts /> => <HomeProductSection title="Recently Viewed Products" />
         */}
        <HomeProductSection
          title="Recently Viewed Products"
          products={MockImages["Recently Viewed Products"]}
        />
        {/* <RelatedSearches />  */}
        <ScrollToTop />
      </div>
      <Footer />
    </>
  );
};

export default ProductProfile;
