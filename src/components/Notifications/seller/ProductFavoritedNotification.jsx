import moment from 'moment';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setNotificationToRead } from '../../../apis/setNotificationToRead';

const ProductFavoritedNotification = ({
  notification,
  userId,
  read = 'notRead',
}) => {
  useEffect(() => {
    if (read === 'notRead')
      setNotificationToRead(userId, notification.id, 'seller').catch(
        console.error
      );
  }, [read, userId, notification.id]);
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between rounded-md bg-gray-900 p-4 font-sans text-sm 
tracking-wide shadow-sm shadow-black transition hover:bg-gray-800"
      key={notification.id}
    >
      <div>
        <Link
          className="text-orange-600 hover:text-orange-900"
          to={`/user/${notification.user_id}`}
        >
          {notification?.user_name}
        </Link>
        &nbsp;liked your product&nbsp;
        <Link
          className="text-orange-600 hover:text-orange-900"
          to={`/products/${notification.product_id}`}
        >
          {notification.product_name}
        </Link>
      </div>
      <p>{moment(new Date(notification.date)).fromNow()}</p>
    </div>
  );
};

export default ProductFavoritedNotification;
