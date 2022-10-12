import axios from 'axios';

export const addRecentlySearchedProduct = async (recentlySearched, uid) => {
  const response = await axios.patch(
    `https://pure-plains-38823.herokuapp.com/users/${uid}/search/${recentlySearched}`
  );

  return response.data;
};
