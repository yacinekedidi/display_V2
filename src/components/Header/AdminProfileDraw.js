import {
  faArrowRightFromBracket,
  faBell,
  faMessage,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../Utils/disconnectUser';

const AdminProfileDraw = ({ id }) => {
  return (
    <>
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
          logout();
        }}
        className="mb-4 flex items-center gap-2 rounded-md border-r-4 border-l-4 border-r-orange-300 border-l-orange-300 px-2 hover:bg-gray-500"
      >
        <FontAwesomeIcon icon={faArrowRightFromBracket} />
        <span className="">Logout</span>
      </div>
    </>
  );
};

export default AdminProfileDraw;
