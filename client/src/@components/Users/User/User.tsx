import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { StyledUser } from './User.styled';
import { UserType } from '../../../@types';

type Props = {
  user: UserType;
  isFetching?: any;
  followingInProgress?: any;
  follow: any;
  unfollow?: any;
};

const User: React.FC<Props> = ({
  user,
  isFetching,
  // followingInProgress,
  follow,
  unfollow,
}) => {
  return (
    <StyledUser className="col-6 col-md-4 text-center py-3">
      <NavLink to={`/profile/${user.id}`}>
        <div className="avatar-wrapper">
          {isFetching ? (
            // <Preloader />
            <div>Loading...</div>
          ) : (
            <img
              className="avatar-img"
              src={
                user.photos.small || 'https://picsum.photos/seed/picsum/100/100'
              }
              aria-hidden
              alt="photo"
            />
          )}
        </div>
        <div className="name">{user.name}</div>
      </NavLink>
      <div>{user.status}</div>
      {user.followed ? (
        // <button
        //   type="button"
        //   // disabled={followingInProgress.some((id: any) => id === user.id)}
        //   onClick={() => unfollow(user.id)}
        // >
        //   Unfollow
        // </button>
        <Button variant="primary">Unfollow</Button>
      ) : (
        // <button
        //   type="button"
        //   // disabled={followingInProgress.some((id: any) => id === user.id)}
        //   onClick={() => follow(user.id)}
        // >
        //   Follow
        // </button>
        <Button variant="outline-primary" onClick={() => follow(user.id)}>
          Follow
        </Button>
      )}
    </StyledUser>
  );
};
export default User;
