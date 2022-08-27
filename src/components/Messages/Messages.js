import React, { useContext, useState } from 'react';
import { Chat } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import { ChannelContainer, ChannelListContainer } from '../chatroom';
import './Messages.css';

// import '@stream-io/stream-chat-css/dist/css/index.css';
import 'stream-chat-react/dist/css/index.css';
import { UserContext } from '../../App';
import { client } from './stream';

const Messages = () => {
  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useContext(UserContext);

  // console.log(user, client);

  if (Object.keys(user).length)
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
