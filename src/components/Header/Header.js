import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faUser,
  // faCaretDown,
  // faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.svg";
import "./Header.css";
import SearchInput from "./SearchInput";
import ModalOverlay from "../Utils/ModalOverlay";
import ProfileDraw from "./ProfileDraw";

const Header = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);

  const showProfileDraw = (e) => {
    setProfileIsOpen(!profileIsOpen);
  };

  const showSearchDraw = (e) => {
    // console.log(e.target);
    setShowSearchModal(!showSearchModal);
  };

  return (
    <div className="container mb-16 flex w-full min-w-full justify-between border-b-2 border-b-orange-200 p-1">
      <div className="flex flex-col items-center">
        <Link className="hover:rotate-180 hover:animate-spin" to="/">
          <img className="h-8 w-8 sm:h-14 sm:w-14" src={logo} alt="logo" />
        </Link>
        <span
          className="mx-0 my-2 fill-transparent stroke-white stroke-2 font-sans text-xs uppercase tracking-widest text-orange-200 
        shadow-amber-300 drop-shadow-md sm:text-sm"
        >
          Display
        </span>
      </div>
      {profileIsOpen ? (
        <ModalOverlay IsOpen={profileIsOpen} setIsOpen={setProfileIsOpen}>
          <ProfileDraw
            profileIsOpen={profileIsOpen}
            showProfileDraw={showProfileDraw}
          />
        </ModalOverlay>
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
      <div className="">
        <button className="" onClick={showProfileDraw}>
          <FontAwesomeIcon icon={faUser} size="sm" color="orange" />
        </button>
      </div>
    </div>
  );
};

export default Header;
