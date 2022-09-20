import axios from 'axios';

const getSellerProductsByName = async (sellerName) => {
  try {
    const res = await axios.get(
      `https://pure-plains-38823.herokuapp.com/products/seller/${sellerName}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getSellerProductsByName;
