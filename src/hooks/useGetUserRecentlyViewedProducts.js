import { useEffect, useState } from 'react';
import { getUserRecentlyViewedProducts } from '../apis/getUserRecentlyViewedProducts';

export const useGetUserRecentlyViewedProducts = (
  recentlyViewedProductsIds = [],
  isHome = false
) => {
  const [recentlyViewedProducts, setRecentlyViewedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (recentlyViewedProductsIds.length)
      getUserRecentlyViewedProducts(recentlyViewedProductsIds, isHome)
        .then((products) => {
          setRecentlyViewedProducts({
            'Recently Viewed Products': products.map((product) => product.data),
          });
        })
        .catch(console.error)
        .finally(() => setIsLoading(false));
  }, [recentlyViewedProductsIds]);

  return { recentlyViewedProducts };
};
