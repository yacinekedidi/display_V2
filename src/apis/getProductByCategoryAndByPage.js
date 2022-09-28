import axios from 'axios';

const getProductByCategoryAndByPage = async (search, categoryOption, page) => {
  const res = await axios.get(
    `https://pure-plains-38823.herokuapp.com/products/title/${search}/category/${categoryOption}?page=${page}`
  );
  return res;
};

export default getProductByCategoryAndByPage;
