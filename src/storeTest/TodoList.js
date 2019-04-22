import React, { Component } from 'react';
import 'antd/dist/antd.css';
// import axios from 'axios'
import store from './store';
import { getInputValueAction, addTodoItemAction, deleteTodoItem, getTodoList } from './store/actionCreators';
import TodoListUI from './TodoListUI';


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStoreChane = this.handleStoreChane.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    store.subscribe(this.handleStoreChane);
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        list={this.state.list}
        handleDelete={this.handleDelete}
      />
    )
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action);

  }

  handleInputChange(e) {
    const action = getInputValueAction(e.target.value);
    store.dispatch(action);
  }

  handleStoreChane() {
    this.setState(store.getState());
  }

  handleBtnClick() {
    const action = addTodoItemAction();
    store.dispatch(action);
  }

  handleDelete(index) {
    // alert(index);
    const action = deleteTodoItem(index);
    store.dispatch(action);
  }

}

export default TodoList;