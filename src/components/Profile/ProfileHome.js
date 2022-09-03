import moment from 'moment';
import { useContext } from 'react';
import { UserContext } from '../../App';
import getFormattedName from '../Utils/formatFullname';

const ProfileHome = () => {
  const [user, setUser] = useContext(UserContext);
  // console.log(user);

  if (Object.keys(user).length)
    return (
      <div
        className="m-4 flex w-full flex-col justify-center gap-4 bg-gray-900 p-4 text-white shadow-md shadow-orange-400 
      sm:flex-row lg:max-w-7xl"
      >
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
            joined {moment(user.me.created_at).format('DD-MM-YYYY')}
          </span>
        </div>
      </div>
    );
};

export default ProfileHome;
