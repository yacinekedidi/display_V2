import axios from 'axios';

const getSellerProductsByName = async (sellerName) => {
  const res = await axios.get(
    `https://pure-plains-38823.herokuapp.com/products/seller/${sellerName}`
  );
  return res.data;
};

export default getSellerProductsByName;
