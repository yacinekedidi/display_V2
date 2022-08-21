import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const ProfileDraw = ({ profileIsOpen, showProfileDraw, userIsLoggedIn }) => {
  return !userIsLoggedIn ? (
    <div className="absolute z-30 grid h-4/6 w-1/2 grid-cols-2 overflow-hidden bg-orange-200 opacity-100">
      <FontAwesomeIcon
        className="absolute top-2 right-2 z-30 cursor-pointer p-1 text-4xl text-red-900"
        icon={faClose}
        onClick={showProfileDraw}
      />
    </div>
  ) : (
    <div className="absolute top-12 right-0 flex flex-col gap-4 bg-orange-500 p-4 font-sans text-base text-neutral-900">
      <Link to={uuidv4()}>Profile</Link>
      <Link to={`${uuidv4()}/favorites`}>Favorites</Link>
      <Link to={`${uuidv4()}/requests`}>Requests</Link>
    </div>
  );
};

export default ProfileDraw;
