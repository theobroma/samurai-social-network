import React from 'react';
import { useListPostsQuery } from '../../@store/users/api';

const UsersRTKQView = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading, isFetching } = useListPostsQuery(page);
  console.log(data);

  return (
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
  );
};

export default UsersRTKQView;
