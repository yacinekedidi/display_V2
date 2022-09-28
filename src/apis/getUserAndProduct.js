import axios from 'axios';

const getUserAndProduct = async (productId, uid) => {
  const gendpoints = [
    `https://pure-plains-38823.herokuapp.com/products/${productId}`,
  ];

  if (uid)
    gendpoints.push(`https://pure-plains-38823.herokuapp.com/users/${uid}`);
  const res = await Promise.all(
    gendpoints.map((endpoint) => axios.get(endpoint))
  );
  return res;
};

export default getUserAndProduct;
