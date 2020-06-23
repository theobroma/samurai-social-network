import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../@store/actions';
import FilterLink from './FilterLink';
import { pluralize } from '../@utils/pluralize';

interface Props {
  activeTodoCount: number;
  completedCount: number;
}

const Footer: React.FC<Props> = React.memo(
  ({ activeTodoCount, completedCount }) => {
    const dispatch = useDispatch();

    const handleButtonClick = () => {
      dispatch(actions.removeCompleted());
    };

    const renderClearButton = () => {
      if (completedCount > 0) {
        return (
          <button
            type="button"
            className="clear-completed"
            onClick={handleButtonClick}
          >
            Clear completed
          </button>
        );
      }
      return null;
    };
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{activeTodoCount}</strong>{' '}
          {pluralize(activeTodoCount, 'item')} left
        </span>
        <ul className="filters">
          <FilterLink type="SHOW_ALL">All</FilterLink>
          <FilterLink type="SHOW_ACTIVE">Active</FilterLink>
          <FilterLink type="SHOW_COMPLETED">Completed</FilterLink>
        </ul>
        {renderClearButton()}
      </footer>
    );
  },
);

export default Footer;
