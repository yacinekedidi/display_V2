import axios from 'axios';

const getProductByCategoryAndByPage = async (search, categoryOption, page) => {
  try {
    const res = await axios.get(
      `https://pure-plains-38823.herokuapp.com/products/title/${search}/category/${categoryOption}?page=${page}`
    );
    return res;
  } catch (err) {}
};

export default getProductByCategoryAndByPage;
