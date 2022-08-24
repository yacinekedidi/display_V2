import moment from 'moment';
import useUserContext from '../Utils/useUserContext';

const ProfileHome = () => {
  const {
    image,
    id,
    fullName,
    created_at,
    last_active,
    online,
    phoneNumber,
    role,
  } = useUserContext();

  return (
    <div className="m-4 flex w-[95vw] flex-col justify-center gap-4 bg-neutral-800 p-4 text-white shadow-md shadow-orange-400 sm:flex-row">
      <img
        className="w-32 self-center rounded-full outline outline-orange-400"
        src={image}
        alt="avatar"
      />
      <div className="flex flex-col items-center justify-center p-4">
        <span className=" font-cairo text-xl font-bold text-orange-400 ">
          {`${fullName[0].toUpperCase()}${fullName.slice(1)}`}
        </span>
        <span className="whitespace-pre-wrap text-xs opacity-80">
          joined {moment(created_at).format('DD-MM-YYYY')}
        </span>
      </div>
    </div>
  );
};

export default ProfileHome;
