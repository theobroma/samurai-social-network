import React from 'react';
import ReactPaginate from 'react-paginate';
import { StyledBreakLabel } from './Pagination.styled';

type Props = {
  totalCount: any;
  pageSize: any;
  handlePageClick: any;
};

export const PaginationFC: React.FC<Props> = ({
  totalCount = 80,
  pageSize = 10,
  handlePageClick,
}) => {
  return (
    <ReactPaginate
      previousLabel="prev"
      nextLabel="next"
      breakLabel={<StyledBreakLabel>...</StyledBreakLabel>}
      breakClassName="page-item"
      pageCount={totalCount / pageSize || 10}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={(state) => handlePageClick(state)}
      containerClassName="pagination"
      pageLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      pageClassName="page-item"
      // subContainerClassName="pages pagination"
      activeClassName="active"
    />
  );
};

export default PaginationFC;
