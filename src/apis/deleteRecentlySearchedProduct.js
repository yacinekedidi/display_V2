import axios from 'axios';

export const deleteRecentlySearchedProduct = async (toRemove, uid) => {
  const response = await axios.delete(
    `https://pure-plains-38823.herokuapp.com/users/${uid}/search/delete/${toRemove}`
  );
  return response.data;
};
