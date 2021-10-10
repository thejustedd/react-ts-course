import { FC } from 'react';
import { IUser } from '../types/types';

interface UserInterfaceProps {
  user: IUser;
  onClick: (user: IUser) => void;
}

const UserItem: FC<UserInterfaceProps> = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      style={{ padding: 15, border: '1px solid gray', cursor: 'pointer' }}
    >
      {user.id}. {user.name} проживает в городе {user.address.city} на улице{' '}
      {user.address.street}
    </div>
  );
};

export default UserItem;
