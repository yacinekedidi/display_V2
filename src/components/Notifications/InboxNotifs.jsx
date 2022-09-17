import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';

const InboxNotifs = () => {
  return (
    <div>
      <p className="flex items-center gap-x-4 font-cairo text-2xl">
        <CheckCircleOutlineIcon />
        All caught up!
      </p>
    </div>
  );
};

export default InboxNotifs;
