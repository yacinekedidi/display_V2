import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import getFormattedName from '../../Utils/formatFullname';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';

const About = () => {
  const context = useOutletContext();
  const user = context?.user;
  const u = context?.u;
  const isLoading = context?.isLoading;
  const [about, setAbout] = useState({
    Fullname: '',
    Email: '',
    'Phone Number': '',
    'Last seen': '',
  });
  useEffect(() => {
    let abouts = {
      Fullname: getFormattedName(user?.fullName),
      Email: user?.email,
      'Phone Number': user?.phone_number,
    };
    if (Object.keys(u).length)
      abouts = {
        ...abouts,
        'Last seen': moment(u?.me.last_active).fromNow(),
      };

    setAbout(abouts);
  }, [user, u]);

  if (isLoading)
    return (
      <ModalOverlay>
        <LoadingSpinner />
      </ModalOverlay>
    );
  return (
    <div className="w-full py-4">
      {Object.keys(about).map((info, index) => (
        <div
          className="flex w-full justify-center  p-4 text-white shadow-md shadow-black md:max-w-7xl"
          style={{ backgroundColor: '#231f20' }}
          key={index}
        >
          <span className="w-[45vw]  text-orange-300 md:w-[20vw]">{info}:</span>
          <span className="w-[45vw] md:w-[20vw]">{about[info]}</span>
        </div>
      ))}
    </div>
  );
};

export default About;
