import styled from 'styled-components';

// fixing blank style for pagination break label ("...")
// rules like in "page-item" class
export const StyledBreakLabel = styled.span`
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #a4a4a4;
  background-color: #fff;
  border: 1px solid #dee2e6;
  &:hover {
    z-index: 2;
    color: #a4a4a4;
    text-decoration: none;
    background-color: #e9ecef;
    border-color: #dee2e6;
  }
`;
