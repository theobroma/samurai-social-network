import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import GridUser from './GridUser/GridUser';
import ListUser from './ListUser/ListUser';
import { UserType, ItemsViewType, UsersFilterType } from '../../@types';
import { PaginationFC } from '../UI/Pagination';
import { ListGridSwitcher } from './ListGridSwitcher';
import { UserSearchForm } from './UserSearchForm';

type PropsType = {
  currentPage?: number;
  totalCount?: number;
  pageSize?: number;
  handlePageClick: (state: { selected: number }) => void;
  handleSetUsersFilter: (filter: UsersFilterType) => void;
  users: Array<UserType>;
  // isFetching?: boolean;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  followingInProgress: Array<number>;
};

export const Users: React.FC<PropsType> = ({
  currentPage = null,
  totalCount = 999,
  pageSize = 10,
  handlePageClick,
  follow,
  unfollow,
  users,
  followingInProgress,
  handleSetUsersFilter,
}) => {
  const [viewType, setViewType] = useState<ItemsViewType>('GRID');

  const BlockTitle = (
    <div className="row mt-4 mb-3">
      <div className="col-12">
        <h4>USERS</h4>
      </div>
    </div>
  );

  return (
    <>
      <Card>
        <Card.Body>
          {BlockTitle}
          <Row>
            <Col>
              <div className="mb-3">
                <UserSearchForm handleSetUsersFilter={handleSetUsersFilter} />
              </div>
            </Col>
          </Row>
          <Row className="py-3">
            <Col lg={9}>
              <PaginationFC
                handlePageClick={handlePageClick}
                totalCount={totalCount}
                pageSize={pageSize}
              />
            </Col>
            <Col lg={3}>
              <ListGridSwitcher setViewType={setViewType} viewType={viewType} />
            </Col>
          </Row>
          <Row>
            {users &&
              users.map((user: UserType) =>
                viewType === 'LIST' ? (
                  <ListUser
                    user={user}
                    key={user.id}
                    // isFetching={props.isFetching}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                  />
                ) : (
                  <GridUser
                    user={user}
                    key={user.id}
                    // isFetching={props.isFetching}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                  />
                ),
              )}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};
export default Users;
