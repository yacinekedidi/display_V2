import React from 'react';
import { useOutletContext } from 'react-router-dom';

const SellerAbout = () => {
  const [{ phone_number, name, email, website }] = useOutletContext();
  return (
    <div
      className="static top-0 flex h-full w-full max-w-7xl  justify-center bg-transparent p-4 shadow-sm shadow-gray-100 lg:absolute "
      // style={{ backgroundColor: '#231f20' }}
    >
      <div className="mx-auto flex h-full w-full flex-col items-center p-8">
        <div className="grid grid-cols-2 gap-12 p-4 text-3xl font-black text-gray-300 backdrop-blur-sm lg:text-5xl">
          <div className="font-cairo">
            <div className="p-2 uppercase">Seller</div>
            <div className="p-2 capitalize text-orange-100">{name}</div>
          </div>
          <div className=" font-cairo ">
            <div className="p-2 uppercase">email</div>
            <div className="p-2 text-orange-100 ">{email}</div>
          </div>
          <div className="font-cairo">
            <div className="p-2 uppercase">phone number</div>
            <div className="p-2 capitalize text-orange-100 ">
              {phone_number}
            </div>
          </div>
          <div className="font-cairo">
            <div className="p-2 uppercase">website</div>
            <a
              className="p-2 text-orange-100 transition hover:text-orange-600"
              href="https://www.nike.com"
              target="_blank"
              rel="noreferrer"
            >
              {website}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerAbout;
