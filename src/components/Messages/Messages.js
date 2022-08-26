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
import Header from '../Header/Header';
import { connectClient } from '../Utils/connectClient';
import { client } from './stream';

// const cookies = new Cookies();

// const authToken = cookies.get('token');

// if (authToken) {
//   client.connectUser(
//     {
//       id: cookies.get('userId'),
//       name: cookies.get('username'),
//       fullName: cookies.get('fullName'),
//       image: cookies.get('avatarURL'),
//       hashedPassword: cookies.get('hashedPassword'),
//       phoneNumber: cookies.get('phoneNumber'),
//     },
//     authToken
//   );
// }

const Messages = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  //HERE WHEN A REFRESH HAPPENS WHILE WE'RE IN /messages IT CRASHES BECAUSE WE LOSE THE STATE

  // useEffect(() => {
  //   if (authToken) setUser(client);
  // }, []);

  // if (!authToken) return <Auth />;

  useEffect(() => {
    const cookies = new Cookies();
    const authToken = cookies.get('token');
    if (!authToken) {
      setIsConnected(false);
      return;
    }

    const client = connectClient(cookies);
    setIsConnected(true);
  }, []);

  return (
    isConnected && (
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
    )
  );
};

export default Messages;
