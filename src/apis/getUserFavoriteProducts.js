import axios from 'axios';

const getUserFavoriteProducts = async (favorites) => {
  const endpoints = favorites.map(
    (product_id) =>
      `https://pure-plains-38823.herokuapp.com/products/${product_id}`
  );
  const res = await Promise.all(
    endpoints.map((endpoint) => axios.get(endpoint))
  );
  return res.map((result) => result.data);
};

export default getUserFavoriteProducts;
