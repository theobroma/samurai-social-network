import React from 'react';
import { UserType } from '../../../@types';

type Props = {
  user: UserType;
};

const UserItem = ({ user }: Props) => {
  console.log(user);
  return (
    <div>
      <span>{user.name}</span>
    </div>
  );
};
export default UserItem;
