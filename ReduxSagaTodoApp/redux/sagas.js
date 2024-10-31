// src/redux/sagas.js
import { takeEvery, put } from 'redux-saga/effects';
import { ADD_TODO, removeTodo } from './actions';

function* addTodoSaga(action) {
  // Here you can handle side effects, e.g., API calls
  console.log('Todo added:', action.payload);
}

export function* watchAddTodo() {
  yield takeEvery(ADD_TODO, addTodoSaga);
}

export default function* rootSaga() {
  yield watchAddTodo();
}