import {
  faBell,
  faMessage,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../assets/logo.svg';
import { connectClient } from '../Utils/connectClient';
import ModalOverlay from '../Utils/ModalOverlay';
import Filters from './Filters';
import './Header.css';
import ProfileDraw from './ProfileDraw';
import SearchInput from './SearchInput';

const Header = ({ userIsLoggedIn, setUserIsLoggedIn, sticky = false }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [user, setUser] = useContext(UserContext);

  const showProfileDraw = (e) => {
    setProfileIsOpen(!profileIsOpen);
  };

  const showSearchDraw = (e) => {
    // console.log(e.target);
    setShowSearchModal(!showSearchModal);
  };

  useEffect(() => {
    connectClient();
  }, [user]);

  return (
    // lg:sticky lg:top-0 lg:bg-transparent lg:backdrop-blur-sm
    <div
      className={`z-20 mb-16 flex w-1/2 max-w-7xl items-start justify-between gap-6 border-b-2 border-b-orange-200 py-2`}
    >
      <div className="flex items-center gap-1">
        <Link className="hover:rotate-180 hover:animate-spin" to="/">
          <img className="h-8 w-8 sm:h-10 sm:w-10" src={logo} alt="logo" />
        </Link>
        {/* <span
          className="mx-0 my-2 fill-transparent stroke-white stroke-2 font-cairo text-xs uppercase tracking-widest text-orange-200 
        shadow-amber-300 drop-shadow-md"
        >
          Display
        </span> */}
      </div>
      {!userIsLoggedIn && profileIsOpen && (
        <ModalOverlay IsOpen={profileIsOpen} setIsOpen={setProfileIsOpen}>
          <ProfileDraw
            profileIsOpen={profileIsOpen}
            showProfileDraw={showProfileDraw}
            userIsLoggedIn={userIsLoggedIn}
            setUserIsLoggedIn={setUserIsLoggedIn}
          />
        </ModalOverlay>
      )}
      <div className="flex flex-col sm:flex-row-reverse sm:gap-4">
        <div className=" relative flex gap-4">
          {showSearchModal ? (
            <ModalOverlay
              IsOpen={showSearchDraw}
              setIsOpen={setShowSearchModal}
            >
              <div className="flex h-1/2 w-screen flex-col items-center self-start bg-gradient-to-b from-white via-orange-300 to-orange-500">
                <SearchInput showSearchModal={showSearchModal} focus={true} />
                {/* filters */}
                <div className="text-white">
                  <Filters />
                </div>
              </div>
            </ModalOverlay>
          ) : (
            <SearchInput showSearchDraw={showSearchDraw} />
          )}
          <div className="flex flex-col justify-center">
            <button className="" onClick={showProfileDraw}>
              {!userIsLoggedIn ? (
                <FontAwesomeIcon
                  className="text-4xl text-orange-300"
                  icon={faUserCircle}
                />
              ) : (
                <img
                  className="h-8 w-8 rounded-full"
                  src={user?.user?.image}
                  alt="avatar"
                />
              )}
              {userIsLoggedIn && profileIsOpen && (
                <ProfileDraw
                  profileIsOpen={profileIsOpen}
                  showProfileDraw={showProfileDraw}
                  userIsLoggedIn={userIsLoggedIn}
                  setUserIsLoggedIn={setUserIsLoggedIn}
                />
              )}
            </button>
          </div>
        </div>

        {/* {userIsLoggedIn && (
          <div className="flex flex-col items-center">
            <Link to="/messages">
              <button>
                <FontAwesomeIcon
                  className="text-sm text-white md:text-lg"
                  icon={faMessage}
                />
              </button>
            </Link>
          </div>
        )} */}
        {/* {userIsLoggedIn && (
          <div className="flex flex-col items-center self-center">
            <Link to="/notifications">
              <button>
                <FontAwesomeIcon
                  className="text-sm text-white md:text-lg"
                  icon={faBell}
                />
              </button>
            </Link>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Header;
