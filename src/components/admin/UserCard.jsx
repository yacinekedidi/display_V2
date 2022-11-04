import { useEffect, useState } from 'react';

const UserCard = ({ item, isUser, unreadMessages = [] }) => {
  const [unread, setUnread] = useState({});

  useEffect(() => {
    setUnread(unreadMessages?.filter((info) => info.id === item._id)[0]);
  }, [unreadMessages, item._id]);

  return (
    <div className=" h-[150px] w-[150px] rounded-lg p-2 text-center shadow-sm shadow-black transition hover:cursor-pointer hover:bg-orange-600">
      <img
        className="h-full w-full object-contain"
        src={item.avatarURL}
        alt="avatar"
      />
      <p>{isUser ? item.username : item.name}</p>
      {unread?.unread ? (
        <p className="font-cairo text-sm  text-green-600">
          {unread?.unread} new messages
        </p>
      ) : null}
    </div>
  );
};

export default UserCard;
