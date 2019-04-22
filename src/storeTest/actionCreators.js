import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION } from './actionType';
import axios from 'axios';

export const getInputValueAction = ((value) => ({
  type: CHANGE_INPUT_VALUE,
  value
}));

export const addTodoItemAction = () => ({
  type: ADD_TODO_ITEM
});

export const deleteTodoItem = ((index) => ({
  type: DELETE_TODO_ITEM,
  index
}));

export const initListAction = ((data) => ({
  type: INIT_LIST_ACTION,
  data
}));

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('/list.json').then((res) => {
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
    }).catch()
  }
}