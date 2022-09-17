import { useEffect, useState } from 'react';
import getProductsBySellerNames from '../apis/getProductsBySellerNames';

const useGetProductsBySellerNames = (selectedSellers) => {
  const [products, setProducts] = useState([]);

  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedSellers.length) {
      setIsLoading(true);
      getProductsBySellerNames(selectedSellers)
        .then((res) => {
          setIsLoading(false);
          setProducts(res);
        })
        .catch((err) => console.log(err));
    }

    return () => setProducts([]);
  }, [selectedSellers]);

  return {
    loading,
    products,
    setProducts,
  };
};

export default useGetProductsBySellerNames;
