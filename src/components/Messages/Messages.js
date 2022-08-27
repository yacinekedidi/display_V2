import React, { useContext, useEffect, useState } from 'react';
import { Chat } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
// import Cookies from 'universal-cookie';
// import { Auth, ChannelContainer, ChannelListContainer } from '../chatroom';
// import Auth from '../../components/Auth/Auth';
import { ChannelContainer, ChannelListContainer } from '../chatroom';
import './Messages.css';
// import { client } from './stream';

// import '@stream-io/stream-chat-css/dist/css/index.css';
import 'stream-chat-react/dist/css/index.css';
import Cookies from 'universal-cookie';
import { UserContext } from '../../App';
import { connectClient } from '../Utils/connectClient';
import { client } from './stream';

const Messages = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useContext(UserContext);

  console.log(user, client);

  useEffect(() => {
    // if (!client._hasConnectionID()) {
    //   const cookies = new Cookies();
    //   const authToken = cookies.get('token');
    //   authToken &&
    //     authToken.length &&
    //     (async () => {
    //       try {
    //         const client = await connectClient(cookies, authToken);
    //         // setUser(client);
    //       } catch (err) {
    //         console.error(err);
    //       }
    //     })();
    // }
    // setUser(client);
  }, []);

  return (
    <div className="app__wrapper mb-12 w-full">
      <Chat client={client}>
        <ChannelListContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          setCreateType={setCreateType}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat>
    </div>
  );
};

export default Messages;
