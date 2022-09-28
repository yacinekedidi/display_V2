import axios from 'axios';

export const deleteProduct = async (productId) => {
  await axios.delete(
    `https://pure-plains-38823.herokuapp.com/products/${productId}`
  );
};
