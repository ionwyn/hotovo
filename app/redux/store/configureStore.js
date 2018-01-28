import { createStore } from 'redux';
import todosReducer from '../reducers/TodosReducer';

export default function configureStore() {
  let store = createStore(todosReducer);
  return store;
}
