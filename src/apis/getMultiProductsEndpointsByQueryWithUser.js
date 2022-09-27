import axios from 'axios';

const getMultiProductsEndpointsByQueryWithUser = async (uid) => {
  const params = { reverse: '-1' };
  const endpoints = [
    `https://pure-plains-38823.herokuapp.com/products?sort=created_at`,
    `https://pure-plains-38823.herokuapp.com/products?sort=favorite_count`,
  ];
  if (uid)
    endpoints.push(`https://pure-plains-38823.herokuapp.com/users/${uid}`);
  const res = await axios.all(
    endpoints.map((endpoint) => axios.get(endpoint, { params }))
  );
  return res;
};

export default getMultiProductsEndpointsByQueryWithUser;
