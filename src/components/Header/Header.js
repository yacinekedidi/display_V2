import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faHeart,
  faUser,
  // faCaretDown,
  // faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.svg";
import "./Header.css";
import SearchInput from "./SearchInput";
import ModalOverlay from "../Utils/ModalOverlay";
import ProfileDraw from "./ProfileDraw";

const Header = ({ sticky }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [userIsLoggedIn] = useState(false);

  const showProfileDraw = (e) => {
    setProfileIsOpen(!profileIsOpen);
  };

  const showSearchDraw = (e) => {
    // console.log(e.target);
    setShowSearchModal(!showSearchModal);
  };

  return (
    <div
      className={`z-20 mb-16 flex justify-between border-b-2 border-b-orange-200 p-1 ${
        sticky ? "lg:sticky lg:top-0" : ""
      }`}
      style={{ backgroundColor: "rgb(26,21,21)" }}
    >
      <div className="flex flex-col items-center">
        <Link className="hover:rotate-180 hover:animate-spin" to="/">
          <img className="h-8 w-8 sm:h-12 sm:w-12" src={logo} alt="logo" />
        </Link>
        <span
          className="mx-0 my-2 fill-transparent stroke-white stroke-2 font-sans text-xs uppercase tracking-widest text-orange-200 
        shadow-amber-300 drop-shadow-md"
        >
          Display
        </span>
      </div>

      {!userIsLoggedIn ? (
        profileIsOpen ? (
          <ModalOverlay IsOpen={profileIsOpen} setIsOpen={setProfileIsOpen}>
            <ProfileDraw
              profileIsOpen={profileIsOpen}
              showProfileDraw={showProfileDraw}
              userIsLoggedIn={userIsLoggedIn}
            />
          </ModalOverlay>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {showSearchModal ? (
        <ModalOverlay IsOpen={showSearchDraw} setIsOpen={setShowSearchModal}>
          <div className="bg-neutral-900">
            <SearchInput showSearchModal={showSearchModal} focus={true} />
            <div className="text-white">filters</div>
          </div>
        </ModalOverlay>
      ) : (
        <SearchInput showSearchDraw={showSearchDraw} />
      )}
      <div className="flex flex-col-reverse gap-4 sm:flex-row">
        <div className="flex flex-col items-center">
          <button>
            <FontAwesomeIcon
              className="text-orange-400"
              icon={faHeart}
              size="sm"
            />
          </button>
          <span
            className="fill-transparent stroke-white stroke-2 font-sans text-xs  tracking-tighter text-orange-200 
        shadow-amber-300 drop-shadow-md sm:text-sm"
          >
            Saved
          </span>
        </div>
        <div className=" relative flex flex-col items-center">
          <button className="" onClick={showProfileDraw}>
            <FontAwesomeIcon
              className="text-orange-400"
              icon={faUser}
              size="sm"
            />
            {userIsLoggedIn && profileIsOpen ? (
              <ProfileDraw
                profileIsOpen={profileIsOpen}
                showProfileDraw={showProfileDraw}
                userIsLoggedIn={userIsLoggedIn}
              />
            ) : (
              ""
            )}
          </button>
          <span
            className="whitespace-nowrap fill-transparent stroke-white stroke-2 font-sans  text-xs tracking-tighter 
        text-orange-200 shadow-amber-300 drop-shadow-md sm:text-sm"
          >
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
