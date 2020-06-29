import React, { FC } from 'react';
import s from './Users.module.css';
// import Paginator from '../common/Paginator/Paginator';
import User from './User/User';
import { UserType } from '../../@types';

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
  currentPage,
  totalUsersCount,
  pageSize,
  onPageChanged,
  users,
  ...props
}) => {
  return (
    <>
      {/* <Paginator
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
      /> */}
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
