import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { StyledListUser } from './ListUser.styled';
import { UserType } from '../../../@types';

type Props = {
  user: UserType;
  isFetching?: any;
  followingInProgress: any;
  follow: any;
  unfollow: any;
};

const ListUser: React.FC<Props> = ({
  user,
  isFetching,
  followingInProgress,
  follow,
  unfollow,
}) => {
  const followingInProgressBool = followingInProgress.some(
    (id: number) => id === user.id,
  );
  return (
    <StyledListUser className="col-12 py-3">
      <Row>
        <Col md={3} className="text-center text-md-left">
          <NavLink to={`/profile/${user.id}`}>
            <div className="avatar-wrapper">
              {isFetching ? (
                // <Preloader />
                <div>Loading...</div>
              ) : (
                <img
                  className="avatar-img"
                  src={
                    user.photos.small ||
                    'https://picsum.photos/seed/picsum/100/100'
                  }
                  aria-hidden
                  alt="photo"
                />
              )}
            </div>
          </NavLink>
        </Col>
        <Col md={6} className="text-center text-md-left">
          <div className="d-flex flex-column">
            <NavLink to={`/profile/${user.id}`}>
              <div className="name">{user.name}</div>
            </NavLink>
            <div className="status">{user.status || 'No status'}</div>
          </div>
        </Col>
        <Col md={3} className="text-center text-md-right">
          {/* TODO:followingInProgress */}
          {user.followed ? (
            <Button variant="primary" onClick={() => unfollow(user.id)}>
              {followingInProgressBool ? (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
              ) : (
                'Unfollow'
              )}
            </Button>
          ) : (
            <Button
              variant="outline-primary"
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
                'Follow'
              )}
            </Button>
          )}
        </Col>
      </Row>
    </StyledListUser>
  );
};
export default ListUser;
