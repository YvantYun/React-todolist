import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import axious from 'axios';
import './style.css';

class TodoList extends Component {

  //React 定义数据
  constructor(props) {
    //当父组件的state或者props发生改变时候，render函数就会重新执行一次
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handeleInputChange = this.handeleInputChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleItemDelete = this.handleItemDelete.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          {/* {下面是一个input框} */}
          {/* label的for 要替换成htmlFor */}
          <label htmlFor="insertArea">请输入内容</label>
          <input
            id='insertArea'
            className="input"
            value={this.state.inputValue}
            onChange={this.handeleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.geTodoItem()}
        </ul>
      </Fragment>
    )
  }
  //ajax 应该放在这里 为了避免冲突还是放在这里
  componentDidMount() {
    axious.get('/api/todolist')
      .then((res) => {
        console.log(res.data);
        this.setState(() => ({
          list: [...res.data]
        }));
      })
      .catch(() => { alert('error') })

  }

  geTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemDelete}
        />
      )
    })
  }

  handeleInputChange(e) {
    // console.log(this);
    // this.state.inputValue = e.target.value;
    // this.setState({
    //   inputValue: e.target.value
    // })
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }));
  }
  handleBtnClick() {
    // this.setState({
    //   //...展开运算符，展示list之前的值展开，生成一个新的数组
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }
  handleItemDelete(index) {
    // console.log(index);

    //immutable
    // state 不允许我们做任何的改变
    // const list = [...this.state.list];
    // list.splice(index, 1);

    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return { list }
    });
  }
}

export default TodoList;