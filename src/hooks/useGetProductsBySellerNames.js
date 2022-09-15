import { useEffect, useState } from 'react';
import getProductsBySellerNames from '../apis/getProductsBySellerNames';

const useGetProductsBySellerNames = (selectedSellers, categoryName) => {
  const [products, setProducts] = useState([]);
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductsBySellerNames(selectedSellers, categoryName)
      .then((res) => {
        setIsLoading(false);
        setProducts(res);
      })
      .catch((err) => console.log(err));

    return () => setProducts([]);
  }, [selectedSellers, categoryName]);

  return { loading, products, setProducts };
};

export default useGetProductsBySellerNames;
