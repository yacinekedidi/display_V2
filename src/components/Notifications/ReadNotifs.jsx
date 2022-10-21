import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useGetUser from '../../hooks/useGetUser';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import NotifMain from './NotifMain';

const ReadNotifs = () => {
  const { userId } = useParams();
  const { user, isLoading } = useGetUser(userId);

  useEffect(() => {}, []);

  if (isLoading) return <LoadingSpinner />;

  if (!user?.notifications?.some((notif) => notif.read))
    return (
      <div className="flex items-center gap-x-4 font-cairo">
        <SentimentVeryDissatisfiedIcon />{' '}
        <p>you haven't read any of your notifications!</p>
      </div>
    );

  return (
    <NotifMain
      userId={userId}
      read={true}
      notifications={user?.notifications?.filter(
        (notification) => notification.read
      )}
    />
  );
};

export default ReadNotifs;
