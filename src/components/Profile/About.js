import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { UserContext } from '../../App';
import { client } from '../Messages/stream';
import { connectClient } from '../Utils/connectClient';
import getFormattedName from '../Utils/formatFullname';
import useUserContext from '../Utils/useUserContext';

const About = () => {
  const [user, setUser] = useContext(UserContext);
  const [about, setAbout] = useState({
    'Full name': '',
    Bio: '',
    Email: '',
    'Phone Number': '',
    'Last seen': '',
  });

  const cookies = new Cookies();
  const authToken = cookies.get('token');
  useEffect(() => {
    if (!client._getConnectionID()) {
      authToken &&
        authToken.length &&
        (async () => {
          console.log('connect');
          try {
            const client = await connectClient(cookies, authToken);
            setUser(client);
          } catch (err) {
            console.error(err);
          }
        })();
    }
  }, []);

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

  return (
    Object.keys(user).length && (
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
    )
  );
};

export default About;
