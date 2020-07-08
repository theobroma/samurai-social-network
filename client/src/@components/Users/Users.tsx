import React, { useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import GridUser from './GridUser/GridUser';
import ListUser from './ListUser/ListUser';
import { UserType, ItemsViewType } from '../../@types';
import { PaginationFC } from '../UI/Pagination';
import { ListGridSwitcher } from './ListGridSwitcher';

type PropsType = {
  currentPage?: number;
  totalCount?: number;
  pageSize?: number;
  handlePageClick?: any;
  users: Array<UserType>;
  isFetching?: boolean;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
  followingInProgress: Array<number>;
};

export const Users: React.FC<PropsType> = ({
  currentPage = 1,
  totalCount = 999,
  pageSize = 10,
  handlePageClick,
  follow,
  unfollow,
  users,
  followingInProgress,
  ...props
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
          <Row className="bg-dark py-3">
            <Col>
              <PaginationFC
                handlePageClick={handlePageClick}
                totalCount={totalCount}
                pageSize={pageSize}
              />
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
                    isFetching={props.isFetching}
                    follow={follow}
                    unfollow={unfollow}
                    followingInProgress={followingInProgress}
                  />
                ) : (
                  <GridUser
                    user={user}
                    key={user.id}
                    isFetching={props.isFetching}
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
