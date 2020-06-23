import { filterReducer } from './filter-reducer';
import { setFilter } from './actions';

test('correct filter of todolist should be changed', () => {
  const startState = 'SHOW_ALL';
  const newFilter = 'SHOW_ACTIVE';
  const endState = filterReducer(startState, setFilter(newFilter));

  expect(endState).toBe(newFilter);
});
