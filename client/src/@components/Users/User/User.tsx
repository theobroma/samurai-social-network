import React from 'react';
import { NavLink } from 'react-router-dom';

type Props = {
  user?: any;
  isFetching?: any;
  followingInProgress?: any;
  follow?: any;
  unfollow?: any;
};

const User: React.FC<Props> = ({
  user,
  isFetching,
  followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <>
      <NavLink to={`/profile/${user.id}`}>
        <div className="avatar-wrapper">
          {isFetching ? (
            // <Preloader />
            <div>Loading...</div>
          ) : (
            <img
              src={
                user.photos.small || 'https://picsum.photos/seed/picsum/100/100'
              }
              aria-hidden
              alt="photo"
            />
          )}
        </div>
        <div>{user.name}</div>
      </NavLink>
      <div>{user.status}</div>
      {user.followed ? (
        <button
          type="button"
          // disabled={followingInProgress.some((id: any) => id === user.id)}
          onClick={() => unfollow(user.id)}
        >
          Unfollow
        </button>
      ) : (
        <button
          type="button"
          // disabled={followingInProgress.some((id: any) => id === user.id)}
          onClick={() => follow(user.id)}
        >
          Follow
        </button>
      )}
    </>
  );
};
export default User;
