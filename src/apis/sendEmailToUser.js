import axios from 'axios';

const sendEmailToUser = async (data) => {
  try {
    const res = await axios.post(
      `https://api.emailjs.com/api/v1.0/email/send`,
      data
    );

    return res;
  } catch (err) {
    console.error(err);
  }
};

export default sendEmailToUser;
