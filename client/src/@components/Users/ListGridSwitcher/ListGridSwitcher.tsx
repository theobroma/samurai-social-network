import React from 'react';
import { Col, Card, Row } from 'react-bootstrap';
import { BsListUl, BsGrid3X3Gap } from 'react-icons/bs';
import { ProfileType } from '../../../@types';

type Props = {
  profile?: ProfileType;
  status?: string;
};

export const ListGridSwitcher: React.FC<Props> = ({ profile, status }) => {
  return (
    <Row>
      <Col>
        <div className="btn-group">
          <span
            // onClick={props.handleList}
            id="list"
            className="btn btn-primary btn-xs"
          >
            <BsListUl /> List
          </span>
          <span
            // onClick={props.handleGrid}
            id="grid"
            className="btn btn-primary btn-xs"
          >
            <BsGrid3X3Gap /> Grid
          </span>
        </div>
      </Col>
    </Row>
  );
};
export default ListGridSwitcher;
