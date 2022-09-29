import axios from 'axios';

export const removeProductFromUserFavorites = async (uid, pid) => {
  axios.delete(
    `https://pure-plains-38823.herokuapp.com/users/${uid}/favorites/${pid}`
  );
};
