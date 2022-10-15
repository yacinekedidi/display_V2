import axios from 'axios';
import { API_ENDPOINTS } from '../Utils/constants';

const getUserAndProduct = async (productId, uid) => {
  const gendpoints = [
    `${API_ENDPOINTS.products}/${productId}?visit=true&userId=${uid}`,
  ];

  if (uid) gendpoints.push(`${API_ENDPOINTS.users}/${uid}`);
  const res = await Promise.all(
    gendpoints.map((endpoint) => axios.get(endpoint))
  );
  return res;
};

export default getUserAndProduct;
