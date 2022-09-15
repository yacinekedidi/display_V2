import axios from 'axios';

const getProductsByPage = async (page, params) => {
  try {
    const res = await axios.get(
      `https://pure-plains-38823.herokuapp.com/products/page/${page.current}`,
      {
        params,
      }
    );

    return res.data;
  } catch (err) {}
};

export default getProductsByPage;
