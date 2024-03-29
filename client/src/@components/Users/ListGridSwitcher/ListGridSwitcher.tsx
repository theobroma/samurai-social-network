import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { BsGrid3X3Gap, BsListUl } from 'react-icons/bs';

import type { ItemsViewType } from '../../../@types';

type Props = {
  viewType: ItemsViewType;
  setViewType: (viewType: ItemsViewType) => void;
};

export const ListGridSwitcher: React.FC<Props> = ({
  setViewType,
  viewType,
}) => {
  return (
    <Row>
      <Col>
        <div className="btn-group">
          <Button
            id="list"
            onClick={() => setViewType('LIST')}
            className="btn btn-primary btn-xs"
            active={viewType === 'LIST'}
          >
            <BsListUl /> List
          </Button>
          <Button
            id="grid"
            onClick={() => setViewType('GRID')}
            className="btn btn-primary btn-xs"
            active={viewType === 'GRID'}
          >
            <BsGrid3X3Gap /> Grid
          </Button>
        </div>
      </Col>
    </Row>
  );
};
export default ListGridSwitcher;
