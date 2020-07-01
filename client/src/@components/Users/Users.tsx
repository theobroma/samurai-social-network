import React, { FC } from 'react';
import { Card } from 'react-bootstrap';
import User from './User/User';
import { UserType } from '../../@types';
// import Paginator from '../UI/Paginator/Paginator';
import { PaginationFC } from '../UI/Pagination';

type PropsType = {
  currentPage?: number;
  totalCount?: number;
  pageSize?: number;
  handlePageClick?: any;
  users: Array<UserType>;
  isFetching?: boolean;
  follow?: (id: number) => void;
  unfollow?: (id: number) => void;
  followingInProgress?: Array<number>;
};

export const Users: FC<PropsType> = ({
  currentPage = 1,
  totalCount = 999,
  pageSize = 10,
  handlePageClick,
  users,
  ...props
}) => {
  const BlockTitle = (
    <div className="row mt-4">
      <div className="col-6">
        <h4>USERS</h4>
      </div>
    </div>
  );

  return (
    <>
      {/* <Paginator
        // onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
      /> */}
      <Card>
        <Card.Body>
          {BlockTitle}
          <PaginationFC
            handlePageClick={handlePageClick}
            totalCount={totalCount}
            pageSize={pageSize}
          />

          {users &&
            users.map((user: UserType) => (
              <User
                user={user}
                key={user.id}
                isFetching={props.isFetching}
                follow={props.follow}
                unfollow={props.unfollow}
                followingInProgress={props.followingInProgress}
              />
            ))}
        </Card.Body>
      </Card>
    </>
  );
};
export default Users;
