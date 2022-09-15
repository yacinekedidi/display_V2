import axios from 'axios';

const getProductsBySellerNames = async (selectedSellers, categoryName) => {
  try {
    if (selectedSellers.length) {
      const endpoints = selectedSellers.map(
        (sellerName) =>
          `https://pure-plains-38823.herokuapp.com/products/seller/${sellerName}`
      );
      const response = await axios.all(
        endpoints.map((endpoint) => axios.get(endpoint))
      );
      let products = [];
      //   console.log(response);
      //   [response[0].data, reponse[1].data]
      response.forEach((res) => {
        const sellerProducts = res.data;
        products = [...products, ...sellerProducts];
      });
      return products;
    }
    const response = await axios.get(
      `https://pure-plains-38823.herokuapp.com/products/category/${categoryName[0].toUpperCase()}${categoryName
        .slice(1)
        .toLowerCase()}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default getProductsBySellerNames;
