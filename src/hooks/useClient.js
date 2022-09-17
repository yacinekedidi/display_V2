import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { connectClient } from '../Utils/connectClient';
import { client } from '../Utils/stream';

const useClient = () => {
  const [user, setUser] = useState({});
  const [unreadMessages, setUnreadMessages] = useState(null);

  useEffect(() => {
    const cookies = new Cookies();

    const myClientEventListener = client.on((e) => {
      // console.log(e);
      if (
        e.type === 'notification.message_new' ||
        e.type === 'notification.mark_read'
      ) {
        setUnreadMessages(e.total_unread_count);
      }
    });

    const authToken = cookies.get('token');
    if (!client._getConnectionID() && authToken && authToken.length) {
      const initChat = async () => {
        try {
          const chatClient = await connectClient(cookies, authToken);
          setUser(chatClient);
          // console.log(chatClient);
          setUnreadMessages(chatClient.me.total_unread_count);
        } catch (err) {
          console.error(err);
        }
      };
      initChat();
    }
    return () => {
      client.disconnectUser();
      myClientEventListener.unsubscribe();
    };
  }, []);
  return [user, setUser, unreadMessages];
};

export default useClient;
