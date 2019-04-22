import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleAddItem = this.handleAddItem.bind(this);
  }
s
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {
            this.state.list.map((item,index) => {
              return (
                <CSSTransition 
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  key={index}
                >
                  <div>{item}</div>
                </CSSTransition>
              )  
            })
          }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    )
  }

  handleAddItem() {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }))
  }
}

export default App;