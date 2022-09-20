import axios from 'axios';

const deleteUserFavorite = async (productId) => {
  try {
    const response = await axios.delete(
      `https://pure-plains-38823.herokuapp.com/users/${'632a002f5c8ee6f8800e0a0e'}/favorites/${productId}`
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

export default deleteUserFavorite;
