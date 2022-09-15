import moment from 'moment';
import { useContext } from 'react';
import { UserContext } from '../../App';
import getFormattedName from '../../Utils/formatFullname';
import Footer from '../Footer/Footer';

const ProfileHome = () => {
  const [user, setUser] = useContext(UserContext);
  // console.log(user);

  if (Object.keys(user).length)
    return (
      <div
        className="m-4 flex w-full max-w-7xl flex-col justify-center gap-4  p-4 text-white shadow-sm 
      sm:flex-row"
        style={{ backgroundColor: '#231f20' }}
      >
        <img
          className="w-32 self-center rounded-full shadow-sm shadow-orange-400"
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
