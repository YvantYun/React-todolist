import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    //content就是list的内容，如果list改变代表添加或者删除数据了， 这时候再调用render函数
    //因此借助这个函数可以提示性能
    if(nextProps.content !== this.props.content) {
      return true;
    }else {
      return false;
    }
    
  }

  render() {
    console.log('chile render');
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
       {content}
      </div>
    )
  }
  handleClick() {
    const { deleteItem, index } = this.props;
    deleteItem({index});
  }
}

TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

// TodoItem.defaultProps = {
//   test: 'hello world'
// }

export default TodoItem;