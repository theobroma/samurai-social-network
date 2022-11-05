import React from 'react';

import type { UserType } from '../../../@types';

import { UserItemStyled } from './UserItem.styled';

type Props = {
  user: UserType;
};

const UserItem = ({ user }: Props) => {
  // console.log(user);
  return (
    <UserItemStyled className="col-6 col-md-4 text-center py-3">
      <img
        className="avatar-img img-fluid"
        src={user.photos.small || 'https://picsum.photos/seed/picsum/100/100'}
        aria-hidden
        alt="photo"
      />
      <span>{user.name}</span>
    </UserItemStyled>
  );
};
export default UserItem;
