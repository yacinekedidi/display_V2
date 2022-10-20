import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import React from 'react';

// ["title", "category"] Free changed product Yellow Bike title from Yellow Bike to Green Bike
// ["tags"] Free changed product Yellow Bike tags from new, fresh to fast, old
// ["characteristics"] Free changed product Yellow Bike characteristics - color from black to white - size from medium to small
// ["descriptions"] Free changed product Yellow Bike descriptions
// ["pics_url"] Free chnaged product Yellow Bike descriptions by adding/removing x pictures

const ReadNotifs = () => {
  const isEmpty = false;

  if (isEmpty)
    return (
      <div className="flex items-center gap-x-4 font-cairo">
        <SentimentVeryDissatisfiedIcon />{' '}
        <p>you haven't read any of your notifications!</p>
      </div>
    );

  return (
    <div className="flex">
      <p>Free just changed product Yellow Bike's descriptions</p>
    </div>
  );
};

export default ReadNotifs;
