import * as React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../@store/actions';
import TodoTextInput from './TodoTextInput';

const Header: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const handleSave = (text: string) => {
    if (text.length !== 0) {
      dispatch(actions.addTodo(text));
    }
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <TodoTextInput onSave={handleSave} />
    </header>
  );
});

export default Header;
