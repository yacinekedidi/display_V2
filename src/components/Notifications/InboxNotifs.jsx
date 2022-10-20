import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import moment from 'moment';
import React from 'react';

const InboxNotifs = () => {
  const isEmpty = false;

  if (isEmpty)
    return (
      <div className="flex items-center gap-x-4 font-cairo">
        <CheckCircleOutlineIcon />
        <p>All caught up!</p>
      </div>
    );

  return (
    <>
      <div className="flex w-full flex-col gap-4">
        {[1, 2, 3, 4, 5].map((elem) => (
          <p
            className="flex h-[50px] w-full cursor-pointer items-center justify-between rounded-md bg-gray-900 px-4 font-sans text-sm 
          tracking-wide shadow-sm shadow-black transition hover:bg-gray-800"
          >
            <div>
              <span className="text-orange-600">Free</span>&nbsp;just changed
              product&nbsp;
              <span className="text-orange-600">Yellow Bike</span>'s&nbsp;
              <span className="text-orange-600">descriptions</span>
            </div>
            <p>{moment().calendar()}</p>
            {/* <p>{moment().calendar(date)}</p> */}
          </p>
        ))}
      </div>
    </>
  );
};

export default InboxNotifs;
