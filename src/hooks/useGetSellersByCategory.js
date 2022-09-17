import { useEffect, useState } from 'react';
import getSellersByCategory from '../apis/getSellersByCategory';

const useGetSellersByCategory = (categoryname) => {
  const [loading, setLoading] = useState(false);
  const [sellerNames, setSellerNames] = useState([]);
  const [selectedSellers, setSelectedSellers] = useState([]);

  useEffect(() => {
    setLoading(true);
    getSellersByCategory(categoryname)
      .then((res) => {
        setLoading(false);
        setSellerNames(res);
        setSelectedSellers(res);
      })
      .catch((err) => console.log(err));

    return () => {
      setSellerNames([]);
    };
  }, [categoryname]);
  return { loading, sellerNames, selectedSellers, setSelectedSellers };
};

export default useGetSellersByCategory;
