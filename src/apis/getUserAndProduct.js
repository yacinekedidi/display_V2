import axios from 'axios';

const getUserAndProduct = async (productId) => {
  try {
    const gendpoints = [
      `https://pure-plains-38823.herokuapp.com/products/${productId}`,
      // ${user.me.user_id}
      // 61e8098b63becc1f2d5bc7e9 yass
      // 61e809b542bcd1cf883f0ba9 med
      `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}`,
    ];
    const res = await Promise.all(
      gendpoints.map((endpoint) => axios.get(endpoint))
    );
    return res;
  } catch (err) {}
};

export default getUserAndProduct;
