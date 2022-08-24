import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className=" bottom-0 mt-16 flex w-full justify-center text-orange-200">
      <div className="flex w-[60vw] justify-around  border-t-2 border-t-orange-200 p-4">
        <div className="flex items-center gap-2 font-cairo">
          <Link className="hover:rotate-180 hover:animate-spin" to="/">
            <img className="h-8 w-8 sm:h-10 sm:w-10" src={logo} alt="logo" />
          </Link>
          <span className="text-sm">
            {moment().year()} Display, inc. &copy;
          </span>
        </div>
        <div className="font-cairo">
          <h2 className="text-xl text-orange-300">Categories</h2>
          <div className="flex flex-col p-2">
            <a href="/">Electronics</a>
            <a href="/">Sports</a>
            <a href="/">Fashion</a>
            <a href="/">Art</a>
            <a href="/">Books</a>
          </div>
        </div>
        <div className="font-cairo">
          <h2 className="text-xl text-orange-300">Stay connected</h2>
          <div className="flex flex-col flex-wrap items-center justify-center gap-2 p-2 md:flex-row">
            <SocialIcon
              style={{ width: '1.8rem', height: '1.8rem' }}
              network="facebook"
            />

            <SocialIcon
              style={{ width: '1.8rem', height: '1.8rem' }}
              network="twitter"
            />

            <SocialIcon
              style={{ width: '1.8rem', height: '1.8rem' }}
              network="instagram"
            />

            <SocialIcon
              style={{ width: '1.8rem', height: '1.8rem' }}
              network="vsco"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
