import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import { connectClient } from '../Utils/connectClient';
import { client } from '../Utils/stream';

const initChat = async (setUser, setUnreadMessages) => {
  const cookies = new Cookies();
  const authToken = cookies.get('token');
  if (!client._getConnectionID() && authToken && authToken.length) {
    try {
      const chatClient = await connectClient(cookies, authToken);
      setUser(chatClient);
      // console.log(chatClient);
      setUnreadMessages(chatClient.me.total_unread_count);
    } catch (err) {
      console.error(err);
    }
  }
};

const useClient = () => {
  const [user, setUser] = useState({});
  const [unreadMessages, setUnreadMessages] = useState(null);

  useEffect(() => {
    const myClientEventListener = client.on((e) => {
      // console.log(e);
      if (
        e.type === 'notification.message_new' ||
        e.type === 'notification.mark_read'
      ) {
        setUnreadMessages(e.total_unread_count);
      }
    });

    initChat(setUser, setUnreadMessages);

    return () => {
      client.disconnectUser();
      myClientEventListener.unsubscribe();
    };
  }, []);
  return [user, setUser, unreadMessages];
};

export default useClient;
