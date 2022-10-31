import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useAuth } from '../../contexts/user-context';
import { client } from '../../Utils/stream';
import UserCard from './UserCard';

const BanModal = ({ banningUser, setIsBanningUser, isUser }) => {
  const [timeout, setTimeout] = useState(60);
  const [reason, setReason] = useState('');
  const { user } = useAuth();

  const handleClickBan = async () => {
    const username = isUser ? banningUser.username : banningUser.name;
    try {
      const data = await client.banUser(username, {
        banned_by_id: user?.me?.id,
        timeout,
        ip_ban: true,
        reason,
      });

      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="relative flex h-full max-h-screen w-full max-w-7xl rounded-md bg-gray-900 font-cairo sm:h-3/4 sm:w-3/4 md:w-1/2">
      <FontAwesomeIcon
        className="absolute right-0 top-0 mr-1 cursor-pointer transition hover:text-orange-600"
        onClick={() => setIsBanningUser(false)}
        icon={faClose}
        size="2x"
      />
      <div className="m-2 flex flex-col gap-4">
        <UserCard item={banningUser} isUser={isUser} />
        <div className="m-2 rounded-md p-4 font-cairo text-xs shadow-sm shadow-black">
          <p>
            prior bans <span className="text-orange-200">[1]</span>
          </p>
          <p>
            flagged messages <span className="text-orange-200">[10]</span>
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-6 overflow-auto p-2 shadow-sm shadow-black">
        <div className="flex flex-col gap-6 p-6 shadow-sm shadow-black">
          <h1>ban reason:</h1>
          <textarea
            rows="8"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="the reason of your ban is..."
            className="rounded-md bg-transparent p-2 italic shadow-sm shadow-black placeholder:text-sm placeholder:opacity-60"
          />
        </div>

        <div className="flex  gap-1 p-2 shadow-sm shadow-black">
          <p
            className={`cursor-pointer rounded-md p-2 shadow-sm shadow-black hover:bg-green-300 ${
              timeout === 60 ? 'bg-green-500 shadow-green-500' : null
            }`}
            onClick={() => setTimeout(60)}
          >
            1 hour
          </p>
          <p
            className={`cursor-pointer rounded-md p-2 shadow-sm shadow-black hover:bg-green-300 ${
              timeout === 60 * 24 ? 'bg-green-500 shadow-green-500' : null
            }`}
            onClick={() => setTimeout(60 * 24)}
          >
            1 day
          </p>
          <p
            className={`cursor-pointer rounded-md p-2 shadow-sm shadow-black hover:bg-green-300 ${
              timeout === 60 * 24 * 30 ? 'bg-green-500 shadow-green-500' : null
            }`}
            onClick={() => setTimeout(60 * 24 * 30)}
          >
            1 month
          </p>
          <p
            className={`cursor-pointer rounded-md p-2 shadow-sm shadow-black hover:bg-green-300 ${
              timeout === 60 * 24 * 30 * 12
                ? 'bg-green-500 shadow-green-500'
                : null
            }`}
            onClick={() => setTimeout(60 * 24 * 30 * 12)}
          >
            1 year
          </p>
          <p
            className={`cursor-pointer rounded-md p-2 shadow-sm shadow-black hover:bg-green-300 ${
              timeout === 60 * 24 * 30 * 12 * 365 * 100
                ? 'bg-green-500 shadow-green-500'
                : null
            }`}
            onClick={() => setTimeout(60 * 24 * 30 * 12 * 365 * 100)}
          >
            permanent
          </p>
        </div>
        <button
          className="m-2 cursor-pointer rounded-md bg-red-500 px-2 text-lg shadow-sm  shadow-red-500 hover:opacity-80 "
          onClick={handleClickBan}
        >
          ban
        </button>
      </div>
    </div>
  );
};

export default BanModal;
