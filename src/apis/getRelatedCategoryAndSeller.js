import axios from 'axios';

const getRelatedCategoryAndSeller = async (res) => {
  try {
    const endpoints = [
      `https://pure-plains-38823.herokuapp.com/products/category/${res[0].data.category}`,
      `https://pure-plains-38823.herokuapp.com/products/seller/${res[0].data.seller_name}`,
      // user.me.user_id
      // 631b0a0f5ef3261916329056 humble
      // 62f796467b251588f339a60c firstone
      `https://pure-plains-38823.herokuapp.com/sellers/name/${res[0].data.seller_name}`,
    ];

    const response = await Promise.all(
      endpoints.map((endpoint) => axios.get(endpoint))
    );
    return response;
  } catch (err) {}
};

export default getRelatedCategoryAndSeller;
