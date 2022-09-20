import axios from 'axios';

// ${user.me.user_id}
// 632a002f5c8ee6f8800e0a0e andrew
// 61e809b542bcd1cf883f0ba9 med
const getUser = async (username) => {
  try {
    const res = await axios.get(
      `https://pure-plains-38823.herokuapp.com/users/${'632a002f5c8ee6f8800e0a0e'}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getUser;
