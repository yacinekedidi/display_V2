import Cookies from 'universal-cookie';

const saveUserCookies = ({
  isSignup,
  token,
  userId,
  email,
  fullName,
  username,
  hashedPassword,
  phone_number: phoneNumber,
  avatarURL,
}) => {
  const cookies = new Cookies();

  cookies.set('token', token);
  cookies.set('username', username);
  cookies.set('fullName', fullName);
  cookies.set('userId', userId);

  if (isSignup) {
    cookies.set('email', email);
    cookies.set('phoneNumber', phoneNumber);
    cookies.set('avatarURL', avatarURL);
    cookies.set('hashedPassword', hashedPassword);
  }
};

export default saveUserCookies;
