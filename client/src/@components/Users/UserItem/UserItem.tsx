import React from 'react';
import { UserType } from '../../../@types';

type Props = {
  user: UserType;
};

const UserItem = ({ user }: Props) => {
  console.log(user);
  return (
    <div className="col-6 col-md-4 text-center py-3">
      <img
        className="avatar-img"
        src={user.photos.small || 'https://picsum.photos/seed/picsum/100/100'}
        aria-hidden
        alt="photo"
      />
      <span>{user.name}</span>
    </div>
  );
};
export default UserItem;
