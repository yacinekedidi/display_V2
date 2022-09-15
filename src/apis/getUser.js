import axios from 'axios';

const getUser = async () => {
  try {
    const res = await axios.get(
      `https://pure-plains-38823.herokuapp.com/users/${'61e8098b63becc1f2d5bc7e9'}`
    );
    return res.data;
  } catch (err) {
    console.error(err);
  }
};

export default getUser;
