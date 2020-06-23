import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todosSelector } from '../@store/selectors';
import { actions } from '../@store/actions';

const TodoEditInput: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const { editingTodoTitle } = useSelector(todosSelector);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  return (
    <input
      className="edit"
      value={editingTodoTitle}
      onBlur={() => dispatch(actions.saveEditingTodoTitle())}
      onChange={(event) =>
        dispatch(actions.changeEditingTodoTitle(event.currentTarget.value))
      }
      onKeyDown={(event) => {
        if (event.keyCode === 27) {
          dispatch(actions.cancelEditingTodo());
        } else if (event.keyCode === 13) {
          dispatch(actions.saveEditingTodoTitle());
        }
      }}
      ref={inputRef}
    />
  );
});

export default TodoEditInput;
