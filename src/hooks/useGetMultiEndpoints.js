import { useEffect, useState } from 'react';
import getRelatedCategoryAndSeller from '../apis/getRelatedCategoryAndSeller';
import getUserAndProduct from '../apis/getUserAndProduct';

const useGetMultiEndpoints = (productId) => {
  const [product, setProduct] = useState({});
  const [seller, setSeller] = useState({});
  const [user, setUser] = useState({});

  const [productsRelatedCategory, setRelatedCategory] = useState({});
  const [productsRelatedSeller, setRelatedSeller] = useState({});

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (document.body.scrollTop !== 0 ||
      document.documentElement.scrollTop !== 0) &&
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    getUserAndProduct(productId).then((res) => {
      setProduct(res[0].data);
      setUser(res[1].data);
      getRelatedCategoryAndSeller(res).then((response) => {
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
      });
    });
  }, [productId]);

  return {
    isLoading,
    product,
    setProduct,
    seller,
    user,
    setUser,
    productsRelatedCategory,
    productsRelatedSeller,
  };
};

export default useGetMultiEndpoints;
