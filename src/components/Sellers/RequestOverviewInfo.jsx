import React from 'react';
import useGetUser from '../../hooks/useGetUser';

const RequestOverviewInfo = ({ userId }) => {
  const { user } = useGetUser();
  return (
    <div className="flex p-4 text-lg text-orange-200">
      {/* <img src={user.pic_url} alt="" /> */}
      <p className="p-4 capitalize">{`${user.firstName} ${user.lastName}`}</p>
      <p className="p-4">{user.phone_number}</p>
      {/* <p>{the request date}</p> */}
    </div>
  );
};

export default RequestOverviewInfo;
