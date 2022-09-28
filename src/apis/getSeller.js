import axios from 'axios';

export const getSeller = async (sellername) => {
  const res = await axios.get(
    `https://pure-plains-38823.herokuapp.com/sellers/name/${sellername}`
  );
  return res.data;
};
