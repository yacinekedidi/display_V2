const UserCard = ({ item, isUser }) => {
  return (
    <div className=" h-[150px] w-[150px] rounded-lg p-2 text-center shadow-sm shadow-black transition hover:cursor-pointer hover:bg-orange-600">
      <img
        className="h-full w-full object-contain"
        src={item.avatarURL}
        alt="avatar"
      />
      <p>{isUser ? item.username : item.name}</p>
    </div>
  );
};

export default UserCard;
