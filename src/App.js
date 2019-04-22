import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
// import { connect } from 'react-redux';
// import { getAppValue, pressEventAction } from './actions';
import './App.css';
// import { BrowserRouter } from "react-router-dom";


// APP 组件需要与store 相连



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initNum: "初始值Num",
      initval: '初始值Val'
    }
  }

  // react 组件 初始化 更新 销毁
  




  handleButtonClick() {
    // const { value } = this.props;
    // console.log('this.props>>>>>>>',this.props)
    // 点击之后 Learn React要变化成value 
    // 获取到相应的值 触发动作再取值 重新渲染该组件
    // 只读的只有 通过父组件重新宣番才能把新的props 传入组件中
    // const propsa = this.props;
    this.setState((prevState,props) => {
      console.log('prevState>>>',prevState,props)
    }) 


  }
  render() {
    const { text, handleClickEvent } = this.props;
    // console.log('BrowserRouter>>>>>>', BrowserRouter)
    return (
      <div className="App">
          <p>
            {text}
          </p>
          <Button type="primary" onClick={handleClickEvent}> antd Button </Button>
          <Button type="primary" onClick={this.handleButtonClick}> 嘿嘿嘿 </Button>
      </div>
    );
  }
}

// action

// 连接到 dispatch action 先将组件绑定到 向上发送 dispatch 和向下 state 分发中
// function mapDispatchToProps(dispatch) {
//   return {
//     handleClickEvent: () => dispatch(getAppValue),
//     myAppOnclick: () => dispatch(pressEventAction),
//   }
// } 

// function mapStateToProps(state) {
//   return {
//     value: state.value,
//     text: state.text,
//     inner: state.inner
//   }
// }

// App = connect(mapStateToProps, mapDispatchToProps)(App);


export default App;
