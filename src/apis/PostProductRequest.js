import axios from 'axios';

export const PostProductRequest = async (productId, data, uid) => {
  console.log(uid);
  try {
    axios.patch(
      `https://pure-plains-38823.herokuapp.com/products/${productId}/requests/`,
      { user_id: uid, data }
    );
  } catch (err) {
    console.error(err);
  }
};
