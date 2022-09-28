import axios from 'axios';

export const PostProductRequest = async (productId, data, uid) => {
  axios.patch(
    `https://pure-plains-38823.herokuapp.com/products/${productId}/requests/`,
    { user_id: uid, data }
  );
};
