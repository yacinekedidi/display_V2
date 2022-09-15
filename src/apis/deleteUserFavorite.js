import axios from 'axios';

const deleteUserFavorite = async (productId) => {
  try {
    const response = await axios.delete(
      `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}/favorites/${productId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default deleteUserFavorite;
