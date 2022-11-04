import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import { client } from '../../Utils/stream';

const Flags = () => {
  const [flags, setFlags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchFlags = async () => {
    try {
      setIsLoading(true);
      const channels = await client.queryChannels({}, { created_at: -1 });

      let messageFlags = [];

      for (const channel of channels) {
        const msgFlags = await client.queryMessageFlags({
          channel_cid: channel.cid,
        });

        msgFlags?.flags.length && messageFlags.push(...msgFlags?.flags);
      }
      console.log(messageFlags);
      setFlags(messageFlags);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFlags();
  }, []);

  return (
    <div className="w-full p-4">
      <div className="grid w-full grid-cols-6 justify-items-center p-2 font-cairo text-xl font-bold uppercase text-orange-200">
        <p>User</p>
        <p>Channel</p>
        <p>Message</p>
        <p>Last Update</p>
        <p>Flagged By</p>
      </div>
      {!isLoading ? (
        <div className="p-2 font-cairo shadow-sm shadow-black">
          {flags.map((flag) => (
            <div
              key={uuidv4()}
              className="grid grid-cols-6 items-center justify-items-center gap-4 py-4 "
            >
              <div className="flex w-full items-center gap-4">
                <img
                  className="h-24  w-24 flex-1 rounded-full object-contain shadow-sm shadow-black"
                  src={flag.message.user.image}
                  alt="avatar"
                />
                <p className="flex-1">{flag.message.user.name}</p>
              </div>
              <p>{flag.message.cid}</p>
              <p>{flag.message.text}</p>
              <p>{moment(new Date(flag.updated_at)).fromNow()}</p>
              <p>{flag.user.name}</p>
              <div>
                <FontAwesomeIcon icon={faEye} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
};

export default Flags;
