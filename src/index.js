
// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider, connect } from 'react-redux';
// import App from './App';
// import reducer from './reducer';
// import { pressEventAction,  getAppValue} from './actions';
// // import { Router, Route } from 'react-router';

// // 定义一个类型 
// class MyApp extends Component {
//     render() {
//         const { text, inner, myAppOnclick, value, handleClickEvent } = this.props;
//         return(
//             <div>
//                 我是my
//                 我有自己的button
//                 <h1>{inner}</h1>
//                 <h2>{text}</h2>
//                 {/* <li><Link to="/link">IndexBox</Link></li> */}
//                 {/* <li><Link to="/about">IndexBox</Link></li> */}
//                 <button onClick={myAppOnclick}>点击 文字发生改变</button>
//                 <App text={value} handleClickEvent={handleClickEvent}/>
//                 {this.props.children}
//             </div>
//         )
//     }
// }


// // 当前组件可被注册 返回的state中的数字
// function mapStateToProps(state) {
//     return {
//         value: state.value,
//         text: state.text,
//         inner: state.inner
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         myAppOnclick: () => dispatch(pressEventAction),
//         handleClickEvent: () => dispatch(getAppValue),
//     }
// }

// MyApp = connect(mapStateToProps, mapDispatchToProps)(MyApp);

// import React from 'react';
// import { render } from 'react-dom';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import App from './components/App';
// import reducer from './reducers';
// import 'todomvc-app-css/index.css'

// let store = createStore(reducer)

// render(
//     <Provider store={store}>
//         <App />
//     </Provider>,
//     document.getElementById('root')
// )

// eslint-disable-next-line
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
// eslint-disable-next-line
import { Provider, connect} from 'react-redux'
import Button from 'antd/lib/button';

// eslint-disable-next-line
// 定义组件
let App = (props) => {
    const { text, onChangeText, onButtonClick } = props
    return (
        <div>
            <Button onClick={onChangeText}>文字点击事件</Button>
            <Button onClick={onButtonClick}>按钮点击事件</Button>
            字体：：：{text}
        </div>
    )
}

// define action 1
const buttonClickAction = {
    type: 'BUTTON_CLICK'
}

const changeTextAction = {
    type: 'CHANGE_TEXT'
}

// define reducer
// init state
const initialState = {
    text: 'initial Word ===='
}

// define reducer deal action in store
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'BUTTON_CLICK':
            return {
                text: state.text === "initial Word"? 'BUTTON_CLICK':'always initial Word'
            }
        case 'CHANGE_TEXT':
            return {
                text: "initial Word"
            }
        default:
            return initialState
    }
}
// 3 reducer && store connect ，sign for store 

let store = createStore(reducer)

// dispatch action  触发 actions 的行为 由组件的props 收入  1
// diapatch 中的值为对象 放到reducer 种进行处理 2
// reducer 返回state 值 reducer 和组件注册 3

function mapDispatchToProps(dispatch) {
    return {
        onChangeText: () => dispatch(changeTextAction),
        onButtonClick: () => dispatch(buttonClickAction)
    }
}

// 将state 返回到组件里
function mapStateToProps(state) {
    return {
        text: state.text
    }
}
// 组件定义好后组件要和对应的 redux 挂钩链接 完成 组件 => dispatch(action) => reducer => store => (state) => 组件
// eslint-disable-next-line
App = connect(mapStateToProps, mapDispatchToProps)(App)


// 渲染组件
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)



