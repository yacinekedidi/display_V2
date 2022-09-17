import {
  faArrowRightFromBracket,
  faBell,
  faMessage,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@mui/icons-material/Close';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

import { UserContext } from '../../App';
import { logout } from '../../Utils/disconnectUser';
import getFormattedName from '../../Utils/formatFullname';
import Auth from '../Auth/Auth';

const ProfileDraw = ({ showProfileDraw, role, unreadMessages }) => {
  const cookies = new Cookies();
  const userId = cookies.get('userId');
  const [user] = useContext(UserContext);

  return !Object.keys(user).length ? (
    <>
      {/* <div className="absolute z-30 grid h-4/6 w-1/2 grid-cols-2 overflow-hidden bg-orange-200 opacity-100">
        <FontAwesomeIcon
          className="absolute top-2 right-2 z-30 cursor-pointer p-1 text-4xl text-red-900"
          icon={faClose}
          onClick={showProfileDraw}
        />
      </div> */}
      <div>
        <CloseIcon
          fontSize="large"
          className="absolute top-0 left-0 cursor-pointer text-white"
          onClick={() => {
            showProfileDraw();
          }}
        />
        <Auth showProfileDraw={showProfileDraw} />
      </div>
    </>
  ) : (
    <div
      className="absolute top-12 -right-1 flex w-52 flex-col gap-4 rounded-sm bg-gray-900 text-left font-sans text-base font-medium text-white shadow-md 
 shadow-black"
    >
      <div
        className="flex flex-col items-center gap-2 p-2 
   after:my-0 after:mx-auto after:block after:w-11/12 after:border-b-2 after:border-b-orange-300 after:pt-1"
      >
        <Link
          className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-300 text-center shadow-sm shadow-black "
          to={`/user/${userId}`}
        >
          <img
            className="w-32 self-center rounded-full outline outline-orange-400"
            src={user.me.image}
            alt="avatar"
          />
        </Link>
        <span className="font-semibold">
          {getFormattedName(user.me.fullName)}
        </span>
      </div>

      <>
        {' '}
        <div
          className="flex flex-col gap-y-3 py-0 after:my-0 after:mx-auto after:block after:w-11/12 after:border-b-2 
                      after:border-b-orange-300 after:pt-1"
        >
          <Link
            className="flex items-center gap-2 rounded-md border-r-4 border-l-4 border-r-orange-300 border-l-orange-300 px-2 hover:bg-gray-500"
            to={{ pathname: `/user/${userId}` }}
          >
            <FontAwesomeIcon icon={faUser} size="sm" />
            <span className="">Profile</span>
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md border-r-4 border-l-4 border-r-orange-300 border-l-orange-300 px-2 hover:bg-gray-500"
            to={`/notifications`}
          >
            <FontAwesomeIcon icon={faBell} size="sm" />
            <span className="">Notifications</span>
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md border-r-4 border-l-4 border-r-orange-300 border-l-orange-300 px-2 hover:bg-gray-500"
            to={`/messages`}
          >
            <FontAwesomeIcon icon={faMessage} size="sm" />
            <div className="flex w-full items-center justify-between">
              <span className="">Messages</span>
              {unreadMessages ? (
                <div
                  className="rounded-[8px]  px-2 font-cairo 
                          text-sm  text-white"
                  style={{ backgroundColor: '#f5424e' }}
                >
                  {unreadMessages}
                </div>
              ) : (
                ''
              )}
            </div>
          </Link>
        </div>
        <div
          onClick={() => {
            logout();
          }}
          className="mb-4 flex items-center gap-2 rounded-md border-r-4 border-l-4 border-r-orange-300 border-l-orange-300 px-2 hover:bg-gray-500"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span className="">Logout</span>
        </div>
      </>
    </div>
  );
};

export default ProfileDraw;
