import axios from 'axios';

export const getRequestedProducts = async () => {
  const response = await axios.get(
    `https://pure-plains-38823.herokuapp.com/products?sort=created_at`
  );

  return response.data;
};
