import React, { FC } from 'react';
import User from './User/User';
import { UserType } from '../../@types';
import Paginator from '../UI/Paginator/Paginator';

type PropsType = {
  currentPage?: number;
  totalUsersCount?: number;
  pageSize?: number;
  onPageChanged?: (currentPage: number) => void;
  users: Array<UserType>;
  isFetching?: boolean;
  follow?: (id: number) => void;
  unfollow?: (id: number) => void;
  followingInProgress?: Array<number>;
};

export const Users: FC<PropsType> = ({
  currentPage = 1,
  totalUsersCount = 9999,
  pageSize = 10,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <>
      <Paginator
        // onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
      />

      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          isFetching={props.isFetching}
          follow={props.follow}
          unfollow={props.unfollow}
          followingInProgress={props.followingInProgress}
        />
      ))}
    </>
  );
};
export default Users;
