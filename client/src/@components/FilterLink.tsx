import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { filterSelector } from '../@store/selectors';
import { setFilter } from '../@store/actions';
import { FilterType } from '../@store/types';

interface Props {
  type: FilterType;
}

const FilterLink: React.FC<Props> = React.memo(({ type, children }) => {
  const dispatch = useDispatch();
  const filter = useSelector(filterSelector);
  return (
    <li>
      <a
        href="#"
        onClick={() => dispatch(setFilter(type))}
        className={classnames({ selected: filter === type })}
      >
        {children}
      </a>
    </li>
  );
});

export default FilterLink;
