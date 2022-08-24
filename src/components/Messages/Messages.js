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
import { UserContext } from '../../App';

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
  const [user, setUser] = useContext(UserContext);
  // useEffect(() => {
  //   if (authToken) setUser(client);
  // }, []);

  // if (!authToken) return <Auth />;

  return (
    <div className="app__wrapper">
      <Chat client={user}>
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
