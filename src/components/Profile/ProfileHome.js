import moment from 'moment';
import { useContext, useEffect } from 'react';
import Cookies from 'universal-cookie';
import { UserContext } from '../../App';
import { client } from '../Messages/stream';
import { connectClient } from '../Utils/connectClient';
import getFormattedName from '../Utils/formatFullname';
import useUserContext from '../Utils/useUserContext';

const ProfileHome = () => {
  const [user, setUser] = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    if (!Object.keys(user).length) {
      const cookies = new Cookies();
      const authToken = cookies.get('token');
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

  return (
    Object.keys(user).length && (
      <div className="m-4 flex w-[95vw] flex-col justify-center gap-4 bg-neutral-800 p-4 text-white shadow-md shadow-orange-400 sm:flex-row">
        <img
          className="w-32 self-center rounded-full outline outline-orange-400"
          src={user.me.image}
          alt="avatar"
        />
        <div className="flex flex-col items-center justify-center p-4">
          <span className=" font-cairo text-xl font-bold text-orange-400 ">
            {getFormattedName(user.me.fullName)}
          </span>
          <span className="whitespace-pre-wrap text-xs opacity-80">
            joined {moment(user.me.create_at).format('DD-MM-YYYY')}
          </span>
        </div>
      </div>
    )
  );
};

export default ProfileHome;
