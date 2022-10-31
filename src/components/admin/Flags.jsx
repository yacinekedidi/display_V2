import { useEffect } from 'react';
import { client } from '../../Utils/stream';

const Flags = () => {
  const fetchFlags = async () => {
    const data = await client.queryMessageFlags(
      {
        channel_cid: 'messaging:xyz',
        user_id: { $in: ['userA', 'userB'] },
      },
      { limit: 10, offset: 10 }
    );
  };

  useEffect(() => {}, []);

  return <div>Flags</div>;
};

export default Flags;
