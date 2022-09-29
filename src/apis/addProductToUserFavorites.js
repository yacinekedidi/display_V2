import axios from 'axios';

export const addProductToUserFavorites = async (uid, pid) => {
  axios.patch(
    `https://pure-plains-38823.herokuapp.com/users/${uid}/favorites/${pid}`
  );
};
