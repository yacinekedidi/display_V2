import axios from 'axios';

const getUserFavoriteProducts = async (favorites) => {
  try {
    const endpoints = favorites.map(
      (product_id) =>
        `https://pure-plains-38823.herokuapp.com/products/${product_id}`
    );
    const res = await Promise.all(
      endpoints.map((endpoint) => axios.get(endpoint))
    );
    return res.map((result) => result.data);
  } catch (err) {
    console.error(err);
  }
};

export default getUserFavoriteProducts;
