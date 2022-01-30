import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import GridUser from '../../@components/Users/GridUser/GridUser';
import ListUser from '../../@components/Users/ListUser/ListUser';
import UserItem from '../../@components/Users/UserItem';
import { useListPostsQuery } from '../../@store/users/api';
import { UserType } from '../../@types';

const UsersRTKQView = () => {
  const [page, setPage] = React.useState(1);
  const { data: users, isLoading, isFetching } = useListPostsQuery(page);
  console.log(users);

  return (
    <Card>
      <Card.Body>
        {/* {BlockTitle}
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
         </Row> */}
        <Row>
          <Col>
            <div>
              <span>UsersRTKQView</span>
              <div>
                {/* {data.results.map(({ id, title, status }: any) => (
          <div key={id}>
            {title} - {status}
          </div>
        ))} */}
                <button
                  type="button"
                  onClick={() => setPage(page - 1)}
                  // isLoading={isFetching}
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={() => setPage(page + 1)}
                  // isLoading={isFetching}
                >
                  Next
                </button>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          {users &&
            users.items.map((user) => (
              <UserItem
                user={user}
                key={user.id}
                // isFetching={props.isFetching}
                // follow={follow}
                // unfollow={unfollow}
                // followingInProgress={followingInProgress}
              />
            ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default UsersRTKQView;
