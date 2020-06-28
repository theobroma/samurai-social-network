import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';

// Handle request saga
// function* addTodoSaga(
//   action: ReturnType<typeof fetchTodosAsync.request>,
// ): Generator {
//   try {
//     const response: Todo[] = yield call(todosApi.getAll, action.payload);

//     yield put(fetchTodosAsync.success(response));
//   } catch (err) {
//     yield put(fetchTodosAsync.failure(err));
//   }
// }
