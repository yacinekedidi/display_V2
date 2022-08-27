import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="flex w-full items-end justify-center self-end text-orange-200">
      <div className="flex w-[60vw] flex-col-reverse justify-around gap-4 border-t-2 border-t-orange-200 p-4  md:flex-row md:gap-8">
        <div className="flex items-center justify-center gap-2 p-4 font-cairo">
          <Link className="hover:rotate-180 hover:animate-spin" to="/">
            <img className="h-8 w-8 sm:h-10 sm:w-10" src={logo} alt="logo" />
          </Link>
          <span className="text-sm ">
            {moment().year()} Display, inc. &copy;
          </span>
        </div>
        <div className=" font-cairo">
          <h2 className="text-md hidden text-center text-orange-300 sm:block md:text-left md:text-lg">
            Categories
          </h2>
          <div className="flex flex-row items-center justify-center gap-4 p-2 sm:items-start md:flex-col md:gap-0">
            <a className="hover:opacity-75" href="/">
              Electronics
            </a>
            <a className="hover:opacity-75" href="/">
              Sports
            </a>
            <a className="hover:opacity-75" href="/">
              Fashion
            </a>
            <a className="hover:opacity-75" href="/">
              Art
            </a>
            <a className="hover:opacity-75" href="/">
              Books
            </a>
          </div>
        </div>
        <div className="font-cairo">
          <h2 className="text-md hidden whitespace-nowrap text-center  text-orange-300 sm:block md:text-left md:text-lg">
            Stay connected
          </h2>
          <div className="flex flex-row flex-wrap items-center justify-center gap-2 p-2 md:flex-col">
            <SocialIcon
              className="w-7 cursor-pointer hover:opacity-80"
              style={{ width: '1.8rem', height: '1.8rem' }}
              network="facebook"
              fgColor="white"
            />

            <SocialIcon
              className="w-7 cursor-pointer hover:opacity-80"
              style={{ width: '1.8rem', height: '1.8rem' }}
              network="twitter"
              fgColor="white"
            />

            <SocialIcon
              className="w-7 cursor-pointer hover:opacity-80"
              style={{ width: '1.8rem', height: '1.8rem' }}
              network="instagram"
              fgColor="white"
            />

            <SocialIcon
              className="w-7 cursor-pointer hover:opacity-80"
              style={{ width: '1.8rem', height: '1.8rem' }}
              network="telegram"
              fgColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
