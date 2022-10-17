import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/user-context';
import useGetUser from '../../hooks/useGetUser';
import getFormattedName from '../../Utils/formatFullname';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import ModalOverlay from '../../Utils/ModalOverlay';

const About = () => {
  const { username } = useParams();
  const { user: u } = useAuth();
  const { user, isLoading } = useGetUser(username);
  const [about, setAbout] = useState({
    Fullname: '',
    Bio: '',
    Email: '',
    'Phone Number': '',
    'Last seen': '',
  });
  useEffect(() => {
    let abouts = {
      Fullname: getFormattedName(user?.fullName),
      Bio: 'Yo',
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
    <div className="py-4">
      {Object.keys(about).map((info, index) => (
        <div
          className="flex w-full justify-center  p-4 text-white shadow-md shadow-gray-900 md:max-w-2xl"
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
