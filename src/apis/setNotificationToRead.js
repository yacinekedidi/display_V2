import axios from 'axios';
import { API_ENDPOINTS } from '../Utils/constants';

export const setNotificationToRead = async (uid, nid) => {
  const response = await axios.patch(
    `${API_ENDPOINTS.users}/${uid}/notifications/${nid}`
  );
  return response.data;
};
