import { v1 } from 'uuid';
import { TodoListType } from './types';
import { todosReducer } from './todos-reducer';
import { actions } from './actions';

test('correct todolist should be added', () => {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const startState: TodoListType = {
    data: [
      { _id: todolistId1, text: 'What to learn', completed: false },
      { _id: todolistId2, text: 'What to buy', completed: false },
    ],
    editingTodoId: null,
    editingTodoTitle: '',
  };

  const newTodolistTitle = 'New Todolist';

  const endState = todosReducer(startState, actions.addTodo(newTodolistTitle));

  expect(endState.data.length).toBe(3);
  expect(endState.data[0].text).toBe(newTodolistTitle);
});

test('todolist byId should be removed', () => {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const startState: TodoListType = {
    data: [
      { _id: todolistId1, text: 'What to learn', completed: false },
      { _id: todolistId2, text: 'What to buy', completed: false },
    ],
    editingTodoId: null,
    editingTodoTitle: '',
  };

  const endState = todosReducer(
    startState,
    actions.handleTodoRemove(todolistId1),
  );

  expect(endState.data.length).toBe(1);
  expect(endState.data[0]._id).toBe(todolistId2);
});

test('todolist byId should be toggled', () => {
  const todolistId1 = v1();
  const todolistId2 = v1();

  const startState: TodoListType = {
    data: [
      { _id: todolistId1, text: 'What to learn', completed: false },
      { _id: todolistId2, text: 'What to buy', completed: false },
    ],
    editingTodoId: null,
    editingTodoTitle: '',
  };

  const endState = todosReducer(
    startState,
    actions.handleTodoToggle(todolistId1),
  );
  const bool = endState.data.find((t) => t._id === todolistId1)?.completed;
  expect(endState.data[0].completed).toBe(bool);
});
