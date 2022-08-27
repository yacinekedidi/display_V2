import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import getFormattedName from '../Utils/formatFullname';

const About = () => {
  const [user, setUser] = useContext(UserContext);
  const [about, setAbout] = useState({
    'Full name': '',
    Bio: '',
    Email: '',
    'Phone Number': '',
    'Last seen': '',
  });

  useEffect(() => {
    Object.keys(user).length &&
      setAbout({
        'Full name': getFormattedName(user.me.fullName),
        Bio: 'Yo',
        Email: 'myemail@email.com',
        'Phone Number': user.me.phoneNumber,
        'Last seen': moment(user.me.last_active).fromNow(),
      });
  }, [user]);

  if (Object.keys(user).length)
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
