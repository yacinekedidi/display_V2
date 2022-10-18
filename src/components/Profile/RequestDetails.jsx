import { Tooltip } from '@mui/material';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useGetUser from '../../hooks/useGetUser';
import Header from '../Header/Header';

const RequestDetails = () => {
  const {
    state: { product, request },
  } = useLocation();
  const { user } = useGetUser(request?.user_id);
  return (
    <>
      <Header className="max-w-7xl" sticky={true} />
      <p className="px-4 font-cairo text-xl text-orange-200">
        Your contact with seller&nbsp;
        <span className="text-orange-900">{product.seller_name}</span>&nbsp;
        concerning their product&nbsp;
        <span className="text-orange-900">{product.title}</span>
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-2 px-4 py-1 font-sans text-lg text-orange-200">
        <div className="w-full max-w-7xl font-cairo shadow-sm shadow-black">
          <div className="m-4 p-4 ">
            <p className="font-xs px-2 text-right text-orange-900">
              {user?.email}
            </p>
            <p className="font-xs px-2 text-right">
              {request?.data?.date_time}
            </p>
            <div className="rounded-lg p-4 text-sm text-white shadow-sm shadow-black">
              <div className="flex items-center gap-2">
                <Link className="hover:opacity-80" to={`/user/${user._id}`}>
                  <Tooltip title={user.fullName}>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.avatarURL}
                      alt="avatar"
                    />
                  </Tooltip>
                </Link>
                <p className="w-full rounded-xl rounded-tr-none bg-orange-100 p-4 text-lg text-gray-800 shadow-sm shadow-orange-200">
                  {request?.data?.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDetails;
