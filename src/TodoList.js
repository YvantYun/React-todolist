import React, { Component } from 'react';
// import store from './store';
import { connect } from 'react-redux';
const TodoList = (props) => {
  const { inputValue, changeInputValue, handkleClick, handleDelete, list } = props;
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handkleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} onClick={handleDelete.bind(index)}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

// class TodoList extends Component {

//   // constructor (props) {
//   //   super(props);
//   //   this.state = store.getState();

//   // }
//   render() {

//   }
// }

//store.state ---> props
const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

//store.dispatch ==> props
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      };
      dispatch(action);
    },
    handkleClick() {
      const action = {
        type: 'add_todo_item'
      };
      dispatch(action);
    },
    handleDelete(index) {
      const action = {
        type: 'delete_todo_item',
        index
      }
      dispatch(action);
    }
  }
}

// connect(逻辑)(ui)
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);