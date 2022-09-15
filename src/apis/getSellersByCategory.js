import axios from 'axios';

const getSellersByCategory = async (categoryname) => {
  const response = await axios.get(
    `https://pure-plains-38823.herokuapp.com/products/sellers/category/${categoryname[0].toUpperCase()}${categoryname
      .slice(1)
      .toLocaleLowerCase()}`
  );
  return response.data;
};

export default getSellersByCategory;
