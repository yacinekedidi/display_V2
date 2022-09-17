import axios from 'axios';

const getProductsBySellerNames = async (selectedSellers) => {
  try {
    const endpoints = selectedSellers.map(
      (sellerName) =>
        `https://pure-plains-38823.herokuapp.com/products/seller/${sellerName}`
    );
    const response = await Promise.all(
      endpoints.map((endpoint) => axios.get(endpoint))
    );
    let products = [];

    response.forEach((res) => {
      const sellerProducts = res.data;
      products = [...products, ...sellerProducts];
    });
    return products;
  } catch (err) {
    console.error(err);
  }
};

export default getProductsBySellerNames;
