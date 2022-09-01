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
import NavBar from '../Home/NavBar';
import ModalOverlay from '../Utils/ModalOverlay';
import Filters from './Filters';
import './Header.css';
import ProfileDraw from './ProfileDraw';
import SearchInput from './SearchInput';

const Header = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [user, setUser] = useContext(UserContext);
  const isConnected = Object.keys(user).length ? true : false;

  const showProfileDraw = (e) => {
    setProfileIsOpen(!profileIsOpen);
  };

  const showSearchDraw = (e) => {
    // console.log(e.target);
    setShowSearchModal(!showSearchModal);
  };

  useEffect(() => {
    // console.log(user);
  });

  return (
    // lg:sticky lg:top-0 lg:bg-transparent lg:backdrop-blur-sm
    <div className="flex w-full flex-col items-start lg:items-center">
      <div
        className={` z-20 flex w-full max-w-7xl items-start justify-between gap-6 border-b-2 border-b-orange-200  px-2 py-2`}
      >
        <div className="flex  items-center gap-1">
          <div className="m-auto flex flex-col items-center">
            <Link className="hover:rotate-180 hover:animate-spin" to="/">
              <img className="h-8 w-8 sm:h-10 sm:w-10" src={logo} alt="logo" />
            </Link>
            <span
              className=" m-auto cursor-default
          fill-transparent stroke-white stroke-2 text-center font-cairo text-xs 
          uppercase tracking-widest text-orange-300 shadow-amber-300 drop-shadow-md "
            >
              Display
            </span>
          </div>

          {/* <div className="">
            <NavBar />
          </div> */}
        </div>
        {!isConnected && profileIsOpen && (
          <ModalOverlay IsOpen={profileIsOpen} setIsOpen={setProfileIsOpen}>
            <ProfileDraw
              profileIsOpen={profileIsOpen}
              showProfileDraw={showProfileDraw}
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
                <div
                  className="bg-zinc-900 mt-16 flex h-2/3 w-screen flex-col items-center self-start  
              rounded-lg border border-orange-300  md:w-[60vw]"
                >
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
                {!isConnected ? (
                  <FontAwesomeIcon
                    className="text-4xl text-orange-300"
                    icon={faUserCircle}
                  />
                ) : (
                  <img
                    className="h-8 w-8 rounded-full sm:h-12 sm:w-12"
                    src={user.me.image}
                    alt="avatar"
                  />
                )}
                {isConnected && profileIsOpen && (
                  <ProfileDraw
                    profileIsOpen={profileIsOpen}
                    showProfileDraw={showProfileDraw}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          <NavBar />
        </div>
        <div className="p-8"></div>
      </div>
    </div>
  );
};

export default Header;
