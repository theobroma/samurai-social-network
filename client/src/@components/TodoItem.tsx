import * as React from 'react';
import { connect, useDispatch } from 'react-redux';
import cx from 'classnames';
import { actions } from '../@store/actions';
import { TodoType } from '../@store/types';
import TodoEditInput from './TodoEditInput';

interface Props {
  todo: TodoType;
  isEditing: boolean;
}

const TodoItem: React.FC<Props> = ({ todo, isEditing }) => {
  const dispatch = useDispatch();

  const element = (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(actions.handleTodoToggle(todo._id))}
      />
      <label
        htmlFor="itself"
        onDoubleClick={() => dispatch(actions.editTodo(todo._id))}
      >
        {todo.text}
      </label>
      <button
        type="button"
        className="destroy"
        onClick={() => dispatch(actions.handleTodoRemove(todo._id))}
      />
    </div>
  );

  return (
    <li
      className={cx({
        completed: todo.completed,
        editing: isEditing,
      })}
    >
      {element}
      {/* isEditing */}
      {isEditing ? <TodoEditInput /> : null}
    </li>
  );
};

export default connect(null, {})(TodoItem);
