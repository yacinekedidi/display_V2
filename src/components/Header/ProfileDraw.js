import {
  faArrowRightFromBracket,
  faBell,
  faMessage,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../../App';
import Auth from '../Auth/Auth';
import { logout } from '../Utils/disconnectUser';

const id = uuidv4();

const ProfileDraw = ({
  profileIsOpen,
  showProfileDraw,
  userIsLoggedIn,
  setUserIsLoggedIn,
}) => {
  const [user, setUser] = useContext(UserContext);

  return !userIsLoggedIn ? (
    <>
      {/* <div className="absolute z-30 grid h-4/6 w-1/2 grid-cols-2 overflow-hidden bg-orange-200 opacity-100">
        <FontAwesomeIcon
          className="absolute top-2 right-2 z-30 cursor-pointer p-1 text-4xl text-red-900"
          icon={faClose}
          onClick={showProfileDraw}
        />
      </div> */}
      <Auth
        userIsLoggedIn={userIsLoggedIn}
        setUserIsLoggedIn={setUserIsLoggedIn}
        showProfileDraw={showProfileDraw}
      />
    </>
  ) : (
    <div
      className="absolute top-5 -right-1 flex w-52 flex-col gap-4 rounded-sm bg-neutral-900 text-left font-sans text-base font-medium text-white shadow-md 
    shadow-black"
    >
      <div
        className="flex flex-col items-center gap-2 p-2 
      after:my-0 after:mx-auto after:block after:w-11/12 after:border-b-2 after:border-b-orange-300 after:pt-1"
      >
        <Link
          className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-300 text-center shadow-sm shadow-black "
          to={id}
        >
          <FontAwesomeIcon
            className="text-neutral-800"
            icon={faUser}
            size="lg"
          />
        </Link>
        <span className="font-semibold">YacineKedidi</span>
      </div>
      <div
        className="flex flex-col gap-y-3 py-0 after:my-0 after:mx-auto after:block after:w-11/12 after:border-b-2 
      after:border-b-orange-300 after:pt-1"
      >
        <Link
          className="flex items-center gap-2 rounded-md border-r-4 border-l-4 border-r-orange-300 border-l-orange-300 px-2 hover:bg-gray-500"
          to={`/${id}`}
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
          <span className="">Messages</span>
        </Link>
      </div>
      <div
        onClick={() => {
          logout(user);
        }}
        className="mb-4 flex items-center gap-2 rounded-md border-r-4 border-l-4 border-r-orange-300 border-l-orange-300 px-2 hover:bg-gray-500"
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span className="">Logout</span>
      </div>
    </div>
  );
};

export default ProfileDraw;
