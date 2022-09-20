import axios from 'axios';

const getMultiProductsEndpointsByQueryWithUser = async () => {
  const params = { reverse: '-1' };
  const endpoints = [
    `https://pure-plains-38823.herokuapp.com/products?sort=created_at`,
    `https://pure-plains-38823.herokuapp.com/products?sort=favorite_count`,
    `https://pure-plains-38823.herokuapp.com/users/${'632a002f5c8ee6f8800e0a0e'}`,
  ];
  const res = await axios.all(
    endpoints.map((endpoint) => axios.get(endpoint, { params }))
  );
  return res;
};

export default getMultiProductsEndpointsByQueryWithUser;
