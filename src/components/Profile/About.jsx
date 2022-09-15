import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import getFormattedName from '../../Utils/formatFullname';

const About = () => {
  const [user, setUser] = useContext(UserContext);
  const [about, setAbout] = useState({
    Fullname: '',
    Bio: '',
    Email: '',
    'Phone Number': '',
    'Last seen': '',
  });

  useEffect(() => {
    Object.keys(user).length &&
      setAbout({
        Fullname: getFormattedName(user.me.fullName),
        Bio: 'Yo',
        Email: 'myemail@email.com',
        'Phone Number': user.me.phoneNumber,
        'Last seen': moment(user.me.last_active).fromNow(),
      });
  }, [user]);

  if (Object.keys(user).length)
    return (
      <div className="py-4">
        {Object.keys(about).map((info, index) => (
          <div
            className="flex w-full justify-center  p-4 text-white shadow-sm shadow-orange-400 md:max-w-2xl"
            style={{ backgroundColor: '#231f20' }}
            key={index}
          >
            <span className="w-[45vw]  text-orange-300 md:w-[20vw]">
              {info}:
            </span>
            <span className="w-[45vw] md:w-[20vw]">{about[info]}</span>
          </div>
        ))}
      </div>
    );
};

export default About;
