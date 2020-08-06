import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Spinner } from 'react-bootstrap';
import { BsPlus, BsCheck } from 'react-icons/bs';
import { StyledGridUser } from './GridUser.styled';
import { UserType } from '../../../@types';

type Props = {
  user: UserType;
  isFetching?: boolean;
  followingInProgress: Array<number>;
  follow: (id: number) => void;
  unfollow: (id: number) => void;
};

const GridUser: React.FC<Props> = ({
  user,
  isFetching,
  followingInProgress = [],
  follow,
  unfollow,
}) => {
  const followingInProgressBool = followingInProgress.some(
    (id: number) => id === user.id,
  );
  return (
    <StyledGridUser className="col-6 col-md-4 text-center py-3">
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
        <Button variant="outline-primary" onClick={() => unfollow(user.id)}>
          {followingInProgressBool ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <>
              <BsCheck />
              Following
            </>
          )}
        </Button>
      ) : (
        <Button
          variant="primary"
          onClick={() => follow(user.id)}
          disabled={followingInProgressBool}
        >
          {followingInProgressBool ? (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          ) : (
            <>
              <BsPlus />
              Follow
            </>
          )}
        </Button>
      )}
    </StyledGridUser>
  );
};
export default GridUser;
