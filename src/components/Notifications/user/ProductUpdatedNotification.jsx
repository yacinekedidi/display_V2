import moment from 'moment';
import { Link } from 'react-router-dom';
import UpdatedFieldsInfo from './UpdatedFieldsInfo';

const ProductUpdatedNotification = ({ notification, userId, read }) => {
  return (
    <div
      className="flex w-full  cursor-pointer items-center justify-between gap-x-2 rounded-md bg-gray-900 p-4 font-sans text-sm 
    tracking-wide shadow-sm shadow-black transition hover:bg-gray-800"
      key={notification.id}
    >
      <div>
        <span className="capitalize text-orange-600">
          {notification.seller_name}
        </span>
        &nbsp;just changed their product&nbsp;
        <Link
          to={`/products/${notification.prodID}`}
          className="text-orange-600 transition hover:text-orange-900 hover:underline"
        >
          {notification.product_name}
        </Link>
        :&nbsp;
        {/* to be removed */}
        <UpdatedFieldsInfo
          notifId={notification.id}
          userId={userId}
          targets={notification.targets}
          read={read}
        />
      </div>
      <p className="whitespace-nowrap">
        {moment(new Date(notification.date)).fromNow()}
      </p>
    </div>
  );
};

export default ProductUpdatedNotification;
