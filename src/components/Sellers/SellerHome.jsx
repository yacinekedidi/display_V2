import moment from 'moment';
import React from 'react';
import getFormattedName from '../../Utils/formatFullname';

const SellerHome = ({ seller }) => {
  return (
    <div
      className="m-4 flex w-full max-w-7xl flex-col justify-center gap-4  p-4 text-white shadow-sm 
sm:flex-row"
      style={{ backgroundColor: '#231f20' }}
    >
      <img
        className="w-32 self-center rounded-sm  shadow-sm shadow-orange-400"
        src={
          seller.pic_url ||
          'https://st.depositphotos.com/2101611/4338/v/600/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg'
        }
        alt="avatar"
      />
      <div className="flex flex-col items-center justify-center p-4">
        <span className=" font-cairo text-xl font-bold text-orange-400 ">
          {getFormattedName(seller.name)}
        </span>
        <span className="whitespace-pre-wrap text-xs opacity-80">
          joined {moment(seller.created_at).format('DD-MM-YYYY')}
        </span>
      </div>
    </div>
  );
};

export default SellerHome;
