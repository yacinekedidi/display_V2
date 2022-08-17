import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";

const ProfileDraw = ({ profileIsOpen, showProfileDraw }) => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  return (
    <>
      {profileIsOpen ? (
        <div className="absolute z-30 grid h-4/6 w-1/2 grid-cols-2 overflow-hidden bg-orange-200 opacity-100">
          {!userIsLoggedIn ? (
            <>
              <FontAwesomeIcon
                className="absolute top-2 right-2 z-30 cursor-pointer p-1 text-4xl text-red-900"
                icon={faClose}
                onClick={showProfileDraw}
              />
            </>
          ) : (
            <div>
              <p>
                <a href="/">profile</a>
              </p>
              <p>
                <a href="/">favorites</a>
              </p>
              ...
            </div>
          )}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ProfileDraw;
