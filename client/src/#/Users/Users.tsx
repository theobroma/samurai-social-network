import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Users as UsersComponent } from '../../@components/Users/Users';
import { fetchUsersAsync, setCurrentPage } from '../../@store/users/actions';
import { getUsers } from '../../@store/users/selectors';

export const Users: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const { items, pageSize, totalCount, currentPage } = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsersAsync.request(currentPage));
  }, [dispatch, currentPage]);

  const handlePageClick = (state: any) => {
    dispatch(setCurrentPage(state.selected + 1)); // +1 fix diff start position
  };

  return (
    <>
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
