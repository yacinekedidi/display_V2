import axios from 'axios';

const getUser = async (uid) => {
  if (uid) {
    const res = await axios.get(
      `https://pure-plains-38823.herokuapp.com/users/${uid}`
    );
    return res.data;
  }
};

export default getUser;
