import moment from 'moment';
import React from 'react';
import getFormattedName from '../Utils/formatFullname';
import useUserContext from '../Utils/useUserContext';

const About = () => {
  const {
    image,
    id,
    fullName = '',
    created_at,
    last_active,
    online,
    phoneNumber,
    role,
  } = useUserContext();

  const about = {
    'Full name': getFormattedName(fullName),
    Bio: 'Yo',
    Email: 'myemail@email.com',
    'Phone Number': phoneNumber,
    'Last seen': moment(last_active).fromNow(),
  };

  return (
    <>
      {Object.keys(about).map((info, index) => (
        <div
          className="my-4 flex w-[90vw] bg-neutral-800 p-4 text-white shadow-md shadow-orange-400 md:w-[40vw]"
          key={index}
        >
          <span className="w-[45vw] md:w-[20vw]">{info}:</span>
          <span className="w-[45vw] md:w-[20vw]">{about[info]}</span>
        </div>
      ))}
    </>
  );
};

export default About;
