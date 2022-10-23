import moment from 'moment';
import { useEffect } from 'react';
import { setNotificationToRead } from '../../../apis/setNotificationToRead';

const ProductAddedNotification = ({ notification, userId }) => {
  useEffect(() => {
    if (notification.read === 'notRead')
      setNotificationToRead(userId, notification.id).catch(console.error);
  }, [userId, notification]);
  return (
    <div
      className="flex w-full cursor-pointer items-center justify-between rounded-md bg-gray-900 p-4 font-sans text-sm 
    tracking-wide shadow-sm shadow-black transition hover:bg-gray-800"
      key={notification.id}
    >
      <div>
        <span className="text-orange-600">{notification.seller_name}</span>
        &nbsp;just added a new product&nbsp;
        <span className="text-orange-600">{notification.product_name}</span>
      </div>
      <p>{moment(new Date(notification.date)).fromNow()}</p>
    </div>
  );
};

export default ProductAddedNotification;
