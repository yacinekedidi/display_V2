import axios from 'axios';

const PostSignupOrLogin = async (form, isSignup) => {
  const URL = 'https://pure-plains-38823.herokuapp.com/auth';
  // const URL = 'http://localhost:5000/auth';

  const { username, password, phoneNumber, avatarURL } = form;

  const res = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
    username,
    password,
    fullName: form.fullName,
    phoneNumber,
    avatarURL,
  });

  return res.data;
};

export default PostSignupOrLogin;
