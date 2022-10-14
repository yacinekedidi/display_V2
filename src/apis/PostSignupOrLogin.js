import axios from 'axios';
import { API_ENDPOINTS } from '../Utils/constants';

const PostSignupOrLogin = async (form, mode) => {
  const { username, password, phoneNumber, avatarURL, email, fullName } = form;

  const res = await axios.post(`${API_ENDPOINTS.auth}/${mode}`, {
    username,
    password,
    email,
    fullName,
    phoneNumber,
    avatarURL,
  });
  return res.data;
};

export default PostSignupOrLogin;
