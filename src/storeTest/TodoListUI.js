import React from 'react';
import { Input, Button, List } from 'antd';

const TododListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <div>
        <Input
          placeholder="请输入数据"
          value={props.inputValue}
          style={{ width: '300px', marginRight: '10px' }}
          onChange={props.handleInputChange}
        />
        <Button
          type="primary"
          onClick={props.handleBtnClick}
        >提交</Button>
      </div>
      <List
        style={{ marginTop: '10px', width: '400px' }}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (<List.Item onClick={() => {props.handleDelete(index) }}>{item}</List.Item>)}
      />
    </div>
  )
}
// class TododListUI  extends Component {

//   render() {
//     return (
//       <div style={{ marginTop: '10px', marginLeft: '10px' }}>
//         <div>
//           <Input
//             placeholder="请输入数据"
//             value={this.props.inputValue}
//             style={{ width: '300px', marginRight: '10px' }}
//             onChange={this.props.handleInputChange}
//           />
//           <Button
//             type="primary"
//             onClick={this.props.handleBtnClick}
//           >提交</Button>
//         </div>
//         <List
//           style={{ marginTop: '10px', width: '400px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item) => (<List.Item onClick={(index) => {this.props.handleDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }

// }

export default TododListUI;