import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Users as UsersComponent } from '../../@components/Users/Users';
import { fetchUsersAsync } from '../../@store/users/actions';
import { getUsers } from '../../@store/users/selectors';

export const Users: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const { items, pageSize, totalCount, currentPage } = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync.request(1));
  }, [dispatch]);

  const handlePageClick = (state: any) => {
    console.log('handlePageClick');
    console.log(state);
  };

  return (
    <>
      Users
      <UsersComponent
        users={items}
        pageSize={pageSize}
        totalCount={totalCount}
        currentPage={currentPage}
        handlePageClick={handlePageClick}
      />
    </>
  );
});

export default Users;
