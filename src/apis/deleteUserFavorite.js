import axios from 'axios';

const deleteUserFavorite = async (productId, username) => {
  const response = await axios.delete(
    `https://pure-plains-38823.herokuapp.com/users/${username}/favorites/${productId}`
  );
  return response.data;
};

export default deleteUserFavorite;
