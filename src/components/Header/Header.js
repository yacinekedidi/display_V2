import {
  faBell,
  faMessage,
  faUser,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { UserContext } from '../../App';
import logo from '../../assets/logo.svg';
import { client } from '../Messages/stream';
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
    <div
      className={`z-20 mb-16 flex justify-between border-b-2 border-b-orange-200 p-1 ${
        sticky ? 'lg:sticky lg:top-0' : ''
      }`}
      style={{ backgroundColor: 'rgb(26,21,21)' }}
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

      {showSearchModal ? (
        <ModalOverlay IsOpen={showSearchDraw} setIsOpen={setShowSearchModal}>
          <div className="bg-neutral-900">
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
      <div className="flex flex-col sm:flex-row-reverse sm:gap-4">
        <div className=" relative flex flex-col items-center">
          <button className="" onClick={showProfileDraw}>
            {!userIsLoggedIn ? (
              <FontAwesomeIcon
                className="text-sm text-white md:text-4xl"
                icon={faUserCircle}
              />
            ) : (
              <img
                className="w-max-lg w-14 self-center rounded-full "
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
