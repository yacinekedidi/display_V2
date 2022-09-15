import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';
import HomeProductSection from './HomeProductSection';

const HomeProductSections = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [latestProducts, setLatestProducts] = useState({});
  const [trendingProducts, setTrendingProducts] = useState({});
  // const [VisitedProducts, setVisitedProducts] = useState({'Recently Viewed Products': []})
  const [user, setUser] = useState({});

  useEffect(() => {
    const params = { reverse: 1 };
    const endpoints = [
      `http://pure-plains-38823.herokuapp.com/products?sort=created_at`,
      `http://pure-plains-38823.herokuapp.com/products?sort=favorite_count`,
      `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}`,
    ];
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint, { params })))
      .then((res) => {
        setLatestProducts({ 'Latest Products': res[0].data });
        setTrendingProducts({ 'Most Popular Products': res[1].data });
        setUser(res[2].data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );

  return (
    <>
      <div className="m-auto flex flex-col p-0">
        {Object.keys({ ...latestProducts, ...trendingProducts }).map((key) => (
          <HomeProductSection
            title={key}
            products={{ ...latestProducts, ...trendingProducts }[key]}
            user={user}
            key={uuidv4()}
          />
        ))}
      </div>
    </>
  );
};

export default HomeProductSections;
