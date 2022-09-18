import axios from 'axios';

const PostSignupOrLogin = async (form, isSignup) => {
  const URL = 'https://pure-plains-38823.herokuapp.com/auth';
  const { username, password, phoneNumber, avatarURL } = form;

  try {
    const {
      data: { token, userId, hashedPassword, fullName, role },
    } = await axios.post(`${URL}/${isSignup ? 'signup' : 'login'}`, {
      username,
      password,
      fullName: form.fullName,
      phoneNumber,
      avatarURL,
    });

    return {
      token,
      userId,
      hashedPassword,
      fullName,
      role,
      username,
      phoneNumber,
      avatarURL,
    };
  } catch (err) {}
};

export default PostSignupOrLogin;
