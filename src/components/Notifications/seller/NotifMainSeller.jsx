import ProductFavoritedNotification from '../ProductFavoritedNotification';
import ProductFollowNotification from '../ProductFollowNotification';
import ProductRequestedNotification from '../ProductRequestedNotification';

const NotifMainSeller = ({ notifications, userId, sellerName, read }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {notifications?.map((notification) => {
        if (notification.Operation === 'request')
          return (
            <ProductRequestedNotification
              userId={userId}
              notification={notification}
              read={read}
            />
          );
        if (notification.Operation === 'favorite')
          return (
            <ProductFavoritedNotification
              userId={userId}
              notification={notification}
              read={read}
            />
          );

        if (notification.Operation === 'follow')
          return (
            <ProductFollowNotification
              userId={userId}
              notification={notification}
              read={read}
            />
          );
        return null;
      })}
    </div>
  );
};

export default NotifMainSeller;
