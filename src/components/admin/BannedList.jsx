import { useEffect, useState } from 'react';
import LoadingSpinner from '../../Utils/LoadingSpinner';
import { client } from '../../Utils/stream';
import UserCard from './UserCard';

const BannedList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const queryBannedUsers = async () => {
    try {
      const response = await client.queryUsers(
        { banned: true },
        { last_active: -1 },
        { limit: 10, offset: 0 }
      );

      return response.users;
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const queryUsers = async () => {
      const users = await queryBannedUsers();

      setUsers(users);
    };
    queryUsers();
  }, []);

  return (
    <div className="grid p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        users.map(({ role, id: _id, image: avatarURL, name }) => (
          <UserCard
            key={_id}
            item={{
              role,
              id: _id,
              image: avatarURL,
              [role === 'user' ? 'username' : 'name']: name,
            }}
            isUser={role === 'user'}
          />
        ))
      )}
    </div>
  );
};

export default BannedList;
