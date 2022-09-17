import { useEffect, useState } from 'react';
import getMultiProductsEndpointsByQueryWithUser from '../apis/getMultiProductsEndpointsByQueryWithUser';

const useGetMultiProductsEndpointsByQueryWithUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latestProducts, setLatestProducts] = useState({});
  const [trendingProducts, setTrendingProducts] = useState({});
  // const [VisitedProducts, setVisitedProducts] = useState({'Recently Viewed Products': []})
  const [user, setUser] = useState({});
  useEffect(() => {
    getMultiProductsEndpointsByQueryWithUser().then((res) => {
      setLatestProducts({ 'Latest Products': res[0].data });
      setTrendingProducts({ 'Most Popular Products': res[1].data });
      setUser(res[2].data);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, latestProducts, trendingProducts, user };
};

export default useGetMultiProductsEndpointsByQueryWithUser;
